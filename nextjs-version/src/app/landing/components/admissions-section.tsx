"use client"

import { useState } from "react"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"

const admissionsSchema = z.object({
  fullName: z.string().min(2),
  email: z.string().email(),
  phone: z.string().min(7),
  programInterest: z.string().min(3),
  message: z.string().min(10),
})

export function AdmissionsSection() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const form = useForm<z.infer<typeof admissionsSchema>>({
    resolver: zodResolver(admissionsSchema),
    defaultValues: { fullName: "", email: "", phone: "", programInterest: "", message: "" },
  })

  async function onSubmit(values: z.infer<typeof admissionsSchema>) {
    setIsSubmitting(true)
    try {
      const apiBase = process.env.NEXT_PUBLIC_LARAVEL_API_URL ?? "http://127.0.0.1:8000/api"
      await fetch(`${apiBase}/contact-inquiries`, {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({
          full_name: values.fullName,
          email: values.email,
          phone: values.phone,
          subject: "Admissions Inquiry",
          service_type: values.programInterest,
          message: values.message,
        }),
      })
      form.reset()
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <section id="admissions" className="py-20 sm:py-24 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center mb-12">
          <Badge variant="outline" className="mb-4 border-[#2c9cd4]/40 text-[#1a4c6e]">Admissions</Badge>
          <h2 className="text-3xl font-bold text-[#1a4c6e] sm:text-4xl mb-3">Program Enrollment Inquiry</h2>
          <p className="text-slate-600">Submit your admission interest and the WBS team will contact you with next steps.</p>
        </div>
        <Card className="mx-auto max-w-3xl rounded-2xl border-slate-200 shadow-sm">
          <CardHeader><CardTitle>Apply for Training and Programs</CardTitle></CardHeader>
          <CardContent>
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
                <div className="grid gap-4 sm:grid-cols-2">
                  <FormField control={form.control} name="fullName" render={({ field }) => (
                    <FormItem><FormLabel>Full name</FormLabel><FormControl><Input {...field} /></FormControl><FormMessage /></FormItem>
                  )} />
                  <FormField control={form.control} name="email" render={({ field }) => (
                    <FormItem><FormLabel>Email</FormLabel><FormControl><Input type="email" {...field} /></FormControl><FormMessage /></FormItem>
                  )} />
                </div>
                <div className="grid gap-4 sm:grid-cols-2">
                  <FormField control={form.control} name="phone" render={({ field }) => (
                    <FormItem><FormLabel>Phone</FormLabel><FormControl><Input {...field} /></FormControl><FormMessage /></FormItem>
                  )} />
                  <FormField control={form.control} name="programInterest" render={({ field }) => (
                    <FormItem><FormLabel>Program interest</FormLabel><FormControl><Input placeholder="Research training" {...field} /></FormControl><FormMessage /></FormItem>
                  )} />
                </div>
                <FormField control={form.control} name="message" render={({ field }) => (
                  <FormItem><FormLabel>Message</FormLabel><FormControl><Textarea rows={6} {...field} /></FormControl><FormMessage /></FormItem>
                )} />
                <Button className="bg-[#1a4c6e] hover:bg-[#143b55]" disabled={isSubmitting}>
                  {isSubmitting ? "Submitting..." : "Submit Admissions Inquiry"}
                </Button>
              </form>
            </Form>
          </CardContent>
        </Card>
      </div>
    </section>
  )
}

"use client"

import { useState } from 'react'
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"
import { Badge } from '@/components/ui/badge'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"

const visitClientSchema = z.object({
  fullName: z.string().min(2),
  email: z.string().email(),
  phone: z.string().min(7),
  companyOrInstitution: z.string().min(2),
  preferredDate: z.string().min(2),
  message: z.string().min(10),
})

export function TestimonialsSection() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitState, setSubmitState] = useState<"idle" | "success" | "error">("idle")
  const form = useForm<z.infer<typeof visitClientSchema>>({
    resolver: zodResolver(visitClientSchema),
    defaultValues: {
      fullName: "",
      email: "",
      phone: "",
      companyOrInstitution: "",
      preferredDate: "",
      message: "",
    },
  })

  async function onSubmit(values: z.infer<typeof visitClientSchema>) {
    setIsSubmitting(true)
    setSubmitState("idle")
    try {
      const apiBase = process.env.NEXT_PUBLIC_LARAVEL_API_URL ?? "http://127.0.0.1:8000/api"
      const response = await fetch(`${apiBase}/contact-inquiries`, {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({
          full_name: values.fullName,
          email: values.email,
          phone: values.phone,
          subject: "Visit Client Request",
          service_type: values.companyOrInstitution,
          message: `Preferred date: ${values.preferredDate}. ${values.message}`,
        }),
      })
      if (!response.ok) throw new Error("Unable to submit")
      form.reset()
      setSubmitState("success")
    } catch {
      setSubmitState("error")
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <section id="visit-client" className="py-16 sm:py-20 bg-slate-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-5xl rounded-2xl bg-gradient-to-r from-sky-700 via-sky-600 to-blue-700 text-white p-8 sm:p-10 mb-10 shadow-lg">
          <p className="text-sm uppercase tracking-widest text-blue-100">WBS Consultation</p>
          <h2 className="text-3xl sm:text-4xl font-bold mt-2">Visit Client Request</h2>
          <p className="mt-3 text-blue-50 max-w-2xl">
            Fill this form and our team will contact you to confirm your preferred visit schedule.
          </p>
        </div>

        <div className="mx-auto max-w-2xl text-center mb-16">
          <Badge variant="outline" className="mb-4">Visit Client</Badge>
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-4">Request a Visit from WBS</h2>
          <p className="text-lg text-muted-foreground">
            Submit your visit-client request and our team will contact you with confirmation.
          </p>
        </div>

        <Card className="mx-auto max-w-4xl border-blue-100 shadow-md">
          <CardHeader><CardTitle>Visit Client Form</CardTitle></CardHeader>
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
                  <FormField control={form.control} name="companyOrInstitution" render={({ field }) => (
                    <FormItem><FormLabel>Company/Institution</FormLabel><FormControl><Input {...field} /></FormControl><FormMessage /></FormItem>
                  )} />
                </div>
                <FormField control={form.control} name="preferredDate" render={({ field }) => (
                  <FormItem><FormLabel>Preferred visit date</FormLabel><FormControl><Input type="date" {...field} /></FormControl><FormMessage /></FormItem>
                )} />
                <FormField control={form.control} name="message" render={({ field }) => (
                  <FormItem><FormLabel>Message</FormLabel><FormControl><Textarea rows={5} {...field} /></FormControl><FormMessage /></FormItem>
                )} />
                {submitState === "success" && (
                  <p className="text-sm text-green-700 bg-green-50 border border-green-200 rounded-md px-3 py-2">
                    Visit request submitted successfully.
                  </p>
                )}
                {submitState === "error" && (
                  <p className="text-sm text-red-700 bg-red-50 border border-red-200 rounded-md px-3 py-2">
                    Submission failed. Please try again.
                  </p>
                )}
                <Button className="bg-blue-600 hover:bg-blue-700" disabled={isSubmitting}>
                  {isSubmitting ? "Submitting..." : "Submit Visit Client Request"}
                </Button>
              </form>
            </Form>
          </CardContent>
        </Card>
      </div>
    </section>
  )
}

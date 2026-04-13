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
    try {
      const apiBase = process.env.NEXT_PUBLIC_LARAVEL_API_URL ?? "http://127.0.0.1:8000/api"
      await fetch(`${apiBase}/contact-inquiries`, {
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
      form.reset()
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <section id="visit-client" className="py-24 sm:py-32">
      <div className="container mx-auto px-8 sm:px-6">
        <div className="mx-auto max-w-2xl text-center mb-16">
          <Badge variant="outline" className="mb-4">Visit Client</Badge>
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-4">
            Request a Visit from WBS
          </h2>
          <p className="text-lg text-muted-foreground">
            Submit your visit-client request and our team will contact you with confirmation.
          </p>
        </div>

        <Card className="mx-auto max-w-4xl">
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

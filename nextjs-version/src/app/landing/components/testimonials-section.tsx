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
  mastersProgram: z.string().min(2),
  phone: z.string().min(7).optional(),
  region: z.string().min(2),
  district: z.string().min(2),
  exactLocation: z.string().min(5),
  researchArea: z.string().min(2),
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
      mastersProgram: "",
      phone: "",
      region: "",
      district: "",
      exactLocation: "",
      researchArea: "",
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
          phone: values.phone ?? "",
          subject: "Visit Client Request",
          service_type: values.mastersProgram,
          message: `Research area: ${values.researchArea}. Region: ${values.region}, District: ${values.district}. Exact location: ${values.exactLocation}. Preferred date: ${values.preferredDate}. ${values.message}`,
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
    <section id="visit-client" className="py-14 sm:py-16 bg-slate-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-5xl rounded-2xl bg-gradient-to-r from-slate-900 via-blue-900 to-red-800 text-white p-8 sm:p-10 mb-8 shadow-lg border border-amber-300/40">
          <p className="text-sm uppercase tracking-widest text-amber-100">Professional Research Consultation</p>
          <h2 className="text-3xl sm:text-5xl font-bold mt-2 leading-tight">Master&apos;s research consultation visits, planned with care.</h2>
          <p className="mt-3 text-blue-50 max-w-2xl">
            Thank you for choosing WBS. This form collects your details so we can schedule a physical visit for concept note, proposal, dissertation, data analysis, and related research consultation.
          </p>
        </div>

        <div className="mx-auto max-w-4xl mb-8">
          <div className="grid grid-cols-3 gap-3 text-center">
            <div className="rounded-lg border bg-white p-3">
              <div className="mx-auto mb-2 h-10 w-10 rounded-full bg-amber-400 text-slate-900 flex items-center justify-center font-bold">1</div>
              <p className="text-xs font-semibold text-slate-700">YOUR PROFILE</p>
            </div>
            <div className="rounded-lg border bg-white p-3">
              <div className="mx-auto mb-2 h-10 w-10 rounded-full bg-slate-200 text-slate-700 flex items-center justify-center font-bold">2</div>
              <p className="text-xs font-semibold text-slate-700">RESEARCH</p>
            </div>
            <div className="rounded-lg border bg-white p-3">
              <div className="mx-auto mb-2 h-10 w-10 rounded-full bg-slate-200 text-slate-700 flex items-center justify-center font-bold">3</div>
              <p className="text-xs font-semibold text-slate-700">SCHEDULE</p>
            </div>
          </div>
        </div>

        <Card className="mx-auto max-w-4xl border-blue-100 shadow-md">
          <CardHeader>
            <Badge variant="outline" className="w-fit mb-3">Visit Client</Badge>
            <CardTitle>Your Profile</CardTitle>
          </CardHeader>
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
                  <FormField control={form.control} name="mastersProgram" render={({ field }) => (
                    <FormItem><FormLabel>Master&apos;s Program</FormLabel><FormControl><Input placeholder="e.g. Master of Business Administration" {...field} /></FormControl><FormMessage /></FormItem>
                  )} />
                  <FormField control={form.control} name="phone" render={({ field }) => (
                    <FormItem><FormLabel>Phone Number (WhatsApp preferred)</FormLabel><FormControl><Input placeholder="+255 712 345 678" {...field} /></FormControl><FormMessage /></FormItem>
                  )} />
                </div>
                <div className="grid gap-4 sm:grid-cols-2">
                  <FormField control={form.control} name="region" render={({ field }) => (
                    <FormItem><FormLabel>Region</FormLabel><FormControl><Input placeholder="Dar es Salaam" {...field} /></FormControl><FormMessage /></FormItem>
                  )} />
                  <FormField control={form.control} name="district" render={({ field }) => (
                    <FormItem><FormLabel>District</FormLabel><FormControl><Input placeholder="Kinondoni" {...field} /></FormControl><FormMessage /></FormItem>
                  )} />
                </div>
                <FormField control={form.control} name="exactLocation" render={({ field }) => (
                  <FormItem><FormLabel>Exact Location Description (Nearby Landmark)</FormLabel><FormControl><Textarea rows={3} placeholder="Provide nearby landmark or exact location" {...field} /></FormControl><FormMessage /></FormItem>
                )} />
                <FormField control={form.control} name="researchArea" render={({ field }) => (
                  <FormItem><FormLabel>Research Area</FormLabel><FormControl><Input placeholder="Concept Note, Proposal, Dissertation..." {...field} /></FormControl><FormMessage /></FormItem>
                )} />
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

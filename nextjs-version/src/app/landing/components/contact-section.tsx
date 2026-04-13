"use client"

import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"
import { useState } from "react"
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Mail, MapPin, Phone, MessageCircle } from 'lucide-react'

const contactFormSchema = z.object({
  fullName: z.string().min(2, {
    message: "Name must be at least 2 characters.",
  }),
  phone: z.string().min(7, {
    message: "Phone must be at least 7 characters.",
  }),
  email: z.string().email({
    message: "Please enter a valid email address.",
  }),
  subject: z.string().min(5, {
    message: "Subject must be at least 5 characters.",
  }),
  serviceType: z.string().optional(),
  message: z.string().min(10, {
    message: "Message must be at least 10 characters.",
  }),
})

export function ContactSection() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const form = useForm<z.infer<typeof contactFormSchema>>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: {
      fullName: "",
      phone: "",
      email: "",
      subject: "",
      serviceType: "",
      message: "",
    },
  })

  async function onSubmit(values: z.infer<typeof contactFormSchema>) {
    setIsSubmitting(true)
    try {
      const apiBase = process.env.NEXT_PUBLIC_LARAVEL_API_URL ?? "http://127.0.0.1:8000/api"
      const response = await fetch(`${apiBase}/contact-inquiries`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          full_name: values.fullName,
          phone: values.phone,
          email: values.email,
          subject: values.subject,
          service_type: values.serviceType,
          message: values.message,
        }),
      })
      if (!response.ok) throw new Error("Unable to submit now.")
      form.reset()
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <section id="address" className="py-20 sm:py-24 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center mb-16">
          <Badge variant="outline" className="mb-4 border-[#2c9cd4]/40 text-[#1a4c6e]">Address</Badge>
          <h2 className="text-3xl font-bold tracking-tight text-[#1a4c6e] sm:text-4xl mb-4">
            Contact WBS Research Solutions Professionals
          </h2>
          <p className="text-base sm:text-lg text-slate-600">
            Send inquiries, internship applications, and research support requests through this form.
          </p>
        </div>

        <div className="grid gap-8 lg:grid-cols-3">
          {/* Contact Options */}
          <div className="space-y-6 order-2 lg:order-1">
            <Card className="hover:shadow-md transition-shadow rounded-2xl border-slate-200">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <MapPin className="h-5 w-5 text-primary" />
                  OUR OFFICE ADDRESS - DAR ES SALAAM
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">P.O BOX 13713</p>
                <p className="text-muted-foreground">SINZA LION OPPOSITE SHAMOOL HOTEL</p>
                <p className="text-muted-foreground">MASHUJAA STREET</p>
                <p className="text-muted-foreground">DAR ES SALAAM - TANZANIA</p>
                <p className="text-muted-foreground">info@wbs.co.tz</p>
                <p className="text-muted-foreground">Phone number: +255 658 646358</p>
              </CardContent>
            </Card>

            <Card className="hover:shadow-md transition-shadow rounded-2xl border-slate-200">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <MapPin className="h-5 w-5 text-primary" />
                  ARUSHA
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">P.O BOX 13713</p>
                <p className="text-muted-foreground">TWIGA STREET</p>
                <p className="text-muted-foreground">NJIRO, BENDERA SABA, HOUSE NUMBER 03</p>
                <p className="text-muted-foreground">ARUSHA - TANZANIA</p>
                <p className="text-muted-foreground">Writing.wbs@gmail.com</p>
                <p className="text-muted-foreground">Phone number: +255 713 110 235</p>
              </CardContent>
            </Card>

            <Card className="hover:shadow-md transition-shadow rounded-2xl border-slate-200">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Phone className="h-5 w-5 text-primary" />
                  Quick Assistance
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-3">
                  Click for WhatsApp quick support and admissions guidance.
                </p>
                <Button variant="outline" size="sm" className="cursor-pointer" asChild>
                  <a href="https://wa.me/255658646358?text=Hello%2C%20I%20need%20assistance%20with%20WBS%20services.">
                    <MessageCircle className="h-4 w-4 mr-1" />
                    WhatsApp Chat
                  </a>
                </Button>
              </CardContent>
            </Card>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-2 order-1 lg:order-2">
            <Card className="rounded-2xl border-slate-200 shadow-sm">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Mail className="h-5 w-5" />
                  Send us a message
                </CardTitle>
              </CardHeader>
              <CardContent>
                <Form {...form}>
                  <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                    <div className="grid gap-4 sm:grid-cols-2">
                      <FormField
                        control={form.control}
                        name="fullName"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Full name</FormLabel>
                            <FormControl>
                              <Input placeholder="John Doe" {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      <FormField
                        control={form.control}
                        name="phone"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Phone number</FormLabel>
                            <FormControl>
                              <Input placeholder="+255 xxx xxx xxx" {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    </div>
                    <FormField
                      control={form.control}
                      name="email"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Email</FormLabel>
                          <FormControl>
                            <Input type="email" placeholder="john@example.com" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="subject"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Subject</FormLabel>
                          <FormControl>
                            <Input placeholder="Component request, bug report, general inquiry..." {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="serviceType"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Service type</FormLabel>
                          <FormControl>
                            <Input placeholder="Research support, admissions, internship..." {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="message"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Message</FormLabel>
                          <FormControl>
                            <Textarea
                              placeholder="Tell us how WBS can assist your research or training needs..."
                              rows={10}
                              className="min-h-50"
                              {...field}
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <Button type="submit" className="w-full cursor-pointer bg-[#1a4c6e] hover:bg-[#143b55]" disabled={isSubmitting}>
                      {isSubmitting ? "Submitting..." : "Send Message"}
                    </Button>
                  </form>
                </Form>
              </CardContent>
            </Card>
          </div>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-2">
          <Card>
            <CardHeader><CardTitle>Dar es Salaam Office Map</CardTitle></CardHeader>
            <CardContent>
              <iframe
                title="Dar es Salaam office map"
                src="https://www.google.com/maps?q=Sinza+Dar+es+Salaam&output=embed"
                className="h-64 w-full rounded-md border"
                loading="lazy"
              />
            </CardContent>
          </Card>
          <Card>
            <CardHeader><CardTitle>Arusha Office Map</CardTitle></CardHeader>
            <CardContent>
              <iframe
                title="Arusha office map"
                src="https://www.google.com/maps?q=Njiro+Arusha&output=embed"
                className="h-64 w-full rounded-md border"
                loading="lazy"
              />
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}

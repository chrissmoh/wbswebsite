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

const internshipSchema = z.object({
  fullName: z.string().min(2),
  email: z.string().email(),
  phone: z.string().min(7),
  university: z.string().min(2),
  courseOfStudy: z.string().min(2),
  yearOfStudy: z.string().min(1),
  coverMessage: z.string().optional(),
})

export function InternshipSection() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [cvFile, setCvFile] = useState<File | null>(null)
  const form = useForm<z.infer<typeof internshipSchema>>({
    resolver: zodResolver(internshipSchema),
    defaultValues: {
      fullName: "",
      email: "",
      phone: "",
      university: "",
      courseOfStudy: "",
      yearOfStudy: "",
      coverMessage: "",
    },
  })

  async function onSubmit(values: z.infer<typeof internshipSchema>) {
    setIsSubmitting(true)
    try {
      const apiBase = process.env.NEXT_PUBLIC_LARAVEL_API_URL ?? "http://127.0.0.1:8000/api"
      const formData = new FormData()
      formData.append("full_name", values.fullName)
      formData.append("email", values.email)
      formData.append("phone", values.phone)
      formData.append("university", values.university)
      formData.append("course_of_study", values.courseOfStudy)
      formData.append("year_of_study", values.yearOfStudy)
      if (values.coverMessage) formData.append("cover_message", values.coverMessage)
      if (cvFile) formData.append("cv", cvFile)

      await fetch(`${apiBase}/internship-applications`, {
        method: "POST",
        headers: { Accept: "application/json" },
        body: formData,
      })
      form.reset()
      setCvFile(null)
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <section id="internship" className="py-20 sm:py-24 bg-[#eef6fb]">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center mb-12">
          <Badge variant="outline" className="mb-4 border-[#2c9cd4]/40 text-[#1a4c6e]">Internship Applications</Badge>
          <h2 className="text-3xl font-bold sm:text-4xl mb-3">Apply for Internship Online</h2>
        </div>
        <Card className="mx-auto max-w-4xl rounded-2xl border-slate-200 shadow-sm">
          <CardHeader><CardTitle>Internship Application Form</CardTitle></CardHeader>
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
                  <FormField control={form.control} name="university" render={({ field }) => (
                    <FormItem><FormLabel>University</FormLabel><FormControl><Input {...field} /></FormControl><FormMessage /></FormItem>
                  )} />
                </div>
                <div className="grid gap-4 sm:grid-cols-2">
                  <FormField control={form.control} name="courseOfStudy" render={({ field }) => (
                    <FormItem><FormLabel>Course of study</FormLabel><FormControl><Input {...field} /></FormControl><FormMessage /></FormItem>
                  )} />
                  <FormField control={form.control} name="yearOfStudy" render={({ field }) => (
                    <FormItem><FormLabel>Year of study</FormLabel><FormControl><Input {...field} /></FormControl><FormMessage /></FormItem>
                  )} />
                </div>
                <FormField control={form.control} name="coverMessage" render={({ field }) => (
                  <FormItem><FormLabel>Cover message</FormLabel><FormControl><Textarea rows={5} {...field} /></FormControl><FormMessage /></FormItem>
                )} />
                <FormItem>
                  <FormLabel>CV Upload (optional)</FormLabel>
                  <FormControl>
                    <Input
                      type="file"
                      accept=".pdf,.doc,.docx"
                      onChange={(e) => setCvFile(e.target.files?.[0] ?? null)}
                    />
                  </FormControl>
                  <p className="text-xs text-muted-foreground">Accepted: PDF, DOC, DOCX (max 5MB)</p>
                </FormItem>
                <Button className="bg-[#1a4c6e] hover:bg-[#143b55]" disabled={isSubmitting}>
                  {isSubmitting ? "Submitting..." : "Submit Internship Application"}
                </Button>
              </form>
            </Form>
          </CardContent>
        </Card>
      </div>
    </section>
  )
}

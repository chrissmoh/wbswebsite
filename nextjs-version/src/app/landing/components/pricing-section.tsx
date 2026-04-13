"use client"

import { CalendarCheck, Database, Globe, ShieldCheck } from 'lucide-react'
import { Badge } from '@/components/ui/badge'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'

const timeline = [
  { week: "Week 1", title: "Planning and Design", detail: "Information architecture, page layout, and branding style." },
  { week: "Week 2", title: "Frontend Development", detail: "Responsive Next.js implementation of all pages and sections." },
  { week: "Week 3", title: "Backend Development", detail: "Laravel API, forms, internship system, and news management." },
  { week: "Week 4-5", title: "Testing and Launch", detail: "Fixes, optimization, deployment prep, and handover support." },
]

export function PricingSection() {
  return (
    <section id="pricing" className="py-24 sm:py-32 bg-muted/40">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center mb-12">
          <Badge variant="outline" className="mb-4">Implementation Timeline</Badge>
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-4">
            4-5 Week Delivery Plan
          </h2>
          <p className="text-lg text-muted-foreground mb-8">
            Week 1 planning and design, week 2 frontend, week 3 backend APIs, week 4 testing and launch support.
          </p>
          <p className="text-sm text-muted-foreground">Backend: Laravel API + MySQL, Frontend: Next.js responsive UI.</p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {timeline.map((item) => (
            <Card key={item.week}>
              <CardHeader>
                <CardTitle className="text-blue-700">{item.week}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="font-semibold mb-2">{item.title}</p>
                <p className="text-sm text-muted-foreground">{item.detail}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-10 grid gap-4 md:grid-cols-4">
          <div className="rounded-lg border p-4"><CalendarCheck className="mb-2 text-blue-600" />Structured timeline execution.</div>
          <div className="rounded-lg border p-4"><Globe className="mb-2 text-blue-600" />Fully responsive multi-page website.</div>
          <div className="rounded-lg border p-4"><Database className="mb-2 text-blue-600" />API-driven database-backed forms.</div>
          <div className="rounded-lg border p-4"><ShieldCheck className="mb-2 text-blue-600" />Testing, launch, and handover support.</div>
        </div>
      </div>
    </section>
  )
}

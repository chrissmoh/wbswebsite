"use client"

import { BookOpen, BrainCircuit, GraduationCap, Presentation } from 'lucide-react'
import { Badge } from '@/components/ui/badge'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'

const programs = [
  { title: "Research Proposal Development", detail: "Structured support from topic selection to final proposal submission.", icon: BookOpen },
  { title: "Data Analysis Training", detail: "Hands-on SPSS and research analysis guidance for students and researchers.", icon: BrainCircuit },
  { title: "Academic Writing Workshop", detail: "Training on thesis/dissertation writing, referencing, and editing best practices.", icon: GraduationCap },
  { title: "Professional Development Sessions", detail: "Short programs for institutions, departments, and research groups.", icon: Presentation },
]

export function PricingSection() {
  return (
    <section id="trainings" className="py-24 sm:py-32 bg-muted/40">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center mb-12">
          <Badge variant="outline" className="mb-4">Trainings And Programs</Badge>
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-4">
            WBS Professional Trainings
          </h2>
          <p className="text-lg text-muted-foreground mb-8">
            Practical trainings and programs designed for undergraduate, masters, PhD students, and institutions.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {programs.map((item) => (
            <Card key={item.title}>
              <CardHeader>
                <item.icon className="text-blue-700" />
                <CardTitle className="text-blue-700">{item.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">{item.detail}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

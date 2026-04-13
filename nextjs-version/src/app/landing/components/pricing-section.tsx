"use client"

import { useEffect, useState } from 'react'
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
  const [apiPrograms, setApiPrograms] = useState<Array<{
    id: number
    title: string
    description?: string | null
    location?: string | null
  }>>([])

  useEffect(() => {
    const apiBase = process.env.NEXT_PUBLIC_LARAVEL_API_URL ?? "http://127.0.0.1:8000/api"
    const load = async () => {
      try {
        const response = await fetch(`${apiBase}/training-programs`, { cache: "no-store" })
        if (!response.ok) return
        const data = await response.json()
        setApiPrograms(Array.isArray(data) ? data : [])
      } catch {
        setApiPrograms([])
      }
    }
    void load()
  }, [])

  const displayPrograms = apiPrograms.length > 0
    ? apiPrograms.map((p, index) => ({
        title: p.title,
        detail: p.description || p.location || "WBS professional training program.",
        icon: [BookOpen, BrainCircuit, GraduationCap, Presentation][index % 4],
      }))
    : programs

  return (
    <section id="trainings" className="py-20 sm:py-24 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center mb-12">
          <Badge variant="outline" className="mb-4 border-[#2c9cd4]/40 text-[#1a4c6e]">Trainings And Programs</Badge>
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-4">
            WBS Professional Trainings
          </h2>
          <p className="text-lg text-muted-foreground mb-8">
            Practical trainings and programs designed for undergraduate, masters, PhD students, and institutions.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {displayPrograms.map((item) => (
            <Card key={item.title} className="rounded-2xl border-slate-200 shadow-sm">
              <CardHeader>
                <item.icon className="text-[#2c9cd4]" />
                <CardTitle className="text-[#1a4c6e]">{item.title}</CardTitle>
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

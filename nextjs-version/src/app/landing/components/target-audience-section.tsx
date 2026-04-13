"use client"

import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { GraduationCap, School, BookOpenCheck, Briefcase } from "lucide-react"

const audience = [
  {
    title: "Undergraduate Students",
    description: "Support for proposal writing, data analysis, and final academic documentation.",
    icon: GraduationCap,
  },
  {
    title: "Master's and PhD Students",
    description: "Advanced guidance for thesis, dissertation, manuscript, and publication readiness.",
    icon: BookOpenCheck,
  },
  {
    title: "Researchers and Academics",
    description: "Professional consulting for research execution, reporting quality, and publication strategy.",
    icon: Briefcase,
  },
  {
    title: "Universities and Institutions",
    description: "Structured training, workshops, and academic support programs for departments and teams.",
    icon: School,
  },
]

export function TargetAudienceSection() {
  return (
    <section className="py-20 sm:py-24 bg-[#eef6fb]">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center mb-12">
          <Badge variant="outline" className="mb-4 border-[#2c9cd4]/40 text-[#1a4c6e]">
            Target Audience
          </Badge>
          <h2 className="text-3xl font-bold tracking-tight text-[#1a4c6e] sm:text-4xl mb-4">
            Who we support
          </h2>
          <p className="text-base sm:text-lg text-slate-600">
            WBS services are tailored for students, researchers, institutions, and internship seekers.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {audience.map((item) => (
            <Card key={item.title} className="rounded-2xl border-slate-200 shadow-sm">
              <CardContent className="p-6">
                <item.icon className="h-6 w-6 text-[#2c9cd4] mb-4" />
                <h3 className="text-lg font-semibold text-slate-800 mb-2">{item.title}</h3>
                <p className="text-sm text-slate-600 leading-relaxed">{item.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

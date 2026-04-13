"use client"

import { Badge } from '@/components/ui/badge'
import { Card, CardContent } from '@/components/ui/card'
import { CardDecorator } from '@/components/ui/card-decorator'
import { BookOpen, BarChart3, GraduationCap, Users } from 'lucide-react'


const team = [
  {
    id: 1,
    name: 'Research Support Unit',
    role: 'Proposal & Thesis Guidance',
    description: 'Supports proposal writing, editing, manuscript review, and plagiarism checks.',
    icon: BookOpen,
  },
  {
    id: 2,
    name: 'Data Analysis Unit',
    role: 'Statistics & Interpretation',
    description: 'Provides quantitative and qualitative data analysis for academic research.',
    icon: BarChart3,
  },
  {
    id: 3,
    name: 'Training & Programs Team',
    role: 'Workshops and Coaching',
    description: 'Runs practical training workshops for students and institutions.',
    icon: GraduationCap,
  },
  {
    id: 4,
    name: 'Client Success Desk',
    role: 'Communication & Support',
    description: 'Handles inquiry response, admissions communication, and internship support.',
    icon: Users,
  }
]

export function TeamSection() {
  return (
    <section id="team" className="py-24 sm:py-32">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mx-auto max-w-4xl text-center mb-16">
          <Badge variant="outline" className="mb-4">
            Our Team
          </Badge>
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-6">
            Our Professional Units
          </h2>
          <p className="text-lg text-muted-foreground mb-8">
            WBS operates with dedicated teams that support students, researchers, and institutions throughout the research journey.
          </p>
        </div>

        {/* Team Grid */}
        <div className="grid grid-cols-1 gap-x-8 gap-y-12 sm:grid-cols-2 lg:grid-cols-4">
          {team.map((member) => (
            <Card key={member.id} className="shadow-xs py-2">
              <CardContent className="p-4">
                <div className="text-center">
                  <div className="flex justify-center mb-4">
                    <CardDecorator>
                      <member.icon className="h-8 w-8" />
                    </CardDecorator>
                  </div>

                  {/* Name and Role */}
                  <h3 className="text-lg font-semibold text-foreground mb-1">
                    {member.name}
                  </h3>
                  <p className="text-sm font-medium text-primary mb-3">
                    {member.role}
                  </p>

                  {/* Description */}
                  <p className="text-sm text-muted-foreground mb-4 leading-relaxed">
                    {member.description}
                  </p>

                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

"use client"

import { Badge } from '@/components/ui/badge'
import { Card, CardContent } from '@/components/ui/card'
import { CardDecorator } from '@/components/ui/card-decorator'
import { BookOpen, GraduationCap, Building2, MessageCircle } from 'lucide-react'

const values = [
  {
    icon: BookOpen,
    title: 'Research Support',
    description: 'Professional support in research proposal writing, data analysis, manuscripts, and plagiarism checking.'
  },
  {
    icon: GraduationCap,
    title: 'Training & Programs',
    description: 'Practical training sessions for undergraduate, masters, and PhD students and academic institutions.'
  },
  {
    icon: Building2,
    title: 'Institution Services',
    description: 'Academic consultancy services for universities and institutions with professional communication channels.'
  },
  {
    icon: MessageCircle,
    title: 'Quick Assistance',
    description: 'Fast communication by phone, email, office address, and WhatsApp chat for instant support.'
  }
]

export function AboutSection() {
  return (
    <section id="about" className="py-20 sm:py-24 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mx-auto max-w-4xl text-center mb-16">
          <Badge variant="outline" className="mb-4 border-[#2c9cd4]/40 text-[#1a4c6e]">
            About WBS
          </Badge>
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-6">
            WBS Research Solutions Professionals
          </h2>
          <p className="text-lg text-muted-foreground mb-8">
            WBS is an academic consultancy firm offering high-quality research support, professional training, and publishing services.
            The website is designed to showcase services, streamline inquiries, and build professional credibility.
          </p>
        </div>

        {/* Modern Values Grid with Enhanced Design */}
        <div className="grid grid-cols-1 gap-x-8 gap-y-12 sm:grid-cols-2 xl:grid-cols-4 mb-12">
          {values.map((value, index) => (
            <Card key={index} className='group border-slate-200 shadow-sm py-2 rounded-2xl'>
              <CardContent className='p-8'>
                <div className='flex flex-col items-center text-center'>
                  <CardDecorator>
                    <value.icon className='h-6 w-6' aria-hidden />
                  </CardDecorator>
                  <h3 className='mt-6 font-medium text-balance'>{value.title}</h3>
                  <p className='text-muted-foreground mt-3 text-sm'>{value.description}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-12 text-center text-muted-foreground">
          Serving students, researchers, and institutions across Tanzania.
        </div>
      </div>
    </section>
  )
}

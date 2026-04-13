"use client"

import { Card, CardContent } from '@/components/ui/card'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { Badge } from '@/components/ui/badge'

type Testimonial = {
  name: string
  role: string
  image: string
  quote: string
}

const testimonials: Testimonial[] = [
  {
    name: 'Postgraduate Student',
    role: 'Masters Candidate',
    image: 'https://notion-avatars.netlify.app/api/avatar?preset=female-1',
    quote:
      'WBS support helped me complete my research proposal and data analysis on time with clear guidance.',
  },
  {
    name: 'University Researcher',
    role: 'Academic Staff',
    image: 'https://notion-avatars.netlify.app/api/avatar?preset=male-1',
    quote: 'The training sessions were practical and immediately useful for supervision and publication work.',
  },
  {
    name: 'Internship Applicant',
    role: 'Final Year Student',
    image: 'https://notion-avatars.netlify.app/api/avatar?preset=female-2',
    quote:
      'I applied online and received quick feedback through email and WhatsApp. The process was straightforward.',
  },
]

export function TestimonialsSection() {
  return (
    <section id="visit-client" className="py-24 sm:py-32">
      <div className="container mx-auto px-8 sm:px-6">
        {/* Section Header */}
        <div className="mx-auto max-w-2xl text-center mb-16">
          <Badge variant="outline" className="mb-4">Visit Client</Badge>
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-4">
            Client Visits & Feedback
          </h2>
          <p className="text-lg text-muted-foreground">
            Experiences from students and researchers who received WBS services and guidance.
          </p>
        </div>

        {/* Testimonials Masonry Grid */}
        <div className="columns-1 gap-4 md:columns-2 md:gap-6 lg:columns-3 lg:gap-4">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="mb-6 break-inside-avoid shadow-none lg:mb-4">
              <CardContent>
                <div className="flex items-start gap-4">
                  <Avatar className="bg-muted size-12 shrink-0">
                    <AvatarImage
                      alt={testimonial.name}
                      src={testimonial.image}
                      loading="lazy"
                      width="120"
                      height="120"
                    />
                    <AvatarFallback>
                      {testimonial.name
                        .split(' ')
                        .map(n => n[0])
                        .join('')}
                    </AvatarFallback>
                  </Avatar>

                  <div className="min-w-0 flex-1">
                    <a href="#" onClick={e => e.preventDefault()} className="cursor-pointer">
                      <h3 className="font-medium hover:text-primary transition-colors">{testimonial.name}</h3>
                    </a>
                    <span className="text-muted-foreground block text-sm tracking-wide">
                      {testimonial.role}
                    </span>
                  </div>
                </div>

                <blockquote className="mt-4">
                  <p className="text-sm leading-relaxed text-balance">{testimonial.quote}</p>
                </blockquote>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

"use client"

import { ArrowRight, Play, Star } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { DotPattern } from '@/components/dot-pattern'

export function HeroSection() {
  return (
    <section id="hero" className="relative overflow-hidden bg-gradient-to-br from-white via-[#eef7fd] to-[#dceef9] pt-16 sm:pt-20 pb-16">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-50">
        {/* Dot pattern overlay using reusable component */}
        <DotPattern className="opacity-100" size="md" fadeStyle="ellipse" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="mx-auto max-w-5xl text-center">
          {/* Announcement Badge */}
          <div className="mb-8 flex justify-center">
            <Badge variant="outline" className="px-4 py-2 border-[#2c9cd4]/40 text-[#1a4c6e] bg-white">
              <Star className="w-3 h-3 mr-2 fill-[#2c9cd4] text-[#2c9cd4]" />
              WBS RESEARCH SOLUTIONS PROFESSIONALS
              <ArrowRight className="w-3 h-3 ml-2 text-[#2c9cd4]" />
            </Badge>
          </div>

          {/* Main Headline */}
          <h1 className="mb-6 text-4xl font-bold tracking-tight text-[#1a4c6e] sm:text-6xl lg:text-7xl leading-tight">
            Empowering Your Academic Research Journey
            <span className="block text-[#2c9cd4] italic mt-2">Trusted guidance for proposals, analysis, and publications</span>
          </h1>

          {/* Subheading */}
          <p className="mx-auto mb-10 max-w-3xl text-lg text-slate-600 sm:text-xl">
            Explore WBS services, trainings and programs, publications, admissions, internship applications, and official communication channels in one professional website.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col gap-4 sm:flex-row sm:justify-center">
            <Button size="lg" className="text-base cursor-pointer bg-[#1a4c6e] text-white hover:bg-[#143b55]" asChild>
              <a href="#address">
                Send Inquiry
                <ArrowRight className="ml-2 h-4 w-4" />
              </a>
            </Button>
            <Button variant="outline" size="lg" className="text-base cursor-pointer border-[#1a4c6e]/30 bg-white text-[#1a4c6e] hover:bg-[#eaf6fc]" asChild>
              <a href="http://127.0.0.1:8000/admin" target="_blank" rel="noopener noreferrer">
                <Play className="mr-2 h-4 w-4" />
                Open Admin Portal
              </a>
            </Button>
          </div>
        </div>

        <div className="mx-auto mt-16 grid max-w-5xl gap-4 sm:grid-cols-3">
          <div className="rounded-xl border border-slate-200 bg-white p-5 text-center shadow-sm">
            <p className="text-sm font-semibold text-[#1a4c6e]">Free consultation</p>
            <p className="text-sm text-slate-600">Professional guidance for your research journey.</p>
          </div>
          <div className="rounded-xl border border-slate-200 bg-white p-5 text-center shadow-sm">
            <p className="text-sm font-semibold text-[#1a4c6e]">Expert advisors</p>
            <p className="text-sm text-slate-600">Experienced consultants for all key research stages.</p>
          </div>
          <div className="rounded-xl border border-slate-200 bg-white p-5 text-center shadow-sm">
            <p className="text-sm font-semibold text-[#1a4c6e]">Fast response</p>
            <p className="text-sm text-slate-600">Quick follow-up and confirmation after submission.</p>
          </div>
        </div>
      </div>
    </section>
  )
}

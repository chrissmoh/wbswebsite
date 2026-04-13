"use client"

import { ArrowRight, Play, Star } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { DotPattern } from '@/components/dot-pattern'

export function HeroSection() {
  return (
    <section id="hero" className="relative overflow-hidden bg-gradient-to-r from-slate-900 via-blue-900 to-red-800 pt-16 sm:pt-20 pb-16 text-white">
      {/* Background Pattern */}
      <div className="absolute inset-0">
        {/* Dot pattern overlay using reusable component */}
        <DotPattern className="opacity-100" size="md" fadeStyle="ellipse" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="mx-auto max-w-4xl text-center">
          {/* Announcement Badge */}
          <div className="mb-8 flex justify-center">
            <Badge variant="outline" className="px-4 py-2 border-white/40 text-white bg-white/10">
              <Star className="w-3 h-3 mr-2 fill-current" />
              WBS RESEARCH SOLUTIONS PROFESSIONALS
              <ArrowRight className="w-3 h-3 ml-2" />
            </Badge>
          </div>

          {/* Main Headline */}
          <h1 className="mb-6 text-4xl font-bold tracking-tight sm:text-6xl lg:text-7xl leading-tight">
            Master&apos;s research consultation visits, planned with care.
            <span className="block text-amber-300 italic mt-2">Writing and Business Solutions (WBS)</span>
          </h1>

          {/* Subheading */}
          <p className="mx-auto mb-10 max-w-2xl text-lg text-blue-100 sm:text-xl">
            Thank you for choosing WBS. Use this site to submit your details and request support for concept note, proposal, dissertation, data analysis, and more.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col gap-4 sm:flex-row sm:justify-center">
            <Button size="lg" className="text-base cursor-pointer bg-white text-slate-900 hover:bg-slate-100" asChild>
              <a href="/visit-client">
                Research consultation
                <ArrowRight className="ml-2 h-4 w-4" />
              </a>
            </Button>
            <Button variant="outline" size="lg" className="text-base cursor-pointer border-white/50 bg-white/10 text-white hover:bg-white/20" asChild>
              <a href="/visit-client">
                <Play className="mr-2 h-4 w-4" />
                Track my request
              </a>
            </Button>
          </div>
        </div>

        <div className="mx-auto mt-16 grid max-w-5xl gap-4 sm:grid-cols-3">
          <div className="rounded-lg border border-white/15 bg-white/10 p-5 text-center">
            <p className="text-sm font-semibold text-amber-300">Free consultation</p>
            <p className="text-sm text-blue-100">Professional guidance for your research journey.</p>
          </div>
          <div className="rounded-lg border border-white/15 bg-white/10 p-5 text-center">
            <p className="text-sm font-semibold text-amber-300">Expert advisors</p>
            <p className="text-sm text-blue-100">Experienced consultants for all key research stages.</p>
          </div>
          <div className="rounded-lg border border-white/15 bg-white/10 p-5 text-center">
            <p className="text-sm font-semibold text-amber-300">Fast response</p>
            <p className="text-sm text-blue-100">Quick follow-up and confirmation after submission.</p>
          </div>
        </div>
      </div>
    </section>
  )
}

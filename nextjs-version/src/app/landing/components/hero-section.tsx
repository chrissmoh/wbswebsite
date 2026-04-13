"use client"

import { ArrowRight, Play, Star } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { DotPattern } from '@/components/dot-pattern'

export function HeroSection() {
  return (
    <section id="hero" className="relative overflow-hidden bg-gradient-to-b from-background to-background/80 pt-16 sm:pt-20 pb-16">
      {/* Background Pattern */}
      <div className="absolute inset-0">
        {/* Dot pattern overlay using reusable component */}
        <DotPattern className="opacity-100" size="md" fadeStyle="ellipse" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="mx-auto max-w-4xl text-center">
          {/* Announcement Badge */}
          <div className="mb-8 flex justify-center">
            <Badge variant="outline" className="px-4 py-2 border-foreground">
              <Star className="w-3 h-3 mr-2 fill-current" />
              WBS RESEARCH SOLUTIONS PROFESSIONALS
              <ArrowRight className="w-3 h-3 ml-2" />
            </Badge>
          </div>

          {/* Main Headline */}
          <h1 className="mb-6 text-4xl font-bold tracking-tight sm:text-6xl lg:text-7xl">
            WBS Research Solutions
            <span className="bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">
              {" "}Professional Website{" "}
            </span>
            with Laravel Backend + Next.js Frontend
          </h1>

          {/* Subheading */}
          <p className="mx-auto mb-10 max-w-2xl text-lg text-muted-foreground sm:text-xl">
            A fully responsive corporate website with pages for services, trainings, publications, admissions,
            internship applications, advertisements, and news, connected to API-driven backend management.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col gap-4 sm:flex-row sm:justify-center">
            <Button size="lg" className="text-base cursor-pointer bg-blue-600 hover:bg-blue-700" asChild>
              <a href="#address">
                Send Inquiry
                <ArrowRight className="ml-2 h-4 w-4" />
              </a>
            </Button>
            <Button variant="outline" size="lg" className="text-base cursor-pointer" asChild>
              <a href="http://127.0.0.1:8000/admin" target="_blank" rel="noopener noreferrer">
                <Play className="mr-2 h-4 w-4" />
                Open Admin Portal
              </a>
            </Button>
          </div>
        </div>

        <div className="mx-auto mt-16 grid max-w-5xl gap-4 sm:grid-cols-3">
          <div className="rounded-lg border bg-card p-5 text-center">
            <p className="text-sm font-semibold text-blue-700">Research Support</p>
            <p className="text-sm text-muted-foreground">Proposal writing, data analysis, editing, and plagiarism checks.</p>
          </div>
          <div className="rounded-lg border bg-card p-5 text-center">
            <p className="text-sm font-semibold text-blue-700">Training Programs</p>
            <p className="text-sm text-muted-foreground">Workshops and professional academic development programs.</p>
          </div>
          <div className="rounded-lg border bg-card p-5 text-center">
            <p className="text-sm font-semibold text-blue-700">Publications & News</p>
            <p className="text-sm text-muted-foreground">Books, updates, announcements, and internship opportunities.</p>
          </div>
        </div>
      </div>
    </section>
  )
}

"use client"

import {
  BarChart3,
  Zap,
  Users,
  ArrowRight,
  Database,
  Package,
  Crown,
  Layout,
  Palette
} from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { Image3D } from '@/components/image-3d'

const mainFeatures = [
  {
    icon: Package,
    title: 'Research Proposal Support',
    description: 'Guidance for selecting topics, structuring chapters, and preparing strong proposals.'
  },
  {
    icon: Crown,
    title: 'Academic Writing Services',
    description: 'Support in dissertations, theses, manuscripts, proofreading, and formatting.'
  },
  {
    icon: Layout,
    title: 'Publishing and Documentation',
    description: 'Publication guidance and support including featured academic books.'
  },
  {
    icon: Zap,
    title: 'Quick Communication',
    description: 'Fast response via form, email, phone, and WhatsApp quick assistance.'
  }
]

const secondaryFeatures = [
  {
    icon: BarChart3,
    title: 'Data Analysis',
    description: 'Quantitative and qualitative data analysis support for academic research.'
  },
  {
    icon: Palette,
    title: 'Modern Tech Stack',
    description: 'Built with modern frontend technologies for reliability and scalability.'
  },
  {
    icon: Users,
    title: 'Targeted Support',
    description: 'Services for undergraduate, masters, PhD students, researchers, and institutions.'
  },
  {
    icon: Database,
    title: 'Integrated Operations',
    description: 'Forms and submissions are securely managed through the WBS backend system.'
  }
]

export function FeaturesSection() {
  return (
    <section id="features" className="py-24 sm:py-32 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mx-auto max-w-2xl text-center mb-16">
          <Badge variant="outline" className="mb-4">Our Services</Badge>
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-4">
            Complete academic and research support services
          </h2>
          <p className="text-lg text-muted-foreground">
            WBS services cover research guidance, trainings, publications, admissions communication, internship opportunities, and quick assistance channels.
          </p>
        </div>

        {/* First Feature Section */}
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-8 xl:gap-16 mb-24">
          {/* Left Image */}
          <Image3D
            lightSrc="/feature-1-light.png"
            darkSrc="/feature-1-dark.png"
            alt="Analytics dashboard"
            direction="left"
          />
          {/* Right Content */}
          <div className="space-y-6">
            <div className="space-y-4">
              <h3 className="text-2xl font-semibold tracking-tight text-balance sm:text-3xl">
                Core services for academic success
              </h3>
              <p className="text-muted-foreground text-base text-pretty">
                WBS provides structured consultancy support to help clients complete quality academic work efficiently.
              </p>
            </div>

            <ul className="grid gap-4 sm:grid-cols-2">
              {mainFeatures.map((feature, index) => (
                <li key={index} className="group hover:bg-accent/5 flex items-start gap-3 p-2 rounded-lg transition-colors">
                  <div className="mt-0.5 flex shrink-0 items-center justify-center">
                    <feature.icon className="size-5 text-primary" aria-hidden="true" />
                  </div>
                  <div>
                    <h3 className="text-foreground font-medium">{feature.title}</h3>
                    <p className="text-muted-foreground mt-1 text-sm">{feature.description}</p>
                  </div>
                </li>
              ))}
            </ul>

            <div className="flex flex-col sm:flex-row gap-4 pe-4 pt-2">
              <Button size="lg" className="cursor-pointer">
                <a href="#address" className='flex items-center'>
                  Request Service
                  <ArrowRight className="ms-2 size-4" aria-hidden="true" />
                </a>
              </Button>
              <Button size="lg" variant="outline" className="cursor-pointer">
                <a href="#trainings">
                  View Programs
                </a>
              </Button>
            </div>
          </div>
        </div>

        {/* Second Feature Section - Flipped Layout */}
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-8 xl:gap-16">
          {/* Left Content */}
          <div className="space-y-6 order-2 lg:order-1">
            <div className="space-y-4">
              <h3 className="text-2xl font-semibold tracking-tight text-balance sm:text-3xl">
                Professional operations and client management
              </h3>
              <p className="text-muted-foreground text-base text-pretty">
                Training schedules, inquiries, internships, and updates are managed through a centralized backend process.
              </p>
            </div>

            <ul className="grid gap-4 sm:grid-cols-2">
              {secondaryFeatures.map((feature, index) => (
                <li key={index} className="group hover:bg-accent/5 flex items-start gap-3 p-2 rounded-lg transition-colors">
                  <div className="mt-0.5 flex shrink-0 items-center justify-center">
                    <feature.icon className="size-5 text-primary" aria-hidden="true" />
                  </div>
                  <div>
                    <h3 className="text-foreground font-medium">{feature.title}</h3>
                    <p className="text-muted-foreground mt-1 text-sm">{feature.description}</p>
                  </div>
                </li>
              ))}
            </ul>

            <div className="flex flex-col sm:flex-row gap-4 pe-4 pt-2">
              <Button size="lg" className="cursor-pointer">
                <a href="http://127.0.0.1:8000/admin" target="_blank" rel="noopener noreferrer" className='flex items-center'>
                  Open Admin Portal
                  <ArrowRight className="ms-2 size-4" aria-hidden="true" />
                </a>
              </Button>
              <Button size="lg" variant="outline" className="cursor-pointer">
                <a href="#blog">
                  Latest News
                </a>
              </Button>
            </div>
          </div>

          {/* Right Image */}
          <Image3D
            lightSrc="/feature-2-light.png"
            darkSrc="/feature-2-dark.png"
            alt="Performance dashboard"
            direction="right"
            className="order-1 lg:order-2"
          />
        </div>
      </div>
    </section>
  )
}

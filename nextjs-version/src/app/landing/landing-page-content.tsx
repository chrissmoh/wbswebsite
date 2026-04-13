"use client"

import { MessageCircle } from 'lucide-react'
import { LandingNavbar } from './components/navbar'
import { HeroSection } from './components/hero-section'
import { FeaturesSection } from './components/features-section'
import { BlogSection } from './components/blog-section'
import { PricingSection } from './components/pricing-section'
import { ContactSection } from './components/contact-section'
import { LandingFooter } from './components/footer'
import { AboutSection } from './components/about-section'
import { Button } from '@/components/ui/button'
import { InternshipSection } from './components/internship-section'
import { AdmissionsSection } from './components/admissions-section'

export function LandingPageContent() {
  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <LandingNavbar />

      {/* Main Content */}
      <main>
        <HeroSection />
        <AboutSection />
        <FeaturesSection />
        <PricingSection />
        <BlogSection />
        <AdmissionsSection />
        <InternshipSection />
        <ContactSection />
      </main>

      {/* Footer */}
      <LandingFooter />

      {/* WhatsApp Quick Assistance */}
      <div className="fixed bottom-6 right-6 z-50">
        <Button asChild size="icon" className="h-14 w-14 rounded-full bg-green-600 shadow-lg hover:bg-green-700">
          <a
            href="https://wa.me/255658646358?text=Hello%2C%20I%20need%20assistance%20with%20WBS%20services."
            aria-label="Chat on WhatsApp"
          >
            <MessageCircle className="h-6 w-6" />
          </a>
        </Button>
      </div>
    </div>
  )
}

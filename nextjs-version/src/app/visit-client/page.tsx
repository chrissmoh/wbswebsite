import { LandingNavbar } from "@/app/landing/components/navbar"
import { TestimonialsSection } from "@/app/landing/components/testimonials-section"
import { LandingFooter } from "@/app/landing/components/footer"

export default function VisitClientPage() {
  return (
    <div className="min-h-screen bg-background">
      <LandingNavbar />
      <main>
        <TestimonialsSection />
      </main>
      <LandingFooter />
    </div>
  )
}

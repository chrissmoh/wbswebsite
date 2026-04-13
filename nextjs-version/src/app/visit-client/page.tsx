import { LandingNavbar } from "@/app/landing/components/navbar"
import { LandingFooter } from "@/app/landing/components/footer"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ArrowRight, Search, Star } from "lucide-react"

export default function VisitClientPage() {
  const consultationBase = process.env.NEXT_PUBLIC_LARAVEL_ASSET_URL ?? "http://127.0.0.1:8000"

  return (
    <div className="min-h-screen bg-background">
      <LandingNavbar />
      <main>
        <section className="relative overflow-hidden bg-gradient-to-r from-slate-900 via-blue-900 to-red-800 py-16 text-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-5xl">
              <Badge variant="outline" className="border-white/40 bg-white/10 text-white mb-5">
                <Star className="h-3 w-3 mr-2 fill-current" />
                PROFESSIONAL RESEARCH CONSULTATION
              </Badge>
              <h1 className="text-4xl sm:text-5xl font-bold leading-tight">
                Master&apos;s research consultation visits, planned with care.
              </h1>
              <p className="mt-4 max-w-3xl text-blue-100 text-lg">
                Thank you for choosing Writing and Business Solutions (WBS). Continue using the official consultation flow to submit your request or track an existing request.
              </p>

              <div className="mt-8 flex flex-col sm:flex-row gap-4">
                <Button asChild size="lg" className="bg-white text-slate-900 hover:bg-slate-100">
                  <a href={`${consultationBase}/consultation/request`} target="_blank" rel="noopener noreferrer">
                    Submit Request
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </a>
                </Button>
                <Button asChild size="lg" variant="outline" className="border-white/50 bg-white/10 text-white hover:bg-white/20">
                  <a href={`${consultationBase}/consultation/track`} target="_blank" rel="noopener noreferrer">
                    <Search className="mr-2 h-4 w-4" />
                    Track Request
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </section>

        <section className="py-14 bg-slate-50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-5xl grid gap-4 md:grid-cols-3">
              <div className="rounded-xl border bg-white p-6">
                <p className="text-sm font-semibold text-slate-900">1. Submit Request</p>
                <p className="text-sm text-slate-600 mt-2">Open the official WBS consultation request page and complete your details.</p>
              </div>
              <div className="rounded-xl border bg-white p-6">
                <p className="text-sm font-semibold text-slate-900">2. Get Scheduled</p>
                <p className="text-sm text-slate-600 mt-2">WBS reviews your request and confirms your physical consultation schedule.</p>
              </div>
              <div className="rounded-xl border bg-white p-6">
                <p className="text-sm font-semibold text-slate-900">3. Track Progress</p>
                <p className="text-sm text-slate-600 mt-2">Use the tracking page anytime with your token to follow updates.</p>
              </div>
            </div>
          </div>
        </section>
      </main>
      <LandingFooter />
    </div>
  )
}

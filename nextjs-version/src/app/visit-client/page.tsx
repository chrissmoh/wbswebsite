import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ArrowRight, Search, Star } from "lucide-react"
import { Logo } from "@/components/logo"

export default function VisitClientPage() {
  const consultationBase = process.env.NEXT_PUBLIC_LARAVEL_ASSET_URL ?? "http://127.0.0.1:8000"

  return (
    <div className="min-h-screen bg-slate-100">
      <header className="border-b border-amber-300/50 bg-gradient-to-r from-slate-950 via-blue-900 to-red-800 text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Logo size={36} />
            <span className="font-semibold tracking-wide">WBS Consultation</span>
          </div>
          <div className="flex items-center gap-2">
            <Button asChild variant="outline" className="border-white/50 bg-white/10 text-white hover:bg-white/20">
              <a href="/landing">Back To Website</a>
            </Button>
            <Button asChild className="bg-amber-400 text-slate-900 hover:bg-amber-300">
              <a href={`${consultationBase}/consultation/request`} target="_blank" rel="noopener noreferrer">Submit Request</a>
            </Button>
          </div>
        </div>
      </header>

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
                    Research Consultation
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
            <div className="mx-auto max-w-5xl mb-10 text-center">
              <h2 className="text-3xl sm:text-4xl font-bold text-slate-900">How we help you succeed</h2>
              <p className="mt-3 text-slate-600">Comprehensive support for every stage of your Master&apos;s research journey.</p>
            </div>
            <div className="mx-auto max-w-5xl grid gap-4 md:grid-cols-3 mb-12">
              <div className="rounded-xl border bg-white p-6">
                <p className="text-lg font-semibold text-slate-900">Research Proposal Support</p>
                <p className="text-sm text-slate-600 mt-2">Guidance from topic selection to proposal writing and refinement.</p>
              </div>
              <div className="rounded-xl border bg-white p-6">
                <p className="text-lg font-semibold text-slate-900">Data Analysis Assistance</p>
                <p className="text-sm text-slate-600 mt-2">Hands-on support for analysis, interpretation, and reporting.</p>
              </div>
              <div className="rounded-xl border bg-white p-6">
                <p className="text-lg font-semibold text-slate-900">Consultation Scheduling</p>
                <p className="text-sm text-slate-600 mt-2">Structured scheduling and follow-up so your consultation stays on track.</p>
              </div>
            </div>

            <div className="mx-auto max-w-5xl mb-8 text-center">
              <h2 className="text-3xl sm:text-4xl font-bold text-slate-900">How it works</h2>
              <p className="mt-3 text-slate-600">A simple three-step path to expert research consultation.</p>
            </div>
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

        <section className="py-14 bg-white border-t">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-5xl text-center mb-8">
              <h2 className="text-3xl sm:text-4xl font-bold text-slate-900">Contact us</h2>
              <p className="mt-3 text-slate-600">Reach WBS directly for support about requests and consultation visits.</p>
            </div>
            <div className="mx-auto max-w-5xl grid gap-4 md:grid-cols-3">
              <div className="rounded-xl border bg-slate-50 p-6">
                <p className="font-semibold text-slate-900">Phone / WhatsApp</p>
                <p className="text-sm text-slate-600 mt-2">+255 658 646358</p>
              </div>
              <div className="rounded-xl border bg-slate-50 p-6">
                <p className="font-semibold text-slate-900">Email</p>
                <p className="text-sm text-slate-600 mt-2">info@wbs.co.tz</p>
              </div>
              <div className="rounded-xl border bg-slate-50 p-6">
                <p className="font-semibold text-slate-900">Location</p>
                <p className="text-sm text-slate-600 mt-2">Sinza-Lion, Dar es Salaam, Tanzania</p>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-6 text-sm text-slate-600 flex flex-col sm:flex-row items-center justify-between gap-2">
          <p>WBS Consultation Flow Portal</p>
          <p>For requests and tracking only</p>
        </div>
      </footer>
    </div>
  )
}

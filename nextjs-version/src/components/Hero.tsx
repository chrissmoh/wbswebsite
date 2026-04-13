import { BookOpenCheck, FlaskConical, GraduationCap } from "lucide-react"

const stats = [
  { label: "Research Papers", value: "500+" },
  { label: "Years Experience", value: "10+" },
  { label: "Success Rate", value: "98%" },
]

export function Hero() {
  return (
    <section
      id="home"
      className="bg-gradient-to-br from-white via-[#eaf6fc] to-[#d9edf9] py-14 sm:py-20"
    >
      <div className="mx-auto grid w-full max-w-7xl gap-10 px-4 sm:px-6 lg:grid-cols-2 lg:px-8">
        <div className="flex flex-col justify-center">
          <p className="mb-3 inline-flex w-fit rounded-full bg-[#2c9cd4]/15 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-[#1a4c6e]">
            WBS Research Solutions
          </p>
          <h1 className="text-3xl font-bold leading-tight text-[#1a4c6e] sm:text-5xl">
            Empowering Your Academic Research Journey
          </h1>
          <p className="mt-4 max-w-xl text-base text-slate-600 sm:text-lg">
            Trusted guidance for scholars, thesis writing, publication support & data analysis
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <a
              href="#services"
              className="rounded-xl bg-[#1a4c6e] px-6 py-3 text-center text-sm font-semibold text-white transition hover:bg-[#153d59]"
            >
              Explore Services
            </a>
            <a
              href="#address"
              className="rounded-xl border border-[#1a4c6e] bg-white px-6 py-3 text-center text-sm font-semibold text-[#1a4c6e] transition hover:bg-[#f3f8fb]"
            >
              Contact Us
            </a>
          </div>

          <div className="mt-8 grid grid-cols-1 gap-3 sm:grid-cols-3">
            {stats.map((stat) => (
              <div key={stat.label} className="rounded-xl border border-white/70 bg-white/80 p-4 shadow-sm">
                <p className="text-xl font-bold text-[#1a4c6e]">{stat.value}</p>
                <p className="text-xs font-medium text-slate-600">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="flex items-center justify-center">
          <div className="w-full max-w-md rounded-2xl border border-white/70 bg-white/90 p-6 shadow-lg sm:p-8">
            <div className="mb-6 inline-flex rounded-xl bg-[#2c9cd4]/15 p-3 text-[#1a4c6e]">
              <GraduationCap className="h-7 w-7" />
            </div>
            <h2 className="text-2xl font-bold text-[#1a4c6e]">Academic Research Excellence</h2>
            <p className="mt-3 text-sm text-slate-600">
              We support students, researchers, and institutions with practical, ethical, and high-quality academic solutions.
            </p>
            <div className="mt-6 space-y-3">
              <div className="flex items-center gap-3 rounded-lg bg-[#f7fbfe] p-3">
                <BookOpenCheck className="h-5 w-5 text-[#2c9cd4]" />
                <p className="text-sm font-medium text-slate-700">Thesis & dissertation support</p>
              </div>
              <div className="flex items-center gap-3 rounded-lg bg-[#f7fbfe] p-3">
                <FlaskConical className="h-5 w-5 text-[#2c9cd4]" />
                <p className="text-sm font-medium text-slate-700">Data analysis & publication guidance</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

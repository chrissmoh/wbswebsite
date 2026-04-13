export default function HomePage() {
  return (
    <section className="max-w-5xl">
      <h1 className="text-4xl font-bold text-slate-900 mb-3">WBS Research Solutions Professionals</h1>
      <p className="text-lg text-slate-600 mb-6">
        Welcome to WBS company website. We provide research support, trainings and programs, publications, admissions,
        intership opportunities, and client communication services.
      </p>
      <div className="grid gap-4 md:grid-cols-3">
        <div className="rounded-lg border bg-white p-4">Research Support Services</div>
        <div className="rounded-lg border bg-white p-4">Professional Trainings</div>
        <div className="rounded-lg border bg-white p-4">Publications and Client Support</div>
      </div>
    </section>
  )
}

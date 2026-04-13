import { Navbar } from "@/components/Navbar"
import { Hero } from "@/components/Hero"

export default function HomePage() {
  return (
    <div className="min-h-screen bg-[#f3f6f8]">
      <Navbar />
      <main>
        <Hero />
      </main>
    </div>
  )
}

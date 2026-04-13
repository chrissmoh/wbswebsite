"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { Logo } from "@/components/logo"
import { cn } from "@/lib/utils"

const links = [
  { name: "HOME", href: "/home" },
  { name: "ABOUT US", href: "/about-us" },
  { name: "OUR SERVICES", href: "/our-services" },
  { name: "TRAININGS AND PROGRAMS", href: "/trainings-and-programs" },
  { name: "PUBLICATIONS", href: "/publications" },
  { name: "ADMISSIONS", href: "/admissions" },
  { name: "INTERSHIP", href: "/intership" },
  { name: "VISIT CLIENT", href: "/visit-client" },
  { name: "ADRESS", href: "/adress" },
]

export function WbsSidebar() {
  const pathname = usePathname()

  return (
    <aside className="w-72 bg-gradient-to-b from-blue-700 via-blue-800 to-red-700 text-white min-h-screen p-5">
      <div className="flex items-center gap-2 mb-6">
        <Logo size={34} />
        <div>
          <p className="font-bold leading-tight">WBS WEBSITE</p>
          <p className="text-xs text-blue-100">Research Solutions</p>
        </div>
      </div>

      <nav className="space-y-1">
        {links.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            className={cn(
              "block rounded-md px-3 py-2 text-sm font-semibold transition-colors",
              pathname === link.href ? "bg-white text-blue-800" : "hover:bg-white/15"
            )}
          >
            {link.name}
          </Link>
        ))}
      </nav>
    </aside>
  )
}

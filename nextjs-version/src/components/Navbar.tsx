"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { Menu } from "lucide-react"
import { useMemo, useState } from "react"
import { MobileMenu, type NavItem } from "@/components/MobileMenu"

const navItems: NavItem[] = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/#about" },
  { label: "Services", href: "/#services" },
  { label: "Our Programs", href: "/#programs" },
  { label: "Trainings & Publications", href: "/#trainings-publications" },
  { label: "Admissions", href: "/#admissions" },
  { label: "Internship", href: "/#internship" },
  { label: "Client Visit", href: "/visit-client" },
  { label: "Address", href: "/#address" },
  { label: "Dashboard", href: "http://127.0.0.1:8000/admin", isDashboard: true },
]

export function Navbar() {
  const pathname = usePathname()
  const [menuOpen, setMenuOpen] = useState(false)

  const activeHref = useMemo(() => {
    if (pathname.startsWith("/visit-client")) return "/visit-client"
    return "/"
  }, [pathname])

  return (
    <>
      <header className="sticky top-0 z-40 border-b border-slate-200 bg-white/95 backdrop-blur">
        <div className="mx-auto flex h-16 w-full max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
          <Link href="/" className="flex items-center gap-2">
            <div className="rounded-md bg-[#1a4c6e] px-2 py-1 text-sm font-bold text-white">WBS</div>
            <span className="text-sm font-semibold text-[#1a4c6e] sm:text-base">WBS Research Solutions</span>
          </Link>

          <nav className="hidden items-center gap-1 lg:flex">
            {navItems.map((item) => {
              const isActive = item.href === activeHref
              const isExternal = item.href.startsWith("http")
              const className = `rounded-md px-3 py-2 text-sm font-medium transition-colors ${
                isActive
                  ? "bg-[#2c9cd4]/15 text-[#1a4c6e]"
                  : item.isDashboard
                    ? "border border-[#2c9cd4]/40 text-[#1a4c6e] hover:bg-[#2c9cd4]/10"
                    : "text-slate-700 hover:bg-slate-100 hover:text-[#1a4c6e]"
              }`

              if (isExternal) {
                return (
                  <a
                    key={item.href}
                    href={item.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={className}
                  >
                    {item.label}
                  </a>
                )
              }

              return (
                <Link key={item.href} href={item.href} className={className}>
                  {item.label}
                </Link>
              )
            })}
          </nav>

          <button
            aria-label="Open mobile menu"
            className="rounded-md border border-slate-300 p-2 text-slate-700 hover:bg-slate-100 lg:hidden"
            onClick={() => setMenuOpen(true)}
          >
            <Menu className="h-5 w-5" />
          </button>
        </div>
      </header>

      <MobileMenu
        isOpen={menuOpen}
        onClose={() => setMenuOpen(false)}
        items={navItems}
        activeHref={activeHref}
      />
    </>
  )
}

"use client"

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { LayoutDashboard, Menu } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Logo } from '@/components/logo'
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from '@/components/ui/sheet'

const navigationItems = [
  { name: 'Home', href: '#hero' },
  { name: 'About Us', href: '#about' },
  { name: 'Our Services', href: '#features' },
  { name: 'Trainings And Programs', href: '#trainings' },
  { name: 'Publications', href: '#blog' },
  { name: 'Admissions', href: '#admissions' },
  { name: 'Internship', href: '#internship' },
  { name: 'Visit Client', href: '/visit-client' },
  { name: 'Address', href: '#address' },
]

// Smooth scroll function
const smoothScrollTo = (targetId: string) => {
  if (targetId.startsWith('#')) {
    const element = document.querySelector(targetId)
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      })
    }
  }
}

export function LandingNavbar() {
  const pathname = usePathname()

  const handleNavigate = (href: string) => {
    if (href.startsWith('#')) {
      if (pathname === '/landing') {
        smoothScrollTo(href)
      } else {
        window.location.href = `/landing${href}`
      }
      return
    }
    window.location.href = href
  }

  return (
    <header className="sticky top-0 z-50 w-full border-b border-slate-200 bg-white/95 text-slate-800 shadow-sm backdrop-blur">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between gap-3">
        <div className="flex items-center gap-3">
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="outline" size="icon" className="border-slate-300 text-slate-700 hover:bg-slate-100 lg:hidden">
                <Menu className="h-5 w-5" />
              </Button>
            </SheetTrigger>
            <SheetContent side="left" className="bg-slate-950 text-white border-slate-700">
              <SheetHeader>
                <SheetTitle className="text-white">WBS Menu</SheetTitle>
              </SheetHeader>
              <div className="px-4 pb-6 space-y-2">
                {navigationItems.map((item) => (
                  <SheetClose asChild key={item.name}>
                    <button
                      className="w-full text-left rounded-md px-3 py-2 text-sm font-semibold hover:bg-white/10"
                      onClick={() => handleNavigate(item.href)}
                    >
                      {item.name}
                    </button>
                  </SheetClose>
                ))}
                <div className="h-px bg-white/20 my-3" />
                <SheetClose asChild>
                  <a
                    className="flex items-center rounded-md px-3 py-2 text-sm font-semibold hover:bg-white/10"
                    href="http://127.0.0.1:8000/admin"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <LayoutDashboard className="h-4 w-4 mr-2" />
                    Dashboard
                  </a>
                </SheetClose>
              </div>
            </SheetContent>
          </Sheet>

          <Link href="/landing" className="flex items-center space-x-2 cursor-pointer">
            <Logo size={38} />
            <span className="font-semibold tracking-wide text-sm md:text-base text-slate-800">
              WRITING & BUSINESS SOLUTION
            </span>
          </Link>
        </div>

        <nav className="hidden lg:flex items-center gap-1">
          {navigationItems.map((item) => (
            <button
              key={item.name}
              className="rounded-md px-3 py-2 text-sm font-semibold text-slate-700 hover:bg-blue-50 hover:text-blue-700 transition-colors"
              onClick={() => handleNavigate(item.href)}
            >
              {item.name}
            </button>
          ))}
        </nav>

        <div className="flex items-center space-x-2">
          <Button variant="outline" asChild className="hidden sm:inline-flex cursor-pointer border-blue-300 text-blue-700 hover:bg-blue-50">
            <a href="http://127.0.0.1:8000/admin" target="_blank" rel="noopener noreferrer">
              <LayoutDashboard className="h-4 w-4 mr-2" />
              Dashboard
            </a>
          </Button>
          <Button asChild className="cursor-pointer bg-blue-700 text-white font-semibold hover:bg-blue-800">
            <a href="/visit-client">Visit Client</a>
          </Button>
        </div>
      </div>
    </header>
  )
}

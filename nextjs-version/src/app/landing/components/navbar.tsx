"use client"

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { LayoutDashboard } from 'lucide-react'
import { Button } from '@/components/ui/button'
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from '@/components/ui/navigation-menu'
import { Logo } from '@/components/logo'

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
    <header className="sticky top-0 z-50 w-full border-b border-amber-300/60 bg-gradient-to-r from-slate-900 via-blue-900 to-red-800 text-white shadow-lg">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between gap-4">
        <Link href="/landing" className="flex items-center space-x-2 cursor-pointer">
          <Logo size={38} />
          <span className="font-semibold tracking-wide text-sm md:text-base">
            WRITING & BUSINESS SOLUTION
          </span>
        </Link>

        <NavigationMenu className="hidden lg:flex flex-1 justify-center">
          <NavigationMenuList>
            {navigationItems.map((item) => (
              <NavigationMenuItem key={item.name}>
                <NavigationMenuLink
                  className="group inline-flex h-10 w-max items-center justify-center px-3 py-2 text-sm font-semibold transition-colors hover:text-amber-200 focus:text-amber-200 focus:outline-none cursor-pointer"
                  onClick={(e: React.MouseEvent) => {
                    e.preventDefault()
                    handleNavigate(item.href)
                  }}
                >
                  {item.name}
                </NavigationMenuLink>
              </NavigationMenuItem>
            ))}
          </NavigationMenuList>
        </NavigationMenu>

        <div className="flex items-center space-x-2">
          <Button variant="outline" asChild className="hidden md:inline-flex cursor-pointer border-white/50 text-white hover:bg-white/10">
            <a href="http://127.0.0.1:8000/admin" target="_blank" rel="noopener noreferrer">
              <LayoutDashboard className="h-4 w-4 mr-2" />
              Dashboard
            </a>
          </Button>
          <Button asChild className="cursor-pointer bg-amber-400 text-slate-900 hover:bg-amber-300">
            <a href="/visit-client">Visit Client</a>
          </Button>
        </div>
      </div>
    </header>
  )
}

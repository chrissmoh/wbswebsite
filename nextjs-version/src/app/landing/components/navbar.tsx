"use client"

import Link from 'next/link'
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
  { name: 'Intership', href: '#internship' },
  { name: 'Visit Client', href: '/visit-client' },
  { name: 'Adress', href: '#address' },
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
  return (
    <header className="sticky top-0 z-50 w-full shadow-sm">
      <div className="bg-red-700 text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 h-9 flex items-center justify-between text-xs sm:text-sm font-medium">
          <p>SINZA-LION, DAR ES SALAAM</p>
          <p>Mail Us Today: info@wbs.co.tz</p>
        </div>
      </div>

      <div className="bg-white border-b">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
          <Link href="#hero" className="flex items-center space-x-2 cursor-pointer">
            <Logo size={56} />
            <span className="font-bold text-slate-800">
              WRITING & BUSINESS SOLUTION
            </span>
          </Link>

          <Button variant="outline" asChild className="cursor-pointer border-blue-300 text-blue-700 hover:bg-blue-50">
            <a href="http://127.0.0.1:8000/admin" target="_blank" rel="noopener noreferrer">
              <LayoutDashboard className="h-4 w-4 mr-2" />
              WBS Dashboard
            </a>
          </Button>
        </div>
      </div>

      <div className="bg-sky-600 text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 h-14 flex items-center justify-between gap-3">
          <NavigationMenu className="flex-1 overflow-x-auto">
          <NavigationMenuList>
            {navigationItems.map((item) => (
              <NavigationMenuItem key={item.name}>
                <NavigationMenuLink
                  className="group inline-flex h-10 w-max items-center justify-center px-3 py-2 text-base font-semibold transition-colors hover:text-amber-200 focus:text-amber-200 focus:outline-none cursor-pointer"
                  onClick={(e: React.MouseEvent) => {
                    e.preventDefault()
                    if (item.href.startsWith('#')) {
                      smoothScrollTo(item.href)
                    } else {
                      window.location.href = item.href
                    }
                  }}
                >
                  {item.name}
                </NavigationMenuLink>
              </NavigationMenuItem>
            ))}
          </NavigationMenuList>
        </NavigationMenu>

        <div className="hidden lg:flex items-center space-x-2">
          <Button asChild className="cursor-pointer bg-white text-blue-700 hover:bg-blue-100">
            <a href="/visit-client">Visit Client</a>
          </Button>
        </div>
      </div>
      </div>
    </header>
  )
}

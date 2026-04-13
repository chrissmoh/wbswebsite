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
  { name: 'Visit Client', href: '#visit-client' },
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
    <header className="sticky top-0 z-50 w-full border-b border-blue-300/70 bg-gradient-to-r from-blue-600 via-blue-700 to-red-600 text-white backdrop-blur-xl">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 flex h-16 items-center justify-between gap-3">
        {/* Logo */}
        <div className="flex items-center space-x-2">
          <Link href="#hero" className="flex items-center space-x-2 cursor-pointer">
            <Logo size={32} />
            <span className="font-bold">
              WBS Consultation
            </span>
          </Link>
        </div>

        {/* Desktop Navigation */}
        <NavigationMenu className="flex-1 overflow-x-auto">
          <NavigationMenuList>
            {navigationItems.map((item) => (
              <NavigationMenuItem key={item.name}>
                <NavigationMenuLink
                  className="group inline-flex h-10 w-max items-center justify-center px-3 py-2 text-sm font-medium transition-colors hover:text-red-200 focus:text-red-200 focus:outline-none cursor-pointer"
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

        {/* Desktop CTA */}
        <div className="hidden lg:flex items-center space-x-2">
          <Button variant="outline" asChild className="cursor-pointer border-white/60 text-white hover:bg-white/10">
            <a href="http://127.0.0.1:8000/admin" target="_blank" rel="noopener noreferrer">
              <LayoutDashboard className="h-4 w-4 mr-2" />
              Admin Portal
            </a>
          </Button>
          <Button asChild className="cursor-pointer bg-white text-blue-700 hover:bg-blue-100">
            <a href="#address">Adress</a>
          </Button>
          <Button variant="secondary" asChild className="cursor-pointer bg-red-100 text-red-700 hover:bg-red-200">
            <a href="#visit-client">Visit Client</a>
          </Button>
        </div>
      </div>
    </header>
  )
}

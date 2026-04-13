"use client"

import Link from "next/link"
import { X } from "lucide-react"

export type NavItem = {
  label: string
  href: string
  isDashboard?: boolean
}

type MobileMenuProps = {
  isOpen: boolean
  onClose: () => void
  items: NavItem[]
  activeHref: string
}

export function MobileMenu({ isOpen, onClose, items, activeHref }: MobileMenuProps) {
  if (!isOpen) return null

  return (
    <div className="fixed inset-0 z-50 lg:hidden">
      <button
        aria-label="Close menu overlay"
        className="absolute inset-0 bg-slate-900/40"
        onClick={onClose}
      />
      <aside className="absolute left-0 top-0 h-full w-[82%] max-w-sm bg-white shadow-2xl">
        <div className="flex items-center justify-between border-b border-slate-200 px-5 py-4">
          <div className="flex items-center gap-2">
            <div className="rounded-md bg-[#1a4c6e] px-2 py-1 text-sm font-bold text-white">WBS</div>
            <p className="font-semibold text-slate-800">WBS Research Solutions</p>
          </div>
          <button
            aria-label="Close mobile menu"
            className="rounded-md p-2 text-slate-600 hover:bg-slate-100"
            onClick={onClose}
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        <nav className="px-3 py-4">
          <ul className="space-y-1">
            {items.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className={`block rounded-md px-3 py-2 text-sm font-medium transition-colors ${
                    activeHref === item.href
                      ? "bg-[#2c9cd4]/15 text-[#1a4c6e]"
                      : item.isDashboard
                        ? "text-[#1a4c6e] hover:bg-[#2c9cd4]/10"
                        : "text-slate-700 hover:bg-slate-100"
                  }`}
                  onClick={onClose}
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </aside>
    </div>
  )
}

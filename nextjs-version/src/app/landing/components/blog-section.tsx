"use client"

import { useEffect, useState } from 'react'
import { Card, CardContent } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'

type Publication = {
  id: number
  title: string
  description?: string | null
  cover_image_url?: string | null
}

export function BlogSection() {
  const [items, setItems] = useState<Publication[]>([])

  useEffect(() => {
    const apiBase = process.env.NEXT_PUBLIC_LARAVEL_API_URL ?? "http://127.0.0.1:8000/api"
    const load = async () => {
      try {
        const response = await fetch(`${apiBase}/publications`, { cache: "no-store" })
        if (!response.ok) return
        const data = (await response.json()) as Publication[]
        setItems(Array.isArray(data) ? data : [])
      } catch {
        setItems([])
      }
    }
    void load()
  }, [])

  const displayItems = items.length > 0
    ? items
    : [
        {
          id: 0,
          title: 'The Knowledge of Research Proposal',
          description: 'Featured publication available with contact-to-buy guidance through the WBS support team.',
          cover_image_url: 'https://images.unsplash.com/photo-1521587760476-6c12a4b040da?q=80&w=1200&auto=format&fit=crop',
        },
      ]

  return (
    <section id="blog" className="py-20 sm:py-24 bg-[#eef6fb]">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-5xl mb-12 text-center">
          <Badge variant="outline" className="mb-3 border-[#2c9cd4]/40 text-[#1a4c6e]">Publications</Badge>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-[#1a4c6e]">Books and Publications</h2>
          <p className="mt-4 text-base sm:text-lg text-slate-600 max-w-3xl mx-auto">
            Explore featured WBS books and publication resources. Use contact support for purchase and guidance.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3 max-w-5xl mx-auto">
          {displayItems.map((blog) => (
            <Card key={blog.id} className="overflow-hidden py-0 border-slate-200 shadow-sm rounded-2xl">
              <CardContent className="px-0">
                <div className="aspect-video">
                  <img
                    src={blog.cover_image_url ?? "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=1200&auto=format&fit=crop"}
                    alt={blog.title}
                    className="size-full object-cover"
                  />
                </div>
                <div className="space-y-2 p-6">
                  <p className="text-muted-foreground text-xs tracking-widest uppercase">
                    Publications
                  </p>
                  <h3 className="text-2xl font-semibold text-slate-800">{blog.title.toUpperCase()}</h3>
                  <p className="text-muted-foreground text-sm">{blog.description ?? "WBS publication item."}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

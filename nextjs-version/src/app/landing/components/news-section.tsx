"use client"

import { useEffect, useState } from "react"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

type NewsPost = {
  id: number
  title: string
  body: string
  type: "news" | "advertisement"
  published_at?: string | null
}

export function NewsSection() {
  const [posts, setPosts] = useState<NewsPost[]>([])

  useEffect(() => {
    const apiBase = process.env.NEXT_PUBLIC_LARAVEL_API_URL ?? "http://127.0.0.1:8000/api"
    const load = async () => {
      try {
        const response = await fetch(`${apiBase}/news-posts`, { cache: "no-store" })
        if (!response.ok) return
        const data = (await response.json()) as NewsPost[]
        setPosts(Array.isArray(data) ? data : [])
      } catch {
        setPosts([])
      }
    }
    void load()
  }, [])

  const displayPosts =
    posts.length > 0
      ? posts
      : [
          {
            id: 1,
            title: "Research Support Intake Open",
            body: "WBS is accepting new student and institutional research support requests this month.",
            type: "news",
            published_at: null,
          },
          {
            id: 2,
            title: "Special Discount on Data Analysis Support",
            body: "Limited-time advertisement for selected data analysis and editing support packages.",
            type: "advertisement",
            published_at: null,
          },
        ]

  return (
    <section id="news" className="py-20 sm:py-24 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center mb-12">
          <Badge variant="outline" className="mb-4 border-[#2c9cd4]/40 text-[#1a4c6e]">
            Advertisements and News
          </Badge>
          <h2 className="text-3xl font-bold tracking-tight text-[#1a4c6e] sm:text-4xl mb-4">
            Latest announcements and promotions
          </h2>
          <p className="text-base sm:text-lg text-slate-600">
            Stay updated with official WBS announcements, events, and service advertisements.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          {displayPosts.slice(0, 6).map((post) => (
            <Card key={post.id} className="rounded-2xl border-slate-200 shadow-sm">
              <CardHeader>
                <div className="mb-2">
                  <span className="rounded-full bg-blue-50 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-[#1a4c6e]">
                    {post.type === "advertisement" ? "Advertisement" : "News"}
                  </span>
                </div>
                <CardTitle className="text-slate-800">{post.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-slate-600 text-sm leading-relaxed">{post.body}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

'use client'

import * as React from "react"
import { BlogHero } from "@/components/blog/BlogHero"
import { BlogGrid } from "@/components/blog/BlogGrid"
import { BlogNewsletter } from "@/components/blog/BlogNewsletter"

export default function BlogPage() {
  return (
    <div className="min-h-screen bg-white text-slate-900">
      
      {/* 1. Header with search and category filters */}
      <BlogHero />

      {/* 2. Sort selection filter, articles card grid, and pagination */}
      <BlogGrid />

      {/* 3. Bottom newsletter signup banner with caregiver image */}
      <BlogNewsletter />

    </div>
  )
}

'use client'

import * as React from "react"
import Image from "next/image"
import { Calendar, ChevronDown, ChevronLeft, ChevronRight } from "lucide-react"

// Create a static array of 9 blog articles matching the mockup
const articles = Array(9).fill({
  image: "/images/home-page/blog-placeholder.png",
  title: "CQC Inspection 2026: What Care Service Providers Need to Know",
  excerpt: "Build, review, and update personalised care plans, assessments, and daily records in one secure workspace. Keep every team member aligned with real-time information and automated workflows.",
  date: "July 16, 2026",
  readTime: "5 Min Read"
})

export function BlogGrid() {
  return (
    <section className="py-12 bg-white text-slate-900">
      <div className="mx-auto max-w-7xl px-6 md:px-8 space-y-12">
        
        {/* Category Header with Sort Filter */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-slate-100">
          <div className="space-y-1">
            <h2 className="text-xl font-bold text-primary font-sans">
              All Articles
            </h2>
            <p className="text-xs text-slate-500">
              Showing the latest insights and stories from the care sector.
            </p>
          </div>
          
          {/* Filter dropdown */}
          <div className="flex items-center gap-2 text-xs font-semibold text-slate-600 self-start sm:self-auto cursor-pointer border border-slate-200 rounded-full px-4 py-2 hover:bg-slate-50 transition-colors">
            <span>Latest</span>
            <ChevronDown className="h-4 w-4 text-slate-400" />
          </div>
        </div>

        {/* 3x3 Card Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {articles.map((art, idx) => (
            <article 
              key={idx}
              className="group flex flex-col bg-white rounded-2xl overflow-hidden border border-slate-100 hover:border-primary/20 shadow-sm transition-all duration-300"
            >
              {/* Card Image */}
              <div className="relative w-full aspect-[16/10] overflow-hidden bg-slate-50">
                <Image
                  src={art.image}
                  alt={art.title}
                  fill
                  sizes="(max-width: 768px) 100vw, 30vw"
                  className="object-cover object-center group-hover:scale-[1.02] transition-transform duration-300"
                />
              </div>

              {/* Card Content */}
              <div className="p-6 space-y-4 flex-1 flex flex-col justify-between">
                <div className="space-y-2">
                  <h3 className="text-sm font-bold text-primary line-clamp-2 leading-snug group-hover:text-primary/90 transition-colors">
                    {art.title}
                  </h3>
                  <p className="text-xs text-slate-500 leading-relaxed line-clamp-3">
                    {art.excerpt}
                  </p>
                </div>

                {/* Footer details */}
                <div className="flex items-center justify-between pt-4 border-t border-slate-100/80 text-[11px] font-semibold text-slate-500">
                  <div className="flex items-center gap-1.5">
                    <Calendar className="h-3.5 w-3.5 text-slate-400" />
                    <span>{art.date}</span>
                  </div>
                  <span>{art.readTime}</span>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* Pagination Block */}
        <div className="flex items-center justify-center gap-2 pt-12">
          {/* Prev Arrow */}
          <button className="flex h-9 w-9 items-center justify-center rounded-full border border-slate-200 text-slate-400 hover:bg-slate-50 transition-colors">
            <ChevronLeft className="h-4 w-4" />
          </button>
          
          {/* Numbers */}
          <button className="flex h-9 w-9 items-center justify-center rounded-full text-xs font-semibold text-slate-500 hover:bg-slate-50 transition-colors">1</button>
          <button className="flex h-9 w-9 items-center justify-center rounded-full text-xs font-semibold text-slate-500 hover:bg-slate-50 transition-colors">2</button>
          <button className="flex h-9 w-9 items-center justify-center rounded-full text-xs font-semibold text-slate-500 hover:bg-slate-50 transition-colors">3</button>
          
          {/* Selected Number */}
          <button className="flex h-9 w-9 items-center justify-center rounded-full bg-primary text-white text-xs font-bold shadow-sm">4</button>
          
          <button className="flex h-9 w-9 items-center justify-center rounded-full text-xs font-semibold text-slate-500 hover:bg-slate-50 transition-colors">5</button>
          <span className="text-slate-400 text-xs px-1">...</span>
          <button className="flex h-9 w-9 items-center justify-center rounded-full text-xs font-semibold text-slate-500 hover:bg-slate-50 transition-colors">8</button>

          {/* Next Arrow */}
          <button className="flex h-9 w-9 items-center justify-center rounded-full border border-slate-200 text-slate-400 hover:bg-slate-50 transition-colors">
            <ChevronRight className="h-4 w-4" />
          </button>
        </div>

      </div>
    </section>
  )
}

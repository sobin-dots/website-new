'use client'

import * as React from "react"
import Link from "next/link"
import { ArrowUpRight } from "lucide-react"

export function CqcCTA() {
  return (
    <section className="py-20 bg-primary text-white text-center">
      <div className="mx-auto max-w-4xl px-6 md:px-8 space-y-8 scroll-section">

        {/* Copy */}
        <div className="space-y-4 max-w-2xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight leading-snug">
            Be Ready For Every Inspection. Every Day.
          </h2>
          <p className="text-sm md:text-base text-white/70 leading-relaxed">
            Stop chasing paper records and manually compiling audit evidence. Track compliance continuously and document outcomes with confidence.
          </p>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-wrap items-center justify-center gap-4 pt-2">
          <Link
            href="/free-trial"
            className="inline-flex items-center justify-center gap-3 rounded-full bg-white hover:bg-slate-100 text-primary font-bold text-sm px-6 py-3 transition-colors shadow-md h-12"
          >
            Get Started
            <div className="flex h-7 w-7 items-center justify-center rounded-full bg-primary text-white">
              <ArrowUpRight className="h-4 w-4" />
            </div>
          </Link>

          <Link
            href="/book-demo"
            className="inline-flex items-center justify-center gap-3 rounded-full border border-white/30 hover:bg-white/10 text-white font-bold text-sm px-6 py-3 transition-colors h-12"
          >
            Book a Demo
            <div className="flex h-7 w-7 items-center justify-center rounded-full bg-white/20 text-white">
              <ArrowUpRight className="h-4 w-4" />
            </div>
          </Link>
        </div>

      </div>
    </section>
  )
}

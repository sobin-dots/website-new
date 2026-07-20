'use client'

import * as React from "react"
import Link from "next/link"
import { ArrowUpRight } from "lucide-react"

export function CareServiceCTA() {
  return (
    <section className="py-20 md:py-24 bg-[#FAF6F0] text-slate-900 text-center">
      <div className="mx-auto max-w-4xl px-6 md:px-8 space-y-8">
        
        {/* Copy */}
        <div className="space-y-4 max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl lg:text-[42px] font-bold tracking-tight text-primary font-sans leading-snug">
            Experience Cantra In Your Care Environment
          </h2>
          <p className="text-xs md:text-sm text-slate-500 leading-relaxed max-w-2xl mx-auto">
            See How Cantra Can Simplify Your Daily Operations, Strengthen Compliance, And Empower Your Team With Technology Built Specifically For Your Care Setting.
          </p>
        </div>

        {/* Dual Action Buttons */}
        <div className="flex flex-wrap items-center justify-center gap-4 pt-2">
          <Link 
            href="/free-trial"
            className="inline-flex items-center justify-center gap-3 rounded-full border border-slate-300 hover:bg-slate-50 text-slate-700 font-semibold text-xs md:text-sm px-6 py-3 transition-all h-12 bg-white"
          >
            Start free trial
            <div className="flex h-6 w-6 items-center justify-center rounded-full border border-slate-300 text-slate-600">
              <ArrowUpRight className="h-3.5 w-3.5" />
            </div>
          </Link>

          <Link 
            href="/book-demo"
            className="inline-flex items-center justify-center gap-3 rounded-full border border-primary/30 hover:bg-primary/5 text-primary font-semibold text-xs md:text-sm px-6 py-3 transition-all h-12 bg-white"
          >
            Book a Demo
            <div className="flex h-6 w-6 items-center justify-center rounded-full border border-primary/30 text-primary">
              <ArrowUpRight className="h-3.5 w-3.5" />
            </div>
          </Link>
        </div>

      </div>
    </section>
  )
}

'use client'

import * as React from "react"
import Link from "next/link"
import { ArrowUpRight } from "lucide-react"

export function EmarCTA() {
  return (
    <section className="py-20 md:py-24 bg-primary text-white text-center">
      <div className="mx-auto max-w-4xl px-6 md:px-8 space-y-8 scroll-section">
        
        {/* Copy */}
        <div className="space-y-4 max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl lg:text-[44px] font-bold tracking-tight leading-snug">
            Transform Medication Management With Cantra EMAR
          </h2>
          <p className="text-sm md:text-base text-white/80 leading-relaxed max-w-2xl mx-auto">
            Give Your Care Team The Confidence To Administer Medications Safely, Reduce Administrative Burden, And Maintain Complete Compliance With An Intelligent EMAR Solution Designed For Modern Care Providers.
          </p>
        </div>

        {/* Dual Action Buttons */}
        <div className="flex flex-wrap items-center justify-center gap-4 pt-2">
          <Link 
            href="/contact"
            className="inline-flex items-center justify-center gap-3 rounded-full border border-white/30 hover:bg-white/10 text-white font-semibold text-sm px-6 py-3 transition-all h-12"
          >
            Talk to our Team
            <div className="flex h-7 w-7 items-center justify-center rounded-full border border-white/30 text-white">
              <ArrowUpRight className="h-4 w-4" />
            </div>
          </Link>

          <Link 
            href="/book-demo"
            className="inline-flex items-center justify-center gap-3 rounded-full bg-white hover:bg-slate-100 text-primary font-bold text-sm px-6 py-3 transition-colors shadow-md h-12"
          >
            Book a Demo
            <div className="flex h-7 w-7 items-center justify-center rounded-full bg-primary text-white">
              <ArrowUpRight className="h-4 w-4" />
            </div>
          </Link>
        </div>

      </div>
    </section>
  )
}

'use client'

import * as React from "react"
import Link from "next/link"
import { ArrowUpRight } from "lucide-react"

export function IncidentCTA() {
  return (
    <section className="py-20 md:py-24 bg-primary text-white text-center">
      <div className="mx-auto max-w-4xl px-6 md:px-8 space-y-8">

        {/* Copy */}
        <div className="space-y-4 max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl lg:text-[42px] font-bold tracking-tight leading-snug">
            Safer Care Starts With Better Incident Management
          </h2>
          <p className="text-sm md:text-base text-white/80 leading-relaxed max-w-2xl mx-auto">
            Equip Your Team With Intuitive Tools To Capture Incidents, Take Timely Action, And Continuously Improve The Quality And Safety Of Care.
          </p>
        </div>

        {/* Action Button */}
        <div className="pt-2 flex justify-center">
          <Link
            href="/book-demo"
            className="inline-flex items-center justify-center gap-3 rounded-full bg-white hover:bg-slate-100 text-primary font-bold text-sm px-7 py-3.5 transition-colors shadow-md h-12"
          >
            Book Your Personalised Demo
            <div className="flex h-7 w-7 items-center justify-center rounded-full bg-primary text-white">
              <ArrowUpRight className="h-4 w-4" />
            </div>
          </Link>
        </div>

      </div>
    </section>
  )
}

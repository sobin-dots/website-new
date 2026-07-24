'use client'

import * as React from "react"

export function AboutStory() {
  return (
    <section className="py-20 bg-[#FAF3EB] text-slate-900 overflow-hidden relative">
      {/* Decorative subtle path lines at the background edges (simulating the path graphic) */}
      <div className="absolute right-0 bottom-4 w-60 h-24 opacity-15 pointer-events-none hidden md:block">
        <svg viewBox="0 0 200 100" fill="none" className="w-full h-full stroke-secondary" strokeWidth="2" strokeDasharray="4 4">
          <path d="M 0,80 Q 50,20 100,50 T 200,30" />
          <circle cx="100" cy="50" r="4" fill="currentColor" />
          <circle cx="180" cy="35" r="4" fill="currentColor" />
        </svg>
      </div>

      <div className="mx-auto max-w-4xl px-6 md:px-8 space-y-12 text-center relative z-10 scroll-section">
        
        {/* Title */}
        <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-primary">
          Our Story
        </h2>

        {/* Narrative Copy */}
        <div className="space-y-6 text-sm md:text-base text-slate-600 leading-relaxed max-w-3xl mx-auto">
          <p>
            Cantra was born from a conversation with care providers who shared the daily challenges of managing compliance, staffing incidents, and documentation—often using disconnected tools and paper-based processes.
          </p>
          <p className="font-medium text-primary">
            We saw an opportunity to create a unified platform that brings everything together in one place—simple, secure, and designed for the realities of care.
          </p>
          <p>
            Today, Cantra is trusted by care providers across the UK and beyond, helping them deliver person-centred, risk-aware, and audit-ready care that meets and exceeds regulatory standards.
          </p>
          <p className="text-secondary font-serif italic text-base md:text-lg pt-4">
            Our Journey Continues, Together With The Care Community.
          </p>
        </div>

      </div>
    </section>
  )
}

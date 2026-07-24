'use client'

import * as React from "react"
import { Compass, Eye, Target } from "lucide-react"

export function AboutPhilosophy() {
  return (
    <section className="py-20 bg-white text-slate-900">
      <div className="mx-auto max-w-7xl px-6 md:px-8">
        
        {/* Header 2-Column Block */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start mb-16 pb-8 border-b border-slate-100 scroll-section">
          <div className="lg:col-span-7 space-y-4">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-primary">
              Our Philosophy, <br />Mission & Vision
            </h2>
            <p className="text-lg text-slate-500 font-medium font-serif italic">
              The Principles That Guide Everything We Build.
            </p>
          </div>
          <div className="lg:col-span-5 text-sm md:text-base text-slate-500 leading-relaxed lg:pt-2">
            Every feature we build and policy we create is designed to support the care community. We believe in transparency, continuous improvement, and putting people first. Here's what guides us day to day.
          </div>
        </div>

        {/* 3 Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 scroll-section">
          
          {/* Card 1: Philosophy */}
          <div className="p-8 rounded-2xl bg-[#F0F7FF] border border-blue-100/50 space-y-6">
            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-500 text-white shadow-sm">
              <Compass className="h-6 w-6" />
            </div>
            <div className="space-y-2">
              <h3 className="text-lg font-bold text-blue-900 font-sans">Our Philosophy</h3>
              <p className="text-sm text-blue-900/70 leading-relaxed">
                We believe technology should support, not distract. Every feature we build is designed to give you time back for what matters: care.
              </p>
            </div>
          </div>

          {/* Card 2: Vision */}
          <div className="p-8 rounded-2xl bg-[#FAF5FF] border border-purple-100/50 space-y-6">
            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-purple-500 text-white shadow-sm">
              <Eye className="h-6 w-6" />
            </div>
            <div className="space-y-2">
              <h3 className="text-lg font-bold text-purple-900 font-sans">Our Vision</h3>
              <p className="text-sm text-purple-900/70 leading-relaxed">
                To build the standard software platform for care providers, enabling safe, high-quality, and person-centred care globally.
              </p>
            </div>
          </div>

          {/* Card 3: Mission */}
          <div className="p-8 rounded-2xl bg-[#FFFBF5] border border-orange-100/50 space-y-6">
            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-orange-500 text-white shadow-sm">
              <Target className="h-6 w-6" />
            </div>
            <div className="space-y-2">
              <h3 className="text-lg font-bold text-orange-950 font-sans">Our Mission</h3>
              <p className="text-sm text-orange-950/70 leading-relaxed">
                To simplify the admin overhead for care providers and empower them with actionable insights for safer, compliant care.
              </p>
            </div>
          </div>

        </div>

      </div>
    </section>
  )
}

'use client'

import * as React from "react"

const steps = [
  {
    num: "01",
    color: "bg-primary", // Dark Green-Teal
    title: "Set Up Your Facility",
    description: "Import your resident roster, configure care levels, and invite your team members. Get running in under a day."
  },
  {
    num: "02",
    color: "bg-secondary", // Terracotta
    title: "Build Care Plans",
    description: "Use our guided templates or build from scratch. Assign tasks, set schedules, and document care goals for every resident."
  },
  {
    num: "03",
    color: "bg-primary", // Dark Green-Teal
    title: "Coordinate & Deliver Care",
    description: "Your team sees their tasks in real-time. Document care as it happens from any device — desktop, tablet, or phone."
  },
  {
    num: "04",
    color: "bg-secondary", // Terracotta
    title: "Monitor & Improve",
    description: "Review outcomes, spot trends, and continuously improve care quality with actionable insights from your data."
  }
]

export function Process() {
  return (
    <section className="py-24 bg-white text-slate-900 border-t border-slate-100">
      <div className="mx-auto max-w-7xl px-6 md:px-8">

        {/* Header Block */}
        <div className="text-center max-w-3xl mx-auto space-y-5 mb-20">
          <div className="inline-flex items-center rounded-full bg-[#C0714F]/10 px-4 py-1.5 text-xs font-bold text-[#C0714F] tracking-wide">
            Simple process
          </div>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-primary">
            Up and running in one day
          </h2>
          <p className="text-base md:text-lg text-slate-500 leading-relaxed max-w-2xl mx-auto">
            No lengthy onboarding. No IT projects. Cantra is designed to get your team delivering better care as fast as possible.
          </p>
        </div>

        {/* 4-Step Process Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, idx) => (
            <div key={idx} className="flex flex-col items-center text-center space-y-5">
              {/* Alternating Color Badge */}
              <div className={`flex h-12 w-16 items-center justify-center rounded-xl text-white font-bold text-lg ${step.color} shadow-sm`}>
                {step.num}
              </div>

              {/* Step Title */}
              <h3 className="text-lg font-bold text-primary">
                {step.title}
              </h3>

              {/* Step Description */}
              <p className="text-xs md:text-sm leading-relaxed text-slate-500 max-w-xs">
                {step.description}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}

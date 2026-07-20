'use client'

import * as React from "react"
import { Zap, ShieldCheck, FileText, CheckCircle2 } from "lucide-react"

const impacts = [
  {
    icon: Zap,
    title: "Respond Faster",
    description: "Notify The Right People Immediately With Automated Escalation Workflows."
  },
  {
    icon: ShieldCheck,
    title: "Improve Resident Safety",
    description: "Identify Recurring Risks Early Through Real-Time Analytics And Trend Reporting."
  },
  {
    icon: FileText,
    title: "Maintain Complete Audit Trails",
    description: "Keep Every Incident, Investigation, Action, And Outcome Securely Recorded."
  },
  {
    icon: CheckCircle2,
    title: "Support Regulatory Compliance",
    description: "Maintain Documentation That Demonstrates Safe, Responsive, And Well-Led Care During Inspections."
  }
]

export function IncidentImpact() {
  return (
    <section className="py-20 bg-white text-slate-900">
      <div className="mx-auto max-w-7xl px-6 md:px-8 space-y-16">
        
        {/* Centered Title */}
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-primary font-sans">
            The Impact Of Smarter Incident Management
          </h2>
        </div>

        {/* 4-Column Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 text-center">
          {impacts.map((item, idx) => {
            const IconComp = item.icon
            return (
              <div key={idx} className="flex flex-col items-center space-y-4">
                {/* Circular Dark Green Icon Badge */}
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary text-white shadow-sm">
                  <IconComp className="h-5 w-5" />
                </div>
                
                {/* Text Block */}
                <div className="space-y-2 max-w-[220px]">
                  <h3 className="text-base font-bold text-slate-800 font-sans">
                    {item.title}
                  </h3>
                  <p className="text-xs text-slate-500 leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            )
          })}
        </div>

      </div>
    </section>
  )
}

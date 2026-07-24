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
    <section className="py-16 md:py-24 bg-white text-[#293836]">
      <div className="w-full max-w-[1240px] mx-auto px-6 sm:px-10 lg:px-12 space-y-12 sm:space-y-16">
        
        {/* Centered Title */}
        <div className="text-center max-w-[893px] mx-auto scroll-section">
          <h2 className="text-2xl sm:text-3xl md:text-[40px] font-bold leading-tight md:leading-[66px] capitalize text-[#293836] font-['Lato',sans-serif]">
            The Impact Of Smarter Incident Management
          </h2>
        </div>

        {/* 4-Column Left-Aligned Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-10 scroll-section">
          {impacts.map((item, idx) => {
            const IconComp = item.icon
            return (
              <div key={idx} className="flex flex-col items-start text-left space-y-4">
                {/* Circular Icon Badge */}
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#3D5D58] text-white shadow-sm shrink-0">
                  <IconComp className="h-5 w-5" />
                </div>
                
                {/* Text Block */}
                <div className="space-y-2.5">
                  <h3 className="text-base sm:text-lg md:text-[18px] font-bold text-[#293836] font-['Lato',sans-serif] capitalize leading-snug">
                    {item.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-[#4A5D5A] leading-[24px] font-['Inter',sans-serif] capitalize">
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

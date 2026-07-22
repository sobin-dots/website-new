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
    <section className="py-4 sm:py-8 bg-white text-[#293836]">
      <div className="w-full space-y-12 sm:space-y-16">
        
        {/* Centered Title */}
        <div className="text-center max-w-[893px] mx-auto">
          <h2 className="text-2xl sm:text-3xl md:text-[40px] font-bold leading-tight md:leading-[66px] capitalize text-[#293836] font-['Lato',sans-serif]">
            The Impact Of Smarter Incident Management
          </h2>
        </div>

        {/* 4-Column Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 text-center max-w-[1240px] mx-auto">
          {impacts.map((item, idx) => {
            const IconComp = item.icon
            return (
              <div key={idx} className="flex flex-col items-center space-y-4">
                {/* Circular Icon Badge */}
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#DEE9E6] border border-[#3D5D58]/20 text-[#3D5D58] shadow-sm">
                  <IconComp className="h-5 w-5" />
                </div>
                
                {/* Text Block */}
                <div className="space-y-2 max-w-[240px]">
                  <h3 className="text-base sm:text-lg md:text-[20px] font-bold text-[#293836] font-['Lato',sans-serif]">
                    {item.title}
                  </h3>
                  <p className="text-xs sm:text-sm md:text-base font-normal leading-relaxed md:leading-[27px] text-[#293836] font-['Inter',sans-serif] pt-1">
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

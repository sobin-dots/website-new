'use client'

import * as React from "react"
import { ListTodo, ShieldCheck, CheckCircle2, Handshake } from "lucide-react"

const outcomes = [
  {
    icon: ListTodo,
    title: "Reduce Inspection Preparation Time",
    description: "Automatically Collect And Organise Compliance Evidence Throughout Daily Operations."
  },
  {
    icon: ShieldCheck,
    title: "Strengthen Governance",
    description: "Monitor Quality, Identify Risks Early, And Make Informed Decisions With Real-Time Dashboards And Reports."
  },
  {
    icon: CheckCircle2,
    title: "Demonstrate Quality With Confidence",
    description: "Access Inspection-Ready Evidence, Audit Trails, And Performance Reports Whenever They're Needed."
  },
  {
    icon: Handshake,
    title: "Improve Team Accountability",
    description: "Track Policy Acknowledgements, Training Compliance, Overdue Tasks, And Operational Performance From One Platform."
  }
]

export function CqcOutcomes() {
  return (
    <section className="py-4 sm:py-8 bg-white text-[#293836]">
      <div className="w-full">

        {/* Header Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 items-start mb-12 pb-6 border-b border-slate-100 scroll-section">
          <div className="lg:col-span-6 space-y-2">
            <h2 className="text-2xl sm:text-3xl md:text-[40px] font-bold leading-tight md:leading-[50px] capitalize text-[#293836] font-['Lato',sans-serif]">
              Key Outcomes
            </h2>
            <p className="text-lg sm:text-xl md:text-[24px] font-medium leading-snug md:leading-[32px] capitalize text-[#3D5D58] font-['Lato',sans-serif]">
              Turn Operational Data Into Actionable Insights.
            </p>
          </div>
          <div className="lg:col-span-6 text-xs sm:text-sm md:text-base font-normal leading-relaxed md:leading-[27px] text-[#293836] capitalize font-['Inter',sans-serif] lg:pt-2">
            Cantra Provides Powerful Reporting Tools That Transform Day-To-Day Operational Data Into Meaningful Insights For Managers, Providers, Regional Teams, And Regulatory Bodies. Generate Reports Instantly Or Schedule Them Automatically To Support Governance Meetings, Compliance Reviews, Financial Monitoring, And Operational Decision-Making.
          </div>
        </div>

        {/* 2x2 Outcomes Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 scroll-section">
          {outcomes.map((item, idx) => {
            const IconComp = item.icon
            return (
              <div key={idx} className="space-y-4">
                {/* Icon Badge */}
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#DEE9E6] border border-[#3D5D58]/20 text-[#3D5D58] shadow-sm shrink-0">
                  <IconComp className="h-5 w-5" />
                </div>

                {/* Text Block */}
                <div className="space-y-2">
                  <h3 className="text-base sm:text-lg md:text-[20px] font-bold text-[#293836] font-['Lato',sans-serif]">
                    {item.title}
                  </h3>
                  <p className="text-xs sm:text-sm md:text-base font-normal leading-relaxed md:leading-[27px] text-[#293836] font-['Inter',sans-serif] pt-1 max-w-md">
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

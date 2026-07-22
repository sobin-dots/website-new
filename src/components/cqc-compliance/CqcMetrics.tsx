'use client'

import * as React from "react"
import { FileText, Monitor, FileCheck, Lightbulb } from "lucide-react"

const steps = [
  {
    icon: FileText,
    title: "Record",
    description: "Every Care Activity, Assessment, Medication Round, Incident, Audit, And Staff Action Is Automatically Recorded."
  },
  {
    icon: Monitor,
    title: "Monitor",
    description: "Cantra Continuously Checks Compliance, Highlights Missing Evidence, Overdue Reviews, And Emerging Regulatory Risks."
  },
  {
    icon: FileCheck,
    title: "Report",
    description: "Generate Operational, Financial, Clinical, And Compliance Reports With Real-Time Insights For Managers And Stakeholders."
  },
  {
    icon: Lightbulb,
    title: "Demonstrate",
    description: "Present Organised Evidence And Performance Data Confidentially During Inspections, Audits, And Governance Reviews."
  }
]

export function CqcMetrics() {
  return (
    <section className="py-16 md:py-24 bg-[#3D5D58] text-white">
      <div className="mx-auto max-w-[1240px] px-4 sm:px-6 lg:px-8 space-y-12 sm:space-y-16">

        {/* Header Block */}
        <div className="text-center max-w-[893px] mx-auto space-y-3">
          <h2 className="text-2xl sm:text-3xl md:text-[40px] font-bold leading-tight md:leading-[66px] capitalize text-white font-['Lato',sans-serif]">
            How Cantra Keeps You Inspection Ready
          </h2>
          <p className="text-xs sm:text-sm md:text-base font-normal leading-relaxed md:leading-[28px] text-white/90 capitalize font-['Lato',sans-serif] max-w-[763px] mx-auto">
            Continuous Compliance Isn't An Event—It's A Daily Process. Cantra Transforms Routine Care Activities Into Measurable Quality Improvements.
          </p>
        </div>

        {/* 4 Column Workflow Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 text-center">
          {steps.map((item, idx) => {
            const IconComp = item.icon
            return (
              <div key={idx} className="space-y-4 flex flex-col items-center">
                {/* Icon Wrapper */}
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#FAF5F2] text-[#3D5D58] shadow-sm shrink-0">
                  <IconComp className="h-5 w-5" />
                </div>

                {/* Text Block */}
                <div className="space-y-2 max-w-[240px]">
                  <h3 className="text-base sm:text-lg md:text-[20px] font-bold text-white font-['Lato',sans-serif]">{item.title}</h3>
                  <p className="text-xs sm:text-sm md:text-base font-normal leading-relaxed md:leading-[27px] text-white/80 font-['Inter',sans-serif] pt-1">
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

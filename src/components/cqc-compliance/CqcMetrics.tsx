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
    <section className="py-20 bg-primary text-white">
      <div className="mx-auto max-w-7xl px-6 md:px-8 space-y-16">
        
        {/* Header Block */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight">
            How Cantra Keeps You Inspection Ready
          </h2>
          <p className="text-sm md:text-base text-white/80 leading-relaxed max-w-2xl mx-auto">
            Continuous Compliance Isn't An Event—It's A Daily Process. Cantra Transforms Routine Care Activities Into Measurable Quality Improvements.
          </p>
        </div>

        {/* 4 Column Workflow Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 text-center">
          {steps.map((item, idx) => {
            const IconComp = item.icon
            return (
              <div key={idx} className="space-y-4 flex flex-col items-center">
                {/* Circular Icon Wrapper */}
                <div className="flex h-14 w-14 items-center justify-center rounded-full bg-white text-primary shadow-md">
                  <IconComp className="h-6 w-6" />
                </div>
                
                {/* Text Block */}
                <div className="space-y-2 max-w-[260px]">
                  <h3 className="text-lg font-bold font-sans text-white">{item.title}</h3>
                  <p className="text-xs text-white/80 leading-relaxed">
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

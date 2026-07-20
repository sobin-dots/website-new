'use client'

import * as React from "react"
import { AlertCircle, ShieldAlert, RefreshCw } from "lucide-react"

const stages = [
  {
    icon: AlertCircle,
    title: "A Resident Experiences A Fall",
    description: "A Carer Records The Incident Immediately From Their Mobile Device. The System Assigns A Severity Level, Notifies The Nurse In Charge, Updates The Resident's Record, And Schedules A Post-Incident Review."
  },
  {
    icon: ShieldAlert,
    title: "A Safeguarding Concern Is Raised",
    description: "Staff Log The Concern, Attach Supporting Evidence, Record Witness Statements, Initiate The Local Authority Referral Workflow, And Track Every Action Until The Case Is Closed."
  },
  {
    icon: RefreshCw,
    title: "Identifying Recurring Risks",
    description: "Managers Notice An Increase In Falls During Evening Shifts Through The Analytics Dashboard, Investigate Contributing Factors, And Introduce Preventative Actions To Improve Resident Safety."
  }
]

export function IncidentStages() {
  return (
    <section className="py-20 md:py-28 bg-[#FAF6F0] text-slate-900">
      <div className="mx-auto max-w-4xl px-6 md:px-8 space-y-20">
        
        {/* Centered Header */}
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-primary font-sans leading-tight">
            Supporting Every Stage Of Incident Management
          </h2>
        </div>

        {/* 3 Vertical Stacked Cards */}
        <div className="space-y-16">
          {stages.map((item, idx) => {
            const IconComp = item.icon
            return (
              <div key={idx} className="flex flex-col items-center text-center space-y-4 max-w-xl mx-auto">
                {/* Terracotta Circular Icon Badge */}
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-secondary text-white shadow-sm">
                  <IconComp className="h-5 w-5" />
                </div>

                {/* Text Block */}
                <div className="space-y-2">
                  <h3 className="text-lg font-bold text-slate-800 font-sans">
                    {item.title}
                  </h3>
                  <p className="text-xs md:text-sm text-slate-500 leading-relaxed max-w-lg mx-auto">
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

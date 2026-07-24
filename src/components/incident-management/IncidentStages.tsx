'use client'

import * as React from "react"
import { AlertCircle, AlertTriangle, RefreshCw } from "lucide-react"

const stages = [
  {
    icon: AlertCircle,
    title: "A Resident Experiences A Fall",
    description: "A Carer Records The Incident Immediately From Their Mobile Device. The System Assigns A Severity Level, Notifies The Nurse In Charge, Updates The Resident's Record, And Schedules A Post-Incident Review."
  },
  {
    icon: AlertTriangle,
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
    <section className="py-20 md:py-32 bg-[#FAF5F2] text-[#293836]">
      <div className="w-full max-w-[1240px] mx-auto px-6 sm:px-10 lg:px-12 space-y-16 sm:space-y-24">

        {/* Centered Header */}
        <div className="text-center max-w-[893px] mx-auto scroll-section">
          <h2 className="text-2xl sm:text-3xl md:text-[40px] font-bold leading-tight md:leading-[66px] capitalize text-[#293836] font-['Lato',sans-serif]">
            Supporting Every Stage Of Incident Management
          </h2>
        </div>

        {/* 3 Vertical Stacked Cards */}
        <div className="space-y-16 sm:space-y-24 scroll-section">
          {stages.map((item, idx) => {
            const IconComp = item.icon
            return (
              <div key={idx} className="flex flex-col items-center text-center space-y-4 max-w-2xl mx-auto">
                {/* Icon Badge */}
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#A06256] text-white shadow-sm shrink-0">
                  <IconComp className="h-5 w-5 stroke-[2]" />
                </div>

                {/* Text Block */}
                <div className="space-y-3">
                  <h3 className="text-lg sm:text-xl md:text-[22px] font-bold text-[#293836] font-['Lato',sans-serif]">
                    {item.title}
                  </h3>
                  <p className="text-xs sm:text-sm md:text-[15px] font-normal leading-relaxed md:leading-[30px] text-[#4A5D5A] capitalize font-['Lato',sans-serif] max-w-xl mx-auto">
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

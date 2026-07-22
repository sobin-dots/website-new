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
    <section className="py-4 sm:py-8 bg-white text-[#293836]">
      <div className="w-full">
        
        {/* Rounded Inner Sand Background Card Container */}
        <div className="bg-[#FAF5F2] rounded-[20px] p-6 sm:p-10 lg:p-12 space-y-12 sm:space-y-16">
          
          {/* Centered Header */}
          <div className="text-center max-w-[893px] mx-auto">
            <h2 className="text-2xl sm:text-3xl md:text-[40px] font-bold leading-tight md:leading-[66px] capitalize text-[#293836] font-['Lato',sans-serif]">
              Supporting Every Stage Of Incident Management
            </h2>
          </div>

          {/* 3 Vertical Stacked Cards */}
          <div className="space-y-12 sm:space-y-16">
            {stages.map((item, idx) => {
              const IconComp = item.icon
              return (
                <div key={idx} className="flex flex-col items-center text-center space-y-4 max-w-xl mx-auto">
                  {/* Icon Badge */}
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#3D5D58] text-white shadow-sm shrink-0">
                    <IconComp className="h-5 w-5" />
                  </div>

                  {/* Text Block */}
                  <div className="space-y-2">
                    <h3 className="text-lg sm:text-xl md:text-[24px] font-bold text-[#293836] font-['Lato',sans-serif]">
                      {item.title}
                    </h3>
                    <p className="text-xs sm:text-sm md:text-base font-normal leading-relaxed md:leading-[27px] text-[#293836] capitalize font-['Inter',sans-serif] max-w-lg mx-auto">
                      {item.description}
                    </p>
                  </div>
                </div>
              )
            })}
          </div>

        </div>

      </div>
    </section>
  )
}

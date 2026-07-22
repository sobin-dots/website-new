'use client'

import * as React from "react"
import Image from "next/image"
import { AlertTriangle, FileCheck, ShieldCheck, CalendarCheck, FileSpreadsheet } from "lucide-react"

const safetyBadges = [
  {
    icon: AlertTriangle,
    title: "Allergy Alerts",
    subtitle: "Instant warnings before administration."
  },
  {
    icon: FileCheck,
    title: "Clinical Audit Trail",
    subtitle: "Every action securely logged."
  },
  {
    icon: ShieldCheck,
    title: "Role-Based Permissions",
    subtitle: "Control medication access by role."
  },
  {
    icon: CalendarCheck,
    title: "Medication Reviews",
    subtitle: "Automated review reminders."
  },
  {
    icon: FileSpreadsheet,
    title: "Inspection Ready Reports",
    subtitle: "Generate reports instantly."
  }
]

export function EmarClinicalSafety() {
  return (
    <section className="py-4 sm:py-8 bg-white text-[#293836] overflow-hidden">
      <div className="w-full">
        
        {/* Inner Card Container (Frame 2238 style) */}
        <div className="relative bg-[#FAF5F2] rounded-[20px] p-6 sm:p-10 lg:p-12 space-y-8 sm:space-y-12">
          
          {/* Top 2-Column Row */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            
            {/* Left Column Text (6 cols) */}
            <div className="lg:col-span-6 space-y-3">
              <h2 className="text-2xl sm:text-3xl md:text-[40px] font-bold leading-tight md:leading-[50px] capitalize text-[#293836] font-['Lato',sans-serif]">
                Built For Clinical Safety And Regulatory Compliance
              </h2>
              <p className="text-xs sm:text-sm md:text-base font-normal leading-relaxed md:leading-[27px] text-[#293836] capitalize font-['Inter',sans-serif] max-w-xl">
                Every Medication Event Is Automatically Recorded With Timestamps, Staff Identity, And Patient Information To Support Safe Care And Simplify Inspections.
              </p>
            </div>

            {/* Right Column Banner Graphic (6 cols) */}
            <div className="lg:col-span-6 relative w-full h-[200px] sm:h-[300px] rounded-[20px] overflow-hidden">
              <Image 
                src="/images/e-mar/built-for-clinical-safety.png"
                alt="Clinical safety shield and compliance badges"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover object-center"
              />
            </div>

          </div>

          {/* Bottom 5 Brand Feature Badges Row */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
            {safetyBadges.map((badge, idx) => {
              const IconComp = badge.icon
              return (
                <div 
                  key={idx}
                  className="p-5 rounded-[16px] bg-[#3D5D58] text-white space-y-2.5 shadow-sm transition-all duration-300 hover:-translate-y-0.5"
                >
                  <div className="flex h-8 w-8 items-center justify-center rounded-full bg-[#DEE9E6] text-[#3D5D58]">
                    <IconComp className="h-4 w-4" />
                  </div>
                  <div className="space-y-1">
                    <h3 className="text-xs sm:text-sm font-bold font-['Lato',sans-serif]">{badge.title}</h3>
                    <p className="text-[11px] text-white/80 leading-snug font-['Inter',sans-serif]">{badge.subtitle}</p>
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

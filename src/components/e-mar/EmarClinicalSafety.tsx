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
    <section className="py-24 md:py-48 bg-[#FAF5F2] text-[#3D5D58] text-center">
      <div className="w-full mx-auto max-w-[1440px] px-6 md:px-8 space-y-[20px] flex flex-col items-center justify-center">

        {/* Top 2-Column Row */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-center scroll-section">

          {/* Left Column Text (6 cols) */}
          <div className="lg:col-span-6 space-y-4 lg:pr-4 text-left">
            <h2 className="text-2xl sm:text-3xl md:text-[40px] font-bold leading-tight md:leading-[52px] text-[#293836] font-['Lato',sans-serif]">
              Built For Clinical Safety And Regulatory Compliance
            </h2>
            <p className="text-xs sm:text-sm md:text-base font-normal leading-relaxed md:leading-[27px] text-[#4A5D5A] font-['Inter',sans-serif] pt-1">
              Every Medication Event Is Automatically Recorded With Timestamps, Staff Identity, And Patient Information To Support Safe Care And Simplify Inspections.
            </p>
          </div>

          {/* Right Column Banner Graphic (6 cols) */}
          <div className="lg:col-span-6 relative w-full h-[220px] sm:h-[200px] md:h-[230px] rounded-[20px] overflow-hidden shadow-sm">
            <Image
              src="/images/e-mar/built-for-clinical-safety.png"
              alt="Clinical safety shield and compliance badges"
              fill
              priority
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover object-center"
            />
          </div>

        </div>

        {/* Bottom 5 Brand Feature Badges Row */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 mt-10 scroll-section">
          {safetyBadges.map((badge, idx) => {
            const IconComp = badge.icon
            return (
              <div
                key={idx}
                className="p-4 sm:p-5 rounded-[16px] bg-[#A06256] text-white flex flex-row items-center gap-4 shadow-sm transition-all duration-300 hover:-translate-y-1"
              >
                {/* Left circular white icon badge */}
                <div className="flex h-8 w-8 items-center justify-center rounded-full bg-white text-[#A06256] shrink-0 shadow-sm">
                  <IconComp className="h-[18px] w-[18px]" />
                </div>
                {/* Right text stack */}
                <div className="space-y-0.5">
                  <h3 className="text-xs sm:text-sm font-bold font-['Lato',sans-serif] leading-tight text-white">{badge.title}</h3>
                  <p className="text-[10px] sm:text-[11px] text-white/80 leading-snug font-['Inter',sans-serif]">{badge.subtitle}</p>
                </div>
              </div>
            )
          })}
        </div>

      </div>
    </section>
  )
}

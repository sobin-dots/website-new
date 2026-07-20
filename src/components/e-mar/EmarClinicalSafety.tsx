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
    <section className="py-20 md:py-24 bg-[#FAF6F0] text-slate-900 overflow-hidden">
      <div className="mx-auto max-w-7xl px-6 md:px-8 space-y-12">
        
        {/* Top 2-Column Row */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column Text (6 cols) */}
          <div className="lg:col-span-6 space-y-4">
            <h2 className="text-3xl md:text-4xl lg:text-[42px] font-bold text-primary font-sans leading-tight">
              Built For Clinical Safety And Regulatory Compliance
            </h2>
            <p className="text-xs md:text-sm text-slate-600 leading-relaxed max-w-xl">
              Every Medication Event Is Automatically Recorded With Timestamps, Staff Identity, And Patient Information To Support Safe Care And Simplify Inspections.
            </p>
          </div>

          {/* Right Column Banner Graphic (6 cols) */}
          <div className="lg:col-span-6 relative w-full aspect-[2.6] rounded-2xl overflow-hidden shadow-sm">
            <Image 
              src="/images/e-mar/built-for-clinical-safety.png"
              alt="Clinical safety shield and compliance badges"
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover object-center"
            />
          </div>

        </div>

        {/* Bottom 5 Terracotta Feature Badges Row */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
          {safetyBadges.map((badge, idx) => {
            const IconComp = badge.icon
            return (
              <div 
                key={idx}
                className="p-5 rounded-2xl bg-secondary text-white space-y-2.5 shadow-sm hover:shadow-md transition-all duration-300"
              >
                <div className="flex h-8 w-8 items-center justify-center rounded-full bg-white text-secondary">
                  <IconComp className="h-4 w-4" />
                </div>
                <div className="space-y-1">
                  <h3 className="text-xs font-bold font-sans">{badge.title}</h3>
                  <p className="text-[11px] text-white/80 leading-snug">{badge.subtitle}</p>
                </div>
              </div>
            )
          })}
        </div>

      </div>
    </section>
  )
}

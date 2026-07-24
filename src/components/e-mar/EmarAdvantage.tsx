'use client'

import * as React from "react"
import { 
  ShieldCheck, 
  FileCheck, 
  Clock, 
  BarChart3, 
  Heart, 
  ClipboardCheck 
} from "lucide-react"

const advantages = [
  {
    icon: ShieldCheck,
    title: "Improve Medication Safety",
    description: "Reduce The Risk Of Missed Doses, Incorrect Administrations, And Medication-Related Incidents With Structured Digital Workflows."
  },
  {
    icon: FileCheck,
    title: "Maintain Compliance",
    description: "Keep Complete Medication Records, Audit Trails, And Administration History Ready For Inspections And Internal Reviews."
  },
  {
    icon: Clock,
    title: "Save Valuable Time",
    description: "Replace Manual Paperwork With Streamlined Digital Medication Recording, Allowing Staff To Spend More Time Supporting Residents."
  },
  {
    icon: BarChart3,
    title: "Increase Team Confidence",
    description: "Provide Carers With Clear Medication Guidance, Real-Time Alerts, And Accurate Resident Information Throughout Every Medication Round."
  },
  {
    icon: Heart,
    title: "Strengthen Accountability",
    description: "Know Exactly Who Administered Each Medication, When It Was Given, And Any Exceptions Recorded, Ensuring Complete Transparency."
  },
  {
    icon: ClipboardCheck,
    title: "Simplify Stock Management",
    description: "Prevent Unexpected Shortages With Automated Stock Tracking, Expiry Monitoring, And Timely Replenishment Alerts."
  }
]

export function EmarAdvantage() {
  return (
    <section className="py-4 sm:py-8 bg-white text-[#293836]">
      <div className="w-full">
        
        {/* Header Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 items-start mb-12 pb-6 border-b border-slate-100 scroll-section">
          <div className="lg:col-span-6 space-y-2">
            <h2 className="text-2xl sm:text-3xl md:text-[40px] font-bold leading-tight md:leading-[50px] capitalize text-[#293836] font-['Lato',sans-serif]">
              The Cantra Advantage
            </h2>
            <p className="text-lg sm:text-xl md:text-[24px] font-medium leading-snug md:leading-[32px] capitalize text-[#3D5D58] font-['Lato',sans-serif]">
              Medication Management Built For Confidence.
            </p>
          </div>
          <div className="lg:col-span-6 text-xs sm:text-sm md:text-base font-normal leading-relaxed md:leading-[27px] text-[#293836] capitalize font-['Inter',sans-serif] lg:pt-2">
            Empower Your Team With Intelligent Medication Workflows That Improve Safety, Strengthen Compliance, Reduce Errors, And Simplify Every Medication Round.
          </div>
        </div>

        {/* 3x2 Advantage Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 scroll-section">
          {advantages.map((item, idx) => {
            const IconComp = item.icon
            return (
              <div 
                key={idx}
                className="p-6 sm:p-8 rounded-[20px] bg-slate-50/40 border border-slate-100 space-y-4 hover:shadow-sm transition-all duration-300"
              >
                {/* Circular Icon Badge */}
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#DEE9E6] border border-[#3D5D58]/20 text-[#3D5D58]">
                  <IconComp className="h-5 w-5" />
                </div>
                
                {/* Text Content */}
                <div className="space-y-2">
                  <h3 className="text-base font-bold text-[#293836] font-['Lato',sans-serif]">
                    {item.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-[#293836] leading-relaxed font-['Inter',sans-serif]">
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

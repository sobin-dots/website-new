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
    iconColor: "bg-[#D9EEFF] text-[#3294FF]",
    title: "Improve Medication Safety",
    description: "Reduce The Risk Of Missed Doses, Incorrect Administrations, And Medication-Related Incidents With Structured Digital Workflows."
  },
  {
    icon: FileCheck,
    iconColor: "bg-[#F3E8FF] text-[#7C3AED]",
    title: "Maintain Compliance",
    description: "Keep Complete Medication Records, Audit Trails, And Administration History Ready For Inspections And Internal Reviews."
  },
  {
    icon: Clock,
    iconColor: "bg-[#FEF7E0] text-[#B06000]",
    title: "Save Valuable Time",
    description: "Replace Manual Paperwork With Streamlined Digital Medication Recording, Allowing Staff To Spend More Time Supporting Residents."
  },
  {
    icon: BarChart3,
    iconColor: "bg-[#E6F4EA] text-[#137333]",
    title: "Increase Team Confidence",
    description: "Provide Carers With Clear Medication Guidance, Real-Time Alerts, And Accurate Resident Information Throughout Every Medication Round."
  },
  {
    icon: Heart,
    iconColor: "bg-[#FFF9DB] text-[#F59F00]",
    title: "Strengthen Accountability",
    description: "Know Exactly Who Administered Each Medication, When It Was Given, And Any Exceptions Recorded, Ensuring Complete Transparency."
  },
  {
    icon: ClipboardCheck,
    iconColor: "bg-[#EDEBFF] text-[#5C50F2]",
    title: "Simplify Medication Stock Management",
    description: "Prevent Unexpected Shortages With Automated Stock Tracking, Expiry Monitoring, And Timely Replenishment Alerts."
  }
]

export function EmarAdvantage() {
  return (
    <section className="py-12 sm:py-16 bg-white text-[#293836]">
      <div className="w-full max-w-[1240px] mx-auto">
        
        {/* Header Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 items-start mb-12 scroll-section">
          <div className="lg:col-span-6 space-y-2">
            <h2 className="text-2xl sm:text-3xl md:text-[36px] font-bold leading-tight text-[#293836] font-['Lato',sans-serif]">
              The Cantra Advantage
            </h2>
            <p className="text-base sm:text-lg md:text-[20px] font-medium leading-snug text-[#3D5D58] font-['Lato',sans-serif]">
              Medication Management Built For Confidence.
            </p>
          </div>
          <div className="lg:col-span-6 text-xs sm:text-sm md:text-base font-normal leading-relaxed md:leading-[27px] text-[#4A5D5A] font-['Inter',sans-serif] lg:pt-2">
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
                className="w-full min-h-[231px] p-6 sm:p-8 rounded-[20px] bg-white border border-slate-100 flex flex-col items-start gap-4 hover:shadow-md transition-all duration-300"
              >
                {/* Circular Icon Badge */}
                <div className={`flex h-8 w-8 items-center justify-center rounded-full shrink-0 ${item.iconColor}`}>
                  <IconComp className="h-4.5 w-4.5" />
                </div>
                
                {/* Text Content */}
                <div className="space-y-2">
                  <h3 className="text-base font-bold text-[#293836] font-['Lato',sans-serif]">
                    {item.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-[#4A5D5A] leading-relaxed font-['Inter',sans-serif]">
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

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
    iconColor: "text-blue-600 bg-blue-50",
    title: "Improve Medication Safety",
    description: "Reduce The Risk Of Missed Doses, Incorrect Administrations, And Medication-Related Incidents With Structured Digital Workflows."
  },
  {
    icon: FileCheck,
    iconColor: "text-purple-600 bg-purple-50",
    title: "Maintain Compliance",
    description: "Keep Complete Medication Records, Audit Trails, And Administration History Ready For Inspections And Internal Reviews."
  },
  {
    icon: Clock,
    iconColor: "text-orange-600 bg-orange-50",
    title: "Save Valuable Time",
    description: "Replace Manual Paperwork With Streamlined Digital Medication Recording, Allowing Staff To Spend More Time Supporting Residents."
  },
  {
    icon: BarChart3,
    iconColor: "text-emerald-600 bg-emerald-50",
    title: "Increase Team Confidence",
    description: "Provide Carers With Clear Medication Guidance, Real-Time Alerts, And Accurate Resident Information Throughout Every Medication Round."
  },
  {
    icon: Heart,
    iconColor: "text-amber-600 bg-amber-50",
    title: "Strengthen Accountability",
    description: "Know Exactly Who Administered Each Medication, When It Was Given, And Any Exceptions Recorded, Ensuring Complete Transparency."
  },
  {
    icon: ClipboardCheck,
    iconColor: "text-indigo-600 bg-indigo-50",
    title: "Simplify Medication Stock Management",
    description: "Prevent Unexpected Shortages With Automated Stock Tracking, Expiry Monitoring, And Timely Replenishment Alerts."
  }
]

export function EmarAdvantage() {
  return (
    <section className="py-20 bg-white text-slate-900">
      <div className="mx-auto max-w-7xl px-6 md:px-8">
        
        {/* Header Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start mb-16 pb-8 border-b border-slate-100">
          <div className="lg:col-span-6 space-y-3">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-primary font-sans leading-tight">
              The Cantra Advantage
            </h2>
            <p className="text-lg text-slate-600 font-medium font-serif italic">
              Medication Management Built For Confidence.
            </p>
          </div>
          <div className="lg:col-span-6 text-xs md:text-sm text-slate-500 leading-relaxed lg:pt-2">
            Empower Your Team With Intelligent Medication Workflows That Improve Safety, Strengthen Compliance, Reduce Errors, And Simplify Every Medication Round.
          </div>
        </div>

        {/* 3x2 Advantage Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {advantages.map((item, idx) => {
            const IconComp = item.icon
            return (
              <div 
                key={idx}
                className="p-8 rounded-3xl bg-slate-50/40 border border-slate-100 space-y-4 shadow-xs hover:shadow-sm transition-all duration-300"
              >
                {/* Circular Icon Badge */}
                <div className={`flex h-10 w-10 items-center justify-center rounded-xl ${item.iconColor}`}>
                  <IconComp className="h-5 w-5" />
                </div>
                
                {/* Text Content */}
                <div className="space-y-2">
                  <h3 className="text-base font-bold text-slate-800 font-sans">
                    {item.title}
                  </h3>
                  <p className="text-xs text-slate-500 leading-relaxed">
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

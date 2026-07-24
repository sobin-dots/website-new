'use client'

import * as React from "react"
import { 
  FileText, 
  MessageSquare, 
  Clock, 
  Users, 
  BarChart3, 
  ShieldCheck 
} from "lucide-react"

const benefits = [
  {
    icon: FileText,
    iconColor: "text-blue-600 bg-blue-50 border-blue-100",
    title: "Zero Paperwork",
    description: "Replace physical files with automated daily logs, care plan revisions, and medication administration charts."
  },
  {
    icon: MessageSquare,
    iconColor: "text-emerald-600 bg-emerald-50 border-emerald-100",
    title: "Open Communication",
    description: "Instantly broadcast shift handovers, risk escalations, and CQC-related notices to your entire team."
  },
  {
    icon: Clock,
    iconColor: "text-amber-600 bg-amber-50 border-amber-100",
    title: "Faster Onboarding",
    description: "Train caretakers and agency workers in minutes with Cantra's intuitive, simple interface layouts."
  },
  {
    icon: Users,
    iconColor: "text-purple-600 bg-purple-50 border-purple-100",
    title: "Family Engagement",
    description: "Provide peace of mind by letting authorized family members view care plans, assessments, and status logs."
  },
  {
    icon: BarChart3,
    iconColor: "text-rose-600 bg-rose-50 border-rose-100",
    title: "Actionable Analytics",
    description: "Track outcomes, fall frequencies, fluid charts, and admin workload times to continuously optimize resources."
  },
  {
    icon: ShieldCheck,
    iconColor: "text-teal-600 bg-teal-50 border-teal-100",
    title: "Regulatory compliance",
    description: "Automatically log all changes with electronic signatures, timestamp tracking, and pre-built CQC review templates."
  }
]

export function CareDifference() {
  return (
    <section className="py-4 sm:py-8 bg-white text-slate-900">
      <div className="w-full">
        
        {/* Heading Grid Block */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start mb-16 pb-8 border-b border-slate-100 scroll-section">
          {/* Left Heading */}
          <div className="lg:col-span-7 space-y-4">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-primary">
              The Difference Cantra Makes
            </h2>
            <p className="text-lg text-slate-500 font-medium font-serif italic">
              How Care Teams deliver better care with digital workflows.
            </p>
          </div>
          {/* Right Paragraph Description */}
          <div className="lg:col-span-5 text-sm md:text-base text-slate-500 leading-relaxed lg:pt-2">
            At Cantra, we believe technology should be an asset, not a burden. Our platform is built by care professionals for care professionals, designed to be intuitive and easy to use.
          </div>
        </div>

        {/* 3-Column Benefits Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 scroll-section">
          {benefits.map((benefit, idx) => {
            const IconComp = benefit.icon
            return (
              <div 
                key={idx}
                className="p-8 rounded-2xl bg-[#F4F6F6] border border-slate-100 hover:border-primary/20 transition-all duration-300 shadow-sm"
              >
                {/* Icon Wrapper */}
                <div className={`flex h-12 w-12 items-center justify-center rounded-xl border mb-6 ${benefit.iconColor}`}>
                  <IconComp className="h-6 w-6" />
                </div>
                
                {/* Text Content */}
                <div className="space-y-2">
                  <h3 className="text-lg font-bold text-primary font-sans">
                    {benefit.title}
                  </h3>
                  <p className="text-sm text-slate-500 leading-relaxed">
                    {benefit.description}
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

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
    iconColor: "bg-[#D9EEFF] text-[#3294FF] border border-[#3294FF]/20",
    title: "Zero Paperwork",
    description: "Replace physical files with automated daily logs, care plan revisions, and medication administration charts."
  },
  {
    icon: MessageSquare,
    iconColor: "bg-[#E6F4EA] text-[#137333] border border-[#137333]/20",
    title: "Open Communication",
    description: "Instantly broadcast shift handovers, risk escalations, and CQC-related notices to your entire team."
  },
  {
    icon: Clock,
    iconColor: "bg-[#FEF7E0] text-[#B06000] border border-[#B06000]/20",
    title: "Faster Onboarding",
    description: "Train caretakers and agency workers in minutes with Cantra's intuitive, simple interface layouts."
  },
  {
    icon: Users,
    iconColor: "bg-[#F3E8FF] text-[#7C3AED] border border-[#7C3AED]/20",
    title: "Family Engagement",
    description: "Provide peace of mind by letting authorized family members view care plans, assessments, and status logs."
  },
  {
    icon: BarChart3,
    iconColor: "bg-[#FCE8E6] text-[#C5221F] border border-[#C5221F]/20",
    title: "Actionable Analytics",
    description: "Track outcomes, fall frequencies, fluid charts, and admin workload times to continuously optimize resources."
  },
  {
    icon: ShieldCheck,
    iconColor: "bg-[#DEE9E6] text-[#3D5D58] border border-[#3D5D58]/20",
    title: "Regulatory compliance",
    description: "Automatically log all changes with electronic signatures, timestamp tracking, and pre-built CQC review templates."
  }
]

export function CareDifference() {
  return (
    <section className="py-4 sm:py-8 bg-white text-slate-900">
      <div className="w-full max-w-[1240px] mx-auto">

        {/* Heading Grid Block */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start mb-16 pb-8 border-b border-slate-100 scroll-section">
          {/* Left Heading */}
          <div className="lg:col-span-7 space-y-4">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-primary">
              The Difference Cantra Makes
            </h2>
            <p className="text-lg text-slate-500 font-medium">
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
                className="w-full min-h-[231px] p-5 rounded-[20px] bg-white shadow-sm flex flex-col items-start gap-2.5 hover:shadow-md transition-all duration-300"
              >
                {/* Icon Wrapper */}
                <div className={`flex h-8 w-8 items-center justify-center rounded-full shrink-0 ${benefit.iconColor}`}>
                  <IconComp className="h-[18px] w-[18px]" />
                </div>

                {/* Text Content */}
                <h3 className="text-base font-medium text-[#293836] capitalize leading-[27px] font-['Inter',sans-serif]">
                  {benefit.title}
                </h3>
                <p className="text-xs font-normal text-[#293836] capitalize leading-[27px] font-['Inter',sans-serif]">
                  {benefit.description}
                </p>
              </div>
            )
          })}
        </div>

      </div>
    </section>
  )
}

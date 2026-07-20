'use client'

import * as React from "react"
import Image from "next/image"
import Link from "next/link"
import { CheckSquare, ArrowUpRight } from "lucide-react"

const capabilities = [
  "Mental Health Risk Assessments",
  "Behaviour Monitoring & ABC Recording",
  "Positive Behaviour Support",
  "Safeguarding & Incident Management",
  "Care Reviews & Outcome Tracking",
  "Collaborative Care Planning"
]

export function MentalHealthCareHomes() {
  return (
    <section id="mental-health-care-homes" className="py-8 md:py-12 bg-white text-slate-900 overflow-hidden">
      <div className="mx-auto max-w-6xl px-6 md:px-8 space-y-12">

        {/* Centered Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <h2 className="text-3xl md:text-4xl lg:text-[44px] font-bold tracking-tight text-primary font-sans leading-tight">
            Mental Health Care Homes
          </h2>
          <h3 className="text-lg md:text-xl font-bold text-slate-700 font-sans">
            Supporting Recovery Through Personalised Care.
          </h3>
        </div>

        {/* Featured Center Image */}
        <div className="relative w-full aspect-[16/9] md:aspect-[2/1] rounded-3xl overflow-hidden shadow-sm">
          <Image
            src="/images/care-service-types/mental-health-care-homes.png"
            alt="Group therapy session sitting in a circle in mental health care home"
            fill
            sizes="100vw"
            className="object-cover object-center"
          />
        </div>

        {/* Paragraph Description */}
        <div className="text-center max-w-3xl mx-auto">
          <p className="text-xs md:text-sm text-slate-500 leading-relaxed">
            Mental Health Services Require Structured Care, Proactive Risk Management, And Detailed Behavioural Documentation. Cantra Helps Multidisciplinary Teams Record Behavioural Observations, Manage Risks, Support Safeguarding, And Create Personalised Care Pathways That Promote Recovery And Wellbeing.
          </p>
        </div>

        {/* Key Capabilities */}
        <div className="space-y-8 pt-4">
          <h4 className="text-xl font-bold text-slate-800 text-center font-sans">
            Key Capabilities
          </h4>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {capabilities.map((item, idx) => (
              <div key={idx} className="flex items-center gap-3 text-xs md:text-sm font-medium text-slate-700">
                <CheckSquare className="h-4 w-4 text-emerald-600 shrink-0" />
                <span>{item}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom Outlined Callout Box */}
        <div className="mt-12 p-8 md:p-10 rounded-3xl border border-slate-200/80 bg-white flex flex-col lg:flex-row items-center justify-between gap-8">
          <p className="text-xs md:text-sm text-slate-500 leading-relaxed max-w-3xl">
            Mental Health Services Require Structured, Responsive, And Person-Centred Support. Cantra Helps Multidisciplinary Teams Manage Behavioural Observations, Risk Assessments, Safeguarding, And Collaborative Care Planning Through Intelligent Digital Workflows. By Improving Communication And Providing A Complete Picture Of Each Individual's Journey, Cantra Supports Safer Environments And Better Recovery-Focused Outcomes.
          </p>

          <Link
            href="/incident-management"
            className="inline-flex items-center justify-center gap-3 rounded-full bg-primary hover:bg-primary/95 text-white font-bold text-xs md:text-sm px-6 py-3 transition-colors shadow-sm shrink-0 h-12"
          >
            Explore More
            <div className="flex h-6 w-6 items-center justify-center rounded-full bg-white/20 text-white">
              <ArrowUpRight className="h-3.5 w-3.5" />
            </div>
          </Link>
        </div>

      </div>
    </section>
  )
}

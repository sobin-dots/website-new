'use client'

import * as React from "react"
import Image from "next/image"
import Link from "next/link"
import { CheckSquare, ArrowUpRight } from "lucide-react"

const capabilities = [
  "E-MAR",
  "Clinical Observations & NEWS2",
  "Care Plans & Risk Assessments",
  "Wound & Clinical Documentation",
  "Incident & Safeguarding Management",
  "Compliance & Audit Reporting"
]

export function NursingHomes() {
  return (
    <section id="nursing-homes" className="py-8 md:py-12 bg-white text-slate-900 overflow-hidden">
      <div className="mx-auto max-w-6xl px-6 md:px-8 space-y-12">

        {/* Centered Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <h2 className="text-3xl md:text-4xl lg:text-[44px] font-bold tracking-tight text-primary font-sans leading-tight">
            Nursing Homes
          </h2>
          <h3 className="text-lg md:text-xl font-bold text-slate-700 font-sans">
            Built For Clinically Focused Care Delivery.
          </h3>
        </div>

        {/* Featured Center Image */}
        <div className="relative w-full aspect-[16/9] md:aspect-[2/1] rounded-3xl overflow-hidden shadow-sm">
          <Image
            src="/images/care-service-types/nursing-homes.png"
            alt="Nurse assisting senior resident with clinical care and medication"
            fill
            sizes="100vw"
            className="object-cover object-center"
          />
        </div>

        {/* Paragraph Description */}
        <div className="text-center max-w-3xl mx-auto">
          <p className="text-xs md:text-sm text-slate-500 leading-relaxed">
            Nursing Homes Require Greater Clinical Oversight, Medication Management, And Continuous Monitoring. Cantra Equips Nurses And Carers With Digital Tools To Manage Medication, Record Observations, Document Clinical Interventions, And Maintain Compliance Without Disrupting Resident Care.
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
            Nursing Homes Require A Balance Of Compassionate Care And Clinical Precision. Cantra Equips Nurses And Carers With Integrated Tools For Medication Administration, Clinical Observations, Risk Assessments, Care Planning, And Regulatory Compliance. With Connected Workflows And Real-Time Visibility, Your Team Can Make Informed Decisions While Maintaining The Highest Standards Of Resident Safety And Care Quality.
          </p>

          <Link
            href="/e-mar"
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

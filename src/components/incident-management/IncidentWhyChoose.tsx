'use client'

import * as React from "react"
import Image from "next/image"

export function IncidentWhyChoose() {
  return (
    <section className="relative py-20 md:py-28 text-slate-900 overflow-hidden min-h-[520px] flex items-center">
      
      {/* Full-width Background Image */}
      <Image
        src="/images/incident-management/why-care-providers-choose-cantra-bg.png"
        alt="Caregiver and senior resident background"
        fill
        sizes="100vw"
        className="object-cover object-center"
        priority
      />

      {/* Foreground Container */}
      <div className="relative z-10 mx-auto max-w-7xl px-6 md:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12">
          
          {/* Empty Left Space (6 cols) & Right Floating Green Card Container (6 cols) */}
          <div className="lg:col-span-6 lg:col-start-7 bg-primary text-white p-8 md:p-12 lg:p-14 rounded-3xl md:rounded-[32px] shadow-xl space-y-6">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight font-sans leading-snug">
              Why Care Providers Choose Cantra
            </h2>

            <div className="space-y-4 text-xs md:text-sm text-white/90 leading-relaxed font-sans">
              <p>
                Unlike Generic Reporting Systems, Cantra Connects Incidents With Resident Records, Care Plans, Safeguarding Workflows, Risk Assessments, Audits, And Quality Reporting—Creating A Complete Picture Of Care Delivery.
              </p>
              <p>
                This Means Managers Spend Less Time Chasing Paperwork And More Time Improving Resident Safety.
              </p>
            </div>
          </div>

        </div>
      </div>

    </section>
  )
}

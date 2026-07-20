'use client'

import * as React from "react"
import Image from "next/image"

export function IncidentOpportunity() {
  return (
    <section className="relative py-20 md:py-24 text-white overflow-hidden">
      {/* Terracotta Background Image */}
      <Image
        src="/images/incident-management/every-incident-is-an-opportunity-to-improve-care-bg.png"
        alt="Terracotta background pattern"
        fill
        sizes="100vw"
        className="object-cover object-center"
        priority
      />

      {/* Content Container */}
      <div className="relative z-10 mx-auto max-w-4xl px-6 md:px-8 text-center space-y-6">
        <h2 className="text-3xl md:text-4xl lg:text-[40px] font-bold tracking-tight leading-tight">
          Every Incident Is An Opportunity To Improve Care
        </h2>

        <div className="space-y-4 text-xs md:text-sm text-white/90 leading-relaxed max-w-3xl mx-auto">
          <p>
            In Care Settings, Timely Reporting Isn't Just About Documentation—It's About Protecting Residents, Supporting Staff, And Preventing Future Harm. Delayed Reporting, Incomplete Records, Or Inconsistent Escalation Can Increase Organisational Risk And Impact The Quality Of Care.
          </p>
          <p>
            Cantra Standardises Incident Management With Structured Workflows, Intelligent Escalation, And Comprehensive Reporting, Helping Your Team Respond Confidently While Building A Stronger Culture Of Safety.
          </p>
        </div>
      </div>
    </section>
  )
}

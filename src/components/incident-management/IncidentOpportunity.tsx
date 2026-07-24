'use client'

import * as React from "react"
import Image from "next/image"

export function IncidentOpportunity() {
  return (
    <section className="py-4 sm:py-8 bg-white overflow-hidden">
      <div className="w-full">
        
        {/* Banner container with background image inside */}
        <div className="relative rounded-[20px] overflow-hidden py-12 sm:py-16 md:py-20 px-6 sm:px-10 lg:px-12 text-white scroll-section">
          <Image
            src="/images/incident-management/every-incident-is-an-opportunity-to-improve-care-bg.png"
            alt="Terracotta background pattern"
            fill
            sizes="(max-width: 1240px) 100vw, 1240px"
            className="object-cover object-center z-0"
            priority
          />

          {/* Content Container */}
          <div className="relative z-10 mx-auto max-w-[893px] text-center space-y-4 sm:space-y-6">
            <h2 className="text-2xl sm:text-3xl md:text-[40px] font-bold leading-tight md:leading-[58px] capitalize text-white font-['Lato',sans-serif]">
              Every Incident Is An Opportunity To Improve Care
            </h2>

            <div className="space-y-4 text-xs sm:text-sm md:text-base font-normal leading-relaxed md:leading-[28px] text-white/95 capitalize font-['Lato',sans-serif] max-w-[763px] mx-auto">
              <p>
                In Care Settings, Timely Reporting Isn't Just About Documentation—It's About Protecting Residents, Supporting Staff, And Preventing Future Harm. Delayed Reporting, Incomplete Records, Or Inconsistent Escalation Can Increase Organisational Risk And Impact The Quality Of Care.
              </p>
              <p>
                Cantra Standardises Incident Management With Structured Workflows, Intelligent Escalation, And Comprehensive Reporting, Helping Your Team Respond Confidently While Building A Stronger Culture Of Safety.
              </p>
            </div>
          </div>
        </div>

      </div>
    </section>
  )
}

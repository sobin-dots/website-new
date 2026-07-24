'use client'

import * as React from "react"
import Image from "next/image"

export function IncidentWhyChoose() {
  return (
    <section className="py-4 sm:py-8 bg-white overflow-hidden text-[#293836]">
      <div className="w-full">
        
        {/* Banner Card Container with background image inside */}
        <div className="relative rounded-[20px] overflow-hidden min-h-[460px] flex items-center p-6 sm:p-8 md:p-12">
          <Image
            src="/images/incident-management/why-care-providers-choose-cantra-bg.png"
            alt="Caregiver and senior resident background"
            fill
            sizes="(max-width: 1240px) 100vw, 1240px"
            className="object-cover object-center z-0"
            priority
          />

          {/* Foreground Grid Content */}
          <div className="relative z-10 w-full">
            <div className="grid grid-cols-1 lg:grid-cols-12">
              
              {/* Floating Dark Green Card (6 cols) */}
              <div className="lg:col-span-6 lg:col-start-7 bg-[#3D5D58] text-white p-6 sm:p-10 md:p-12 rounded-[20px] shadow-lg space-y-4 sm:space-y-6 scroll-section">
                <h2 className="text-2xl sm:text-3xl md:text-[40px] font-bold leading-tight md:leading-[50px] capitalize text-white font-['Lato',sans-serif]">
                  Why Care Providers Choose Cantra
                </h2>

                <div className="space-y-4 text-xs sm:text-sm md:text-base font-normal leading-relaxed md:leading-[27px] text-white/95 capitalize font-['Lato',sans-serif]">
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
        </div>

      </div>
    </section>
  )
}

'use client'

import Image from "next/image"

export function IncidentWhyChoose() {
  return (
    <section className="relative w-full py-16 sm:py-20 md:py-24 text-white overflow-hidden scroll-section flex items-center">
      {/* Background Image: Full Bleed */}
      <Image
        src="/images/incident-management/why-care-providers-choose-cantra-bg.png"
        alt="Caregiver and senior resident background"
        fill
        priority
        sizes="100vw"
        className="object-cover object-left-top lg:object-top z-0"
      />

      {/* Foreground Grid Content (Centered within standard width) */}
      <div className="relative z-10 w-full max-w-[1240px] mx-auto px-6 sm:px-10 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">

          {/* Floating Dark Green Card (6 cols, aligned to the right, leaving space for the watermark) */}
          <div className="lg:col-span-6 lg:col-start-6 bg-[#3D5D58] text-white p-6 sm:p-10 rounded-[20px] shadow-[0_15px_30px_rgba(0,0,0,0.15)] space-y-4 sm:space-y-6 w-full max-w-[560px]">
            <h2 className="text-xl sm:text-2xl md:text-[30px] font-bold leading-tight md:leading-[38px] capitalize text-white font-['Lato',sans-serif]">
              Why Care Providers Choose Cantra
            </h2>

            <div className="space-y-4 text-xs sm:text-sm md:text-[15px] font-normal leading-relaxed md:leading-[27px] text-white/95 capitalize font-['Lato',sans-serif]">
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

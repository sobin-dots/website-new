'use client'

import * as React from "react"
import Image from "next/image"
import Link from "next/link"
import { CheckSquare, ArrowUpRight } from "lucide-react"

const capabilitiesRow1 = [
  "Person-Centred Care Plans",
  "Daily Care & Task Management",
  "Activities & Wellbeing",
]

const capabilitiesRow2 = [
  "Resident Observations",
  "Family Communication",
  "Incident Reporting",
]

function GreenCheckboxIcon() {
  return <CheckSquare className="w-6 h-6 text-[#04AD31] shrink-0" />
}

export function ResidentialCareHomes() {
  return (
    <section id="residential-care-homes" className="py-6 md:py-8 bg-white text-[#293836]">
      <div className="mx-auto max-w-[1166px] px-4 sm:px-6 lg:px-8 space-y-[40px]">

        {/* Frame 2270: Top Content Block */}
        <div className="flex flex-col items-center justify-center gap-[20px] max-w-[1166px] mx-auto text-center">

          {/* Frame 2280 / Frame 744 & 745: Titles */}
          <div className="flex flex-col items-center justify-center max-w-[1166px] scroll-section">
            {/* Title: H1 */}
            <h1 className="text-3xl sm:text-4xl md:text-[40px] font-bold leading-tight md:leading-[66px] capitalize text-[#293836] font-['Lato',sans-serif]">
              Residential Care Homes
            </h1>
            {/* Subtitle: H2 */}
            <h2 className="text-xl sm:text-2xl md:text-[24px] font-bold leading-tight md:leading-[66px] capitalize text-[#293836] font-['Lato',sans-serif]">
              Supporting everyday care with confidence.
            </h2>
          </div>

          {/* Rectangle 120: Featured Center Image */}
          <div className="relative w-full max-w-[900px] h-[240px] sm:h-[360px] md:h-[502px] rounded-[20px] overflow-hidden shadow-sm mx-auto scroll-section">
            <Image
              src="/images/care-service-types/residential-care-homes.png"
              alt="Caregivers serving tea and playing board games with senior residents in residential care home"
              fill
              sizes="(max-width: 900px) 100vw, 900px"
              className="object-cover object-center"
              priority
            />
          </div>

          {/* Paragraph Description */}
          <div className="max-w-[900px] mx-auto scroll-section">
            <p className="text-sm md:text-base font-normal leading-[27px] text-[#293836] capitalize font-['Inter',sans-serif]">
              Residential care homes focus on helping residents live comfortably, safely, and independently. Cantra streamlines daily care delivery by giving teams easy access to personalised care plans, daily tasks, observations, activities, family communication, and digital records—all from one connected platform.
            </p>
          </div>

        </div>

        {/* Frame 2269: Key Capabilities */}
        <div className="flex flex-col items-center gap-[20px] max-w-[1166px] mx-auto rounded-[20px]">

          {/* Frame 746: Key Capabilities Header */}
          <div className="flex flex-col justify-center items-center w-full bg-white scroll-section">
            <h3 className="text-xl sm:text-2xl md:text-[24px] font-bold leading-tight md:leading-[66px] capitalize text-[#293836] font-['Lato',sans-serif] text-center">
              Key Capabilities
            </h3>
          </div>

          {/* Capabilities Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-y-5 gap-x-6 lg:gap-x-10 max-w-[1090px] w-full mx-auto bg-white scroll-section">
            {capabilitiesRow1.concat(capabilitiesRow2).map((title, idx) => (
              <div key={idx} className="flex items-center gap-[10px] min-w-0">
                <GreenCheckboxIcon />
                <span className="text-sm sm:text-base font-normal leading-[27px] text-[#293836] capitalize font-['Inter',sans-serif]">
                  {title}
                </span>
              </div>
            ))}
          </div>

        </div>

        {/* Bottom Outlined Callout Box */}
        <div className="mt-8 p-6 md:p-10 rounded-[20px] border border-[#3D5D58] bg-white flex flex-col lg:flex-row items-center justify-between gap-6 max-w-[1166px] mx-auto scroll-section">
          <p className="text-sm md:text-base font-normal leading-[27px] text-[#293836] max-w-3xl font-['Inter',sans-serif]">
            Cantra simplifies every stage of care delivery, from personalised care plans and daily routines to resident observations, activities, family communication, and compliance. By bringing everything together in one connected platform, care teams can spend less time on administration and more time delivering meaningful, person-centred support.
          </p>

          <Link
            href="/care-management"
            className="inline-flex items-center justify-center gap-3 rounded-full bg-primary hover:bg-primary/95 text-white font-bold text-sm px-6 py-3 transition-colors shadow-sm shrink-0 h-12"
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


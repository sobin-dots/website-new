'use client'

import * as React from "react"
import Image from "next/image"
import Link from "next/link"
import { CheckSquare, ArrowUpRight } from "lucide-react"

const capabilitiesRow1 = [
  "Mental Health Risk Assessments",
  "Behaviour Monitoring & ABC Recording",
  "Positive Behaviour Support",
]

const capabilitiesRow2 = [
  "Safeguarding & Incident Management",
  "Care Reviews & Outcome Tracking",
  "Collaborative Care Planning",
]

export function MentalHealthCareHomes() {
  return (
    <section id="mental-health-care-homes" className="py-6 md:py-8 bg-white text-[#293836]">
      <div className="mx-auto max-w-[1168px] px-4 sm:px-6 lg:px-8 space-y-[40px]">

        {/* Frame 2270: Top Content Block */}
        <div className="flex flex-col items-center justify-center gap-[20px] max-w-[1166px] mx-auto text-center">

          {/* Frame 2282 / Frame 744 & 745: Titles */}
          <div className="flex flex-col items-center justify-center max-w-[1166px] scroll-section">
            {/* Title: H2 */}
            <h2 className="text-3xl sm:text-4xl md:text-[40px] font-bold leading-tight md:leading-[66px] capitalize text-[#293836] font-['Lato',sans-serif]">
              Mental Health Care Homes
            </h2>
            {/* Subtitle: H3 */}
            <h3 className="text-xl sm:text-2xl md:text-[24px] font-bold leading-tight md:leading-[66px] capitalize text-[#293836] font-['Lato',sans-serif]">
              Supporting recovery through personalised care.
            </h3>
          </div>

          {/* Rectangle 120: Featured Center Image */}
          <div className="relative w-full max-w-[900px] h-[240px] sm:h-[360px] md:h-[502px] rounded-[20px] overflow-hidden shadow-sm mx-auto scroll-section">
            <Image
              src="/images/care-service-types/mental-health-care-homes.png"
              alt="Group therapy session sitting in a circle in mental health care home"
              fill
              sizes="(max-width: 900px) 100vw, 900px"
              className="object-cover object-center"
              priority
            />
          </div>

          {/* Paragraph Description */}
          <div className="max-w-[900px] mx-auto scroll-section">
            <p className="text-sm md:text-base font-normal leading-[27px] text-[#293836] capitalize font-['Inter',sans-serif]">
              Mental health services require structured care, proactive risk management, and detailed behavioural documentation. Cantra helps multidisciplinary teams record behavioural observations, manage risks, support safeguarding, and create personalised care pathways that promote recovery and wellbeing.
            </p>
          </div>

        </div>

        {/* Frame 2269: Key Capabilities */}
        <div className="flex flex-col items-center gap-[20px] max-w-[1166px] mx-auto rounded-[20px] w-full">
          
          {/* Frame 746: Key Capabilities Header */}
          <div className="flex flex-col justify-center items-center w-full bg-white scroll-section">
            <h4 className="text-xl sm:text-2xl md:text-[24px] font-bold leading-tight md:leading-[66px] capitalize text-[#293836] font-['Lato',sans-serif] text-center">
              Key Capabilities
            </h4>
          </div>

          {/* Capabilities Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-y-5 gap-x-6 lg:gap-x-10 max-w-[1090px] w-full mx-auto bg-white scroll-section">
            {capabilitiesRow1.concat(capabilitiesRow2).map((title, idx) => (
              <div key={idx} className="flex items-center gap-[10px] min-w-0">
                <CheckSquare className="w-6 h-6 text-[#04AD31] shrink-0" />
                <span className="text-sm sm:text-base font-normal leading-[27px] text-[#293836] capitalize font-['Inter',sans-serif]">
                  {title}
                </span>
              </div>
            ))}
          </div>

        </div>

        {/* Frame 2273: Bottom Outlined Callout Box */}
        <div className="mt-8 p-6 md:px-10 md:py-6 rounded-[30px] md:rounded-[40px] border border-[#3D5D58] bg-white flex flex-col lg:flex-row items-center justify-between gap-6 max-w-[1166px] mx-auto min-h-[172px] scroll-section">
          <p className="text-sm md:text-base font-normal leading-[27px] text-[#293836] max-w-[898px] font-['Inter',sans-serif]">
            Mental health services require structured, responsive, and person-centred support. Cantra helps multidisciplinary teams manage behavioural observations, risk assessments, safeguarding, and collaborative care planning through intelligent digital workflows. By improving communication and providing a complete picture of each individual's journey, Cantra supports safer environments and better recovery-focused outcomes.
          </p>

          <Link
            href="/incident-management"
            className="inline-flex items-center justify-center gap-3 rounded-[50px] bg-[#3D5D58] hover:bg-[#3D5D58]/90 text-white font-medium text-[15px] px-5 py-2.5 transition-colors shadow-sm shrink-0 h-[57px]"
          >
            <span>Explore More</span>
            <div className="flex h-9 w-9 items-center justify-center rounded-full bg-[#DEE9E6] text-[#3D5D58] shrink-0">
              <ArrowUpRight className="h-5 w-5 text-[#3D5D58]" />
            </div>
          </Link>
        </div>

      </div>
    </section>
  )
}


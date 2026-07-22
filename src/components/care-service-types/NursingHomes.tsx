'use client'

import * as React from "react"
import Image from "next/image"
import Link from "next/link"
import { CheckSquare, ArrowUpRight } from "lucide-react"

const capabilitiesRow1 = [
  "e-MAR",
  "Clinical Observations & NEWS2",
  "Care Plans & Risk Assessments",
]

const capabilitiesRow2 = [
  "Wound & Clinical Documentation",
  "Incident & Safeguarding Management",
  "Compliance & Audit Reporting",
]

export function NursingHomes() {
  return (
    <section id="nursing-homes" className="py-6 md:py-8 bg-white text-[#293836]">
      <div className="mx-auto max-w-[1168px] px-4 sm:px-6 lg:px-8 space-y-[40px]">

        {/* Frame 2270: Top Content Block */}
        <div className="flex flex-col items-center justify-center gap-[20px] max-w-[1166px] mx-auto text-center">

          {/* Frame 2281 / Frame 744 & 745: Titles */}
          <div className="flex flex-col items-center justify-center max-w-[1166px]">
            {/* Title: H2 */}
            <h2 className="text-3xl sm:text-4xl md:text-[40px] font-bold leading-tight md:leading-[66px] capitalize text-[#293836] font-['Lato',sans-serif]">
              Nursing Homes
            </h2>
            {/* Subtitle: H3 */}
            <h3 className="text-xl sm:text-2xl md:text-[24px] font-bold leading-tight md:leading-[66px] capitalize text-[#293836] font-['Lato',sans-serif]">
              Built for clinically focused care delivery.
            </h3>
          </div>

          {/* Rectangle 120: Featured Center Image */}
          <div className="relative w-full max-w-[900px] h-[240px] sm:h-[360px] md:h-[502px] rounded-[20px] overflow-hidden shadow-sm mx-auto">
            <Image
              src="/images/care-service-types/nursing-homes.png"
              alt="Nurse assisting senior resident with clinical care and medication"
              fill
              sizes="(max-width: 900px) 100vw, 900px"
              className="object-cover object-center"
              priority
            />
          </div>

          {/* Paragraph Description */}
          <div className="max-w-[900px] mx-auto">
            <p className="text-sm md:text-base font-normal leading-[27px] text-[#293836] capitalize font-['Inter',sans-serif]">
              Nursing homes require greater clinical oversight, medication management, and continuous monitoring. Cantra equips nurses and carers with digital tools to manage medication, record observations, document clinical interventions, and maintain compliance without disrupting resident care.
            </p>
          </div>

        </div>

        {/* Frame 2269: Key Capabilities */}
        <div className="flex flex-col items-center gap-[20px] max-w-[1166px] mx-auto rounded-[20px]">
          
          {/* Frame 746: Key Capabilities Header */}
          <div className="flex flex-col justify-center items-center w-full bg-white">
            <h4 className="text-xl sm:text-2xl md:text-[24px] font-bold leading-tight md:leading-[66px] capitalize text-[#293836] font-['Lato',sans-serif] text-center">
              Key Capabilities
            </h4>
          </div>

          {/* Capabilities Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-y-5 gap-x-6 lg:gap-x-10 max-w-[1090px] w-full mx-auto bg-white">
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
        <div className="mt-8 p-6 md:px-10 md:py-6 rounded-[30px] md:rounded-[40px] border border-[#3D5D58] bg-white flex flex-col lg:flex-row items-center justify-between gap-6 max-w-[1166px] mx-auto min-h-[172px]">
          <p className="text-sm md:text-base font-normal leading-[27px] text-[#293836] max-w-[910px] font-['Inter',sans-serif]">
            Nursing homes require a balance of compassionate care and clinical precision. Cantra equips nurses and carers with integrated tools for medication administration, clinical observations, risk assessments, care planning, and regulatory compliance. With connected workflows and real-time visibility, your team can make informed decisions while maintaining the highest standards of resident safety and care quality.
          </p>

          <Link
            href="/e-mar"
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


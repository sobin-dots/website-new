'use client'

import * as React from "react"
import { CareServiceSubNav } from "@/components/care-service-types/CareServiceSubNav"
import { ResidentialCareHomes } from "@/components/care-service-types/ResidentialCareHomes"
import { NursingHomes } from "@/components/care-service-types/NursingHomes"
import { MentalHealthCareHomes } from "@/components/care-service-types/MentalHealthCareHomes"
import { CareServiceCTA } from "@/components/care-service-types/CareServiceCTA"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { useGSAP } from "@gsap/react"

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger)
}

export default function CareServiceTypesPage() {
  const containerRef = React.useRef<HTMLDivElement>(null)

  useGSAP(() => {
    if (typeof window === "undefined") return

    const isMobile = window.matchMedia("(max-width: 768px)").matches
    const sections = gsap.utils.toArray<HTMLElement>(".scroll-section")

    sections.forEach((section) => {
      if (isMobile) {
        gsap.fromTo(section,
          { opacity: 0, y: 20 },
          { opacity: 1, y: 0, duration: 0.6, ease: "power2.out", delay: 0.1 }
        )
      } else {
        gsap.fromTo(section,
          { opacity: 0, y: 40 },
          {
            opacity: 1,
            y: 0,
            duration: 0.8,
            ease: "power2.out",
            scrollTrigger: {
              trigger: section,
              start: "top 85%",
              toggleActions: "play none none none"
            }
          }
        )
      }
    })
  }, { scope: containerRef })

  return (
    <div ref={containerRef} className="min-h-screen pt-2 bg-white text-slate-900">

      {/* Sticky Sub-Navigation */}
      {/* <CareServiceSubNav /> */}

      {/* 1. Residential Care Homes Section */}
      <ResidentialCareHomes />

      {/* 2. Nursing Homes Section */}
      <NursingHomes />

      {/* 3. Mental Health Care Homes Section */}
      <MentalHealthCareHomes />

      {/* 4. Bottom CTA Banner */}
      <CareServiceCTA />

    </div>
  )
}

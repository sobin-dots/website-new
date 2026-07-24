'use client'

import * as React from "react"
import { CqcHero } from "@/components/cqc-compliance/CqcHero"
import { CqcMetrics } from "@/components/cqc-compliance/CqcMetrics"
import { CqcFeatures } from "@/components/cqc-compliance/CqcFeatures"
import { CqcReportGeneration } from "@/components/cqc-compliance/CqcReportGeneration"
import { CqcDataExport } from "@/components/cqc-compliance/CqcDataExport"
import { CqcOutcomes } from "@/components/cqc-compliance/CqcOutcomes"
import { CqcCTA } from "@/components/cqc-compliance/CqcCTA"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { useGSAP } from "@gsap/react"

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger)
}

export default function CqcCompliancePage() {
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
    <div ref={containerRef} className="min-h-screen bg-white text-[#293836]">

      {/* 1. Hero Header */}
      <div className="mx-auto max-w-[1440px] px-4 sm:px-6 lg:px-8 space-y-12 sm:space-y-16 md:space-y-20 ">
        <CqcHero />
      </div>

      {/* 2. Dark Green Metrics & Statistics Banner (Full Bleed Background) */}
      <CqcMetrics />

      {/* Centralized Page Container for Middle Sections */}
      <div className="mx-auto max-w-[1240px] px-4 sm:px-6 lg:px-8 space-y-16 sm:space-y-24 md:space-y-32 py-16 md:py-24">
        {/* 3. Alternating Feature Collages (Evidence, Quality Mapping, PIR, Breach Alerts) */}
        <CqcFeatures />

        {/* 4. 6-Card Report Generation Grid */}
        <CqcReportGeneration />

        {/* 5. Data Export Desktop Section */}
        <CqcDataExport />

        {/* 6. Key Outcomes 2x2 Grid */}
        <CqcOutcomes />
      </div>

      {/* 7. Bottom Call to Action Banner (Full Bleed Background) */}
      <CqcCTA />

    </div>
  )
}

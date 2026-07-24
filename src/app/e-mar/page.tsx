'use client'

import * as React from "react"
import { EmarHero } from "@/components/e-mar/EmarHero"
import { EmarFeatures } from "@/components/e-mar/EmarFeatures"
import { EmarClinicalSafety } from "@/components/e-mar/EmarClinicalSafety"
import { EmarAdvantage } from "@/components/e-mar/EmarAdvantage"
import { CareServiceCTA } from "@/components/care-service-types/CareServiceCTA"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { useGSAP } from "@gsap/react"

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger)
}

export default function EmarPage() {
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
    <div ref={containerRef} className="min-h-screen pt-5 bg-white text-[#293836]">
      
      {/* Centralized Page Container with Standard Max-Width & Padding */}
      <div className="mx-auto max-w-[1440px] px-4 sm:px-6 lg:px-8 space-y-12 sm:space-y-16 md:space-y-20">
        {/* 1. Hero Header */}
        <EmarHero />

        {/* 2. 5 Alternating Feature Blocks */}
        <EmarFeatures />

        {/* 3. Built For Clinical Safety And Regulatory Compliance */}
        <EmarClinicalSafety />

        {/* 4. The Cantra Advantage */}
        <EmarAdvantage />
      </div>

      {/* 5. Bottom Call to Action Banner (Full Bleed Background) */}
      <div className="mt-16 sm:mt-24 ">
        <CareServiceCTA />
      </div>

    </div>
  )
}


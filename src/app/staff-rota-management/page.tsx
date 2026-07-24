'use client'

import * as React from "react"
import { RotaHero } from "@/components/staff-rota-management/RotaHero"
import { RotaPlatform } from "@/components/staff-rota-management/RotaPlatform"
import { RotaFeatures } from "@/components/staff-rota-management/RotaFeatures"
import { RotaWorkflow } from "@/components/staff-rota-management/RotaWorkflow"
import { RotaAdvantage } from "@/components/staff-rota-management/RotaAdvantage"
import { RotaCTA } from "@/components/staff-rota-management/RotaCTA"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { useGSAP } from "@gsap/react"

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger)
}

export default function StaffRotaManagementPage() {
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
      <div className="mx-auto max-w-[1240px] px-4 sm:px-6 lg:px-8 pb-12 sm:pb-16 ">
        <RotaHero />
      </div>

      {/* 2. One Connected Platform Block (Full Bleed Background) */}
      <RotaPlatform />

      {/* Centered Container for Middle Sections */}
      <div className="mx-auto max-w-[1240px] px-4 sm:px-6 lg:px-8 space-y-16 sm:space-y-24 md:space-y-32 py-16 md:py-24">
        {/* 3. Key Features 6-Card Grid */}
        <RotaFeatures />

        {/* 4. Smarter Workflow For Every Shift */}
        <RotaWorkflow />
      </div>

      {/* 5. Terracotta Advantage Banner (Full Bleed Background) */}
      <RotaAdvantage />

      {/* 6. Bottom Call to Action Banner (Full Bleed Background) */}
      <RotaCTA />

    </div>
  )
}

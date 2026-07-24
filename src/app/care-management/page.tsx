'use client'

import * as React from "react"
import { CareHero } from "@/components/care-management/CareHero"
import { CareFeatures } from "@/components/care-management/CareFeatures"
import { CareConnectBanner } from "@/components/care-management/CareConnectBanner"
import { CareDifference } from "@/components/care-management/CareDifference"
import { CareServiceCTA } from "@/components/care-service-types/CareServiceCTA"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { useGSAP } from "@gsap/react"

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger)
}

export default function CareManagementPage() {
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
    <div ref={containerRef} className="min-h-screen pt-5 bg-white text-slate-900">
      
      {/* Centralized Page Container with Standard Max-Width & Padding */}
      <div className="mx-auto max-w-[1440px] px-4 sm:px-6 lg:px-8 space-y-12 sm:space-y-16 md:space-y-20">
        {/* 1. Hero Header Section */}
        <CareHero />

        {/* 2. Intro Block + Alternating Features collage blocks */}
        <CareFeatures />

        {/* 3. Muted Terracotta Connecting Care Banner */}
        <CareConnectBanner />

        {/* 4. Card Grid benefit details "The Difference Cantra Makes" */}
        <CareDifference />
      </div>

      {/* 5. Bottom Call to Action Banner (Full Bleed Background) */}
      <div className="mt-16 sm:mt-24 ">
        <CareServiceCTA />
      </div>

    </div>
  )
}


'use client'

import * as React from "react"
import { IncidentHero } from "@/components/incident-management/IncidentHero"
import { IncidentOpportunity } from "@/components/incident-management/IncidentOpportunity"
import { IncidentTools } from "@/components/incident-management/IncidentTools"
import { IncidentWorkflow } from "@/components/incident-management/IncidentWorkflow"
import { IncidentWhyChoose } from "@/components/incident-management/IncidentWhyChoose"
import { IncidentStages } from "@/components/incident-management/IncidentStages"
import { IncidentImpact } from "@/components/incident-management/IncidentImpact"
import { CareServiceCTA } from "@/components/care-service-types/CareServiceCTA"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { useGSAP } from "@gsap/react"

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger)
}

export default function IncidentManagementPage() {
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
        <IncidentHero />
      </div>

      {/* 2. Terracotta Banner: Every Incident Is An Opportunity */}
      <IncidentOpportunity />

      {/* Centralized Page Container for Remaining Content */}
      <div className="mx-auto max-w-[1440px] px-4 sm:px-6 lg:px-8 space-y-12 sm:space-y-16 md:space-y-20 mt-12 sm:mt-16 md:mt-10">
        {/* 3. 6-Tool Grid: Powerful Tools For Incident & Safeguarding Management */}
        <IncidentTools />

        {/* 4. S-Curve Timeline: From Incident To Resolution In One Connected Workflow */}
        <IncidentWorkflow />
      </div>

      {/* 5. Why Care Providers Choose Cantra */}
      <IncidentWhyChoose />

      {/* 6. Supporting Every Stage Of Incident Management */}
      <IncidentStages />

      {/* Centralized Page Container for Final Section */}
      <div className="mx-auto max-w-[1440px] px-4 sm:px-6 lg:px-8 space-y-12 sm:space-y-16 md:space-y-20 mt-12 sm:mt-16 md:mt-20">
        {/* 7. 4-Column Impact: The Impact Of Smarter Incident Management */}
        <IncidentImpact />
      </div>

      {/* 8. Bottom CTA Banner (Full Bleed Background) */}
      <div className="mt-16 sm:mt-24">
        <CareServiceCTA
          title="Safer Care Starts with Better Incident Management"
          subtitle="Equip your team with intuitive tools to capture incidents, take timely action, and continuously improve the quality and safety of care."
          secondaryButtonText="Book Your Personalised Demo"
          secondaryButtonHref="/book-demo"
        />
      </div>

    </div>
  )
}

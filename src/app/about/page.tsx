'use client'

import * as React from "react"
import { AboutHero } from "@/components/about/AboutHero"
import { AboutStory } from "@/components/about/AboutStory"
import { AboutPhilosophy } from "@/components/about/AboutPhilosophy"
import { AboutValues } from "@/components/about/AboutValues"
import { AboutCTA } from "@/components/about/AboutCTA"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { useGSAP } from "@gsap/react"

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger)
}

export default function AboutPage() {
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
    <div ref={containerRef} className="min-h-screen bg-white text-slate-900">
      
      {/* 1. Hero Block with Team Image */}
      <AboutHero />

      {/* 2. Our Story narrative on warm background */}
      <AboutStory />

      {/* 3. Our Philosophy, Mission & Vision card grid */}
      <AboutPhilosophy />

      {/* 4. Values defines us terracotta block */}
      <AboutValues />

      {/* 5. Inspection Ready bottom CTA section */}
      <AboutCTA />

    </div>
  )
}

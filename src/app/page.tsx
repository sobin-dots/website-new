'use client'

import * as React from "react"
import Image from "next/image"
import { Play, Calendar } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Features } from "@/components/home/Features"
import { Showcase } from "@/components/home/Showcase"
import { Process } from "@/components/home/Process"
import { Outcomes } from "@/components/home/Outcomes"
import { Stats } from "@/components/home/Stats"
import { WhyChoose } from "@/components/home/WhyChoose"
import { Newsletter } from "@/components/home/Newsletter"
import { Faq } from "@/components/home/Faq"
import { CallToAction } from "@/components/home/CallToAction"
import { CareSettings } from "@/components/home/CareSettings"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { useGSAP } from "@gsap/react"

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger)
}

export default function Home() {
  const containerRef = React.useRef<HTMLDivElement>(null)

  useGSAP(() => {
    if (typeof window === "undefined") return

    const isMobile = window.matchMedia("(max-width: 768px)").matches
    const sections = gsap.utils.toArray<HTMLElement>(".scroll-section")

    sections.forEach((section) => {
      if (isMobile) {
        // On mobile/tablets, fade in sections immediately to prevent ScrollTrigger scroll locking
        gsap.fromTo(section,
          { opacity: 0, y: 20 },
          { opacity: 1, y: 0, duration: 0.6, ease: "power2.out", delay: 0.1 }
        )
      } else {
        // On desktop, trigger animations upon scrolling into view
        gsap.fromTo(section,
          {
            opacity: 0,
            y: 40
          },
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
    <div ref={containerRef} className="flex flex-col min-h-screen">

      {/* Hero Section */}
      <section className="relative min-h-[95vh] lg:min-h-screen flex items-center overflow-hidden bg-foreground text-white pt-24 pb-16 lg:py-0">
        {/* Full background image */}
        <div className="absolute inset-0 z-0 top-[-10px]">
          <Image
            src="/images/home-page/hero-bg.svg"
            alt="Caregiver helping senior resident"
            fill
            priority
            className="object-cover object-[70%_bottom] sm:object-[75%_bottom] md:object-center lg:object-[center_top]"
          />
          <div className="absolute inset-0 z-0 bg-gradient-to-r from-black/50 to-black/50" />
        </div>

        <div className="mx-auto max-w-7xl px-6 md:px-8 relative z-10 w-full">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">

            {/* Left Hero Text */}
            <div className="lg:col-span-6 space-y-6 md:space-y-8 animate-in fade-in slide-in-from-left-4 duration-500">

              <h1 className="text-2xl sm:text-3xl md:text-5xl lg:text-[56px] font-bold tracking-tight leading-[1.3] md:leading-[1.5] text-white">
                Care Management That<br />
                <span className="font-serif italic font-normal text-white">Puts People First.</span>
              </h1>

              <p className="text-[11px] sm:text-sm md:text-base lg:text-lg text-white/80 max-w-xl leading-relaxed">
                Cantra Helps Adult Social Care Providers To Manage Care Plans, Medication Records, Assessments, Incidents, Compliance, And Reporting - All From A Single Platform.
              </p>

              {/* Action Buttons */}
              <div className="flex flex-row flex-wrap gap-2.5 sm:gap-4 items-center pt-2">
                <Button variant="outline" size="sm" className="rounded-full border-white/40 hover:border-white text-white bg-black/20 hover:bg-white/10 font-semibold flex items-center gap-1.5 px-3 sm:px-6 h-[34px] sm:h-12 text-[10px] sm:text-sm transition-all duration-300">
                  Start free trial
                  <div className="flex h-[18px] w-[18px] sm:h-7 sm:w-7 items-center justify-center rounded-full border border-white/40 text-white ml-0.5 sm:ml-1">
                    <Play className="h-2 w-2 sm:h-3 sm:w-3 fill-current ml-0.5" />
                  </div>
                </Button>
                <Button variant="default" size="sm" className="rounded-full bg-primary hover:bg-primary/90 text-white font-semibold flex items-center gap-1.5 px-3 sm:px-6 h-[34px] sm:h-12 text-[10px] sm:text-sm shadow-lg shadow-primary/20 hover:shadow-primary/35 transition-all duration-300">
                  Book a Demo
                  <div className="flex h-[18px] w-[18px] sm:h-7 sm:w-7 items-center justify-center rounded-full bg-white text-primary ml-0.5 sm:ml-1">
                    <Calendar className="h-2 w-2 sm:h-3.5 sm:w-3.5 text-primary" />
                  </div>
                </Button>
              </div>
            </div>

            {/* Right Hero - Floating Glass Stats Panels */}
            <div className="relative h-[440px] sm:h-[480px] lg:h-[550px] w-full lg:col-span-6">

              {/* Stat 1: 12k+ Residents (Top Right) */}
              <div className="absolute top-[28%] right-[2%] lg:right-[4%] rounded-2xl bg-white/10 backdrop-blur-md p-3 sm:p-4 shadow-xl border border-white/20 text-white min-w-[110px] sm:min-w-[130px] animate-in fade-in zoom-in-95 duration-700 delay-300">
                <div className="text-xl sm:text-2xl lg:text-3xl font-serif font-normal tracking-tight">12k+</div>
                <div className="text-[9px] sm:text-[10px] text-white/80 font-sans mt-0.5">Residents served</div>
              </div>

              {/* Stat 2: 94% Admin Time (Middle Center) */}
              <div className="absolute top-[44%] left-[4%] sm:left-[25%] lg:left-[35%] rounded-2xl bg-white/10 backdrop-blur-md p-4 sm:p-5 shadow-xl border border-white/20 text-white min-w-[140px] sm:min-w-[170px] animate-in fade-in zoom-in-95 duration-700 delay-400">
                <div className="text-3xl sm:text-4xl lg:text-5xl font-serif font-normal tracking-tight">94%</div>
                <div className="text-[9px] sm:text-[10px] text-white/80 font-sans mt-1 max-w-[130px] leading-tight">Reduction in documentation time</div>
              </div>

              {/* Stat 3: 4.9* Rating Panel with Avatars (Bottom Right) */}
              <div className="absolute bottom-[4%] right-[4%] lg:right-[2%] rounded-3xl bg-white/10 backdrop-blur-md p-2.5 sm:p-4 shadow-2xl border border-white/20 text-white min-w-[270px] sm:min-w-[320px] animate-in fade-in zoom-in-95 duration-700 delay-500">
                <div className="text-2xl sm:text-3xl lg:text-4xl font-bold font-sans tracking-tight mb-2 sm:mb-3">4.9*</div>
                <div className="flex items-center gap-3">
                  <div className="flex -space-x-2 shrink-0">
                    <Image
                      src="/images/home-page/hero-person-1.png"
                      alt="Care professional 1"
                      width={32}
                      height={32}
                      className="h-8 w-8 sm:h-9 sm:w-9 rounded-full object-cover ring-2 ring-white/30"
                    />
                    <Image
                      src="/images/home-page/hero-person-2.png"
                      alt="Care professional 2"
                      width={32}
                      height={32}
                      className="h-8 w-8 sm:h-9 sm:w-9 rounded-full object-cover ring-2 ring-white/30"
                    />
                    <Image
                      src="/images/home-page/hero-person-3.png"
                      alt="Care professional 3"
                      width={32}
                      height={32}
                      className="h-8 w-8 sm:h-9 sm:w-9 rounded-full object-cover ring-2 ring-white/30"
                    />
                  </div>
                  <p className="text-[10px] sm:text-[11px] text-white/90 font-medium leading-snug max-w-[180px]">
                    Join 12,000+ care professionals making a difference.
                  </p>
                </div>
              </div>

            </div>

          </div>
        </div>
      </section>


      {/* Core Features Section */}
      <Features />

      {/* Care Settings We Serve Section */}
      <CareSettings />

      {/* See Cantra in Action Showcase Section */}
      <Showcase />

      {/* Process Onboarding Section */}
      <Process />

      {/* Outcomes Grid Section */}
      <Outcomes />

      {/* Why Care Providers Choose Cantra Section */}
      <WhyChoose />

      {/* Real Results Stats Section */}
      <Stats />

      {/* Newsletter Subscription Section */}
      <Newsletter />

      {/* Frequently Asked Questions Section */}
      <Faq />

      {/* CTA Banner Section */}
      <CallToAction />

    </div>
  )
}

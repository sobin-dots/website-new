'use client'

import * as React from "react"
import Image from "next/image"
import { ArrowUpRight } from "lucide-react"
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
    const sections = gsap.utils.toArray<HTMLElement>(".scroll-section")
    sections.forEach((section) => {
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
    })
  }, { scope: containerRef })

  return (
    <div ref={containerRef} className="flex flex-col min-h-screen">

      {/* Hero Section */}
      <section className="relative min-h-[90vh] lg:min-h-screen flex items-center overflow-hidden bg-foreground text-white pt-24 pb-20 lg:py-0">
        {/* Full background image */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/home-page/hero-bg.svg"
            alt="Caregiver helping senior resident"
            fill
            priority
            className="object-cover object-center lg:object-[center_right]"
          />
          {/* Dark gradient overlay to make text highly readable */}
          <div className="absolute inset-0 bg-gradient-to-r from-foreground/5 via-foreground/20 to-foreground/20 lg:from-foreground/35 lg:via-foreground/35 lg:to-transparent" />
          {/* Bottom vignette overlay to blend with feature section */}
          <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-foreground to-transparent" />
        </div>

        <div className="mx-auto max-w-7xl px-6 md:px-8 relative z-10 w-full">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">

            {/* Left Hero Text */}
            <div className="lg:col-span-6 space-y-8 animate-in fade-in slide-in-from-left-4 duration-500">

              <h1 className="text-4xl md:text-5xl lg:text-[56px] font-bold tracking-tight leading-[1.1] text-white">
                Care Management <br />
                That <span className="font-serif italic font-normal text-white">Puts People First.</span>
              </h1>

              <p className="text-base md:text-lg text-white/80 max-w-xl leading-relaxed">
                Cantra Helps Adult Social Care Providers To Manage Care Plans, Medication Records, Assessments, Incidents, Compliance, And Reporting - All From A Single Platform.
              </p>

              <div className="flex flex-wrap gap-4 items-center pt-2">
                <Button variant="outline" size="lg" className="rounded-full border-white/20 hover:border-white text-white bg-black/25 hover:bg-white/10 font-semibold flex items-center gap-3 px-6 h-12 transition-all duration-300">
                  Start free trial
                  <div className="flex h-7 w-7 items-center justify-center rounded-full border border-white/20 bg-white/5 text-white ml-1">
                    <ArrowUpRight className="h-4 w-4" />
                  </div>
                </Button>
                <Button variant="default" size="lg" className="rounded-full bg-primary hover:bg-primary/90 text-white font-semibold flex items-center gap-3 px-6 h-12 shadow-lg shadow-primary/20 hover:shadow-primary/35 transition-all duration-300">
                  Book a Demo
                  <div className="flex h-7 w-7 items-center justify-center rounded-full bg-white text-primary ml-1">
                    <ArrowUpRight className="h-4 w-4" />
                  </div>
                </Button>
              </div>
            </div>

            {/* Right Hero - Floating Glass Stats Panels */}
            <div className="lg:col-span-6 relative h-[400px] lg:h-[550px] w-full flex items-center justify-center">

              {/* Stat 1: 12k+ Residents */}
              <div className="absolute top-[10%] right-2 md:right-[5%] rounded-2xl bg-white/10 backdrop-blur-md p-4 md:p-5 shadow-2xl border border-white/15 text-white min-w-[170px] md:min-w-[190px] animate-in fade-in zoom-in-95 duration-700 delay-300">
                <div className="text-2xl md:text-3xl lg:text-4xl font-extrabold tracking-tight font-sans">12k+</div>
                <div className="text-[10px] md:text-[11px] text-white/80 mt-1 font-medium">Residents served</div>
              </div>

              {/* Stat 2: 94% Admin Time */}
              <div className="absolute top-[42%] left-2 md:left-[5%] rounded-2xl bg-white/10 backdrop-blur-md p-4 md:p-5 shadow-2xl border border-white/15 text-white min-w-[170px] md:min-w-[190px] animate-in fade-in zoom-in-95 duration-700 delay-400">
                <div className="text-2xl md:text-3xl lg:text-4xl font-extrabold tracking-tight font-sans">94%</div>
                <div className="text-[10px] md:text-[11px] text-white/80 mt-1 font-medium">Reduction in documentation time</div>
              </div>

              {/* Stat 3: Rating Panel */}
              <div className="absolute bottom-[10%] right-2 md:right-[5%] rounded-2xl bg-white/10 backdrop-blur-md p-4 md:p-5 shadow-2xl border border-white/15 max-w-[260px] md:max-w-xs text-white animate-in fade-in zoom-in-95 duration-700 delay-500">
                <div className="text-xl md:text-2xl lg:text-3xl font-extrabold tracking-tight font-sans mb-3">4.9*</div>
                <div className="flex items-center gap-3">
                  <div className="flex -space-x-2.5">
                    <div className="inline-flex h-8 w-8 items-center justify-center rounded-full ring-2 ring-foreground bg-gradient-to-tr from-primary to-[#60928A] text-white font-bold text-[10px]">
                      CN
                    </div>
                    <div className="inline-flex h-8 w-8 items-center justify-center rounded-full ring-2 ring-foreground bg-gradient-to-tr from-[#C0714F] to-[#E39D7E] text-white font-bold text-[10px]">
                      AM
                    </div>
                    <div className="inline-flex h-8 w-8 items-center justify-center rounded-full ring-2 ring-foreground bg-gradient-to-tr from-foreground to-primary text-white font-bold text-[10px]">
                      KD
                    </div>
                  </div>
                  <p className="text-[10px] md:text-[11px] text-white/80 font-medium leading-snug">
                    Join 12,000+ care professionals making a difference.
                  </p>
                </div>
              </div>

            </div>

          </div>
        </div>
      </section>


      {/* Core Features Section */}
      <div className="scroll-section opacity-0">
        <Features />
      </div>

      {/* Care Settings We Serve Section */}
      <div className="scroll-section opacity-0">
        <CareSettings />
      </div>

      {/* See Cantra in Action Showcase Section */}
      <div className="scroll-section opacity-0">
        <Showcase />
      </div>

      {/* Process Onboarding Section */}
      <div className="scroll-section opacity-0">
        <Process />
      </div>

      {/* Outcomes Grid Section */}
      <div className="scroll-section opacity-0">
        <Outcomes />
      </div>

      {/* Why Care Providers Choose Cantra Section */}
      <div className="scroll-section opacity-0">
        <WhyChoose />
      </div>

      {/* Real Results Stats Section */}
      <div className="scroll-section opacity-0">
        <Stats />
      </div>

      {/* Newsletter Subscription Section */}
      <div className="scroll-section opacity-0">
        <Newsletter />
      </div>

      {/* Frequently Asked Questions Section */}
      <div className="scroll-section opacity-0">
        <Faq />
      </div>

      {/* CTA Banner Section */}
      <div className="scroll-section opacity-0">
        <CallToAction />
      </div>

    </div>
  )
}

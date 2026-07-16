'use client'

import * as React from "react"
import Image from "next/image"
import Link from "next/link"
import { ArrowUpRight } from "lucide-react"
import { Button } from "@/components/ui/button"

export function AssessmentHero() {
  return (
    <section className="py-12 md:py-20 bg-white overflow-hidden">
      <div className="mx-auto max-w-7xl px-6 md:px-8">
        
        {/* 2-Column Hero Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Heading, Subtitle & CTAs (7 columns) */}
          <div className="lg:col-span-7 space-y-8 animate-in fade-in slide-in-from-left-4 duration-500">
            
            {/* Title & Copy */}
            <div className="space-y-6">
              <h1 className="text-4xl md:text-5xl lg:text-[54px] font-bold tracking-tight text-primary leading-[1.15]">
                Delivering Person-Centred Care <br />
                With Confidence, Every Day.
              </h1>
              <p className="text-sm md:text-base text-slate-500 leading-relaxed max-w-xl">
                Cantra helps care teams transform care plans into structured daily care, ensuring every interaction, observation, and update is accurately recorded, easy to access, and aligned with each person's unique needs.
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-wrap gap-4 pt-2">
              <Button 
                variant="outline" 
                size="lg" 
                className="rounded-full border-slate-200 text-slate-700 bg-white hover:bg-slate-50 font-semibold flex items-center gap-3 px-6 h-12 transition-all duration-300 shadow-sm"
              >
                Explore Features
                <div className="flex h-7 w-7 items-center justify-center rounded-full bg-slate-100 text-slate-600 ml-1">
                  <ArrowUpRight className="h-4 w-4" />
                </div>
              </Button>
              
              <Button 
                variant="default" 
                size="lg" 
                className="rounded-full bg-primary hover:bg-primary/95 text-white font-semibold flex items-center gap-3 px-6 h-12 transition-all duration-300 shadow-md"
              >
                Book a Demo
                <div className="flex h-7 w-7 items-center justify-center rounded-full bg-white/20 text-white ml-1">
                  <ArrowUpRight className="h-4 w-4" />
                </div>
              </Button>
            </div>

          </div>

          {/* Right Column: Featured Caregiver Illustration (5 columns) */}
          <div className="lg:col-span-5 relative w-full aspect-[4/3] md:aspect-[1.1] max-w-md lg:max-w-none mx-auto animate-in fade-in slide-in-from-right-4 duration-500">
            <Image
              src="/images/assessment-careplanning/hero-image.png"
              alt="Caregiver holding clipboard with checkmark badges"
              fill
              priority
              sizes="(max-width: 1024px) 100vw, 40vw"
              className="object-contain object-center lg:object-right"
            />
          </div>

        </div>

      </div>
    </section>
  )
}

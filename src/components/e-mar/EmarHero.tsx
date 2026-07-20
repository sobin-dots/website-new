'use client'

import * as React from "react"
import Image from "next/image"
import Link from "next/link"
import { ArrowUpRight } from "lucide-react"

export function EmarHero() {
  return (
    <section className="pt-2 pb-12 md:pt-4 md:pb-20 bg-white overflow-hidden text-slate-900">
      <div className="mx-auto max-w-7xl px-6 md:px-8">
        
        {/* 2-Column Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-10 items-center">
          
          {/* Left Column (6 cols) */}
          <div className="lg:col-span-6 space-y-8 animate-in fade-in slide-in-from-left-4 duration-500">
            <div className="space-y-4">
              <h1 className="text-4xl md:text-5xl lg:text-[52px] font-bold tracking-tight text-primary leading-[1.15]">
                Medication <br />
                Management (EMAR)
              </h1>
              <h2 className="text-xl md:text-2xl font-bold text-slate-700 font-sans">
                Capture Every Care Interaction With Confidence
              </h2>
              <p className="text-sm md:text-base text-slate-500 leading-relaxed max-w-xl">
                Cantra's Electronic Medication Administration Record (EMAR) Helps Care Teams Administer Medications Accurately, Reduce Avoidable Errors, Monitor Stock, And Maintain Complete Compliance—All Within One Intuitive Platform.
              </p>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-4 pt-2">
              <Link 
                href="/free-trial"
                className="inline-flex items-center justify-center gap-3 rounded-full border border-slate-300 hover:bg-slate-50 text-slate-700 font-semibold px-6 h-12 transition-all duration-300 shadow-sm text-sm"
              >
                Explore eMAR
                <div className="flex h-7 w-7 items-center justify-center rounded-full border border-slate-300 text-slate-600 ml-1">
                  <ArrowUpRight className="h-4 w-4" />
                </div>
              </Link>
              
              <Link 
                href="/book-demo"
                className="inline-flex items-center justify-center gap-3 rounded-full bg-primary hover:bg-primary/95 text-white font-semibold px-6 h-12 transition-all duration-300 shadow-md text-sm"
              >
                Book a Demo
                <div className="flex h-7 w-7 items-center justify-center rounded-full bg-white/20 text-white ml-1">
                  <ArrowUpRight className="h-4 w-4" />
                </div>
              </Link>
            </div>
          </div>

          {/* Right Column: 3-Image Collage (6 cols) */}
          <div className="lg:col-span-6 animate-in fade-in slide-in-from-right-4 duration-500">
            <div className="grid grid-cols-2 gap-4 items-stretch">
              
              {/* Left Sub-column (2 stacked photos) */}
              <div className="space-y-4 flex flex-col justify-between">
                <div className="relative w-full aspect-[1.3] rounded-2xl overflow-hidden shadow-sm">
                  <Image 
                    src="/images/e-mar/medication-management-1.png"
                    alt="Caregiver giving pill to senior resident with eMAR tablet"
                    fill
                    sizes="25vw"
                    className="object-cover object-center"
                    priority
                  />
                </div>
                <div className="relative w-full aspect-[1.3] rounded-2xl overflow-hidden shadow-sm">
                  <Image 
                    src="/images/e-mar/medication-management-3.png"
                    alt="Medication bottles, inhalers, and blister packs"
                    fill
                    sizes="25vw"
                    className="object-cover object-center"
                    priority
                  />
                </div>
              </div>

              {/* Right Sub-column (1 tall vertical photo) */}
              <div className="relative w-full aspect-[0.75] rounded-2xl overflow-hidden shadow-sm">
                <Image 
                  src="/images/e-mar/medication-management-2.png"
                  alt="Caregiver scanning medication badge with resident in armchair"
                  fill
                  sizes="25vw"
                  className="object-cover object-center"
                  priority
                />
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  )
}

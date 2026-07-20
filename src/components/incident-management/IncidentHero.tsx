'use client'

import * as React from "react"
import Image from "next/image"
import Link from "next/link"
import { ArrowUpRight } from "lucide-react"

export function IncidentHero() {
  return (
    <section className="pt-2 pb-12 md:pt-4 md:pb-20 bg-white overflow-hidden text-slate-900">
      <div className="mx-auto max-w-7xl px-6 md:px-8">
        
        {/* 2-Column Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Copy Column (6 cols) */}
          <div className="lg:col-span-6 space-y-8 animate-in fade-in slide-in-from-left-4 duration-500">
            <div className="space-y-4">
              <h1 className="text-4xl md:text-5xl lg:text-[52px] font-bold tracking-tight text-primary leading-[1.15]">
                Turn Every Incident Into Better Care
              </h1>
              <h2 className="text-xl md:text-2xl font-bold text-slate-700 font-sans">
                Respond Faster. Protect Better. Learn Continuously.
              </h2>
              <p className="text-sm md:text-base text-slate-500 leading-relaxed max-w-xl">
                Empower Your Team To Protect Residents, Meet Regulatory Expectations, And Drive Continuous Quality Improvement—All From A Single Platform.
              </p>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-4 pt-2">
              <Link 
                href="/free-trial"
                className="inline-flex items-center justify-center gap-3 rounded-full border border-slate-300 hover:bg-slate-50 text-slate-700 font-semibold px-6 h-12 transition-all duration-300 shadow-sm text-sm"
              >
                Start free trial
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

          {/* Right Column: 3-Column 7-Image Mosaic Grid (6 cols) */}
          <div className="lg:col-span-6 animate-in fade-in slide-in-from-right-4 duration-500">
            <div className="grid grid-cols-3 gap-3 md:gap-4 items-center">
              
              {/* Mosaic Col 1 */}
              <div className="space-y-3 md:space-y-4">
                <div className="relative aspect-[1.1] rounded-2xl overflow-hidden shadow-sm">
                  <Image 
                    src="/images/incident-management/hero-image-4.png"
                    alt="Tablet and mobile app mockup"
                    fill
                    sizes="20vw"
                    className="object-cover object-center"
                  />
                </div>
                <div className="relative aspect-[1.1] rounded-2xl overflow-hidden shadow-sm">
                  <Image 
                    src="/images/incident-management/hero-image-5.png"
                    alt="Caregiver assisting senior after a fall incident"
                    fill
                    sizes="20vw"
                    className="object-cover object-center"
                  />
                </div>
              </div>

              {/* Mosaic Col 2 (Center) */}
              <div className="space-y-3 md:space-y-4">
                <div className="relative aspect-[1.1] rounded-2xl overflow-hidden shadow-sm">
                  <Image 
                    src="/images/incident-management/hero-image-1.png"
                    alt="Incidents analytics dashboard view"
                    fill
                    sizes="20vw"
                    className="object-cover object-center"
                  />
                </div>
                <div className="relative aspect-[1.1] rounded-2xl overflow-hidden shadow-sm">
                  <Image 
                    src="/images/incident-management/hero-image-2.png"
                    alt="Caregivers communicating with senior resident"
                    fill
                    sizes="20vw"
                    className="object-cover object-center"
                  />
                </div>
                <div className="relative aspect-[1.1] rounded-2xl overflow-hidden shadow-sm">
                  <Image 
                    src="/images/incident-management/hero-image-3.png"
                    alt="Caregivers conducting clinical check with tablet"
                    fill
                    sizes="20vw"
                    className="object-cover object-center"
                  />
                </div>
              </div>

              {/* Mosaic Col 3 */}
              <div className="space-y-3 md:space-y-4">
                <div className="relative aspect-[1.1] rounded-2xl overflow-hidden shadow-sm">
                  <Image 
                    src="/images/incident-management/hero-image-6.png"
                    alt="Caregiver assisting resident in wheelchair"
                    fill
                    sizes="20vw"
                    className="object-cover object-center"
                  />
                </div>
                <div className="relative aspect-[1.1] rounded-2xl overflow-hidden shadow-sm">
                  <Image 
                    src="/images/incident-management/hero-image-7.png"
                    alt="Hand holding phone displaying mobile incident app"
                    fill
                    sizes="20vw"
                    className="object-cover object-center"
                  />
                </div>
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  )
}

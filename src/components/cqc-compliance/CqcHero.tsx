'use client'

import * as React from "react"
import Image from "next/image"
import Link from "next/link"
import { ArrowUpRight } from "lucide-react"

export function CqcHero() {
  return (
    <section className="pt-2 pb-12 md:pt-4 md:pb-20 bg-white overflow-hidden text-slate-900">
      <div className="mx-auto max-w-7xl px-6 md:px-8">
        
        {/* 2-Column Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column (7 cols) */}
          <div className="lg:col-span-7 space-y-8 animate-in fade-in slide-in-from-left-4 duration-500">
            <div className="space-y-4">
              <h1 className="text-4xl md:text-5xl lg:text-[54px] font-bold tracking-tight text-primary leading-[1.15]">
                Stay Inspection-Ready. Every Day.
              </h1>
              <h2 className="text-xl md:text-2xl font-bold text-slate-700 font-sans">
                CQC Compliance, Audits & Reporting
              </h2>
              <p className="text-sm md:text-base text-slate-500 leading-relaxed max-w-xl">
                Great Care Deserves Great Evidence. Cantra Automatically Captures, Organises, And Presents The Evidence Your Organisation Needs To Demonstrate Compliance With CQC's Framework.
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

          {/* Right Column: Featured Caregiver Illustration (5 cols) */}
          <div className="lg:col-span-5 relative w-full aspect-[4/3] md:aspect-[1.1] max-w-md lg:max-w-none mx-auto animate-in fade-in slide-in-from-right-4 duration-500">
            <Image
              src="/images/cqc-compliance/hero-image.png"
              alt="Caregiver holding clipboard with compliance badge icons"
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

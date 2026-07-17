'use client'

import * as React from "react"
import Image from "next/image"
import Link from "next/link"
import { ArrowRight } from "lucide-react"

export function CareConnectBanner() {
  return (
    <section className="py-12 bg-white">
      <div className="mx-auto max-w-7xl px-6 md:px-8">
        
        {/* Banner Card Container */}
        <div className="bg-secondary rounded-[32px] overflow-hidden grid grid-cols-1 lg:grid-cols-12 gap-8 items-center p-8 md:p-12 lg:p-14 shadow-sm text-white">
          
          {/* Left Text Block (7 columns) */}
          <div className="lg:col-span-7 space-y-8">
            <h2 className="text-xl md:text-2xl lg:text-[28px] leading-[1.35] font-sans font-medium tracking-tight">
              By Connecting Care Planning with Care Delivery, Care Teams Deliver Safer Care, Save Co-Workers' Time, And Deliver Compliant Care Every Day.
            </h2>
            
            <div className="pt-2">
              <Link 
                href="/free-trial"
                className="inline-flex items-center gap-2 rounded-full bg-white hover:bg-slate-50 text-secondary font-bold text-sm px-6 py-3 transition-colors shadow-md"
              >
                Get Started
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>

          {/* Right Image Block (5 columns) */}
          <div className="lg:col-span-5 relative w-full aspect-[1.25] md:aspect-[1.4] rounded-2xl overflow-hidden">
            <Image
              src="/images/care-management/by-connecting-care-planning.png"
              alt="Care planning and delivery connection"
              fill
              sizes="(max-width: 1024px) 100vw, 40vw"
              className="object-cover object-center"
            />
          </div>

        </div>

      </div>
    </section>
  )
}

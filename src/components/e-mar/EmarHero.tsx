'use client'

import * as React from "react"
import Image from "next/image"
import Link from "next/link"
import { ArrowUpRight } from "lucide-react"

export function EmarHero() {
  return (
    <section className="py-4 sm:py-8 bg-white overflow-hidden text-[#293836]">
      <div className="w-full">
        
        {/* 2-Column Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          
          {/* Left Column (6 cols) */}
          <div className="lg:col-span-6 flex flex-col justify-center items-start gap-5 sm:gap-[30px] max-w-[596px]">
            
            {/* Title & Copy */}
            <div className="flex flex-col items-start gap-3 sm:gap-4">
              <h1 className="text-2xl sm:text-3xl md:text-[40px] font-bold leading-tight md:leading-[66px] capitalize text-[#293836] font-['Lato',sans-serif]">
                Medication Management (eMAR)
              </h1>
              <h2 className="text-lg sm:text-xl md:text-[24px] font-medium leading-snug md:leading-[32px] capitalize text-[#293836] font-['Lato',sans-serif]">
                Capture Every Care Interaction With Confidence
              </h2>
              <p className="text-xs sm:text-sm md:text-base font-normal leading-relaxed md:leading-[27px] text-[#293836] capitalize font-['Inter',sans-serif] max-w-[610px]">
                Cantra's Electronic Medication Administration Record (eMAR) helps care teams administer medications accurately, reduce avoidable errors, monitor stock, and maintain complete compliance—all within one intuitive platform.
              </p>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-wrap sm:flex-nowrap items-center gap-[10px] pt-1 w-full sm:w-auto">
              {/* Button 1: Explore eMAR */}
              <Link 
                href="#features"
                className="inline-flex items-center justify-center gap-[11px] sm:gap-[13px] rounded-full border border-[#527A73] hover:bg-[#EAF0EE]/60 text-[#3D5D58] font-medium text-[12px] sm:text-[13px] px-4 sm:px-5 py-2 transition-colors h-[44px] sm:h-[48px] w-full sm:w-auto min-w-0 sm:min-w-[189px] bg-transparent"
              >
                <span>Explore eMAR</span>
                <div className="flex h-7 w-7 sm:h-8 sm:w-8 items-center justify-center rounded-full border border-[#3D5D58] text-[#3D5D58] shrink-0">
                  <ArrowUpRight className="h-3.5 w-3.5 sm:h-4 sm:w-4 stroke-[2]" />
                </div>
              </Link>
              
              {/* Button 2: Book a Demo */}
              <Link 
                href="/book-demo"
                className="inline-flex items-center justify-center gap-[11px] sm:gap-[13px] rounded-full border border-[#527A73] bg-[#527A73] hover:bg-[#527A73]/90 text-white font-medium text-[12px] sm:text-[13px] px-4 sm:px-5 py-2 transition-colors h-[44px] sm:h-[48px] w-full sm:w-auto min-w-0 sm:min-w-[171px]"
              >
                <span>Book a Demo</span>
                <div className="flex h-7 w-7 sm:h-8 sm:w-8 items-center justify-center rounded-full border border-white text-white shrink-0">
                  <ArrowUpRight className="h-3.5 w-3.5 sm:h-4 sm:w-4 stroke-[2]" />
                </div>
              </Link>
            </div>
          </div>

          {/* Right Column: 3-Image Collage (6 cols) */}
          <div className="lg:col-span-6 w-full mt-4 lg:mt-0">
            <div className="grid grid-cols-2 gap-4 items-stretch">
              
              {/* Left Sub-column (2 stacked photos) */}
              <div className="space-y-4 flex flex-col justify-between">
                <div className="relative w-full aspect-[1.3] rounded-[20px] overflow-hidden">
                  <Image 
                    src="/images/e-mar/medication-management-1.png"
                    alt="Caregiver giving pill to senior resident with eMAR tablet"
                    fill
                    sizes="(max-width: 1024px) 50vw, 25vw"
                    className="object-cover object-center"
                    priority
                  />
                </div>
                <div className="relative w-full aspect-[1.3] rounded-[20px] overflow-hidden">
                  <Image 
                    src="/images/e-mar/medication-management-3.png"
                    alt="Medication bottles, inhalers, and blister packs"
                    fill
                    sizes="(max-width: 1024px) 50vw, 25vw"
                    className="object-cover object-center"
                    priority
                  />
                </div>
              </div>

              {/* Right Sub-column (1 tall vertical photo) */}
              <div className="relative w-full aspect-[0.75] rounded-[20px] overflow-hidden">
                <Image 
                  src="/images/e-mar/medication-management-2.png"
                  alt="Caregiver scanning medication badge with resident in armchair"
                  fill
                  sizes="(max-width: 1024px) 50vw, 25vw"
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

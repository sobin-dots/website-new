'use client'

import Image from "next/image"
import Link from "next/link"
import { ArrowUpRight } from "lucide-react"

export function CqcHero() {
  return (
    <section className="pt-4 sm:pt-6 md:pt-4 pb-0 bg-white overflow-hidden text-[#293836]">
      <div className="w-full">

        {/* 2-Column Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">

          {/* Left Column (7 cols) */}
          <div className="lg:col-span-6 flex flex-col justify-center items-start gap-5 sm:gap-[30px] max-w-none md:max-w-[680px] scroll-section">

            {/* Title & Copy */}
            <div className="flex flex-col items-start gap-3 sm:gap-4">
              <h1 className="text-2xl sm:text-3xl md:text-[40px] font-bold leading-tight md:leading-[66px] capitalize font-['Lato',sans-serif]">
                Stay Inspection-Ready. Every Day.
              </h1>
              <h2 className="text-lg sm:text-xl md:text-[24px] font-medium leading-snug md:leading-[32px] capitalize text-[#293836] font-['Lato',sans-serif]">
                CQC Compliance, Audits & Reporting
              </h2>
              <p className="text-xs sm:text-sm md:text-base font-normal leading-relaxed md:leading-[27px] text-[#293836] capitalize font-['Inter',sans-serif] max-w-[610px]">
                Great Care Deserves Great Evidence. Cantra Automatically Captures, Organises, And Presents The Evidence Your Organisation Needs To Demonstrate Compliance With CQC's Framework.
              </p>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-wrap sm:flex-nowrap items-center gap-[10px] pt-1 w-full sm:w-auto">
              {/* Button 1: Start free trial */}
              <Link
                href="/free-trial"
                className="inline-flex items-center justify-center gap-[11px] sm:gap-[13px] rounded-full border border-[#527A73] hover:bg-[#EAF0EE]/60 text-[#3D5D58] font-medium text-[12px] sm:text-[13px] px-4 sm:px-5 py-2 transition-colors h-[44px] sm:h-[48px] w-full sm:w-auto min-w-0 sm:min-w-[189px] bg-transparent"
              >
                <span>Start free trial</span>
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

          {/* Right Column: Featured Caregiver Illustration (5 cols) */}
          <div className="lg:col-span-6 relative w-full h-[300px] sm:h-[420px] md:h-[480px] lg:h-[540px] max-w-md lg:max-w-none mx-auto mt-4 lg:mt-0 self-end scroll-section">
            <Image
              src="/images/cqc-compliance/hero-image.png"
              alt="Caregiver holding clipboard with compliance badge icons"
              fill
              priority
              sizes="(max-width: 1024px) 100vw, 40vw"
              className="object-contain object-bottom lg:object-right-bottom"
            />
          </div>

        </div>

      </div>
    </section>
  )
}

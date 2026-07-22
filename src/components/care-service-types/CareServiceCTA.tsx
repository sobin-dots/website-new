'use client'

import * as React from "react"
import Link from "next/link"
import { ArrowUpRight } from "lucide-react"

export function CareServiceCTA() {
  return (
    <section className="py-16 md:py-24 bg-[#FAF5F2] text-[#3D5D58] text-center">
      <div className="mx-auto max-w-[1440px] px-6 md:px-8 space-y-[20px] flex flex-col items-center justify-center">
        
        {/* Title */}
        <h2 className="text-3xl sm:text-4xl md:text-[40px] font-bold leading-tight md:leading-[66px] capitalize text-[#3D5D58] font-['Lato',sans-serif] text-center max-w-[1440px]">
          Experience Cantra in Your Care Environment
        </h2>

        {/* Subtitle Paragraph (Frame 745) */}
        <div className="max-w-[786px] mx-auto">
          <p className="text-sm md:text-base font-normal leading-[30px] capitalize text-[#3D5D58] font-['Lato',sans-serif] text-center">
            See how Cantra can simplify your daily operations, strengthen compliance, and empower your team with technology built specifically for your care setting.
          </p>
        </div>

        {/* Dual Action Buttons (Frame 859 / 858) */}
        <div className="flex flex-row items-center justify-center gap-[10px] pt-3">
          {/* Button 1: Start free trial (Frame 856) */}
          <Link 
            href="/free-trial"
            className="inline-flex items-center justify-center gap-[13px] rounded-full border border-[#527A73] hover:bg-[#EAF0EE]/50 text-[#3D5D58] font-medium text-[13px] px-5 py-3 transition-colors h-[56px] min-w-[171px] bg-transparent"
          >
            <span>Start free trial</span>
            <div className="flex h-8 w-8 items-center justify-center rounded-full border border-[#3D5D58] text-[#3D5D58] shrink-0">
              <ArrowUpRight className="h-4 w-4 stroke-[2]" />
            </div>
          </Link>

          {/* Button 2: Book a Demo (Frame 857) */}
          <Link 
            href="/book-demo"
            className="inline-flex items-center justify-center gap-[13px] rounded-full border border-[#527A73] hover:bg-[#EAF0EE] text-[#3D5D58] font-medium text-[13px] px-5 py-3 transition-colors h-[56px] min-w-[171px] bg-[#F5F8F7]"
          >
            <span>Book a Demo</span>
            <div className="flex h-8 w-8 items-center justify-center rounded-full border border-[#3D5D58] text-[#3D5D58] shrink-0">
              <ArrowUpRight className="h-4 w-4 stroke-[2]" />
            </div>
          </Link>
        </div>

      </div>
    </section>
  )
}


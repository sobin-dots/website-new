'use client'

import Link from "next/link"
import { ArrowUpRight } from "lucide-react"

interface CareServiceCTAProps {
  title?: string
  subtitle?: string
  primaryButtonText?: string
  primaryButtonHref?: string
  secondaryButtonText?: string
  secondaryButtonHref?: string
}

export function CareServiceCTA({
  title = "Experience Cantra in Your Care Environment",
  subtitle = "See how Cantra can simplify your daily operations, strengthen compliance, and empower your team with technology built specifically for your care setting.",
  primaryButtonText = "Start free trial",
  primaryButtonHref = "/free-trial",
  secondaryButtonText = "Book a Demo",
  secondaryButtonHref = "/book-demo"
}: CareServiceCTAProps) {
  return (
    <section className="py-16 md:py-24 bg-[#3D5D58] text-white text-center">
      <div className="mx-auto max-w-[1240px] px-6 md:px-8 space-y-[24px] flex flex-col items-center justify-center">

        {/* Title */}
        <h2 className="text-2xl sm:text-3xl md:text-[40px] font-bold leading-tight md:leading-[60px] text-white font-['Lato',sans-serif] text-center">
          {title}
        </h2>

        {/* Subtitle Paragraph */}
        <div className="max-w-[786px] mx-auto">
          <p className="text-sm md:text-base font-normal leading-[28px] text-white/80 font-['Inter',sans-serif] text-center">
            {subtitle}
          </p>
        </div>

        {/* Dual Action Buttons */}
        <div className="flex flex-row flex-wrap items-center justify-center gap-4 pt-3">
          {/* Button 1: Left / Outline Button */}
          <Link
            href={primaryButtonHref}
            className="inline-flex items-center justify-center gap-[13px] rounded-full border border-white/30 hover:bg-white/10 text-white font-medium text-[13px] px-5 py-3 transition-colors h-[56px] min-w-[171px] bg-transparent"
          >
            <span>{primaryButtonText}</span>
            <div className="flex h-8 w-8 items-center justify-center rounded-full border border-white/30 text-white shrink-0">
              <ArrowUpRight className="h-4 w-4 stroke-[2]" />
            </div>
          </Link>

          {/* Button 2: Right / Filled Button */}
          <Link
            href={secondaryButtonHref}
            className="inline-flex items-center justify-center gap-[13px] rounded-full bg-white hover:bg-white/90 text-[#3D5D58] font-medium text-[13px] px-5 py-3 transition-colors h-[56px] min-w-[171px]"
          >
            <span>{secondaryButtonText}</span>
            <div className="flex h-8 w-8 items-center justify-center rounded-full bg-[#EAF0EE] text-[#3D5D58] shrink-0">
              <ArrowUpRight className="h-4 w-4 stroke-[2]" />
            </div>
          </Link>
        </div>

      </div>
    </section>
  )
}

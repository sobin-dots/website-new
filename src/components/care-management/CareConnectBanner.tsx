'use client'

import * as React from "react"
import Image from "next/image"
import Link from "next/link"
import { ArrowUpRight } from "lucide-react"

export function CareConnectBanner() {
  return (
    <section className="py-4 sm:py-8 bg-white overflow-hidden">
      <div className="w-full">

        {/* Banner Card Container (Frame 2238) */}
        <div className="relative bg-[#A06256] rounded-[20px] flex flex-col lg:flex-row items-center justify-between px-6 sm:px-10 lg:px-12 py-8 sm:py-10 lg:py-0 min-h-[338px] isolation-isolate">

          {/* Left Text & Button Stack (Frame 2239) */}
          <div className="flex flex-col items-start gap-6 sm:gap-[29px] max-w-[623px] z-10 py-6 lg:py-10">

            {/* Heading / Quote */}
            <h2 className="text-xl sm:text-2xl lg:text-[32px] italic leading-snug lg:leading-[59px] capitalize text-white font-['Lato',sans-serif]">
              By connecting care planning with care delivery, Cantra enables safer decisions, better collaboration, and greater confidence in every shift.
            </h2>

            {/* CTA Button (Frame 430 & 428) */}
            <Link
              href="/learn-more"
              className="inline-flex items-center justify-center gap-2.5 rounded-full bg-[#FAF5F2] hover:bg-white text-[#B06246] font-medium text-[15px] px-5 h-[58px] min-w-[171px] transition-colors shrink-0"
            >
              <span>Learn More</span>
              <div className="w-[39px] h-[39px] rounded-full bg-[#F4EAE0] flex items-center justify-center shrink-0">
                <ArrowUpRight className="w-5 h-5 text-[#B06246] stroke-[2.5]" />
              </div>
            </Link>

          </div>

          {/* Right Image Visual (ChatGPTImageJul16202602_12_58PM / by-connecting-care-planning.png) */}
          <div className="relative w-full lg:w-[470px] h-[240px] sm:h-[320px] lg:h-[440px] lg:absolute lg:right-0 lg:-top-[50px] lg:bottom-0 z-0 mt-4 lg:mt-0 pointer-events-none">
            <Image
              src="/images/care-management/by-connecting-care-planning.png"
              alt="By connecting care planning with care delivery"
              fill
              priority
              sizes="(max-width: 1024px) 100vw, 470px"
              className="object-contain lg:object-right-bottom"
            />
          </div>

        </div>

      </div>
    </section>
  )
}


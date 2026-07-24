'use client'

import Image from "next/image"
import Link from "next/link"
import { ArrowUpRight } from "lucide-react"

export function CareConnectBanner() {
  return (
    <section className="pt-16 pb-4 sm:pt-20 sm:pb-8 bg-white">
      <div className="w-full">

        {/* Banner Card Container (Frame 2238) */}
        <div className="relative max-w-[1240px] mx-auto bg-[#A06256] rounded-[24px] sm:rounded-[32px] flex flex-col lg:flex-row items-center justify-between px-6 sm:px-10 lg:px-12 py-8 sm:py-10 lg:py-0 min-h-[338px] isolation-isolate scroll-section shadow-sm">

          {/* Overflow-hidden container for card-bound elements like glows */}
          <div className="absolute inset-0 rounded-[24px] sm:rounded-[32px] overflow-hidden pointer-events-none z-0">
            {/* Decorative background glows */}
            <div className="absolute -left-16 -bottom-16 w-64 h-64 bg-white/5 rounded-full blur-3xl pointer-events-none" />
            <div className="absolute right-[25%] -top-20 w-80 h-80 bg-white/5 rounded-full blur-3xl pointer-events-none" />
          </div>

          {/* Left Text & Button Stack (Frame 2239) */}
          <div className="flex flex-col items-start gap-6 lg:gap-8 max-w-[623px] lg:max-w-[55%] z-10 py-2 lg:py-10">

            {/* Heading / Quote */}
            <h2 className="text-lg sm:text-xl md:text-2xl lg:text-[30px] italic leading-relaxed lg:leading-[56px] capitalize text-white font-metal font-normal">
              By connecting care planning with care delivery, Cantra enables safer decisions, better collaboration, and greater confidence in every shift.
            </h2>

            {/* CTA Button (Frame 430 & 428) */}
            <Link
              href="/learn-more"
              className="inline-flex items-center justify-center gap-2.5 rounded-full bg-[#FAF5F2] hover:bg-white text-[#B06246] font-semibold text-sm sm:text-[15px] px-5 sm:px-6 h-[50px] sm:h-[58px] min-w-[150px] sm:min-w-[171px] transition-colors shrink-0 shadow-sm"
            >
              <span>Learn More</span>
              <div className="w-[32px] h-[32px] sm:w-[39px] sm:h-[39px] rounded-full bg-[#F4EAE0] flex items-center justify-center shrink-0">
                <ArrowUpRight className="w-4 h-4 sm:w-5 sm:h-5 text-[#B06246] stroke-[2.5]" />
              </div>
            </Link>

          </div>

          {/* Right Image Visual */}
          <div className="relative w-full max-w-[320px] sm:max-w-[400px] lg:max-w-none lg:w-[450px] h-[200px] sm:h-[260px] lg:h-[410px] lg:absolute lg:right-8 lg:bottom-0 lg:top-auto z-10 mt-6 lg:mt-0 pointer-events-none self-center lg:self-auto shrink-0">
            <Image
              src="/images/care-management/by-connecting-care-planning.png"
              alt="By connecting care planning with care delivery"
              fill
              priority
              sizes="(max-width: 1024px) 100vw, 450px"
              className="object-contain object-bottom lg:object-right-bottom"
            />
          </div>

        </div>

      </div>
    </section>
  )
}

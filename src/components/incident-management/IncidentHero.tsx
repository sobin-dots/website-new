'use client'

import Image from "next/image"
import Link from "next/link"
import { ArrowUpRight } from "lucide-react"

export function IncidentHero() {
  return (
    <section className="pt-2 pb-12 md:pt-4 md:pb-20 bg-white overflow-hidden text-slate-900">
      <div className="mx-auto max-w-7xl px-6 md:px-8">

        {/* 2-Column Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">

          {/* Left Copy Column (6 cols) */}
          <div className="lg:col-span-6 flex flex-col justify-center items-start gap-5 sm:gap-[30px] max-w-[596px]">

            {/* Title & Copy */}
            <div className="flex flex-col items-start gap-3 sm:gap-4">
              <h1 className="text-2xl sm:text-3xl md:text-[40px] font-bold leading-tight md:leading-[66px] capitalize text-[#293836] font-['Lato',sans-serif]">
                Turn Every Incident Into Better Care
              </h1>
              <h2 className="text-lg sm:text-xl md:text-[24px] font-medium leading-snug md:leading-[32px] capitalize text-[#293836] font-['Lato',sans-serif]">
                Respond Faster. Protect Better. Learn Continuously.
              </h2>
              <p className="text-xs sm:text-sm md:text-base font-normal leading-relaxed md:leading-[27px] text-[#293836] capitalize font-['Inter',sans-serif] max-w-[610px]">
                Empower Your Team To Protect Residents, Meet Regulatory Expectations, And Drive Continuous Quality Improvement—All From A Single Platform.
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

          {/* Right Column: 3-Column 7-Image Mosaic Grid (6 cols) */}
          <div className="lg:col-span-6 w-full mt-4 lg:mt-0">
            <div className="grid grid-cols-3 gap-3 md:gap-4 items-center">

              {/* Mosaic Col 1 */}
              <div className="space-y-3 md:space-y-4">
                <div className="relative aspect-[1.1] rounded-[20px] overflow-hidden">
                  <Image
                    src="/images/incident-management/hero-image-4.png"
                    alt="Tablet and mobile app mockup"
                    fill
                    sizes="(max-width: 1024px) 33vw, 15vw"
                    className="object-cover object-center"
                  />
                </div>
                <div className="relative aspect-[1.1] rounded-[20px] overflow-hidden">
                  <Image
                    src="/images/incident-management/hero-image-5.png"
                    alt="Caregiver assisting senior after a fall incident"
                    fill
                    sizes="(max-width: 1024px) 33vw, 15vw"
                    className="object-cover object-center"
                  />
                </div>
              </div>

              {/* Mosaic Col 2 (Center) */}
              <div className="space-y-3 md:space-y-4">
                <div className="relative aspect-[1.1] rounded-[20px] overflow-hidden">
                  <Image
                    src="/images/incident-management/hero-image-1.png"
                    alt="Incidents analytics dashboard view"
                    fill
                    sizes="(max-width: 1024px) 33vw, 15vw"
                    className="object-cover object-center"
                  />
                </div>
                <div className="relative aspect-[1.1] rounded-[20px] overflow-hidden">
                  <Image
                    src="/images/incident-management/hero-image-2.png"
                    alt="Caregivers communicating with senior resident"
                    fill
                    sizes="(max-width: 1024px) 33vw, 15vw"
                    className="object-cover object-center"
                  />
                </div>
                <div className="relative aspect-[1.1] rounded-[20px] overflow-hidden">
                  <Image
                    src="/images/incident-management/hero-image-3.png"
                    alt="Caregivers conducting clinical check with tablet"
                    fill
                    sizes="(max-width: 1024px) 33vw, 15vw"
                    className="object-cover object-center"
                  />
                </div>
              </div>

              {/* Mosaic Col 3 */}
              <div className="space-y-3 md:space-y-4">
                <div className="relative aspect-[1.1] rounded-[20px] overflow-hidden">
                  <Image
                    src="/images/incident-management/hero-image-6.png"
                    alt="Caregiver assisting resident in wheelchair"
                    fill
                    sizes="(max-width: 1024px) 33vw, 15vw"
                    className="object-cover object-center"
                  />
                </div>
                <div className="relative aspect-[1.1] rounded-[20px] overflow-hidden">
                  <Image
                    src="/images/incident-management/hero-image-7.png"
                    alt="Hand holding phone displaying mobile incident app"
                    fill
                    sizes="(max-width: 1024px) 33vw, 15vw"
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

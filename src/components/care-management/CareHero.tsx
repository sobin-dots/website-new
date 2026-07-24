'use client'

import * as React from "react"
import Image from "next/image"
import Link from "next/link"
import { ArrowUpRight, SlidersHorizontal } from "lucide-react"

export function CareHero() {
  return (
    <section className="py-4 sm:py-8 bg-white overflow-hidden text-[#293836]">
      <div className="w-full">
        
        {/* 2-Column Hero Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          
          {/* Left Column: Heading, Subtitle & CTAs (6 columns) */}
          <div className="lg:col-span-6 flex flex-col justify-center items-start gap-5 sm:gap-[30px] max-w-[596px] scroll-section">
            
            {/* Title & Copy (Frame 746 & 744) */}
            <div className="flex flex-col items-start gap-3 sm:gap-4">
              <h1 className="text-2xl sm:text-3xl md:text-[40px] font-bold leading-tight md:leading-[66px] capitalize text-[#293836] font-['Lato',sans-serif]">
                Delivering person-centred care with confidence, every day.
              </h1>
              <p className="text-xs sm:text-sm md:text-base font-normal leading-relaxed md:leading-[27px] text-[#293836] capitalize font-['Inter',sans-serif] max-w-[610px]">
                Cantra helps care teams transform care plans into structured daily care, ensuring every interaction, observation, and update is accurately recorded, easy to access, and aligned with each person's unique needs.
              </p>
            </div>

            {/* CTA Buttons (Frame 859 / 858) */}
            <div className="flex flex-wrap sm:flex-nowrap items-center gap-[10px] pt-1 w-full sm:w-auto">
              {/* Button 1: Explore Features (Frame 856) */}
              <Link 
                href="#features"
                className="inline-flex items-center justify-center gap-[11px] sm:gap-[13px] rounded-full border border-[#527A73] hover:bg-[#EAF0EE]/60 text-[#3D5D58] font-medium text-[12px] sm:text-[13px] px-4 sm:px-5 py-2 transition-colors h-[44px] sm:h-[48px] w-full sm:w-auto min-w-0 sm:min-w-[189px] bg-transparent"
              >
                <span>Explore Features</span>
                <div className="flex h-7 w-7 sm:h-8 sm:w-8 items-center justify-center rounded-full border border-[#3D5D58] text-[#3D5D58] shrink-0">
                  <ArrowUpRight className="h-3.5 w-3.5 sm:h-4 sm:w-4 stroke-[2]" />
                </div>
              </Link>

              {/* Button 2: Book a Demo (Frame 857) */}
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

          {/* Right Column: Hero Graphic Layer Stack (Frame 1860) */}
          <div className="lg:col-span-6 relative w-full h-[350px] sm:h-[480px] md:h-[560px] lg:h-[600px] flex items-center justify-center mt-4 lg:mt-0 scroll-section">
            
            {/* 1. Dark Green Arch Background (Rectangle 82) */}
            <div className="absolute right-0 bottom-0 w-[82%] sm:w-[78%] h-[82%] sm:h-[84%] bg-[#3D5D58] rounded-t-[130px] sm:rounded-t-[200px] rounded-br-none rounded-bl-[32px] sm:rounded-bl-[42px] z-0" />

            {/* 2. Caregiver Main Image (ChatGPTImageJul92026 / hero-image.png) */}
            <div className="absolute inset-0 z-10 flex items-end justify-center pointer-events-none">
              <Image
                src="/images/care-management/hero-image.png"
                alt="Caregiver delivering person-centred care with laptop"
                fill
                priority
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-contain object-bottom"
              />
            </div>

            {/* 3. Floating Dashboard Preview Image (hero-image-dashboard.png) */}
            <div className="absolute left-1 sm:left-4 md:left-8 top-[18%] sm:top-[18%] w-[130px] sm:w-[190px] md:w-[240px] z-20">
              <Image
                src="/images/care-management/hero-image-dashboard.png"
                alt="Cantra Care Management Dashboard Preview"
                width={240}
                height={180}
                className="w-full h-auto object-contain drop-shadow-md"
              />
            </div>

            {/* 4. Top Right Floating Vision Control Badge (Frame 1774) */}
            <div className="absolute right-1 sm:right-6 top-1 sm:top-3 z-20 bg-white px-2.5 sm:px-3.5 py-1.5 sm:py-2.5 rounded-[8px] sm:rounded-[10px] shadow-[-2px_4px_16px_rgba(0,0,0,0.11)] border border-slate-100 flex items-center gap-2 sm:gap-3">
              <div className="space-y-0.5">
                <span className="text-xs sm:text-[17px] font-bold text-[#293836] font-['Lato',sans-serif] block leading-none">
                  99.8%
                </span>
                <span className="text-[8px] sm:text-[10px] font-normal text-[#293836] font-['Inter',sans-serif] block leading-none whitespace-nowrap">
                  Vision Control
                </span>
              </div>
              <div className="w-5 h-5 sm:w-[29px] sm:h-[29px] rounded-full bg-[#DEE9E6] border border-[#3D5D58]/30 flex items-center justify-center shrink-0 text-[#3D5D58]">
                <SlidersHorizontal className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-[#3D5D58]" />
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  )
}



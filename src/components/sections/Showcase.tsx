'use client'

import * as React from "react"
import Image from "next/image"
import { Monitor, Tablet, Smartphone, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"

export function Showcase() {
  return (
    <section className="py-48 bg-primary text-white overflow-hidden relative">
      {/* Background medical/care watermark patterns can be added here if needed, 
          using a solid CSS background matching the screenshot */}
      <div className="mx-auto max-w-7xl px-6 md:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">

          {/* Left Column: Copy & CTAs */}
          <div className="lg:col-span-5 space-y-8">
            <div className="space-y-4">
              <span className="text-xs font-bold uppercase tracking-widest text-[#9EC0B9]">
                Built for Modern Care
              </span>
              <h2 className="text-4xl md:text-5xl font-bold tracking-tight leading-[1.15]">
                See Cantra <span className="font-serif italic font-normal text-white">in Action</span>
              </h2>
              <p className="text-base md:text-lg text-[#DCE8E5] leading-relaxed max-w-lg">
                Explore how Cantra simplifies care delivery, supports carers, and gives managers complete operational visibility.
              </p>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-wrap gap-4 pt-2">
              <Button
                variant="default"
                size="lg"
                className="rounded-xl bg-white hover:bg-white/95 text-primary font-bold px-8 h-12 transition-all duration-300"
              >
                Book a Demo
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="rounded-xl border-white/30 hover:border-white text-white hover:bg-white/10 font-bold px-8 h-12 transition-all duration-300"
              >
                Start free trial
              </Button>
            </div>

            {/* Device Compatibility subtext & icons */}
            <div className="space-y-3 pt-6 border-t border-white/10 max-w-xs">
              <span className="text-xs text-white/60 font-medium block">
                Available on Web, Tablet, and Mobile
              </span>
              <div className="flex items-center gap-4 text-white/50">
                <Monitor className="h-5 w-5" />
                <Tablet className="h-5 w-5" />
                <Smartphone className="h-5 w-5" />
              </div>
            </div>
          </div>

          {/* Right Column: Composite Mockup Graphic */}
          <div className="lg:col-span-7 flex justify-center lg:justify-end">
            <Image
              src="/images/home-page/dashboard-image.png"
              alt="Cantra Dashboard Screen Previews"
              width={750}
              height={450}
              className="w-full h-auto max-w-[620px] lg:max-w-[680px] object-contain animate-in fade-in slide-in-from-right-4 duration-700"
              priority
            />
          </div>

        </div>
      </div>
    </section>
  )
}

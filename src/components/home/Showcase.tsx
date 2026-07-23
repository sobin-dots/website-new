'use client'


import Image from "next/image"
import { Button } from "@/components/ui/button"

export function Showcase() {
  return (
    <section className="py-48 bg-primary text-white overflow-hidden relative">
      {/* Background medical/care watermark patterns */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <Image
          src="/images/home-page/see-cantra-in-action-bg.svg"
          alt="Showcase Background"
          fill
          priority
          className="object-cover object-center"
        />
      </div>

      <div className="mx-auto max-w-7xl px-6 md:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">

          {/* Left Column: Copy & CTAs */}
          <div className="lg:col-span-5 space-y-8 text-center lg:text-left">
            <div className="space-y-4">
              <span className="text-sm font-small tracking-wide leading-[2.5]">
                Built for Modern Care
              </span>
              <h2 className="text-4xl md:text-5xl font-serif italic text-white font-normal leading-[1.15]">
                See Cantra in Action
              </h2>
              <p className="text-base md:text-lg text-[#DCE8E5] leading-relaxed max-w-lg mx-auto lg:mx-0">
                Explore how Cantra simplifies care delivery, supports carers, and gives managers complete operational visibility.
              </p>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-wrap gap-4 justify-center lg:justify-start pt-2">
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
                className="rounded-xl border border-white hover:border-white/90 text-white hover:bg-white/10 font-bold px-8 h-12 transition-all duration-300 bg-transparent"
              >
                Start free trial
              </Button>
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

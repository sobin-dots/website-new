'use client'

import Image from "next/image"
import Link from "next/link"

export function CallToAction() {
  return (
    <section className="relative w-full min-h-[640px] md:min-h-[580px] lg:min-h-[680px] overflow-hidden">

      {/* Full-bleed background image */}
      <Image
        src="/images/home-page/ready-to-transform-your-care-delivery.png"
        alt="Caregiver walking with senior resident at home"
        fill
        sizes="100vw"
        priority
        className="object-cover object-[16%_top] sm:object-[32%_top] md:object-[48%_top] lg:object-top "
      />

      {/* Floating card — right-aligned on desktop, bottom-aligned on mobile */}
      <div className="absolute inset-0 flex items-end md:items-center justify-center md:justify-end p-6 md:p-0">
        <div className="relative md:mr-6 lg:mr-12 xl:mr-20 mb-6 md:mb-0 w-full max-w-md md:max-w-2xl bg-[#FDFAF5] rounded-[24px] shadow-xl p-6 md:p-8 space-y-5 border border-slate-100/50 scroll-section">

          {/* Heading */}
          <h2 className="text-2xl md:text-3xl font-serif italic font-bold text-primary leading-snug md:whitespace-nowrap text-center">
            Ready to transform your care delivery?
          </h2>

          {/* Subtitle */}
          <p className="text-xs sm:text-sm md:text-base text-slate-500 leading-relaxed text-center">
            Join forward-thinking care providers using Cantra to deliver safer, more efficient, and more person-centered care.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-row items-center justify-center gap-3 pt-1">
            <Link
              href="/book-demo"
              className="inline-flex items-center justify-center rounded-full bg-primary hover:bg-primary/90 text-white font-semibold text-sm px-5 py-2.5 transition-colors"
            >
              Book a Demo
            </Link>
            <Link
              href="/free-trial"
              className="inline-flex items-center justify-center rounded-full border border-primary/30 bg-white hover:bg-slate-50 text-primary font-semibold text-sm px-5 py-2.5 transition-colors"
            >
              Start free trial
            </Link>
          </div>

        </div>
      </div>

    </section>
  )
}

'use client'

import Image from "next/image"
import Link from "next/link"

export function CallToAction() {
  return (
    <section className="relative w-full aspect-[16/11] sm:aspect-[16/9] md:aspect-[2.1] overflow-hidden">

      {/* Full-bleed background image */}
      <Image
        src="/images/home-page/ready-to-transform-your-care-delivery.png"
        alt="Caregiver walking with senior resident at home"
        fill
        sizes="100vw"
        priority
        className="object-cover object-top"
      />

      {/* Floating white card — right-aligned on desktop, centered on mobile */}
      <div className="absolute inset-0 flex items-center justify-center md:justify-end">
        <div className="relative mx-6 md:mr-16 lg:mr-24 xl:mr-40 my-10 w-full max-w-sm md:max-w-[680px] bg-white/90 backdrop-blur-md rounded-3xl shadow-2xl p-8 md:p-12 space-y-6">

          {/* Heading */}
          <h2 className="text-center text-2xl md:text-3xl font-serif italic font-bold text-primary leading-snug">
            Ready to transform your care delivery?
          </h2>

          {/* Subtitle */}
          <p className="text-sm md:text-base text-slate-500 leading-relaxed text-center">
            Join forward-thinking care providers using Cantra to deliver safer, more efficient, and more person-centered care.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-wrap items-center justify-center gap-3 pt-2">
            <Link
              href="/book-demo"
              className="inline-flex items-center justify-center rounded-full bg-primary hover:bg-primary/90 text-white font-semibold text-sm px-6 py-3 transition-colors"
            >
              Contact Sales
            </Link>
            {/* <Link
              href="/free-trial"
              className="inline-flex items-center justify-center rounded-full border border-foreground/30 bg-white hover:bg-slate-50 text-primary font-semibold text-sm px-6 py-3 transition-colors"
            >
              Start free trial
            </Link> */}
          </div>

        </div>
      </div>

    </section>
  )
}

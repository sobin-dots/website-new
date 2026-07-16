'use client'

import * as React from "react"
import Image from "next/image"

export function Newsletter() {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle newsletter subscription action
  }

  return (
    <section className="py-20 bg-white text-slate-900 border-t border-slate-100">
      <div className="mx-auto max-w-7xl px-6 md:px-8">

        {/* Rounded Sand Card Container */}
        <div className="bg-[#FAF3EB] rounded-[32px] overflow-hidden shadow-sm border border-[#EFE5D9]/40 grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">

          {/* Left Column: Form & Copy */}
          <div className="lg:col-span-6 p-8 md:p-12 lg:p-16 flex flex-col justify-center space-y-6">
            <h2 className="text-3xl md:text-4xl lg:text-[40px] leading-tight font-serif italic font-bold text-primary">
              Stay ahead of the future of care
            </h2>

            <p className="text-sm md:text-base text-primary/80 leading-relaxed max-w-md">
              Receive product updates, industry insights, compliance guidance, and care management best practices.
            </p>

            {/* Input Subscription Form */}
            <form onSubmit={handleSubmit} className="flex w-full max-w-md items-stretch rounded-xl bg-white shadow-sm border border-slate-200/50 overflow-hidden">
              <input
                type="email"
                placeholder="Enter your email address"
                className="flex-grow bg-transparent px-4 py-3 text-sm text-slate-800 placeholder:text-slate-400 focus:outline-none"
                required
              />
              <button
                type="submit"
                className="bg-primary hover:bg-primary/90 text-white font-bold text-sm px-6 py-3 transition-colors shrink-0"
              >
                Subscribe
              </button>
            </form>
          </div>

          {/* Right Column: Full-Bleed Caregiver Graphic */}
          <div className="lg:col-span-6 relative min-h-[300px] lg:min-h-full flex items-end justify-center lg:justify-end pr-0 lg:pr-8">
            <div className="relative w-full h-[320px] lg:h-[400px]">
              <Image
                src="/images/home-page/stay-ahead-of-the-future-of-care.png"
                alt="Caregiver smiling with senior resident"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                priority
                className="object-contain object-bottom"
              />
            </div>
          </div>

        </div>

      </div>
    </section>
  )
}

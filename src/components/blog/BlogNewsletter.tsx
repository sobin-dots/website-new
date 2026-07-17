'use client'

import * as React from "react"
import Image from "next/image"
import { Button } from "@/components/ui/button"

export function BlogNewsletter() {
  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault()
  }

  return (
    <section className="py-12 bg-white">
      <div className="mx-auto max-w-7xl px-6 md:px-8">
        
        {/* Banner Card Wrapper */}
        <div className="bg-[#FAF3EB] rounded-[32px] overflow-hidden grid grid-cols-1 lg:grid-cols-12 gap-8 items-center px-8 pt-8 lg:px-14 lg:pt-0 shadow-sm text-slate-900">
          
          {/* Left Column (7 columns) */}
          <div className="lg:col-span-7 space-y-6 pb-8 lg:py-14 animate-in fade-in slide-in-from-left-4 duration-500">
            <h2 className="text-3xl md:text-[38px] font-bold tracking-tight text-primary leading-tight font-serif italic">
              Stay ahead of the future of care
            </h2>
            <p className="text-xs md:text-sm text-slate-500 leading-relaxed max-w-xl">
              Receive product updates, industry insights, compliance guidance, and care management best practices.
            </p>
            
            {/* Form */}
            <form onSubmit={handleSubscribe} className="flex flex-col sm:flex-row gap-3 max-w-md pt-2">
              <input
                type="email"
                placeholder="Enter your email address"
                className="w-full rounded-xl bg-white border border-slate-200/80 px-4 py-3 text-xs text-slate-800 placeholder-slate-400 focus:outline-none focus:border-primary/50 transition-colors"
                required
              />
              <Button
                type="submit"
                className="rounded-xl bg-primary hover:bg-primary/95 text-white font-bold text-xs px-6 h-11 shrink-0"
              >
                Subscribe
              </Button>
            </form>
          </div>

          {/* Right Column: Overflowing Image (5 columns) */}
          <div className="lg:col-span-5 relative w-full aspect-[1.3] lg:aspect-[0.95] self-end rounded-2xl lg:rounded-none overflow-hidden lg:h-[320px]">
            <Image
              src="/images/home-page/stay-ahead-of-the-future-of-care.png"
              alt="Caregiver hugging a smiling senior resident"
              fill
              sizes="(max-width: 1024px) 100vw, 40vw"
              className="object-cover object-bottom"
            />
          </div>

        </div>

      </div>
    </section>
  )
}

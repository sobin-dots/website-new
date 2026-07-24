'use client'

import * as React from "react"
import Image from "next/image"

export function AboutHero() {
  return (
    <section className="pt-20 pb-12 bg-white text-slate-900 text-center">
      <div className="mx-auto max-w-7xl px-6 md:px-8 space-y-12">
        
        {/* Title Block */}
        <div className="space-y-5 max-w-3xl mx-auto scroll-section">
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-primary leading-tight">
            The Heart Of Cantra
          </h1>
          <p className="text-sm md:text-base text-slate-500 leading-relaxed">
            Cantra is built by people who believe social care technology should mean caring, rather than keying. We're providing solutions that relieve compliance stress, support care teams, and remove last-minute panic from care audits.
          </p>
        </div>

        {/* Team Photo Container */}
        <div className="relative w-full max-w-5xl mx-auto aspect-[16/9] md:aspect-[2.1] overflow-hidden rounded-[32px] animate-in fade-in zoom-in-98 duration-500 scroll-section">
          <Image
            src="/images/home-page/the-heart-of-cantra.png"
            alt="The Cantra Team - The Heart of Cantra"
            fill
            priority
            sizes="(max-width: 1024px) 100vw, 85vw"
            className="object-contain object-center"
          />
        </div>

      </div>
    </section>
  )
}

'use client'

import Image from "next/image"

export function CareSettings() {
  return (
    <section className="py-12 bg-white text-slate-900">
      <div className="mx-auto max-w-7xl px-6 md:px-8">

        {/* Header Block */}
        <div className="text-center max-w-3xl mx-auto space-y-5 mb-8">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-primary">
            Care Settings We Serve
          </h2>
          <p className="text-sm md:text-base text-slate-500 leading-relaxed max-w-2xl mx-auto">
            Cantra is purpose-built to support diverse care settings, helping providers streamline operations, strengthen compliance, and deliver outstanding person-centred care.
          </p>
        </div>

        {/* Layout Grid */}
        <div className="space-y-6">

          {/* Top Featured Card - Full Width */}
          <div className="relative w-full h-[200px] sm:h-[260px] md:h-[320px] overflow-hidden rounded-[32px] group shadow-sm">
            <Image
              src="/images/home-page/residential-care-homes.png"
              alt="Residential Care Homes"
              fill
              priority
              sizes="100vw"
              className="object-cover object-top transition-transform duration-700 group-hover:scale-[1.02]"
            />
            {/* Dark Gradient Overlay for Readability */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent" />

            {/* Text Label */}
            <div className="absolute bottom-6 left-6 md:bottom-8 md:left-8 z-10">
              <h3 className="text-2xl md:text-3xl lg:text-[38px] font-serif italic text-white font-medium drop-shadow-sm">
                Residential Care Homes
              </h3>
            </div>
          </div>

          {/* Bottom Grid - 2 Columns */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

            {/* Column 1 - Nursing Homes */}
            <div className="relative w-full h-[160px] sm:h-[220px] md:h-[260px] overflow-hidden rounded-[32px] group shadow-sm">
              <Image
                src="/images/home-page/nursing-homes.png"
                alt="Nursing Homes"
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover object-top transition-transform duration-700 group-hover:scale-[1.02]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent" />

              <div className="absolute bottom-6 left-6 md:bottom-8 md:left-8 z-10">
                <h3 className="text-xl md:text-2xl font-serif italic text-white font-medium drop-shadow-sm">
                  Nursing Homes
                </h3>
              </div>
            </div>

            {/* Column 2 - Mental Health Care Homes */}
            <div className="relative w-full h-[160px] sm:h-[220px] md:h-[260px] overflow-hidden rounded-[32px] group shadow-sm">
              <Image
                src="/images/home-page/mental-health-care-homes.png"
                alt="Mental Health Care Homes"
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover object-top transition-transform duration-700 group-hover:scale-[1.02]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent" />

              <div className="absolute bottom-6 left-6 md:bottom-8 md:left-8 z-10">
                <h3 className="text-xl md:text-2xl font-serif italic text-white font-medium drop-shadow-sm">
                  Mental Health Care Homes
                </h3>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  )
}

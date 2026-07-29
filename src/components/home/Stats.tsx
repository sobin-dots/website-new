'use client'

import Image from "next/image"

const metrics = [
  {
    value: "94%",
    label: "Reduction in documentation time"
  },
  {
    value: "15+",
    label: "Hours saved per carer weekly"
  },
  {
    value: "£250",
    label: "Annual savings per resident"
  },
  {
    value: "12K+",
    label: "Residents served"
  }
]

export function Stats() {
  return (
    <section className="py-20 xl:py-32 2xl:py-40 bg-secondary text-white">
      <div className="mx-auto max-w-7xl px-4 md:px-8">

        {/* Top Centered Label */}
        <div className="text-center mb-14">
          <p className="text-xs md:text-sm font-medium tracking-wide text-[#FAF3EB] uppercase">
            Real results from real care teams
          </p>
        </div>

        {/* Metrics Grid with Vertical Dividers */}
        <div className="grid grid-cols-4 gap-x-2 gap-y-6 md:gap-x-6 justify-items-center scroll-section">
          {metrics.map((metric, idx) => (
            <div
              key={idx}
              className="flex flex-col items-center text-center px-1 sm:px-4 relative w-full"
            >
              {/* Metric Value */}
              <div className="text-xl sm:text-2xl md:text-5xl lg:text-[52px] text-[#FAF3EB] font-bold tracking-tight leading-none">
                {metric.value}
              </div>

              {/* Metric Label */}
              <p className="text-[9px] sm:text-[10px] md:text-xs text-[#FAF3EB] mt-3 sm:mt-4 max-w-[170px] leading-relaxed">
                {metric.label}
              </p>

              {/* Divider lines between columns */}
              {idx < 3 && (
                <div className="absolute right-0 top-1 bottom-1 w-[1px] bg-white/20" />
              )}
            </div>
          ))}
        </div>

        {/* Bottom Social Proof Pill */}
        <div className="mt-16 flex justify-center scroll-section">
          <div className="inline-flex items-center gap-3 rounded-full border border-white/25 bg-black/10 px-5 py-2.5 backdrop-blur-sm">
            <div className="flex -space-x-2 shrink-0">
              <Image
                src="/images/home-page/hero-person-1.png"
                alt="Care professional 1"
                width={32}
                height={32}
                className="h-8 w-8 rounded-full object-cover ring-2 ring-white/30"
              />
              <Image
                src="/images/home-page/hero-person-2.png"
                alt="Care professional 2"
                width={32}
                height={32}
                className="h-8 w-8 rounded-full object-cover ring-2 ring-white/30"
              />
              <Image
                src="/images/home-page/hero-person-3.png"
                alt="Care professional 3"
                width={32}
                height={32}
                className="h-8 w-8 rounded-full object-cover ring-2 ring-white/30"
              />
            </div>
            <span className="text-[11px] md:text-xs text-[#FAF3EB] font-medium">
              Join 12,000+ care professionals making a difference
            </span>
          </div>
        </div>

      </div>
    </section>
  )
}

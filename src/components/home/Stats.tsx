'use client'

import Image from "next/image"

const metrics = [
  {
    value: "94%",
    label: "Reduction in documentation time"
  },
  {
    value: "3.2*",
    label: "Faster care plan creation"
  },
  {
    value: "12K+",
    label: "Reduction in documentation time"
  },
  {
    value: "99.9%",
    label: "Reduction in documentation time"
  }
]

export function Stats() {
  return (
    <section className="py-20 bg-secondary text-white">
      <div className="mx-auto max-w-7xl px-6 md:px-8">

        {/* Top Centered Label */}
        <div className="text-center mb-14">
          <p className="text-xs md:text-sm font-medium tracking-wide text-[#FAF3EB] uppercase">
            Real results from real care teams
          </p>
        </div>

        {/* Metrics Grid with Vertical Dividers */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-y-12">
          {metrics.map((metric, idx) => (
            <div
              key={idx}
              className={`flex flex-col items-center text-center px-4 relative ${idx < 3 ? "lg:after:content-[''] lg:after:absolute lg:after:right-0 lg:after:top-2 lg:after:bottom-2 lg:after:w-[1px] lg:after:bg-white/25" : ""
                } ${idx % 2 === 0 ? "md:after:content-[''] md:after:absolute md:after:right-0 md:after:top-2 md:after:bottom-2 md:after:w-[0px] md:after:bg-white/25" : "" // responsive dividers
                }`}
            >
              {/* Metric Value */}
              <div className="text-2xl text-[#FAF3EB] md:text-5xl lg:text-[52px] font-bold tracking-tight leading-none">
                {metric.value}
              </div>

              {/* Metric Label */}
              <p className="text-[11px] md:text-xs text-[#FAF3EB] mt-4 max-w-[170px] leading-relaxed">
                {metric.label}
              </p>
            </div>
          ))}
        </div>

        {/* Bottom Social Proof Pill */}
        <div className="mt-16 flex justify-center">
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

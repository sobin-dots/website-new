'use client'

import * as React from "react"
import Image from "next/image"

const pillars = [
  {
    image: "/images/home-page/person-centered-care.png",
    title: "Person-Centered Care",
    description: "Support individual needs with flexible care planning."
  },
  {
    image: "/images/home-page/designed-for-front- line-teams.png",
    title: "Designed for front-line Teams",
    description: "Simple interfaces carers actually enjoy using."
  },
  {
    image: "/images/home-page/compliance-confidence.png",
    title: "Compliance Confidence",
    description: "Stay prepared for inspections and audits."
  },
  {
    image: "/images/home-page/real-time-oversight.png",
    title: "Real-Time Oversight",
    description: "Know what's happening across your service instantly."
  },
  {
    image: "/images/home-page/secure-reliable.png",
    title: "Secure & Reliable",
    description: "Built with security and scalability in mind."
  },
  {
    image: "/images/home-page/continuous-innovation.png",
    title: "Continuous Innovation",
    description: "Regular updates based on care provider feedback."
  }
]

export function WhyChoose() {
  return (
    <section className="py-24 bg-white text-slate-900 border-slate-100">
      <div className="mx-auto max-w-7xl px-6 md:px-8">

        {/* Header Block */}
        <div className="text-center max-w-3xl mx-auto space-y-5 mb-20">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-primary">
            Why Care Providers Choose Cantra
          </h2>
          <p className="text-base md:text-lg text-slate-500 leading-relaxed max-w-2xl mx-auto">
            Cantra helps adult social care providers to manage care plans, medication records, assessments, incidents, compliance, and reporting - all from a single platform.
          </p>
        </div>

        {/* 6-Pillar Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-16">
          {pillars.map((pillar, idx) => (
            <div key={idx} className="flex flex-col items-start space-y-4">
              {/* Pillar Image */}
              <div className="relative w-full aspect-[16/10] overflow-hidden rounded-2xl bg-slate-100">
                <Image
                  src={pillar.image}
                  alt={pillar.title}
                  fill
                  sizes="(max-w-768px) 100vw, (max-w-1200px) 50vw, 33vw"
                  className="object-cover transition-transform duration-500 hover:scale-[1.03]"
                />
              </div>

              {/* Pillar Title */}
              <h3 className="text-xl font-bold text-primary pt-2">
                {pillar.title}
              </h3>

              {/* Pillar Description */}
              <p className="text-sm leading-relaxed text-slate-500">
                {pillar.description}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}

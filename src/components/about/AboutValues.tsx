'use client'

import * as React from "react"
import { Heart, Shield, Sparkles, Users } from "lucide-react"

const values = [
  {
    icon: Heart,
    title: "Compassion",
    description: "We build deep respect to empower care teams and support the lives of the people they care for."
  },
  {
    icon: Shield,
    title: "Integrity",
    description: "From secure data to clear communication, we build trust through transparency, accountability, and reliability."
  },
  {
    icon: Sparkles,
    title: "Innovation",
    description: "We challenge outdated processes to create smarter, simpler ways of delivering care."
  },
  {
    icon: Users,
    title: "Collaboration",
    description: "We work side-by-side with care professionals to ensure we build what they actually need."
  }
]

export function AboutValues() {
  return (
    <section className="py-20 bg-secondary text-white">
      <div className="mx-auto max-w-7xl px-6 md:px-8 space-y-16">
        
        {/* Header Block */}
        <div className="text-center max-w-4xl mx-auto space-y-4">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight">
            What Defines Us
          </h2>
          <p className="text-sm md:text-base text-white/80 leading-relaxed max-w-3xl mx-auto">
            Our values shape how we build Cantra, collaborate with care providers, and make decisions every day. They reflect our commitment to creating technology that is trusted, reliable, and focused on helping care teams deliver exceptional outcomes.
          </p>
        </div>

        {/* 4-Column Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {values.map((item, idx) => {
            const IconComp = item.icon
            return (
              <div key={idx} className="text-center space-y-4">
                {/* Circular Icon Wrapper */}
                <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-white/10 border border-white/20 text-white shadow-sm">
                  <IconComp className="h-6 w-6" />
                </div>
                
                {/* Text Content */}
                <div className="space-y-2">
                  <h3 className="text-lg font-bold font-sans">{item.title}</h3>
                  <p className="text-sm text-white/75 leading-relaxed max-w-[240px] mx-auto">
                    {item.description}
                  </p>
                </div>
              </div>
            )
          })}
        </div>

      </div>
    </section>
  )
}

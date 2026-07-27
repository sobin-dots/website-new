'use client'

import { Heart, Shield, Sparkles, Users } from "lucide-react"

interface ValueItem {
  icon: React.ComponentType<{ className?: string }>
  title: string
  description: string
  maxWidth: string
}

const values: ValueItem[] = [
  {
    icon: Heart,
    title: "Compassion",
    description: "We build every feature to empower care teams and improve the lives of the people they support.",
    maxWidth: "max-w-[237px]"
  },
  {
    icon: Shield,
    title: "Integrity",
    description: "From secure data to clear communication, we believe trust is earned through honesty, accountability, and reliability.",
    maxWidth: "max-w-[255px]"
  },
  {
    icon: Sparkles,
    title: "Innovation",
    description: "We challenge outdated processes to create smarter ways of delivering care.",
    maxWidth: "max-w-[233px]"
  },
  {
    icon: Users,
    title: "Collaboration",
    description: "We continuously learn, innovate, and improve alongside care providers to help raise the standard of care.",
    maxWidth: "max-w-[241px]"
  }
]

export function AboutValues() {
  return (
    <section className="py-20 md:py-28 bg-[#A06256] text-white">
      <div className="mx-auto max-w-[1240px] px-6 md:px-8 space-y-16 flex flex-col items-center justify-center">

        {/* Header Block */}
        <div className="text-center max-w-[862px] mx-auto space-y-4 scroll-section">
          <h2 className="text-3xl md:text-[40px] font-bold leading-tight md:leading-[66px] text-white font-['Lato',sans-serif] capitalize">
            What Defines Us
          </h2>
          <p className="text-sm md:text-[16px] text-white leading-relaxed md:leading-[30px] font-['Lato',sans-serif]">
            Our values shape how we build Cantra, collaborate with care providers, and make decisions every day. They reflect our commitment to creating technology that is trusted, practical, and focused on helping care teams deliver exceptional outcomes.
          </p>
        </div>

        {/* 4-Column Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8 justify-items-center w-full max-w-[1442px] mx-auto scroll-section">
          {values.map((item, idx) => {
            const IconComp = item.icon
            return (
              <div key={idx} className="flex flex-col items-center text-center space-y-4 w-full max-w-[301px]">
                {/* Circular Icon Wrapper (Outer 58px, Inner White 44px, Icon 20px) */}
                <div className="flex h-[58px] w-[58px] items-center justify-center rounded-full bg-white/10 border border-white/20 shadow-sm shrink-0">
                  <div className="flex h-11 w-11 items-center justify-center rounded-full bg-white text-[#3D5D58] shrink-0">
                    <IconComp className="h-5 w-5 stroke-[2.2]" />
                  </div>
                </div>

                {/* Text Content */}
                <div className="space-y-2">
                  <h3 className="text-lg md:text-[20px] font-bold font-['Lato',sans-serif] leading-tight text-white capitalize">
                    {item.title}
                  </h3>
                  <p className={`text-[16px] font-medium text-white leading-[35px] font-['Lato',sans-serif] mx-auto ${item.maxWidth}`}>
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

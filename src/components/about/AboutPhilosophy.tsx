'use client'

import { Compass, Eye, Target } from "lucide-react"

export function AboutPhilosophy() {
  return (
    <section className="py-20 bg-white text-[#293836]">
      <div className="mx-auto max-w-[1240px] px-6 md:px-8">

        {/* Header 2-Column Block */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start mb-16 pb-8 border-b border-slate-100 scroll-section">
          <div className="lg:col-span-7 space-y-3">
            <h2 className="text-3xl md:text-[40px] font-bold tracking-tight text-[#293836] font-['Lato',sans-serif] leading-tight">
              Our Philosophy, <br />Mission & Vision
            </h2>
            <p className="text-lg md:text-[22px] text-[#293836] font-medium font-['Lato',sans-serif] leading-normal pt-1">
              The Principles That Guide Everything We Build.
            </p>
          </div>
          <div className="lg:col-span-5 text-xs sm:text-sm md:text-[15px] text-[#4A5D5A] leading-[28px] font-serif italic lg:pt-2">
            Every Decision At Cantra Is Guided By A Clear Purpose. Our Philosophy, Mission, And Vision Define How We Build Technology, Partner With Care Providers, And Contribute To A Future Where Delivering Exceptional Care Is Simpler, Safer, And More Connected.
          </div>
        </div>

        {/* 3 Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 scroll-section">

          {/* Card 1: Our Philosophy */}
          <div className="p-8 rounded-[20px] bg-blue-50/40 border border-blue-100/30 space-y-6 hover:shadow-md transition-all duration-300">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-blue-100/50 text-blue-800 shadow-sm">
              <Compass className="h-5 w-5" />
            </div>
            <div className="space-y-2">
              <h3 className="text-lg font-bold text-[#293836] font-['Lato',sans-serif]">Our Philosophy</h3>
              <p className="text-[14px] font-medium text-[#4A5D5A] leading-[24px]">
                We Believe Technology Should Remove Complexity From Care, Empowering Every Provider To Spend More Time Improving Residents' Lives And Wellbeing.
              </p>
            </div>
          </div>

          {/* Card 2: Our Vision */}
          <div className="p-8 rounded-[20px] bg-green-50/40 border border-green-100/30 space-y-6 hover:shadow-md transition-all duration-300">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-green-100/50 text-green-800 shadow-sm">
              <Eye className="h-5 w-5" />
            </div>
            <div className="space-y-2">
              <h3 className="text-lg font-bold text-[#293836] font-['Lato',sans-serif]">Our Vision</h3>
              <p className="text-[14px] font-medium text-[#4A5D5A] leading-[24px]">
                To Become The Trusted Digital Operating System For Care Providers Worldwide, Enabling Exceptional Care Through Innovation, Collaboration, And Continuous Improvement.
              </p>
            </div>
          </div>

          {/* Card 3: Our Mission */}
          <div className="p-8 rounded-[20px] bg-[#FAF5F2] border border-orange-100/30 space-y-6 hover:shadow-md transition-all duration-300">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#FAF5F2] border border-[#3D5D58]/20 text-[#3D5D58] shadow-sm">
              <Target className="h-5 w-5" />
            </div>
            <div className="space-y-2">
              <h3 className="text-lg font-bold text-[#293836] font-['Lato',sans-serif]">Our Mission</h3>
              <p className="text-[14px] font-medium text-[#4A5D5A] leading-[24px]">
                To Help Care Providers Deliver Safer, More Efficient, And Person-Centred Care Through Intuitive Technology That Simplifies Everyday Operations And Compliance.
              </p>
            </div>
          </div>

        </div>

      </div>
    </section>
  )
}

'use client'

import * as React from "react"
import Image from "next/image"

const advantages = [
  {
    title: "Save Time Planning Rotas",
    description: "Reduce Manual Scheduling With Intuitive Tools That Simplify Rota Creation And Ongoing Workforce Management."
  },
  {
    title: "Improve Staff Satisfaction",
    description: "Provide Greater Transparency, Flexibility, And Communication Around Shifts, Availability, And Leave Requests."
  },
  {
    title: "Maintain Safe Staffing",
    description: "Ensure Every Shift Is Appropriately Staffed To Support High-Quality Care And Operational Continuity."
  },
  {
    title: "Reduce Scheduling Conflicts",
    description: "Prevent Overlapping Shifts, Unfilled Vacancies, And Last-Minute Staffing Issues With Real-Time Workforce Visibility."
  },
  {
    title: "Strengthen Team Communication",
    description: "Keep Everyone Informed With Instant Notifications And Always Up-To-Date Staff Schedules."
  },
  {
    title: "Gain Complete Workforce Visibility",
    description: "Monitor Staffing, Attendance, Leave, And Rota Changes From One Connected Platform To Make Informed Operational Decisions."
  }
]

export function RotaAdvantage() {
  return (
    <section className="relative py-16 md:py-24 bg-gradient-to-b from-[#9A5E53] to-[#34201C] text-white overflow-hidden">
      {/* Background Image with overlay mix */}
      <div className="absolute inset-0 z-0 mix-blend-overlay opacity-30">
        <Image
          src="/images/staff-rota-management/the-cantra-advantage-bg.png"
          alt="The Cantra Advantage Background"
          fill
          priority
          className="object-cover"
        />
      </div>

      <div className="relative z-10 mx-auto max-w-[1188px] px-4 sm:px-6 lg:px-8 space-y-12 sm:space-y-16">

        {/* Header Block (2-Column Grid) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-start pb-8 border-b border-white/20">
          <div className="lg:col-span-6 space-y-4">
            <h2 className="text-3xl md:text-[40px] font-bold leading-tight md:leading-[66px] capitalize text-white font-['Lato',sans-serif] md:max-w-[584px]">
              The Cantra Advantage
            </h2>
            <p className="text-lg md:text-[24px] font-medium leading-snug md:leading-[40px] capitalize text-white font-['Lato',sans-serif] md:max-w-[431px]">
              Helping Care Providers Build Stronger Teams And Safer Services.
            </p>
          </div>
          <div className="lg:col-span-6 text-sm md:text-[16px] font-normal leading-relaxed md:leading-[27px] text-white capitalize font-['Inter',sans-serif] lg:pt-4 md:max-w-[584px] lg:ml-auto">
            From Planning Weekly Rotas And Managing Leave Requests To Filling Last-Minute Vacancies And Tracking Staff Availability, Cantra Gives Care Managers Complete Visibility Over Their Workforce. Reduce Scheduling Conflicts, Minimise Administrative Effort, And Ensure Every Shift Is Staffed With Confidence.
          </div>
        </div>

        {/* 3x2 Advantages Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-[50px]">
          {advantages.map((item, idx) => (
            <div
              key={idx}
              className="p-[20px] rounded-[20px] bg-[#FAF5F2] text-[#293836] border border-[#FAF5F2] hover:shadow-lg transition-all duration-300 flex flex-col justify-start lg:h-[158px]"
            >
              <div className="space-y-[10px]">
                <h3 className="text-[16px] font-medium leading-[27px] capitalize text-[#293836] font-['Inter',sans-serif]">
                  {item.title}
                </h3>
                <p className="text-[12px] font-normal leading-[27px] capitalize text-[#293836]/90 font-['Inter',sans-serif]">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}

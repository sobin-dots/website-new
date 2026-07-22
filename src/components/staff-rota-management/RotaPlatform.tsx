'use client'

import * as React from "react"
import Image from "next/image"

const badges = [
  {
    text: "Plan Every Shift With Confidence.",
    bgColor: "bg-[#F6E8F7]",
    textColor: "text-[#293836]",
    width: "w-[343.18px]",
    left: "left-[868px]",
    top: "top-[382px]"
  },
  {
    text: "Create Rotas In Minutes, Not Hours.",
    bgColor: "bg-[#E8F0F7]",
    textColor: "text-[#293836]",
    width: "w-[362.18px]",
    left: "left-[179px]",
    top: "top-[430px]"
  },
  {
    text: "Keep Everyone Informed, Instantly.",
    bgColor: "bg-[#EBF7E8]",
    textColor: "text-[#293836]",
    width: "w-[354.18px]",
    left: "left-[91px]",
    top: "top-[572px]"
  },
  {
    text: "Manage Leave Without Disrupting Care Delivery.",
    bgColor: "bg-[#F0EEFE]",
    textColor: "text-[#293836]",
    width: "w-[479.18px]",
    left: "left-[777px]",
    top: "top-[603px]"
  },
  {
    text: "Know Who's Available Before You Schedule.",
    bgColor: "bg-[#F6F1EB]",
    textColor: "text-[#293836]",
    width: "w-[436.18px]",
    left: "left-[179px]",
    top: "top-[701px]"
  },
  {
    text: "Ensure Every Shift Has The Right People.",
    bgColor: "bg-[#FFFEED]",
    textColor: "text-[#293836]",
    width: "w-[410.18px]",
    left: "left-[835px]",
    top: "top-[785px]"
  }
]

export function RotaPlatform() {
  return (
    <section className="py-[48px] px-4 md:px-[48px] bg-white text-[#293836] overflow-hidden flex flex-col items-center justify-center gap-[40px]">
      
      {/* Frame 860: Section Header */}
      <div className="text-center w-full max-w-[1072px] mx-auto flex flex-col justify-center items-center gap-[24px]">
        {/* Frame 746 */}
        <div className="flex flex-col justify-center items-center max-w-[903px] mx-auto">
          <h2 className="text-[32px] font-bold leading-[48px] capitalize text-[#293836] font-['Lato',sans-serif] text-center max-w-[903px]">
            One Connected Platform For<br className="hidden md:inline" /> Intelligent Staff Scheduling & Workforce Management.
          </h2>
        </div>
      </div>

      {/* Frame 2349 / Interactive Desktop Layout (Visible from md up) */}
      <div className="hidden md:flex justify-center items-center w-full overflow-hidden py-4">
        {/* We use a fixed aspect container scaled for smaller screens but centered at full size */}
        <div className="relative w-[1440px] h-[860px] shrink-0 scale-[0.7] lg:scale-[0.85] xl:scale-100 origin-center my-[-100px] lg:my-[-40px] xl:my-0">
          
          {/* Main Dashboard Screenshot */}
          <div className="absolute left-[306px] top-[120px] w-[828px] h-[662.64px]">
            <Image
              src="/images/staff-rota-management/one-connected-platform-for.png"
              alt="Cantra Shift Planner Dashboard Interface"
              fill
              sizes="828px"
              priority
              className="object-cover"
            />
          </div>

          {/* Floating Badges */}
          {badges.map((item, idx) => (
            <div
              key={idx}
              className={`absolute ${item.left} ${item.top} ${item.width} h-[39.09px] ${item.bgColor} ${item.textColor} rounded-[16.09px] px-[16.09px] py-[8.04px] flex items-center justify-center border border-white/20`}
            >
              <span className="text-[19.31px] font-medium font-['Inter',sans-serif] text-center capitalize tracking-tight leading-[22px] whitespace-nowrap">
                {item.text}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Mobile Layout Fallback (Visible on mobile/tablet) */}
      <div className="md:hidden w-full space-y-8 px-2">
        <div className="relative w-full aspect-[16/11]">
          <Image
            src="/images/staff-rota-management/one-connected-platform-for.png"
            alt="Cantra Shift Planner Dashboard Interface"
            fill
            sizes="100vw"
            className="object-contain object-center"
          />
        </div>

        {/* Badges as a Grid list */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          {badges.map((item, idx) => (
            <div
              key={idx}
              className={`${item.bgColor} ${item.textColor} rounded-xl p-3 flex items-center justify-center border border-slate-100 text-center`}
            >
              <span className="text-xs font-semibold font-['Inter',sans-serif]">
                {item.text}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Description Copy */}
      <div className="w-full max-w-[1082.4px] mx-auto text-center pt-2">
        <p className="text-sm md:text-[19.2px] font-normal leading-[34px] text-[#293836] capitalize font-['Lato',sans-serif] text-center max-w-[1082.4px] mx-auto">
          From Planning Weekly Rotas And Managing Leave Requests To Filling Last-Minute Vacancies And Tracking Staff Availability, Cantra Gives Care Managers Complete Visibility Over Their Workforce. Reduce Scheduling Conflicts, Minimise Administrative Effort, And Ensure Every Shift Is Staffed With Confidence.
        </p>
      </div>

    </section>
  )
}

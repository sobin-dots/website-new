'use client'

import Image from "next/image"

const steps = [
  {
    num: "01",
    title: "Plan Your Workforce",
    description: "Create rotas based on staffing requirements, occupancy, and shift patterns."
  },
  {
    num: "02",
    title: "Match Staff Availability",
    description: "Assign available team members while considering leave, absences, and preferred working hours."
  },
  {
    num: "03",
    title: "Publish & Notify",
    description: "Share rotas instantly with automated notifications, ensuring every staff member knows where and when they're working."
  },
  {
    num: "04",
    title: "Adapt in Real Time",
    description: "Respond quickly to unexpected absences, swap shifts, and fill vacancies without disrupting care delivery."
  },
  {
    num: "05",
    title: "Deliver Safe, Consistent Care",
    description: "Maintain optimal staffing levels while giving managers complete oversight of workforce operations."
  }
]

export function RotaWorkflow() {
  return (
    <section className="py-10 md:py-14 bg-white text-[#293836] overflow-hidden flex flex-col items-center justify-center gap-[24px] w-full">
      <div className="mx-auto max-w-[1188px] px-4 sm:px-6 lg:px-8 flex flex-col items-center justify-center gap-[30px] w-full">

        {/* Section Header (Frame 888) */}
        <div className="text-center w-full max-w-[1188px] mx-auto flex flex-col justify-center items-center gap-[12px]">
          {/* Frame 744 */}
          <div className="flex flex-col justify-center items-center w-[1188px] gap-[6px] mx-auto max-w-full">
            <h2 className="text-[28px] sm:text-[36px] font-bold leading-tight capitalize text-[#293836] font-['Lato',sans-serif] text-center w-full">
              A Smarter Workflow For Every Shift.
            </h2>
            <p className="text-base sm:text-[20px] font-medium leading-normal capitalize text-[#293836] font-['Lato',sans-serif] text-center w-full">
              From Workforce Planning To Seamless Care Delivery
            </p>
          </div>
          <p className="text-xs sm:text-[14px] font-normal leading-[22px] text-[#293836] capitalize font-['Inter',sans-serif] text-center max-w-[734px] mx-auto">
            Cantra Simplifies Workforce Planning Through An Intuitive Process That Helps You Build Rotas, Coordinate Staff, And Maintain Safe Staffing Levels With Ease.
          </p>
        </div>

        {/* 2-Column Layout (Frame 956) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-[60px] items-center w-full max-w-[1188px]">

          {/* Left Column (Group 15 / Graphic Collage) */}
          <div className="lg:col-span-6 flex justify-center items-center overflow-visible py-2">
            {/* Aspect container that scales cleanly and occupies less vertical height */}
            <div className="relative w-[586px] h-[568.14px] shrink-0 scale-[0.48] xs:scale-[0.55] sm:scale-[0.7] lg:scale-[0.8] xl:scale-[0.85] origin-center my-[-140px] xs:my-[-120px] sm:my-[-80px] lg:my-[-40px]">
              
              {/* Main Illustration Image */}
              <div className="absolute left-[104.92px] top-0 w-[377.27px] h-[568.14px] rounded-[10px] overflow-hidden">
                <Image
                  src="/images/staff-rota-management/smarter-workflow-for-every-shift.png"
                  alt="Woman searching information on phone at home"
                  fill
                  sizes="377.27px"
                  priority
                  className="object-cover"
                />
              </div>

              {/* Notification Card (Frame 2375) */}
              <div className="absolute left-0 top-[62.51px] w-[209.39px] h-[113.85px] bg-white rounded-[14.26px] p-[14.26px] flex flex-col justify-start gap-[7.13px] shadow-[2px_4px_4px_rgba(0,0,0,0.14)] border border-slate-100/50 z-10">
                <div className="flex items-center gap-[7.13px]">
                  {/* Notification Icon */}
                  <div className="w-[22.83px] h-[22.83px] rounded-full bg-[#FFF2F1] flex items-center justify-center shrink-0">
                    <div className="w-[17.12px] h-[17.12px] bg-[#FF3B2F] rounded-full flex items-center justify-center text-white text-[8px] font-bold">
                      !
                    </div>
                  </div>
                  <span className="text-[11.41px] font-medium font-['Inter',sans-serif] text-[#293836] capitalize leading-[20px]">
                    New Shift Assigned
                  </span>
                </div>
                <p className="text-[8.55px] font-normal font-['Inter',sans-serif] text-[#293836] capitalize leading-[20px] max-w-[158px]">
                  A new shift has been assigned for you on 3rd August.
                </p>
              </div>

              {/* Assign Staff Card (Frame 2379) */}
              <div className="absolute left-[414px] top-[364.07px] w-[172px] h-[126px] bg-white rounded-[10px] p-[20px] flex flex-col justify-between shadow-[1px_4px_4px_rgba(0,0,0,0.15)] border border-slate-100/50 z-10">
                <div className="flex items-start gap-[13px]">
                  {/* Avatar */}
                  <div className="relative w-[36px] h-[36px] rounded-full overflow-hidden shrink-0">
                    <Image
                      src="/images/staff-rota-management/sarah-back.png"
                      alt="Sarah Back Care Assistant Avatar"
                      fill
                      sizes="36px"
                      className="object-cover"
                    />
                  </div>
                  {/* Text info */}
                  <div className="flex flex-col items-start leading-[20px]">
                    <span className="text-[11.41px] font-medium font-['Inter',sans-serif] text-[#293836] capitalize">
                      Sarah Back
                    </span>
                    <span className="text-[8.55px] font-normal font-['Inter',sans-serif] text-[#293836]/70 capitalize">
                      Care Assistant
                    </span>
                  </div>
                </div>

                {/* Button */}
                <button className="w-[69px] h-[26px] bg-[#3D5D58] hover:bg-[#3D5D58]/95 text-white rounded-[10px] flex items-center justify-center text-[8.55px] font-normal font-['Inter',sans-serif] capitalize transition-colors">
                  Assign Staff
                </button>
              </div>

            </div>
          </div>

          {/* Right Column (Frame 2370: 5 Steps list - compacted) */}
          <div className="lg:col-span-6 flex flex-col justify-start items-start gap-[10px] max-w-[445px] lg:ml-auto w-full">
            {steps.map((item, idx) => (
              <div key={idx} className="flex gap-[16px] items-start w-full md:w-[445px] min-h-[70px]">
                
                {/* Step Circle Badge (Frame 2365 - Compacted) */}
                <div className="flex h-[48px] w-[48px] items-center justify-center rounded-full bg-[#D9D9D9] text-[#293836] font-bold text-[16px] font-['Inter',sans-serif] shrink-0 leading-[27px]">
                  {item.num}
                </div>

                {/* Text Details (Frame 2366 - Compacted) */}
                <div className="flex flex-col items-start justify-start gap-[4px] flex-grow pt-0.5">
                  <h3 className="text-[14px] font-medium text-[#293836] font-['Inter',sans-serif] leading-tight capitalize">
                    {item.title}
                  </h3>
                  <p className="text-[11px] text-[#293836]/80 leading-relaxed font-['Inter',sans-serif] capitalize">
                    {item.description}
                  </p>
                </div>

              </div>
            ))}
          </div>

        </div>

      </div>
    </section>
  )
}

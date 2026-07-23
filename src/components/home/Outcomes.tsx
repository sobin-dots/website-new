'use client'

import { ShieldCheck, ClipboardList, Eye, Shield, FileCheck, Globe } from "lucide-react"

const cards = [
  {
    icon: ShieldCheck,
    bgColor: "bg-[#FDFAF5]", // Figma: #FDFAF5
    metric: "99.9%",
    title: "Platform Availability",
    description: "Reliable access whenever your teams need it."
  },
  {
    icon: ClipboardList,
    bgColor: "bg-[#FFEDF9]", // Figma: #FFEDF9
    metric: "50%",
    title: "Less Administrative Work",
    description: "Reduce paperwork and repetitive processes."
  },
  {
    icon: Eye,
    bgColor: "bg-[#F5F8F7]", // Figma: #F5F8F7
    metric: "Real-Time",
    title: "Care Visibility",
    description: "Track care delivery as it happens."
  },
  {
    icon: Shield,
    bgColor: "bg-[#EEF8FF]", // Figma: #EEF8FF
    metric: "Secure",
    title: "Cloud-Based Infrastructure",
    description: "Protected data and role-based access."
  },
  {
    icon: FileCheck,
    bgColor: "bg-[#F1FCF3]", // Figma: #F1FCF3
    metric: "Audit Ready",
    title: "Compliance Reporting",
    description: "Evidence care delivery with confidence."
  },
  {
    icon: Globe,
    bgColor: "bg-[#FAF5F2]", // Figma: #FAF5F2
    metric: "One Platform",
    title: "Connected Care Operations",
    description: "From assessments to reporting."
  }
]

export function Outcomes() {
  return (
    <section className="py-6 bg-white text-slate-900">
      <div className="mx-auto max-w-[1157px] px-6 md:px-8">

        {/* Header Block (Figma Frame 437) */}
        <div className="text-center max-w-[730px] mx-auto space-y-4 mb-[50px]">
          <h2 className="text-[40px] font-bold text-[#3D5D58] leading-[61px] tracking-tight font-sans text-center">
            Built to support better outcomes.
          </h2>
          <p className="text-[16.3855px] font-normal text-[#5D5D5D] leading-[29px] text-center font-body">
            Cantra helps adult social care providers to manage care plans, medication records, assessments, incidents, compliance, and reporting - all from a single platform.
          </p>
        </div>

        {/* 6-Card Grid (Figma Frame 447) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 justify-items-center">
          {cards.map((card, idx) => {
            const IconComp = card.icon
            return (
              <div
                key={idx}
                className={`flex flex-row items-center gap-[12px] sm:gap-[20px] p-[16px] sm:p-[20px] rounded-[26px] ${card.bgColor} w-full max-w-[369.67px] min-h-[183px] h-auto transition-transform duration-300 hover:-translate-y-1 shadow-sm border border-slate-100/50`}
              >
                {/* Left: White Circle Icon Wrapper (Figma: 32px width/height, 20px border-radius, background #FFFFFF) */}
                <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-white text-[#3D5D58] shadow-sm">
                  <IconComp className="h-5 w-5" />
                </div>

                {/* Right: Text Content Stack (Figma Frame 433) */}
                <div className="flex flex-col justify-center items-start gap-[9.93px] w-[249px]">
                  <div className="text-[19.8646px] font-bold text-[#3D5D58] leading-[18px] tracking-tight">
                    {card.metric}
                  </div>
                  <h3 className="text-[14.8985px] font-semibold text-[#3D5D58] leading-[18px] tracking-tight">
                    {card.title}
                  </h3>
                  <p className="text-[12px] font-normal text-[#5D5D5D] leading-[18px]">
                    {card.description}
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

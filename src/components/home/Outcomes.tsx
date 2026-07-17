'use client'


import { CheckCircle, ClipboardList, Eye, Lock, FileCheck, Globe } from "lucide-react"

const cards = [
  {
    icon: CheckCircle,
    iconColor: "text-[#A87932]",
    bgColor: "bg-[#FAF7F2]", // Warm Amber tint
    category: "Audit Ready",
    categoryColor: "text-[#A87932]",
    title: "Platform Availability",
    description: "Reliable access whenever your teams need it."
  },
  {
    icon: ClipboardList,
    iconColor: "text-[#B2386E]",
    bgColor: "bg-[#FCEDF6]", // Light Pink tint
    category: "Audit Ready",
    categoryColor: "text-[#B2386E]",
    title: "Less Administrative Work",
    description: "Reduce paperwork and repetitive processes."
  },
  {
    icon: Eye,
    iconColor: "text-[#307066]",
    bgColor: "bg-[#F2F7F6]", // Light Slate-Teal tint
    category: "Real-Time",
    categoryColor: "text-[#307066]",
    title: "Care Visibility",
    description: "Track care delivery as it happens."
  },
  {
    icon: Lock,
    iconColor: "text-[#1D4ED8]",
    bgColor: "bg-[#EDF5FD]", // Light Blue tint
    category: "Secure",
    categoryColor: "text-[#1D4ED8]",
    title: "Cloud-Based Infrastructure",
    description: "Protected data and role-based access."
  },
  {
    icon: FileCheck,
    iconColor: "text-[#15803D]",
    bgColor: "bg-[#F1F9F5]", // Light Mint tint
    category: "Audit Ready",
    categoryColor: "text-[#15803D]",
    title: "Compliance Reporting",
    description: "Evidence care delivery with confidence."
  },
  {
    icon: Globe,
    iconColor: "text-[#C0714F]",
    bgColor: "bg-[#FAF3EF]", // Light Beige/Terracotta tint
    category: "One Platform",
    categoryColor: "text-[#C0714F]",
    title: "Connected Care Operations",
    description: "From assessments to reporting."
  }
]

export function Outcomes() {
  return (
    <section className="py-24 bg-white text-slate-900 border-slate-100">
      <div className="mx-auto max-w-7xl px-6 md:px-8">

        {/* Header Block */}
        <div className="text-center max-w-3xl mx-auto space-y-5 mb-20">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-primary">
            Built to support better outcomes.
          </h2>
          <p className="text-base md:text-lg text-slate-500 leading-relaxed max-w-2xl mx-auto">
            Cantra helps adult social care providers to manage care plans, medication records, assessments, incidents, compliance, and reporting - all from a single platform.
          </p>
        </div>

        {/* 6-Card Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {cards.map((card, idx) => {
            const IconComp = card.icon
            return (
              <div
                key={idx}
                className={`flex items-start gap-4 p-8 rounded-2xl border border-slate-50/50 ${card.bgColor} shadow-sm transition-transform duration-300 hover:-translate-y-1`}
              >
                {/* White Circle Icon Wrapper */}
                <div className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-white shadow-sm ${card.iconColor}`}>
                  <IconComp className="h-5 w-5" />
                </div>

                {/* Text Content */}
                <div className="space-y-1.5">
                  <span className={`text-[10px] font-bold uppercase tracking-wider ${card.categoryColor}`}>
                    {card.category}
                  </span>
                  <h3 className="text-base font-bold text-primary leading-tight">
                    {card.title}
                  </h3>
                  <p className="text-xs text-slate-500 leading-relaxed">
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

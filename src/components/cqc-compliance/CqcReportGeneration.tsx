'use client'

import * as React from "react"
import {
  Pill,
  FileWarning,
  Users,
  BarChart3,
  Heart,
  ClipboardCheck
} from "lucide-react"

const reports = [
  {
    icon: Pill,
    title: "Medication Reports",
    description: "Monitor Medication Adherence, Omissions, Errors, PRN Usage, And Administration Trends To Improve Safety, Compliance, And Medication Governance Across Services.",
    bgColor: "bg-[#EAF0F6]",
    badgeColor: "bg-[#D4E3F1]",
    iconColor: "text-[#3A78B3]"
  },
  {
    icon: FileWarning,
    title: "Incident & Safeguarding Reports",
    description: "Analyse Incidents, Safeguarding Concerns, Falls, Behaviours, And Corrective Actions To Identify Trends, Reduce Risks, And Strengthen Resident Safety.",
    bgColor: "bg-[#F6EBF7]",
    badgeColor: "bg-[#ECD3ED]",
    iconColor: "text-[#AF54B0]"
  },
  {
    icon: Users,
    title: "Staffing Reports",
    description: "Track Staffing Hours, Agency Usage, Training, Absence, Supervision, And Workforce Performance To Optimise Resources And Maintain Regulatory Compliance.",
    bgColor: "bg-[#F6F0E7]",
    badgeColor: "bg-[#ECDDC9]",
    iconColor: "text-[#BA7D4C]"
  },
  {
    icon: BarChart3,
    title: "Financial Reports",
    description: "Gain Insights Into Occupancy, Revenue, Funding, Debtor Analysis, And Financial Performance To Support Informed Operational And Business Decisions.",
    bgColor: "bg-[#EAF5EA]",
    badgeColor: "bg-[#D4EDD4]",
    iconColor: "text-[#52B352]"
  },
  {
    icon: Heart,
    title: "Resident Wellbeing Reports",
    description: "Measure Resident Health Through Weight, Skin Integrity, Mood, Falls, PRN Medication, And Clinical Observations To Improve Person-Centred Care Outcomes.",
    bgColor: "bg-[#F6F5E9]",
    badgeColor: "bg-[#ECEDB9]",
    iconColor: "text-[#B5B03E]"
  },
  {
    icon: ClipboardCheck,
    title: "Care Planning & Compliance Reports",
    description: "Monitor Care Plan Completion, Assessments, Reviews, Consent, And Compliance Status To Ensure High-Quality, Inspection-Ready Care Delivery.",
    bgColor: "bg-[#EAEAF5]",
    badgeColor: "bg-[#D4D4ED]",
    iconColor: "text-[#5252B3]"
  }
]

export function CqcReportGeneration() {
  return (
    <section className="py-16 md:py-24 bg-white text-[#293836]">
      <div className="w-full">

        {/* Header Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 items-start mb-12 pb-6 border-b border-slate-100 scroll-section">
          <div className="lg:col-span-6 space-y-2">
            <h2 className="text-2xl sm:text-3xl md:text-[40px] font-bold leading-tight md:leading-[50px] text-[#293836] font-['Lato',sans-serif]">
              Report Generation
            </h2>
            <p className="text-lg sm:text-xl md:text-[24px] font-medium leading-snug md:leading-[32px] text-[#293836] font-['Lato',sans-serif]">
              Turn Operational Data Into Actionable Insights.
            </p>
          </div>
          <div className="lg:col-span-6 text-xs sm:text-sm md:text-base font-normal leading-relaxed md:leading-[27px] text-[#4A5D5A] font-['Inter',sans-serif] lg:pt-2">
            Cantra Provides Powerful Reporting Tools That Transform Day-To-Day Operational Data Into Meaningful Insights For Managers, Providers, Regional Teams, And Regulatory Bodies. Generate Reports Instantly Or Schedule Them Automatically To Support Governance Meetings, Compliance Reviews, Financial Monitoring, And Operational Decision-Making.
          </div>
        </div>

        {/* 3x2 Report Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 scroll-section">
          {reports.map((item, idx) => {
            const IconComp = item.icon
            return (
              <div
                key={idx}
                className={`p-6 sm:p-8 rounded-[20px] ${item.bgColor} space-y-4 hover:shadow-md transition-all duration-300 border border-transparent`}
              >
                {/* Circular Icon Badge */}
                <div className={`flex h-10 w-10 items-center justify-center rounded-xl ${item.badgeColor} ${item.iconColor} shadow-sm`}>
                  <IconComp className="h-5 w-5" />
                </div>

                {/* Text Content */}
                <div className="space-y-2">
                  <h3 className="text-base sm:text-lg md:text-[18px] font-bold text-[#293836] font-['Lato',sans-serif]">
                    {item.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-[#4A5D5A] leading-[22px] font-['Inter',sans-serif]">
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

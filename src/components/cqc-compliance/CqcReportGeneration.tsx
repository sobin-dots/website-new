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
    bgColor: "bg-[#EBF3FA]",
    iconColor: "text-blue-600 bg-blue-100/60",
    title: "Medication Reports",
    description: "Monitor Medication Adherence, Omissions, Errors, PRN Usage, And Administration Trends To Improve Safety, Compliance, And Medication Governance Across Services."
  },
  {
    icon: FileWarning,
    bgColor: "bg-[#FAF0FC]",
    iconColor: "text-purple-600 bg-purple-100/60",
    title: "Incident & Safeguarding Reports",
    description: "Analyse Incidents, Safeguarding Concerns, Falls, Behaviours, And Corrective Actions To Identify Trends, Reduce Risks, And Strengthen Resident Safety."
  },
  {
    icon: Users,
    bgColor: "bg-[#FAF4EB]",
    iconColor: "text-amber-700 bg-amber-100/60",
    title: "Staffing Reports",
    description: "Track Staffing Hours, Agency Usage, Training, Absence, Supervision, And Workforce Performance To Optimise Resources And Maintain Regulatory Compliance."
  },
  {
    icon: BarChart3,
    bgColor: "bg-[#EEFBEF]",
    iconColor: "text-emerald-700 bg-emerald-100/60",
    title: "Financial Reports",
    description: "Gain Insights Into Occupancy, Revenue, Funding, Debtor Analysis, And Financial Performance To Support Informed Operational And Business Decisions."
  },
  {
    icon: Heart,
    bgColor: "bg-[#FAFCEB]",
    iconColor: "text-amber-600 bg-amber-100/60",
    title: "Resident Wellbeing Reports",
    description: "Measure Resident Health Through Weight, Skin Integrity, Mood, Falls, PRN Medication, And Clinical Observations To Improve Person-Centred Care Outcomes."
  },
  {
    icon: ClipboardCheck,
    bgColor: "bg-[#F0EBFC]",
    iconColor: "text-indigo-600 bg-indigo-100/60",
    title: "Care Planning & Compliance Reports",
    description: "Monitor Care Plan Completion, Assessments, Reviews, Consent, And Compliance Status To Ensure High-Quality, Inspection-Ready Care Delivery."
  }
]

export function CqcReportGeneration() {
  return (
    <section className="py-20 bg-white text-slate-900">
      <div className="mx-auto max-w-7xl px-6 md:px-8">
        
        {/* Header Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start mb-16 pb-8 border-b border-slate-100">
          <div className="lg:col-span-6 space-y-4">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-primary font-sans">
              Report Generation
            </h2>
            <p className="text-lg text-slate-600 font-medium font-serif italic">
              Turn Operational Data Into Actionable Insights.
            </p>
          </div>
          <div className="lg:col-span-6 text-xs md:text-sm text-slate-500 leading-relaxed lg:pt-2">
            Cantra Provides Powerful Reporting Tools That Transform Day-To-Day Operational Data Into Meaningful Insights For Managers, Providers, Regional Teams, And Regulatory Bodies. Generate Reports Instantly Or Schedule Them Automatically To Support Governance Meetings, Compliance Reviews, Financial Monitoring, And Operational Decision-Making.
          </div>
        </div>

        {/* 3x2 Report Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {reports.map((item, idx) => {
            const IconComp = item.icon
            return (
              <div 
                key={idx}
                className={`p-8 rounded-3xl ${item.bgColor} space-y-5 flex flex-col justify-between transition-all duration-300 hover:scale-[1.01]`}
              >
                <div className="space-y-4">
                  {/* Small Circular Icon Badge */}
                  <div className={`flex h-9 w-9 items-center justify-center rounded-xl ${item.iconColor}`}>
                    <IconComp className="h-4 w-4" />
                  </div>
                  
                  {/* Text Content */}
                  <div className="space-y-2">
                    <h3 className="text-base font-bold text-slate-800 font-sans">
                      {item.title}
                    </h3>
                    <p className="text-xs text-slate-500 leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </div>
              </div>
            )
          })}
        </div>

      </div>
    </section>
  )
}

'use client'

import * as React from "react"
import {
  LayoutGrid,
  Calendar,
  UserCheck,
  CalendarRange,
  Bell,
  ShieldCheck
} from "lucide-react"

const features = [
  {
    icon: LayoutGrid,
    title: "Visual Rota Builder",
    description: "Build, Edit, And Publish Staff Schedules Using An Intuitive Drag-And-Drop Planner. Quickly Respond To Changing Staffing Needs While Keeping Every Team Member Informed.",
    bgColor: "bg-slate-50/70 border-slate-100",
    badgeColor: "bg-slate-100 text-slate-700"
  },
  {
    icon: Calendar,
    title: "Shift Planning",
    description: "Organise Recurring Shifts, Allocate Staff Efficiently, And Ensure Every Rota Aligns With Your Service Requirements And Staffing Policies.",
    bgColor: "bg-[#FAF5F2] border-orange-100/30",
    badgeColor: "bg-[#FAF5F2] border border-[#3D5D58]/20 text-[#3D5D58]"
  },
  {
    icon: UserCheck,
    title: "Staff Availability",
    description: "Give Employees The Flexibility To Submit Availability, Preferred Working Hours, And Absence Notifications, Helping Managers Create Accurate Rotas With Fewer Conflicts.",
    bgColor: "bg-yellow-50/40 border-yellow-100/30",
    badgeColor: "bg-yellow-100/50 text-yellow-800"
  },
  {
    icon: CalendarRange,
    title: "Leave Management",
    description: "Handle Annual Leave, Sickness, Compassionate Leave, And Other Absences Through One Streamlined Workflow While Maintaining Safe Staffing Across Every Shift.",
    bgColor: "bg-green-50/40 border-green-100/30",
    badgeColor: "bg-green-100/50 text-green-800"
  },
  {
    icon: Bell,
    title: "Real-Time Notifications",
    description: "Automatically Notify Staff About New Shifts, Rota Changes, Approved Leave, Cancellations, And Important Updates To Keep Teams Aligned At All Times.",
    bgColor: "bg-yellow-50/40 border-yellow-100/30",
    badgeColor: "bg-yellow-100/50 text-yellow-800"
  },
  {
    icon: ShieldCheck,
    title: "Safe Staffing",
    description: "Monitor Staffing Levels In Real Time And Identify Scheduling Gaps Before They Affect Care Delivery, Helping Maintain Safe And Compliant Staffing Across Your Organisation.",
    bgColor: "bg-blue-50/40 border-blue-100/30",
    badgeColor: "bg-blue-100/50 text-blue-800"
  }
]

export function RotaFeatures() {
  return (
    <section className="py-16 bg-white text-[#293836]">
      <div className="w-full">

        {/* Header Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 items-start mb-12 pb-6 border-b border-slate-100">
          <div className="lg:col-span-6 space-y-2">
            <h2 className="text-2xl sm:text-3xl md:text-[40px] font-bold leading-tight md:leading-[50px] capitalize text-[#293836] font-['Lato',sans-serif]">
              Key Features
            </h2>
            <p className="text-lg sm:text-xl md:text-[24px] font-medium leading-snug md:leading-[32px] capitalize text-[#3D5D58] font-['Lato',sans-serif]">
              Turn Operational Data Into Actionable Insights.
            </p>
          </div>
          <div className="lg:col-span-6 text-xs sm:text-sm md:text-base font-normal leading-relaxed md:leading-[27px] text-[#293836] capitalize font-['Inter',sans-serif] lg:pt-2">
            Plan, Manage, And Coordinate Your Workforce With Confidence. Cantra Brings Together Intelligent Scheduling, Staff Availability, Leave Management, And Real-Time Communication To Help You Maintain Safe Staffing Levels And Keep Care Running Smoothly.
          </div>
        </div>

        {/* 3x2 Features Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((item, idx) => {
            const IconComp = item.icon
            return (
              <div
                key={idx}
                className={`p-6 sm:p-8 rounded-[20px] border ${item.bgColor} space-y-4 hover:shadow-sm transition-all duration-300`}
              >
                {/* Icon Badge */}
                <div className={`flex h-10 w-10 items-center justify-center rounded-xl ${item.badgeColor}`}>
                  <IconComp className="h-5 w-5" />
                </div>

                {/* Text Content */}
                <div className="space-y-2">
                  <h3 className="text-base sm:text-lg md:text-[20px] font-bold text-[#293836] font-['Lato',sans-serif]">
                    {item.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-[#293836] leading-relaxed font-['Inter',sans-serif]">
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

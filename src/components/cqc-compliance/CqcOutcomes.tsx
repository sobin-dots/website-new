'use client'

import * as React from "react"
import { ListTodo, ShieldCheck, CheckCircle2, Handshake } from "lucide-react"

const outcomes = [
  {
    icon: ListTodo,
    title: "Reduce Inspection Preparation Time",
    description: "Automatically Collect And Organise Compliance Evidence Throughout Daily Operations."
  },
  {
    icon: ShieldCheck,
    title: "Strengthen Governance",
    description: "Monitor Quality, Identify Risks Early, And Make Informed Decisions With Real-Time Dashboards And Reports."
  },
  {
    icon: CheckCircle2,
    title: "Demonstrate Quality With Confidence",
    description: "Access Inspection-Ready Evidence, Audit Trails, And Performance Reports Whenever They're Needed."
  },
  {
    icon: Handshake,
    title: "Improve Team Accountability",
    description: "Track Policy Acknowledgements, Training Compliance, Overdue Tasks, And Operational Performance From One Platform."
  }
]

export function CqcOutcomes() {
  return (
    <section className="py-20 bg-white text-slate-900">
      <div className="mx-auto max-w-7xl px-6 md:px-8">
        
        {/* Header Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start mb-16 pb-8 border-b border-slate-100">
          <div className="lg:col-span-6 space-y-4">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-primary font-sans">
              Key Outcomes
            </h2>
            <p className="text-lg text-slate-600 font-medium font-serif italic">
              Turn Operational Data Into Actionable Insights.
            </p>
          </div>
          <div className="lg:col-span-6 text-xs md:text-sm text-slate-500 leading-relaxed lg:pt-2">
            Cantra Provides Powerful Reporting Tools That Transform Day-To-Day Operational Data Into Meaningful Insights For Managers, Providers, Regional Teams, And Regulatory Bodies. Generate Reports Instantly Or Schedule Them Automatically To Support Governance Meetings, Compliance Reviews, Financial Monitoring, And Operational Decision-Making.
          </div>
        </div>

        {/* 2x2 Outcomes Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-16">
          {outcomes.map((item, idx) => {
            const IconComp = item.icon
            return (
              <div key={idx} className="space-y-4">
                {/* Dark Green Small Circular Icon Badge */}
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary text-white shadow-sm">
                  <IconComp className="h-5 w-5" />
                </div>
                
                {/* Text Block */}
                <div className="space-y-2">
                  <h3 className="text-base font-bold text-slate-800 font-sans">
                    {item.title}
                  </h3>
                  <p className="text-xs text-slate-500 leading-relaxed max-w-md">
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

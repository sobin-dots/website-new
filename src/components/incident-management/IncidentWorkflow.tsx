'use client'

import * as React from "react"
import { FileText, FileCheck, Sliders, MessageSquare, TrendingUp } from "lucide-react"

const workflowSteps = [
  {
    step: "01",
    title: "Report",
    description: "Staff Record Incidents Using Structured Digital Forms From Any Device—Even When Offline.",
    icon: FileText,
    circlePosition: "right", // icon circle on right, text on left
  },
  {
    step: "02",
    title: "Assess",
    description: "The Platform Categorises Incidents, Applies Severity Levels, And Captures Supporting Evidence Including Witness Statements And Attachments.",
    icon: FileCheck,
    circlePosition: "left", // icon circle on left, text on right
  },
  {
    step: "03",
    title: "Escalate",
    description: "Automatic Workflows Notify Managers, Safeguarding Leads, And Relevant Stakeholders Based On Configurable Escalation Rules.",
    icon: Sliders,
    circlePosition: "right",
  },
  {
    step: "04",
    title: "Review",
    description: "Managers Investigate Incidents, Complete Post-Incident Reviews, Assign Corrective Actions, And Monitor Progress.",
    icon: MessageSquare,
    circlePosition: "left",
  },
  {
    step: "05",
    title: "Improve",
    description: "Analytics Identify Recurring Trends, Helping Providers Reduce Risks, Improve Care Quality, And Strengthen Governance.",
    icon: TrendingUp,
    circlePosition: "right",
  }
]

export function IncidentWorkflow() {
  return (
    <section className="py-20 md:py-28 bg-white text-slate-900 overflow-hidden">
      <div className="mx-auto max-w-5xl px-6 md:px-8 space-y-16">
        
        {/* Centered Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-primary font-sans">
            From Incident To Resolution In One Connected Workflow
          </h2>
          <p className="text-xs md:text-sm text-slate-500 leading-relaxed max-w-2xl mx-auto">
            Continuous Compliance Isn't An Event—It's A Daily Process. Cantra Transforms Routine Care Activities Into Measurable Quality Improvements.
          </p>
        </div>

        {/* Timeline Area */}
        <div className="relative max-w-3xl mx-auto py-8">
          
          {/* Connecting Curved Dashed SVG Line for Desktop */}
          <div className="hidden md:block absolute inset-0 pointer-events-none z-0">
            <svg 
              className="w-full h-full" 
              viewBox="0 0 600 900" 
              fill="none" 
              preserveAspectRatio="none"
            >
              <path 
                d="M 330 60 C 200 130, 200 230, 270 240 C 350 250, 420 330, 330 420 C 220 510, 200 590, 270 600 C 350 610, 420 730, 330 780" 
                stroke="#94A3B8" 
                strokeWidth="2" 
                strokeDasharray="6 6" 
              />
            </svg>
          </div>

          {/* Workflow Steps Stack */}
          <div className="space-y-16 md:space-y-20 relative z-10">
            {workflowSteps.map((item, idx) => {
              const IconComp = item.icon
              const isRightCircle = item.circlePosition === "right"

              return (
                <div key={idx} className="grid grid-cols-1 md:grid-cols-12 gap-6 items-center">
                  
                  {/* Left Column */}
                  <div className={`md:col-span-6 flex ${isRightCircle ? "md:justify-end text-left md:text-right" : "order-2 md:order-1 md:justify-start"}`}>
                    {!isRightCircle ? (
                      /* Circle on Left: Icon Badge */
                      <div className="flex h-16 w-16 items-center justify-center rounded-full bg-white text-primary shadow-lg border border-slate-100">
                        <IconComp className="h-7 w-7 text-primary" />
                      </div>
                    ) : (
                      /* Circle on Right: Text Block */
                      <div className="space-y-1.5 max-w-sm">
                        <h3 className="text-lg font-bold text-primary font-sans">{item.title}</h3>
                        <p className="text-xs text-slate-500 leading-relaxed">{item.description}</p>
                      </div>
                    )}
                  </div>

                  {/* Right Column */}
                  <div className={`md:col-span-6 flex ${isRightCircle ? "justify-start" : "order-1 md:order-2 md:justify-start text-left"}`}>
                    {isRightCircle ? (
                      /* Circle on Right: Icon Badge */
                      <div className="flex h-16 w-16 items-center justify-center rounded-full bg-white text-primary shadow-lg border border-slate-100">
                        <IconComp className="h-7 w-7 text-primary" />
                      </div>
                    ) : (
                      /* Circle on Left: Text Block */
                      <div className="space-y-1.5 max-w-sm">
                        <h3 className="text-lg font-bold text-primary font-sans">{item.title}</h3>
                        <p className="text-xs text-slate-500 leading-relaxed">{item.description}</p>
                      </div>
                    )}
                  </div>

                </div>
              )
            })}
          </div>

        </div>

      </div>
    </section>
  )
}

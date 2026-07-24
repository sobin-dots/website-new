'use client'

import * as React from "react"
import {
  FileText,
  FileCheck,
  Settings,
  MessageSquare,
  TrendingUp
} from "lucide-react"

interface WorkflowStep {
  step: string
  title: string
  description: string
  position: "left" | "right"
  badgeX: number
  badgeY: number
}

const workflowSteps: WorkflowStep[] = [
  {
    step: "01",
    title: "Report",
    description: "Staff Record Incidents Using Structured Digital Forms From Any Device—Even When Offline.",
    position: "right",
    badgeX: 422,
    badgeY: 121,
  },
  {
    step: "02",
    title: "Assess",
    description: "The Platform Categorises Incidents, Applies Severity Levels, And Captures Supporting Evidence Including Witness Statements And Attachments.",
    position: "left",
    badgeX: 236,
    badgeY: 393,
  },
  {
    step: "03",
    title: "Escalate",
    description: "Automatic Workflows Notify Managers, Safeguarding Leads, And Relevant Stakeholders Based On Configurable Escalation Rules.",
    position: "right",
    badgeX: 608,
    badgeY: 665,
  },
  {
    step: "04",
    title: "Review",
    description: "Managers Investigate Incidents, Complete Post-Incident Reviews, Assign Corrective Actions, And Monitor Progress.",
    position: "left",
    badgeX: 236,
    badgeY: 937,
  },
  {
    step: "05",
    title: "Improve",
    description: "Analytics Identify Recurring Trends, Helping Providers Reduce Risks, Improve Care Quality, And Strengthen Governance.",
    position: "right",
    badgeX: 422,
    badgeY: 1209,
  },
]

function StepIcon({ step }: { step: string }) {
  const iconColor = "#3D5D58"
  switch (step) {
    case "01":
      // Report: Document with lines
      return <FileText className="w-[36px] h-[36px]" style={{ color: iconColor, strokeWidth: 2 }} />
    case "02":
      // Assess: Document with checkmark
      return <FileCheck className="w-[36px] h-[36px]" style={{ color: iconColor, strokeWidth: 2 }} />
    case "03":
      // Escalate: Settings Cog
      return <Settings className="w-[36px] h-[36px]" style={{ color: iconColor, strokeWidth: 2 }} />
    case "04":
      // Review: Speech bubble feedback
      return <MessageSquare className="w-[36px] h-[36px]" style={{ color: iconColor, strokeWidth: 2 }} />
    case "05":
      // Improve: Trending up graph
      return <TrendingUp className="w-[36px] h-[36px]" style={{ color: iconColor, strokeWidth: 2 }} />
    default:
      return null
  }
}

export function IncidentWorkflow() {
  return (
    <section className="py-16 md:py-12 bg-white text-[#293836]">
      <div className="w-full max-w-[1240px] mx-auto">

        {/* Header Section */}
        <div className="text-center mx-auto space-y-4 md:space-y-5 scroll-section pb-8">
          <h2 className="text-2xl sm:text-3xl md:text-[40px] font-bold leading-tight md:leading-[66px] tracking-tight text-[#293836] mx-auto font-['Lato',sans-serif]">
            From Incident To Resolution In One Connected Workflow
          </h2>
          <p className="text-sm sm:text-base text-[#293836] leading-[30px] max-w-2xl mx-auto font-['Lato',sans-serif]">
            Continuous Compliance Isn't An Event—It's A Daily Process. Cantra Transforms Routine Care Activities Into Measurable Quality Improvements.
          </p>
        </div>

        {/* Desktop View (Interactive S-Curve Layout matching design exactly) */}
        <div className="hidden md:block relative w-full max-w-[844px] mx-auto h-[1336px] scroll-section">

          {/* Curved SVG Line passing through centers of badges */}
          <svg
            className="absolute inset-0 w-full h-full pointer-events-none z-0"
            viewBox="0 0 844 1336"
            fill="none"
          >
            <path
              d="M 422 10
                 L 422 121
                 C 422 220, 236 250, 236 393
                 C 236 536, 608 522, 608 665
                 C 608 808, 236 794, 236 937
                 C 236 1080, 422 1110, 422 1209
                 L 422 1280"
              stroke="#6C958D"
              strokeWidth="1.8"
              strokeDasharray="5 5"
            />
          </svg>

          {/* Workflow Steps positioned precisely along S-curve */}
          {workflowSteps.map((item) => {
            const isRightBadge = item.position === "right"

            return (
              <React.Fragment key={item.step}>
                {/* Circle Badge */}
                <div
                  className="absolute -translate-x-1/2 -translate-y-1/2 z-10 w-[80px] h-[80px] rounded-full bg-white flex items-center justify-center shadow-[4px_4px_10px_rgba(0,0,0,0.15)] border border-slate-100/50 cursor-pointer transition-transform duration-200 hover:scale-105"
                  style={{ left: `${item.badgeX}px`, top: `${item.badgeY}px` }}
                >
                  <StepIcon step={item.step} />
                </div>

                {/* Text Block */}
                <div
                  className={`absolute -translate-y-1/2 z-10 space-y-2 cursor-pointer transition-opacity duration-200 hover:opacity-90 ${isRightBadge ? "text-right" : "text-left"
                    }`}
                  style={
                    isRightBadge
                      ? {
                        top: `${item.badgeY}px`,
                        right: `${844 - item.badgeX + 60}px`,
                        maxWidth: item.step === "05" ? "447px" : (item.step === "01" ? "353px" : "456px"),
                      }
                      : {
                        top: `${item.badgeY}px`,
                        left: `${item.badgeX + 60}px`,
                        maxWidth: item.step === "04" ? "538px" : "543px",
                      }
                  }
                >
                  <h3 className="text-[20px] font-bold text-[#293836] font-['Lato',sans-serif] leading-tight">
                    {item.title}
                  </h3>
                  <p className="text-[16px] font-medium text-[#293836] leading-[35px] font-['Lato',sans-serif]">
                    {item.description}
                  </p>
                </div>
              </React.Fragment>
            )
          })}
        </div>

        {/* Mobile View (Clean Vertical Flow) */}
        <div className="block md:hidden space-y-10 scroll-section">
          {workflowSteps.map((item) => (
            <div key={item.step} className="flex items-start space-x-4 bg-slate-50/50 p-5 rounded-xl border border-slate-100 cursor-pointer transition-all duration-200 hover:bg-slate-100/60">
              <div className="shrink-0 w-[80px] h-[80px] rounded-full bg-white border border-slate-100 flex items-center justify-center shadow-md">
                <StepIcon step={item.step} />
              </div>
              <div className="space-y-2 pt-1">
                <h3 className="text-[18px] font-bold text-[#293836] font-['Lato',sans-serif]">
                  {item.title}
                </h3>
                <p className="text-[14px] font-medium text-[#293836] leading-[26px] font-['Lato',sans-serif]">
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
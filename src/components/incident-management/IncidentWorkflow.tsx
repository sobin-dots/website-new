'use client'

import * as React from "react"

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
    badgeX: 370,
    badgeY: 60,
  },
  {
    step: "02",
    title: "Assess",
    description: "The Platform Categorises Incidents, Applies Severity Levels, And Captures Supporting Evidence Including Witness Statements And Attachments.",
    position: "left",
    badgeX: 250,
    badgeY: 210,
  },
  {
    step: "03",
    title: "Escalate",
    description: "Automatic Workflows Notify Managers, Safeguarding Leads, And Relevant Stakeholders Based On Configurable Escalation Rules.",
    position: "right",
    badgeX: 415,
    badgeY: 360,
  },
  {
    step: "04",
    title: "Review",
    description: "Managers Investigate Incidents, Complete Post-Incident Reviews, Assign Corrective Actions, And Monitor Progress.",
    position: "left",
    badgeX: 255,
    badgeY: 510,
  },
  {
    step: "05",
    title: "Improve",
    description: "Analytics Identify Recurring Trends, Helping Providers Reduce Risks, Improve Care Quality, And Strengthen Governance.",
    position: "right",
    badgeX: 365,
    badgeY: 660,
  },
]

function StepIcon({ step }: { step: string }) {
  const iconColor = "#273735"
  switch (step) {
    case "01":
      // Report: Document with lines
      return (
        <svg className="w-7 h-7" viewBox="0 0 24 24" fill="none" stroke={iconColor} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
          <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
          <polyline points="14 2 14 8 20 8" />
          <line x1="16" y1="13" x2="8" y2="13" />
          <line x1="16" y1="17" x2="8" y2="17" />
          <line x1="10" y1="9" x2="8" y2="9" />
        </svg>
      )
    case "02":
      // Assess: Document with checkmark
      return (
        <svg className="w-7 h-7" viewBox="0 0 24 24" fill="none" stroke={iconColor} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
          <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
          <polyline points="14 2 14 8 20 8" />
          <path d="M9 15l2 2 4-4" />
        </svg>
      )
    case "03":
      // Escalate: Database + Gear
      return (
        <svg className="w-7 h-7" viewBox="0 0 24 24" fill="none" stroke={iconColor} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
          <ellipse cx="12" cy="6" rx="7" ry="2.5" />
          <path d="M5 6v6c0 1.38 3.13 2.5 7 2.5.7 0 1.38-.04 2.03-.12" />
          <path d="M5 12v6c0 1.38 3.13 2.5 7 2.5.4 0 .79-.01 1.17-.04" />
          <circle cx="17.5" cy="17.5" r="2.5" />
          <path d="M17.5 13.8v1.2M17.5 20v1.2M13.8 17.5h1.2M20 17.5h1.2" />
        </svg>
      )
    case "04":
      // Review: Speech bubble with star inside
      return (
        <svg className="w-7 h-7" viewBox="0 0 24 24" fill="none" stroke={iconColor} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
          <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
          <polygon points="12 7.2 13.1 9.4 15.5 9.7 13.7 11.4 14.2 13.8 12 12.5 9.8 13.8 10.3 11.4 8.5 9.7 10.9 9.4" fill={iconColor} stroke="none" />
        </svg>
      )
    case "05":
      // Improve: Trending up graph
      return (
        <svg className="w-7 h-7" viewBox="0 0 24 24" fill="none" stroke={iconColor} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
          <polyline points="22 7 13.5 15.5 8.5 10.5 2 17" />
          <polyline points="16 7 22 7 22 13" />
        </svg>
      )
    default:
      return null
  }
}

export function IncidentWorkflow() {
  return (
    <section className="py-4 sm:py-8 bg-white text-[#293836]">
      <div className="w-full">
        
        {/* Header Section */}
        <div className="text-center max-w-3xl mx-auto space-y-3 scroll-section">
          <h2 className="text-2xl sm:text-3xl md:text-[34px] font-bold leading-snug tracking-tight text-[#233230]">
            From Incident To Resolution In One Connected Workflow
          </h2>
          <p className="text-xs sm:text-sm text-[#4A5D5A] leading-relaxed max-w-xl mx-auto">
            Continuous Compliance Isn't An Event—It's A Daily Process. Cantra Transforms Routine Care Activities Into Measurable Quality Improvements.
          </p>
        </div>

        {/* Desktop View (Interactive S-Curve Layout matching design exactly) */}
        <div className="hidden md:block relative w-full max-w-[720px] mx-auto h-[740px] scroll-section">
          
          {/* Curved SVG Line passing through centers of badges */}
          <svg
            className="absolute inset-0 w-full h-full pointer-events-none z-0"
            viewBox="0 0 720 740"
            fill="none"
          >
            <path
              d="M 370 10 
                 L 370 60 
                 C 370 135, 250 135, 250 210 
                 C 250 285, 415 285, 415 360 
                 C 415 435, 255 435, 255 510 
                 C 255 585, 365 585, 365 660 
                 L 360 710"
              stroke="#98B7B0"
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
                  className="absolute -translate-x-1/2 -translate-y-1/2 z-10 w-[72px] h-[72px] rounded-full bg-white border border-slate-100/80 flex items-center justify-center shadow-[0_10px_25px_-5px_rgba(0,0,0,0.09),0_4px_10px_-2px_rgba(0,0,0,0.04)] cursor-pointer transition-transform duration-200 hover:scale-105"
                  style={{ left: `${item.badgeX}px`, top: `${item.badgeY}px` }}
                >
                  <StepIcon step={item.step} />
                </div>

                {/* Text Block */}
                <div
                  className={`absolute -translate-y-1/2 z-10 space-y-1 cursor-pointer transition-opacity duration-200 hover:opacity-90 ${
                    isRightBadge ? "text-right" : "text-left"
                  }`}
                  style={
                    isRightBadge
                      ? {
                          top: `${item.badgeY}px`,
                          right: `${720 - item.badgeX + 48}px`,
                          maxWidth: "310px",
                        }
                      : {
                          top: `${item.badgeY}px`,
                          left: `${item.badgeX + 48}px`,
                          maxWidth: "330px",
                        }
                  }
                >
                  <h3 className="text-base font-bold text-[#233230]">
                    {item.title}
                  </h3>
                  <p className="text-xs sm:text-[13px] text-[#4A5D5A] leading-[21px]">
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
            <div key={item.step} className="flex items-start space-x-4 bg-slate-50/50 p-4 rounded-xl border border-slate-100 cursor-pointer transition-all duration-200 hover:bg-slate-100/60">
              <div className="shrink-0 w-14 h-14 rounded-full bg-white border border-slate-100 flex items-center justify-center shadow-md">
                <StepIcon step={item.step} />
              </div>
              <div className="space-y-1">
                <h3 className="text-base font-bold text-[#233230]">
                  {item.title}
                </h3>
                <p className="text-xs text-[#4A5D5A] leading-relaxed">
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
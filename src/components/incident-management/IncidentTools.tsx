'use client'

import * as React from "react"
import Image from "next/image"

const tools = [
  {
    image: "/images/incident-management/incident-reporting.png",
    title: "Incident Reporting",
    subtitle: "Capture Incidents Accurately, Consistently, And In Real Time.",
    description: "Record Accidents, Falls, Medication Errors, Behaviours, Safeguarding Concerns, Injuries, Near Misses, And Other Incidents Using Configurable Digital Forms With Severity Grading And Categorisation."
  },
  {
    image: "/images/incident-management/safeguarding-management.png",
    title: "Safeguarding Management",
    subtitle: "Manage Safeguarding Concerns With Confidence.",
    description: "Record Safeguarding Concerns, Document Investigations, Manage Referrals To Local Authorities, Track Outcomes, And Maintain A Complete Audit Trail From Initial Concern Through Resolution."
  },
  {
    image: "/images/incident-management/severity-escalation-engine.png",
    title: "Severity & Escalation Engine",
    subtitle: "Automatically Notify The Right People At The Right Time.",
    description: "Set Severity Thresholds To Trigger Instant Manager Notifications, Escalation Protocols, And Required Review Tasks Based On Incident Severity."
  },
  {
    image: "/images/incident-management/offline-incident-reporting.png",
    title: "Offline Incident Reporting",
    subtitle: "Never Lose Critical Information Because Of Poor Connectivity.",
    description: "Staff Can Continue Recording Incidents Without An Internet Connection. Reports Automatically Synchronise Once Connectivity Is Restored."
  },
  {
    image: "/images/incident-management/post-incident-review.png",
    title: "Post-Incident Review",
    subtitle: "Turn Every Incident Into An Opportunity For Improvement.",
    description: "Assign Investigations, Identify Root Causes, Record Lessons Learned, Monitor Corrective Actions, And Reduce The Likelihood Of Recurring Incidents."
  },
  {
    image: "/images/incident-management/incident-analytics.png",
    title: "Incident Analytics",
    subtitle: "See Patterns Before They Become Recurring Problems.",
    description: "Monitor Trends By Incident Type, Location, Resident, Staff, Severity, Time Period, And Service To Identify Improvement Opportunities And Strengthen Governance."
  }
]

export function IncidentTools() {
  return (
    <section className="py-4 sm:py-8 bg-white text-[#293836]">
      <div className="w-full space-y-12 sm:space-y-16">

        {/* Centered Title */}
        <div className="text-center max-w-[893px] mx-auto scroll-section">
          <h2 className="text-xl sm:text-3xl md:text-[35px] font-bold leading-tight md:leading-[66px] capitalize text-[#293836] font-['Lato',sans-serif]">
            Powerful Tools For Incident & Safeguarding Management
          </h2>
        </div>

        {/* 2-Column Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 max-w-[1240px] mx-auto scroll-section">
          {tools.map((item, idx) => (
            <div key={idx} className="space-y-4 flex flex-col justify-between">
              {/* Image Container */}
              <div className="relative w-full aspect-[1.45] rounded-[20px] overflow-hidden">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover object-center"
                />
              </div>

              {/* Text Block */}
              <div className="space-y-5">
                <h3 className="text-xl sm:text-2xl font-bold text-[#293836] font-['Lato',sans-serif]">
                  {item.title}
                </h3>
                <h4 className="text-base sm:text-lg font-semibold text-[#293836] font-['Lato',sans-serif]">
                  {item.subtitle}
                </h4>
                <p className="text-xs sm:text-sm md:text-[15px] font-normal leading-relaxed md:leading-[26px] text-[#4A5D5A] capitalize font-['Inter',sans-serif]">
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

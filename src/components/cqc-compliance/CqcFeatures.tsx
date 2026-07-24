'use client'

import * as React from "react"
import Image from "next/image"
import { CheckCircle2 } from "lucide-react"

export function CqcFeatures() {
  return (
    <section className="py-4 sm:py-8 bg-white text-[#293836] overflow-hidden">
      <div className="w-full space-y-16 sm:space-y-24 md:space-y-32">

        {/* Block 1: Compliance Evidence (Image Left, Copy Right) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-center max-w-[1240px] mx-auto scroll-section">

          {/* Left Image Collage (6 cols) */}
          <div className="lg:col-span-6 relative w-full h-[320px] sm:h-[440px] md:h-[500px] flex items-center justify-center">
            {/* Back Image: App Dashboard View */}
            <div className="absolute left-1 sm:left-4 top-0 w-[58%] h-[82%] rounded-[20px] overflow-hidden">
              <Image
                src="/images/cqc-compliance/compliance-evidence-1.png"
                alt="Compliance Evidence Dashboard"
                fill
                sizes="(max-width: 1024px) 50vw, 30vw"
                className="object-cover object-top"
              />
            </div>
            {/* Front Image: Caregiver and Resident */}
            <div className="absolute right-1 sm:right-4 bottom-0 w-[56%] h-[74%] rounded-[20px] overflow-hidden">
              <Image
                src="/images/cqc-compliance/compliance-evidence-2.png"
                alt="Caregiver reviewing compliance records with senior resident"
                fill
                sizes="(max-width: 1024px) 50vw, 30vw"
                className="object-cover object-center"
              />
            </div>
          </div>

          {/* Right Copy Block (6 cols) */}
          <div className="lg:col-span-6 space-y-4 sm:space-y-6 max-w-[571px]">
            <div className="space-y-2 sm:space-y-3">
              <h2 className="text-2xl sm:text-3xl md:text-[40px] font-bold leading-tight md:leading-[50px] capitalize text-[#293836] font-['Lato',sans-serif]">
                Compliance Evidence
              </h2>
              <h3 className="text-lg sm:text-xl md:text-[24px] font-medium leading-snug md:leading-[32px] capitalize text-[#293836] font-['Lato',sans-serif]">
                Turn Everyday Care Into Inspection Evidence.
              </h3>
            </div>

            <p className="text-xs sm:text-sm md:text-base font-normal leading-relaxed md:leading-[27px] text-[#293836] capitalize font-['Inter',sans-serif] pt-1">
              Preparing For Inspections Shouldn't Begin When An Inspector Calls. Cantra Continuously Collects Evidence As Your Team Works, Creating A Living Audit Trail Across Every Resident, Staff Member, And Service. Evidence Is Automatically Linked To Care Delivery, Assessments, Medication Administration, Incidents, Observations, Training, Audits, And Quality Improvement Activities—Giving Managers Immediate Access To The Records Inspectors Expect To See.
            </p>

            {/* Highlights Card Container */}
            <div className="p-6 md:p-8 rounded-[20px] bg-[#FAF5F2] border border-orange-100/50 space-y-4">
              <h4 className="text-xs font-bold text-[#293836] tracking-wide uppercase font-['Lato',sans-serif]">
                Highlights
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {[
                  "Continuous Evidence Collection Across The Platform",
                  "Chronological Audit Trail For Every Activity",
                  "Resident, Staff, And Organisation-Level Evidence",
                  "Searchable Compliance Records",
                  "Secure Historical Record Retention",
                  "Export Evidence Packs For Inspections"
                ].map((item, idx) => (
                  <div key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm font-medium text-[#293836] leading-snug font-['Inter',sans-serif]">
                    <CheckCircle2 className="h-4 w-4 text-[#3D5D58] shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

        </div>


        {/* Block 2: Automatic Mapping To CQC Quality Statements (Copy Left, Image Right) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-center max-w-[1240px] mx-auto scroll-section">

          {/* Left Copy Block (6 cols) */}
          <div className="lg:col-span-6 space-y-4 sm:space-y-6 max-w-[563px] lg:order-1 order-2">
            <div className="space-y-2 sm:space-y-3">
              <h2 className="text-2xl sm:text-3xl md:text-[40px] font-bold leading-tight md:leading-[50px] capitalize text-[#293836] font-['Lato',sans-serif]">
                CQC Quality Mapping
              </h2>
              <h3 className="text-lg sm:text-xl md:text-[24px] font-medium leading-snug md:leading-[32px] capitalize text-[#293836] font-['Lato',sans-serif]">
                Map Every Action To CQC Quality Statements Automatically.
              </h3>
            </div>

            <p className="text-xs sm:text-sm md:text-base font-normal leading-relaxed md:leading-[27px] text-[#293836] capitalize font-['Inter',sans-serif] pt-1">
              Stop Manually Organising Compliance Evidence. Cantra Automatically Maps Medication Records, Assessments, Audits, Handover Notes, Training, Incidents, And Other Daily Operations To CQC's Key Questions And Quality Statements. When Inspectors Review Your Performance, You Can Instantly Show Well-Organised Evidence Packets Mapped To Specific Standards.
            </p>

            {/* Highlights Card Container */}
            <div className="p-6 md:p-8 rounded-[20px] bg-[#FAF5F2] border border-orange-100/50 space-y-4">
              <h4 className="text-xs font-bold text-[#293836] tracking-wide uppercase font-['Lato',sans-serif]">
                Key Capabilities
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {[
                  "Automatic Evidence Mapping To CQC Standards",
                  "Compliance Dashboards For Key Questions",
                  "Identify Missing Evidence Proactively",
                  "Self-Assessment Prep Modules",
                  "Interactive Quality Reports",
                  "Governance Meeting Evidence Packs"
                ].map((item, idx) => (
                  <div key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm font-medium text-[#293836] leading-snug font-['Inter',sans-serif]">
                    <CheckCircle2 className="h-4 w-4 text-[#3D5D58] shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Image Collage (6 cols) */}
          <div className="lg:col-span-6 relative w-full h-[320px] sm:h-[440px] md:h-[500px] lg:order-2 order-1 flex items-center justify-center">
            {/* Back Image */}
            <div className="absolute left-1 sm:left-4 top-0 w-[55%] h-[82%] rounded-[20px] overflow-hidden">
              <Image
                src="/images/cqc-compliance/automatic-mapping-to-cqc-1.png"
                alt="Automatic CQC Mapping Panel"
                fill
                sizes="(max-width: 1024px) 50vw, 30vw"
                className="object-cover object-top"
              />
            </div>
            {/* Front Image */}
            <div className="absolute right-1 sm:right-4 bottom-0 w-[55%] h-[74%] rounded-[20px] overflow-hidden">
              <Image
                src="/images/cqc-compliance/automatic-mapping-to-cqc-2.png"
                alt="Caregiver consulting senior resident on tablet"
                fill
                sizes="(max-width: 1024px) 50vw, 30vw"
                className="object-cover object-center"
              />
            </div>
          </div>

        </div>


        {/* Block 3: PIR Prep (Image Left, Copy Right) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-center max-w-[1240px] mx-auto scroll-section">

          {/* Left Image Collage (6 cols) */}
          <div className="lg:col-span-6 relative w-full h-[320px] sm:h-[440px] md:h-[500px] flex items-center justify-center">
            {/* Back Image */}
            <div className="absolute left-1 sm:left-4 top-0 w-[56%] h-[84%] rounded-[20px] overflow-hidden">
              <Image
                src="/images/cqc-compliance/provider-information-return-pir-assistance-1.png"
                alt="PIR Preparation Checklist View"
                fill
                sizes="(max-width: 1024px) 50vw, 30vw"
                className="object-cover object-top"
              />
            </div>
            {/* Front Image */}
            <div className="absolute right-1 sm:right-4 bottom-0 w-[56%] h-[76%] rounded-[20px] overflow-hidden">
              <Image
                src="/images/cqc-compliance/provider-information-return-pir-assistance-2.png"
                alt="Caregiver explaining clinical safety plan"
                fill
                sizes="(max-width: 1024px) 50vw, 30vw"
                className="object-cover object-center"
              />
            </div>
          </div>

          {/* Right Copy Block (6 cols) */}
          <div className="lg:col-span-6 space-y-4 sm:space-y-6 max-w-[571px]">
            <div className="space-y-2 sm:space-y-3">
              <h2 className="text-2xl sm:text-3xl md:text-[40px] font-bold leading-tight md:leading-[50px] capitalize text-[#293836] font-['Lato',sans-serif]">
                PIR Preparation
              </h2>
              <h3 className="text-lg sm:text-xl md:text-[24px] font-medium leading-snug md:leading-[32px] capitalize text-[#293836] font-['Lato',sans-serif]">
                Complete Your Provider Information Return With Confidence.
              </h3>
            </div>

            <p className="text-xs sm:text-sm md:text-base font-normal leading-relaxed md:leading-[27px] text-[#293836] capitalize font-['Inter',sans-serif] pt-1">
              Completing The CQC Provider Information Return (PIR) Can Be Stressful and Time-Consuming. Cantra Simplifies This Process By Generating Draft Responses, Consolidating Performance Data, Compiling Audits, Exporting Incident Metrics, And Assembling Safe Care Evidence—Allowing You To Submit Accurate, High-Quality Responses Within The CQC's Strict Deadlines.
            </p>

            {/* Highlights Card Container */}
            <div className="p-6 md:p-8 rounded-[20px] bg-[#FAF5F2] border border-orange-100/50 space-y-4">
              <h4 className="text-xs font-bold text-[#293836] tracking-wide uppercase font-['Lato',sans-serif]">
                Features
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {[
                  "Consolidate Incident & Activity Data Instantly",
                  "Audits, Reviews, And Actions Report Exporter",
                  "Compare Performance Metrics Over Time",
                  "Collaborate with your team on draft responses",
                  "Identify Compliance Gaps Proactively",
                  "Maintain Historical PIR Submissions"
                ].map((item, idx) => (
                  <div key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm font-medium text-[#293836] leading-snug font-['Inter',sans-serif]">
                    <CheckCircle2 className="h-4 w-4 text-[#3D5D58] shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

        </div>


        {/* Block 4: Regulation Breach Risk Alerts (Copy Left, Image Right) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-center max-w-[1240px] mx-auto scroll-section">

          {/* Left Copy Block (6 cols) */}
          <div className="lg:col-span-6 space-y-4 sm:space-y-6 max-w-[563px] lg:order-1 order-2">
            <div className="space-y-2 sm:space-y-3">
              <h2 className="text-2xl sm:text-3xl md:text-[40px] font-bold leading-tight md:leading-[50px] capitalize text-[#293836] font-['Lato',sans-serif]">
                Regulation Breach Risk Alerts
              </h2>
              <h3 className="text-lg sm:text-xl md:text-[24px] font-medium leading-snug md:leading-[32px] capitalize text-[#293836] font-['Lato',sans-serif]">
                Identify Compliance Risks Before They Become Problems.
              </h3>
            </div>

            <p className="text-xs sm:text-sm md:text-base font-normal leading-relaxed md:leading-[27px] text-[#293836] capitalize font-['Inter',sans-serif] pt-1">
              Rather Than Discovering Issues During Inspections, Cantra Proactively Identifies Areas That May Put Compliance At Risk. The System Monitors Overdue Care Reviews, Missed Medication Signatures, Incomplete Assessments, Expired Training, Missing Documentation, Outstanding Incidents, And Other Operational Gaps, Notifying Managers Before They Escalate.
            </p>

            {/* Benefits Card Container */}
            <div className="p-6 md:p-8 rounded-[20px] bg-[#FAF5F2] border border-orange-100/50 space-y-4">
              <h4 className="text-xs font-bold text-[#293836] tracking-wide uppercase font-['Lato',sans-serif]">
                Benefits
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {[
                  "Overdue Care Plan Reviews",
                  "Missing Risk Assessments",
                  "Medication Documentation Gaps",
                  "Expired Mandatory Training",
                  "Makes Governance Meetings More Meaningful"
                ].map((item, idx) => (
                  <div key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm font-medium text-[#293836] leading-snug font-['Inter',sans-serif]">
                    <CheckCircle2 className="h-4 w-4 text-[#3D5D58] shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Image Collage (6 cols) */}
          <div className="lg:col-span-6 space-y-4 lg:order-2 order-1 flex flex-col gap-3">
            <div className="relative w-full aspect-[2.1] rounded-[20px] overflow-hidden">
              <Image
                src="/images/cqc-compliance/regulation-breach-risk-alerts-1.png"
                alt="Loved by care professionals banner"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover object-center"
              />
            </div>
            <div className="relative w-full aspect-[1.8] rounded-[20px] overflow-hidden">
              <Image
                src="/images/cqc-compliance/regulation-breach-risk-alerts-2.png"
                alt="Caregiver consulting senior resident on tablet"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover object-center"
              />
            </div>
            <div className="relative w-full aspect-[2.1] rounded-[20px] overflow-hidden">
              <Image
                src="/images/cqc-compliance/regulation-breach-risk-alerts-3.png"
                alt="Smart care better outcomes dashboard panel"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover object-center"
              />
            </div>
          </div>

        </div>

      </div>
    </section>
  )
}

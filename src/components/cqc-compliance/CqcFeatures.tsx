'use client'

import * as React from "react"
import Image from "next/image"
import { CheckCircle2 } from "lucide-react"

export function CqcFeatures() {
  return (
    <section className="py-20 bg-white text-slate-900 overflow-hidden">
      <div className="mx-auto max-w-7xl px-6 md:px-8 space-y-32">

        {/* ------------------------------------------------------------- */}
        {/* Block 1: Compliance Evidence (Image Left, Copy Right) */}
        {/* ------------------------------------------------------------- */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Image Collage (6 cols) */}
          <div className="lg:col-span-6 relative w-full h-[360px] md:h-[440px]">
            {/* Back Image: App Dashboard View */}
            <div className="absolute left-0 top-0 w-[58%] aspect-[4/5] rounded-2xl overflow-hidden shadow-sm">
              <Image 
                src="/images/cqc-compliance/compliance-evidence-1.png"
                alt="Compliance Evidence Dashboard"
                fill
                sizes="30vw"
                className="object-cover object-top"
              />
            </div>
            {/* Front Image: Caregiver and Resident */}
            <div className="absolute right-0 bottom-4 w-[56%] aspect-[1.1] rounded-2xl overflow-hidden shadow-sm">
              <Image 
                src="/images/cqc-compliance/compliance-evidence-2.png"
                alt="Caregiver reviewing compliance records with senior resident"
                fill
                sizes="30vw"
                className="object-cover object-center"
              />
            </div>
          </div>

          {/* Right Copy Block (6 cols) */}
          <div className="lg:col-span-6 space-y-6">
            <div className="space-y-3">
              <h2 className="text-3xl md:text-[38px] font-bold text-primary font-sans leading-tight">
                Compliance Evidence
              </h2>
              <h3 className="text-lg md:text-xl font-bold text-slate-700 font-sans">
                Turn Everyday Care Into Inspection Evidence.
              </h3>
            </div>

            <p className="text-xs md:text-sm text-slate-500 leading-relaxed">
              Preparing For Inspections Shouldn't Begin When An Inspector Calls. Cantra Continuously Collects Evidence As Your Team Works, Creating A Living Audit Trail Across Every Resident, Staff Member, And Service. Evidence Is Automatically Linked To Care Delivery, Assessments, Medication Administration, Incidents, Observations, Training, Audits, And Quality Improvement Activities—Giving Managers Immediate Access To The Records Inspectors Expect To See.
            </p>

            {/* Highlights Card Container */}
            <div className="p-6 md:p-8 rounded-2xl bg-[#FFF8F5] border border-orange-100/50 space-y-5">
              <h4 className="text-xs font-bold text-slate-800 tracking-wide uppercase">
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
                  <div key={idx} className="flex items-start gap-2.5 text-xs font-medium text-slate-700 leading-snug">
                    <CheckCircle2 className="h-4 w-4 text-emerald-600 shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

        </div>


        {/* ------------------------------------------------------------- */}
        {/* Block 2: Automatic Mapping To CQC Quality Statements (Copy Left, Image Right) */}
        {/* ------------------------------------------------------------- */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Copy Block (6 cols) */}
          <div className="lg:col-span-6 space-y-6 lg:order-1 order-2">
            <div className="space-y-3">
              <h2 className="text-3xl md:text-[38px] font-bold text-primary font-sans leading-tight">
                Automatic Mapping To CQC Quality Statements
              </h2>
              <h3 className="text-lg md:text-xl font-bold text-slate-700 font-sans">
                Every Action Contributes To Compliance.
              </h3>
            </div>

            <div className="space-y-3 text-xs md:text-sm text-slate-500 leading-relaxed">
              <p>
                Instead Of Manually Gathering Documents Before An Inspection, Cantra Automatically Maps Activities Performed Throughout The Platform To Relevant CQC Quality Statements.
              </p>
              <p>
                Care Plan Reviews, Medication Administration, Staff Supervision, Safeguarding Actions, Incidents, Training, Observations, Audits, And Quality Improvements Are Linked To The Areas Inspectors Assess, Making It Easier To Demonstrate Compliance With Confidence.
              </p>
            </div>

            {/* Benefits Card Container */}
            <div className="p-6 md:p-8 rounded-2xl bg-[#FCFAF6] border border-amber-100/50 space-y-5">
              <h4 className="text-xs font-bold text-slate-800 tracking-wide uppercase">
                Benefits
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {[
                  "Automatic Evidence Categorisation",
                  "Reduced Inspection Preparation Time",
                  "Clear Visibility Of Evidence Gaps",
                  "Supports Continuous Quality Monitoring",
                  "Makes Governance Meetings More Meaningful"
                ].map((item, idx) => (
                  <div key={idx} className="flex items-start gap-2.5 text-xs font-medium text-slate-700 leading-snug">
                    <CheckCircle2 className="h-4 w-4 text-emerald-600 shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Image Collage (6 cols) */}
          <div className="lg:col-span-6 relative w-full h-[360px] md:h-[440px] lg:order-2 order-1">
            <div className="absolute left-0 top-0 w-[55%] aspect-[1.1] rounded-2xl overflow-hidden shadow-sm">
              <Image 
                src="/images/cqc-compliance/automatic-mapping-to-cqc-1.png"
                alt="Quality statements mapping dashboard"
                fill
                sizes="30vw"
                className="object-cover object-center"
              />
            </div>
            <div className="absolute right-0 bottom-4 w-[60%] aspect-[4/5] rounded-2xl overflow-hidden shadow-sm">
              <Image 
                src="/images/cqc-compliance/automatic-mapping-to-cqc-2.png"
                alt="Care worker pointing to digital CQC quality statement map on tablet"
                fill
                sizes="30vw"
                className="object-cover object-top"
              />
            </div>
          </div>

        </div>


        {/* ------------------------------------------------------------- */}
        {/* Block 3: Provider Information Return (PIR) Assistance (Image Left, Copy Right) */}
        {/* ------------------------------------------------------------- */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Image Collage (6 cols) */}
          <div className="lg:col-span-6 space-y-4">
            <div className="grid grid-cols-2 gap-4">
              <div className="relative aspect-[1.3] rounded-2xl overflow-hidden shadow-sm">
                <Image 
                  src="/images/cqc-compliance/provider-information-return-pir-assistance-1.png"
                  alt="PIR generator view"
                  fill
                  sizes="25vw"
                  className="object-cover object-center"
                />
              </div>
              <div className="relative aspect-[1.3] rounded-2xl overflow-hidden shadow-sm">
                <Image 
                  src="/images/cqc-compliance/provider-information-return-pir-assistance-2.png"
                  alt="Senior resident walking with caregiver support"
                  fill
                  sizes="25vw"
                  className="object-cover object-center"
                />
              </div>
            </div>
            <div className="relative w-full aspect-[2.1] rounded-2xl overflow-hidden shadow-sm">
              <Image 
                src="/images/cqc-compliance/provider-information-return-pir-assistance-3.png"
                alt="Care manager looking at PIR dashboard"
                fill
                sizes="50vw"
                className="object-cover object-center"
              />
            </div>
          </div>

          {/* Right Copy Block (6 cols) */}
          <div className="lg:col-span-6 space-y-6">
            <div className="space-y-3">
              <h2 className="text-3xl md:text-[38px] font-bold text-primary font-sans leading-tight">
                Provider Information Return (PIR) Assistance
              </h2>
              <h3 className="text-lg md:text-xl font-bold text-slate-700 font-sans">
                Complete Your PIR With Confidence.
              </h3>
            </div>

            <p className="text-xs md:text-sm text-slate-500 leading-relaxed">
              When It's Time To Complete Your Provider Information Return, Much Of The Required Information Already Exists Inside Cantra. The Platform Guides Managers Through The PIR Process, Helping Populate Key Operational Data, Quality Metrics, Staffing Information, Incidents, Occupancy Figures, And Performance Indicators From Live Records. Instead Of Searching Multiple Spreadsheets And Systems, Managers Can Complete Submissions Faster With Accurate Information.
            </p>

            {/* Includes Card Container */}
            <div className="p-6 md:p-8 rounded-2xl bg-[#FFF8F5] border border-orange-100/50 space-y-5">
              <h4 className="text-xs font-bold text-slate-800 tracking-wide uppercase">
                Includes
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
                  <div key={idx} className="flex items-start gap-2.5 text-xs font-medium text-slate-700 leading-snug">
                    <CheckCircle2 className="h-4 w-4 text-emerald-600 shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

        </div>


        {/* ------------------------------------------------------------- */}
        {/* Block 4: Regulation Breach Risk Alerts (Copy Left, Image Right) */}
        {/* ------------------------------------------------------------- */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Copy Block (6 cols) */}
          <div className="lg:col-span-6 space-y-6 lg:order-1 order-2">
            <div className="space-y-3">
              <h2 className="text-3xl md:text-[38px] font-bold text-primary font-sans leading-tight">
                Regulation Breach Risk Alerts
              </h2>
              <h3 className="text-lg md:text-xl font-bold text-slate-700 font-sans">
                Identify Compliance Risks Before They Become Problems.
              </h3>
            </div>

            <p className="text-xs md:text-sm text-slate-500 leading-relaxed">
              Rather Than Discovering Issues During Inspections, Cantra Proactively Identifies Areas That May Put Compliance At Risk. The System Monitors Overdue Care Reviews, Missed Medication Signatures, Incomplete Assessments, Expired Training, Missing Documentation, Outstanding Incidents, And Other Operational Gaps, Notifying Managers Before They Escalate.
            </p>

            {/* Benefits Card Container */}
            <div className="p-6 md:p-8 rounded-2xl bg-[#FCFAF6] border border-amber-100/50 space-y-5">
              <h4 className="text-xs font-bold text-slate-800 tracking-wide uppercase">
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
                  <div key={idx} className="flex items-start gap-2.5 text-xs font-medium text-slate-700 leading-snug">
                    <CheckCircle2 className="h-4 w-4 text-emerald-600 shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Image Collage (6 cols) */}
          <div className="lg:col-span-6 space-y-4 lg:order-2 order-1">
            <div className="relative w-full aspect-[2.1] rounded-2xl overflow-hidden shadow-sm">
              <Image 
                src="/images/cqc-compliance/regulation-breach-risk-alerts-1.png"
                alt="Loved by care professionals banner"
                fill
                sizes="50vw"
                className="object-cover object-center"
              />
            </div>
            <div className="relative w-full aspect-[1.8] rounded-2xl overflow-hidden shadow-sm">
              <Image 
                src="/images/cqc-compliance/regulation-breach-risk-alerts-2.png"
                alt="Caregiver consulting senior resident on tablet"
                fill
                sizes="50vw"
                className="object-cover object-center"
              />
            </div>
            <div className="relative w-full aspect-[2.1] rounded-2xl overflow-hidden shadow-sm">
              <Image 
                src="/images/cqc-compliance/regulation-breach-risk-alerts-3.png"
                alt="Smart care better outcomes dashboard panel"
                fill
                sizes="50vw"
                className="object-cover object-center"
              />
            </div>
          </div>

        </div>

      </div>
    </section>
  )
}

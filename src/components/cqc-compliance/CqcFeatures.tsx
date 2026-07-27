'use client'

import Image from "next/image"
import { CheckCircle2, FileText } from "lucide-react"

export function CqcFeatures() {
  return (
    <section className="py-16 md:py-6 bg-white text-[#293836] overflow-hidden">
      <div className="w-full space-y-16 sm:space-y-24 md:space-y-32">

        {/* Centered Top Header */}
        <div className="text-center max-w-4xl mx-auto space-y-4 md:space-y-5 scroll-section">
          <h2 className="text-2xl sm:text-3xl md:text-[40px] font-bold leading-tight md:leading-[60px] tracking-tight text-[#293836] mx-auto font-['Lato',sans-serif]">
            Everything You Need To Stay Compliant
          </h2>
          <p className="text-sm sm:text-base text-[#4A5D5A] leading-[30px] max-w-3xl mx-auto font-['Lato',sans-serif]">
            Whether You're Preparing For A CQC Inspection, Monitoring Quality Across Multiple Homes, Or Generating Reports For Internal Governance, Cantra Gives You Complete Visibility Without The Administrative Burden.
          </p>
        </div>

        {/* Block 1: Compliance Evidence (Image Left, Copy Right) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-center max-w-[1240px] mx-auto scroll-section">

          {/* Left Image Collage (6 cols) */}
          <div className="lg:col-span-6 relative w-full h-[320px] sm:h-[440px] md:h-[500px] flex items-center justify-center">
            {/* Back Image: App Dashboard View */}
            <div className="absolute left-1 sm:left-4 top-0 w-[58%] h-[82%] rounded-[20px] overflow-hidden shadow-md">
              <Image
                src="/images/cqc-compliance/compliance-evidence-1.png"
                alt="Compliance Evidence Dashboard"
                fill
                sizes="(max-width: 1024px) 50vw, 30vw"
                className="object-cover object-top"
              />
            </div>

            {/* Floating Badge 1: 92% Compliance Rate (Overlapping center) */}
            <div className="absolute left-[54%] top-[34%] -translate-x-1/2 -translate-y-1/2 z-20 bg-white rounded-xl shadow-lg border border-slate-100 p-2.5 sm:p-3 flex items-center gap-2.5 w-max select-none">
              <div className="flex h-8 w-8 items-center justify-center rounded-full bg-[#EAF0EE] text-[#3D5D58] shrink-0">
                <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                  <path d="M9 11l2 2 4-4" />
                </svg>
              </div>
              <div className="flex flex-col">
                <span className="text-xs sm:text-sm font-bold text-[#293836] font-['Lato',sans-serif] leading-none">92%</span>
                <span className="text-[10px] text-[#4A5D5A] font-medium font-['Inter',sans-serif] mt-0.5 leading-none">Compliance Rate</span>
              </div>
            </div>

            {/* Front Image: Caregiver and Resident */}
            <div className="absolute right-1 sm:right-4 bottom-0 w-[56%] h-[74%] rounded-[20px] overflow-hidden shadow-lg z-10">
              <Image
                src="/images/cqc-compliance/compliance-evidence-2.png"
                alt="Caregiver reviewing compliance records with senior resident"
                fill
                sizes="(max-width: 1024px) 50vw, 30vw"
                className="object-cover object-center"
              />
            </div>

            {/* Floating Badge 2: 248 Total Evidence (Bottom Left) */}
            <div className="absolute left-[4%] bottom-[6%] z-20 bg-white rounded-xl shadow-lg border border-slate-100 p-2.5 sm:p-3 flex items-center gap-2.5 w-max select-none">
              <div className="flex h-8 w-8 items-center justify-center rounded-full bg-[#EAF0EE] text-[#3D5D58] shrink-0">
                <FileText className="w-4 h-4" />
              </div>
              <div className="flex flex-col">
                <span className="text-xs sm:text-sm font-bold text-[#293836] font-['Lato',sans-serif] leading-none">248</span>
                <span className="text-[10px] text-[#4A5D5A] font-medium font-['Inter',sans-serif] mt-0.5 leading-none">Total Evidence</span>
              </div>
            </div>
          </div>

          {/* Right Copy Block (6 cols) */}
          <div className="lg:col-span-6 space-y-4 sm:space-y-6 max-w-[571px]">
            <div className="space-y-2 sm:space-y-3">
              <h2 className="text-2xl sm:text-3xl md:text-[40px] font-bold leading-tight md:leading-[50px] capitalize text-[#293836] font-['Lato',sans-serif]">
                Compliance Evidence
              </h2>
              <h3 className="text-lg sm:text-xl md:text-[24px] font-medium leading-snug md:leading-[32px] capitalize text-[#4A5D5A] font-['Lato',sans-serif]">
                Turn Everyday Care Into Inspection Evidence.
              </h3>
            </div>

            <p className="text-xs sm:text-sm md:text-base font-normal leading-relaxed md:leading-[28px] text-[#4A5D5A] capitalize font-['Inter',sans-serif] pt-1">
              Preparing For Inspections Shouldn't Begin When An Inspector Calls. Cantra Continuously Collects Evidence As Your Team Works, Creating A Living Audit Trail Across Every Resident, Staff Member, And Service. Evidence Is Automatically Linked To Care Delivery, Assessments, Medication Administration, Incidents, Observations, Training, Audits, And Quality Improvement Activities—Giving Managers Immediate Access To The Records Inspectors Expect To See.
            </p>

            {/* Highlights Card Container */}
            <div className="p-6 md:p-8 rounded-[20px] bg-[#FAF8F6] border border-slate-100/50 space-y-5">
              <h4 className="text-xs font-bold text-[#293836] tracking-wide uppercase font-['Lato',sans-serif]">
                Highlights
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-4">
                {[
                  "Continuous Evidence Collection Across The Platform",
                  "Chronological Audit Trail For Every Activity",
                  "Resident, Staff, And Organisation-Level Evidence",
                  "Searchable Compliance Records",
                  "Secure Historical Record Retention",
                  "Export Evidence Packs For Inspections"
                ].map((item, idx) => (
                  <div key={idx} className="flex items-start gap-3 text-xs sm:text-[13px] font-medium text-[#293836] leading-snug font-['Inter',sans-serif]">
                    <div className="flex h-5 w-5 items-center justify-center rounded-full bg-[#EAF0EE] text-[#3D5D58] shrink-0 mt-0.5">
                      <svg className="w-3 h-3" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                        <polyline points="20 6 9 17 4 12" />
                      </svg>
                    </div>
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
                Automatic Mapping To CQC Quality Statements
              </h2>
              <h3 className="text-lg sm:text-xl md:text-[24px] font-medium leading-snug md:leading-[32px] capitalize text-[#4A5D5A] font-['Lato',sans-serif]">
                Every Action Contributes To Compliance.
              </h3>
            </div>

            <div className="space-y-4 text-xs sm:text-sm md:text-base font-normal leading-relaxed md:leading-[28px] text-[#4A5D5A] capitalize font-['Inter',sans-serif] pt-1">
              <p>
                Instead Of Manually Gathering Documents Before An Inspection, Cantra Automatically Maps Activities Performed Throughout The Platform To Relevant CQC Quality Statements.
              </p>
              <p>
                Care Plan Reviews, Medication Administration, Staff Supervision, Safeguarding Actions, Incidents, Training, Observations, Audits, And Quality Improvements Are Linked To The Areas Inspectors Assess, Making It Easier To Demonstrate Compliance With Confidence.
              </p>
            </div>

            {/* Highlights Card Container */}
            <div className="p-6 md:p-8 rounded-[20px] bg-[#FAF8F6] border border-slate-100/50 space-y-5">
              <h4 className="text-xs font-bold text-[#293836] tracking-wide uppercase font-['Lato',sans-serif]">
                Benefits
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-4">
                {[
                  "Automatic Evidence Categorisation",
                  "Reduced Inspection Preparation Time",
                  "Clear Visibility Of Evidence Gaps",
                  "Supports Continuous Quality Monitoring",
                  "Makes Governance Meetings More Meaningful"
                ].map((item, idx) => (
                  <div key={idx} className="flex items-start gap-3 text-xs sm:text-[13px] font-medium text-[#293836] leading-snug font-['Inter',sans-serif]">
                    <div className="flex h-5 w-5 items-center justify-center rounded-full bg-[#EAF0EE] text-[#3D5D58] shrink-0 mt-0.5">
                      <svg className="w-3 h-3" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                        <polyline points="20 6 9 17 4 12" />
                      </svg>
                    </div>
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Image Collage (6 cols) */}
          <div className="lg:col-span-6 relative w-full h-[320px] sm:h-[440px] md:h-[500px] lg:order-2 order-1 flex items-center justify-center">
            {/* Back Image */}
            <div className="absolute left-1 sm:left-4 top-[10%] w-[58%] h-[82%] rounded-[20px] overflow-hidden shadow-md">
              <Image
                src="/images/cqc-compliance/automatic-mapping-to-cqc-1.png"
                alt="Automatic CQC Mapping Panel"
                fill
                sizes="(max-width: 1024px) 50vw, 30vw"
                className="object-cover object-top"
              />
            </div>

            {/* Floating Badge 1: 34 Quality Statements (Top Left) */}
            <div className="absolute left-[8%] top-[12%] z-20 bg-white rounded-xl shadow-lg border border-slate-100 p-2.5 sm:p-3 flex items-center gap-2.5 w-max select-none">
              <div className="flex h-8 w-8 items-center justify-center rounded-full bg-[#EAF0EE] text-[#3D5D58] shrink-0">
                <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="4" y1="21" x2="4" y2="14" />
                  <line x1="4" y1="10" x2="4" y2="3" />
                  <line x1="12" y1="21" x2="12" y2="12" />
                  <line x1="12" y1="8" x2="12" y2="3" />
                  <line x1="20" y1="21" x2="20" y2="16" />
                  <line x1="20" y1="12" x2="20" y2="3" />
                  <line x1="1" y1="14" x2="7" y2="14" />
                  <line x1="9" y1="8" x2="15" y2="8" />
                  <line x1="17" y1="16" x2="23" y2="16" />
                </svg>
              </div>
              <div className="flex flex-col">
                <span className="text-xs sm:text-sm font-bold text-[#293836] font-['Lato',sans-serif] leading-none">34</span>
                <span className="text-[10px] text-[#4A5D5A] font-medium font-['Inter',sans-serif] mt-0.5 leading-none">Quality Statements</span>
              </div>
            </div>

            {/* Front Image: Caregiver (Rotated) */}
            <div className="absolute right-1 sm:right-4 top-[5%] w-[56%] h-[78%] rounded-[20px] overflow-hidden shadow-lg z-10 transform rotate-[4deg] transition-transform hover:rotate-0 duration-300">
              <Image
                src="/images/cqc-compliance/automatic-mapping-to-cqc-2.png"
                alt="Caregiver consulting senior resident on tablet"
                fill
                sizes="(max-width: 1024px) 50vw, 30vw"
                className="object-cover object-center"
              />
            </div>

            {/* Floating Badge 2: 31 Mapped (Top Right of collage center) */}
            <div className="absolute left-[54%] top-[10%] z-20 bg-white rounded-xl shadow-lg border border-slate-100 p-2.5 sm:p-3 flex items-center gap-2.5 w-max select-none">
              <div className="flex h-8 w-8 items-center justify-center rounded-full bg-[#EAF0EE] text-[#3D5D58] shrink-0">
                <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                  <path d="M9 11l2 2 4-4" />
                </svg>
              </div>
              <div className="flex flex-col">
                <span className="text-xs sm:text-sm font-bold text-[#293836] font-['Lato',sans-serif] leading-none">31</span>
                <span className="text-[10px] text-[#4A5D5A] font-medium font-['Inter',sans-serif] mt-0.5 leading-none">Mapped</span>
              </div>
            </div>

          </div>

        </div>


        {/* Block 3: PIR Prep (Image Left, Copy Right) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-center max-w-[1240px] mx-auto scroll-section">

          {/* Left Image Collage (6 cols) */}
          <div className="lg:col-span-6 relative w-full h-[420px] sm:h-[520px] md:h-[580px] flex items-center justify-center">
            {/* Back Image 1 (Mobile PIR dashboard) */}
            <div className="absolute left-[4%] top-[2%] w-[48%] h-[68%] rounded-[20px] overflow-hidden shadow-md transform rotate-[-6deg]">
              <Image
                src="/images/cqc-compliance/provider-information-return-pir-assistance-1.png"
                alt="PIR Preparation Checklist View"
                fill
                sizes="(max-width: 1024px) 50vw, 30vw"
                className="object-cover object-top"
              />
            </div>

            {/* Back Image 2 (Senior walking) */}
            <div className="absolute right-[4%] top-[6%] w-[48%] h-[68%] rounded-[20px] overflow-hidden shadow-md transform rotate-[4deg]">
              <Image
                src="/images/cqc-compliance/provider-information-return-pir-assistance-2.png"
                alt="Caregiver explaining clinical safety plan"
                fill
                sizes="(max-width: 1024px) 50vw, 30vw"
                className="object-cover object-center"
              />
            </div>

            {/* Front Image 3 (Caregiver at desktop) */}
            <div className="absolute left-[4%] bottom-[2%] w-[76%] h-[58%] rounded-[20px] overflow-hidden shadow-lg z-20">
              <Image
                src="/images/cqc-compliance/provider-information-return-pir-assistance-3.png"
                alt="Caregiver reviewing PIR on desktop screen"
                fill
                sizes="(max-width: 1024px) 60vw, 40vw"
                className="object-cover object-center"
              />
            </div>
          </div>

          {/* Right Copy Block (6 cols) */}
          <div className="lg:col-span-6 space-y-4 sm:space-y-6 max-w-[571px]">
            <div className="space-y-2 sm:space-y-3">
              <h2 className="text-2xl sm:text-3xl md:text-[40px] font-bold leading-tight md:leading-[50px] capitalize text-[#293836] font-['Lato',sans-serif]">
                Provider Information Return (PIR) Assistance
              </h2>
              <h3 className="text-lg sm:text-xl md:text-[24px] font-medium leading-snug md:leading-[32px] capitalize text-[#4A5D5A] font-['Lato',sans-serif]">
                Complete Your PIR With Confidence.
              </h3>
            </div>

            <p className="text-xs sm:text-sm md:text-base font-normal leading-relaxed md:leading-[28px] text-[#4A5D5A] capitalize font-['Inter',sans-serif] pt-1">
              When It's Time To Complete Your Provider Information Return, Much Of The Required Information Already Exists Inside Cantra. The Platform Guides Managers Through The PIR Process, Helping Populate Key Operational Data, Quality Metrics, Staffing Information, Incidents, Occupancy Figures, And Performance Indicators From Live Records. Instead Of Searching Multiple Spreadsheets And Systems, Managers Can Complete Submissions Faster With Accurate Information.
            </p>

            {/* Highlights Card Container */}
            <div className="p-6 md:p-8 rounded-[20px] bg-[#FAF8F6] border border-slate-100/50 space-y-5">
              <h4 className="text-xs font-bold text-[#293836] tracking-wide uppercase font-['Lato',sans-serif]">
                Includes
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-4">
                {[
                  "Continuous Evidence Collection Across The Platform",
                  "Chronological Audit Trail For Every Activity",
                  "Resident, Staff, And Organisation-Level Evidence",
                  "Searchable Compliance Records",
                  "Secure Historical Record Retention",
                  "Export Evidence Packs For Inspections"
                ].map((item, idx) => (
                  <div key={idx} className="flex items-start gap-3 text-xs sm:text-[13px] font-medium text-[#293836] leading-snug font-['Inter',sans-serif]">
                    <div className="flex h-5 w-5 items-center justify-center rounded-full bg-[#EAF0EE] text-[#3D5D58] shrink-0 mt-0.5">
                      <svg className="w-3 h-3" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                        <polyline points="20 6 9 17 4 12" />
                      </svg>
                    </div>
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
              <h3 className="text-lg sm:text-xl md:text-[24px] font-medium leading-snug md:leading-[32px] capitalize text-[#4A5D5A] font-['Lato',sans-serif]">
                Identify Compliance Risks Before They Become Problems.
              </h3>
            </div>

            <p className="text-xs sm:text-sm md:text-base font-normal leading-relaxed md:leading-[28px] text-[#4A5D5A] capitalize font-['Inter',sans-serif] pt-1">
              Rather Than Discovering Issues During Inspections, Cantra Proactively Identifies Areas That May Put Compliance At Risk. The System Monitors Overdue Care Reviews, Missed Medication Signatures, Incomplete Assessments, Expired Training, Missing Documentation, Outstanding Incidents, And Other Operational Gaps, Notifying Managers Before They Escalate.
            </p>

            {/* Benefits Card Container */}
            <div className="p-6 md:p-8 rounded-[20px] bg-[#FAF8F6] border border-slate-100/50 space-y-5">
              <h4 className="text-xs font-bold text-[#293836] tracking-wide uppercase font-['Lato',sans-serif]">
                Benefits
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-4">
                {[
                  "Overdue Care Plan Reviews",
                  "Missing Risk Assessments",
                  "Medication Documentation Gaps",
                  "Expired Mandatory Training",
                  "Makes Governance Meetings More Meaningful"
                ].map((item, idx) => (
                  <div key={idx} className="flex items-start gap-3 text-xs sm:text-[13px] font-medium text-[#293836] leading-snug font-['Inter',sans-serif]">
                    <div className="flex h-5 w-5 items-center justify-center rounded-full bg-[#EAF0EE] text-[#3D5D58] shrink-0 mt-0.5">
                      <svg className="w-3 h-3" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                        <polyline points="20 6 9 17 4 12" />
                      </svg>
                    </div>
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Image Collage (6 cols) */}
          <div className="lg:col-span-6 relative w-full h-[450px] sm:h-[550px] md:h-[620px] lg:order-2 order-1 flex items-center justify-center">
            {/* Back Image 1 (Top Dashboard screen) */}
            <div className="absolute right-[4%] top-[2%] w-[72%] h-[36%] rounded-[20px] overflow-hidden shadow-md">
              <Image
                src="/images/cqc-compliance/regulation-breach-risk-alerts-1.png"
                alt="Breach Alerts Dashboard panel view"
                fill
                sizes="(max-width: 1024px) 50vw, 30vw"
                className="object-cover object-top"
              />
            </div>

            {/* Middle Image 2 (Caregiver and Resident on Sofa) */}
            <div className="absolute left-[2%] top-[22%] w-[82%] h-[56%] rounded-[20px] overflow-hidden shadow-lg z-10">
              <Image
                src="/images/cqc-compliance/regulation-breach-risk-alerts-2.png"
                alt="Caregiver consulting senior resident on tablet"
                fill
                sizes="(max-width: 1024px) 60vw, 40vw"
                className="object-cover object-center"
              />
            </div>

            {/* Bottom Image 3 (Bottom Dashboard panel) */}
            <div className="absolute right-[8%] bottom-[2%] w-[64%] h-[34%] rounded-[20px] overflow-hidden shadow-md z-20">
              <Image
                src="/images/cqc-compliance/regulation-breach-risk-alerts-3.png"
                alt="Risk levels breakdown panel"
                fill
                sizes="(max-width: 1024px) 50vw, 30vw"
                className="object-cover object-top"
              />
            </div>
          </div>

        </div>

      </div>
    </section>
  )
}

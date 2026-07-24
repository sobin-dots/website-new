'use client'

import * as React from "react"
import Image from "next/image"
import { CheckCircle2 } from "lucide-react"

export function CqcDataExport() {
  return (
    <section className="py-4 sm:py-8 bg-white text-[#293836] overflow-hidden">
      <div className="w-full">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-center max-w-[1240px] mx-auto scroll-section">
          
          {/* Left Column Copy Block (6 cols) */}
          <div className="lg:col-span-6 space-y-4 sm:space-y-6 max-w-[571px]">
            <div className="space-y-2 sm:space-y-3">
              <h2 className="text-2xl sm:text-3xl md:text-[40px] font-bold leading-tight md:leading-[50px] capitalize text-[#293836] font-['Lato',sans-serif]">
                Data Export
              </h2>
              <h3 className="text-lg sm:text-xl md:text-[24px] font-medium leading-snug md:leading-[32px] capitalize text-[#293836] font-['Lato',sans-serif]">
                Share Information Whenever You Need It.
              </h3>
            </div>

            <p className="text-xs sm:text-sm md:text-base font-normal leading-relaxed md:leading-[27px] text-[#293836] capitalize font-['Inter',sans-serif] pt-1">
              Export Reports, Compliance Records, And Operational Data In Formats Suitable For Governance Meetings, Local Authorities, Commissioners, Auditors, Finance Teams, And Regulatory Submissions.
            </p>

            {/* Supported File Formats Container */}
            <div className="p-6 md:p-8 rounded-[20px] bg-[#FAF5F2] border border-orange-100/50 space-y-4">
              <h4 className="text-xs font-bold text-[#293836] tracking-wide uppercase font-['Lato',sans-serif]">
                Supported File Formats:
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

          {/* Right Column Image (6 cols) */}
          <div className="lg:col-span-6 relative w-full h-[260px] sm:h-[380px] md:h-[480px] rounded-[20px] overflow-hidden">
            <Image 
              src="/images/cqc-compliance/data-export.png"
              alt="Care manager exporting data in CSV, XLSX, and PDF formats"
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover object-center"
            />
          </div>

        </div>

      </div>
    </section>
  )
}

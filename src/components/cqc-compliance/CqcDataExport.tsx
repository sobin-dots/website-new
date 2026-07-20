'use client'

import * as React from "react"
import Image from "next/image"
import { CheckCircle2 } from "lucide-react"

export function CqcDataExport() {
  return (
    <section className="py-20 bg-white text-slate-900 overflow-hidden">
      <div className="mx-auto max-w-7xl px-6 md:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column Copy Block (6 cols) */}
          <div className="lg:col-span-6 space-y-6">
            <div className="space-y-3">
              <h2 className="text-3xl md:text-[38px] font-bold text-primary font-sans leading-tight">
                Data Export
              </h2>
              <h3 className="text-lg md:text-xl font-bold text-slate-700 font-sans">
                Share Information Whenever You Need It.
              </h3>
            </div>

            <p className="text-xs md:text-sm text-slate-500 leading-relaxed">
              Export Reports, Compliance Records, And Operational Data In Formats Suitable For Governance Meetings, Local Authorities, Commissioners, Auditors, Finance Teams, And Regulatory Submissions.
            </p>

            {/* Supported File Formats Container */}
            <div className="p-6 md:p-8 rounded-2xl bg-[#FCFAF6] border border-amber-100/50 space-y-5">
              <h4 className="text-xs font-bold text-slate-800 tracking-wide">
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
                  <div key={idx} className="flex items-start gap-2.5 text-xs font-medium text-slate-700 leading-snug">
                    <CheckCircle2 className="h-4 w-4 text-emerald-600 shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column Image (6 cols) */}
          <div className="lg:col-span-6 relative w-full aspect-[1.3] rounded-2xl overflow-hidden shadow-sm">
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

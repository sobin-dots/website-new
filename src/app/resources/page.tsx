'use client'

import * as React from "react"
import Link from "next/link"
import { ArrowUpRight, BookOpen, Download, FileText, LayoutList } from "lucide-react"
import { Button } from "@/components/ui/button"

const resources = [
  {
    title: "CQC Inspection Preparation Guide",
    category: "Compliance",
    description: "A comprehensive checklist and toolkit to help care managers prepare for CQC Quality Statement inspections.",
    icon: LayoutList,
    format: "PDF Guide"
  },
  {
    title: "Medication Audit Template",
    category: "e-MAR & Safety",
    description: "An audit checklist for monitoring medication administration errors, PRN records, and storage compliance.",
    icon: FileText,
    format: "XLSX Audit Template"
  },
  {
    title: "Incident Investigation Log Template",
    category: "Risk Management",
    description: "Standardized forms to record, analyze, and implement corrective actions for safeguarding incidents.",
    icon: BookOpen,
    format: "DOCX Form"
  }
]

export default function ResourcesPage() {
  return (
    <div className="min-h-screen bg-[#FAF8F6] text-[#293836]">
      {/* Hero Section */}
      <section className="py-20 md:py-28 bg-white border-b border-slate-100">
        <div className="mx-auto max-w-7xl px-6 md:px-8 text-center space-y-6">
          <span className="text-xs font-semibold text-[#3D5D58] uppercase tracking-widest block">
            Resources
          </span>
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-[#293836] leading-tight font-['Lato',sans-serif]">
            Free Compliance Guides & Templates
          </h1>
          <p className="text-base md:text-lg text-[#4A5D5A] leading-relaxed max-w-2xl mx-auto font-['Inter',sans-serif]">
            Access our curated library of templates, checklists, and guides designed to help care managers and providers deliver outstanding care.
          </p>
        </div>
      </section>

      {/* Grid of Resources */}
      <section className="py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-6 md:px-8 space-y-12">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {resources.map((item, idx) => {
              const IconComp = item.icon
              return (
                <div key={idx} className="bg-white rounded-[20px] p-8 border border-slate-100 shadow-sm flex flex-col justify-between hover:shadow-md transition-shadow duration-300">
                  <div className="space-y-4">
                    <span className="inline-block text-[11px] font-bold tracking-wider text-[#3D5D58] uppercase bg-[#EAF0EE] px-2.5 py-1 rounded-full">
                      {item.category}
                    </span>
                    <h3 className="text-xl font-bold font-['Lato',sans-serif] text-[#293836]">
                      {item.title}
                    </h3>
                    <p className="text-sm text-[#4A5D5A] leading-relaxed font-['Inter',sans-serif]">
                      {item.description}
                    </p>
                  </div>
                  <div className="pt-6 border-t border-slate-100/60 mt-6 flex items-center justify-between">
                    <span className="text-xs font-medium text-[#4A5D5A]">{item.format}</span>
                    <button className="inline-flex items-center gap-1.5 text-sm font-semibold text-[#3D5D58] hover:text-[#3D5D58]/80 transition-colors">
                      Download
                      <Download className="h-4 w-4" />
                    </button>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* CTA Footer */}
      <section className="py-16 bg-primary text-white">
        <div className="mx-auto max-w-5xl px-6 md:px-8 text-center space-y-6">
          <h2 className="text-2xl md:text-3xl font-bold font-['Lato',sans-serif]">
            Ready to Streamline Your Care Quality?
          </h2>
          <p className="text-white/80 max-w-2xl mx-auto text-sm md:text-base leading-relaxed">
            See how Cantra can digitize your audit checklist templates, map compliance actions automatically, and make your services inspection-ready.
          </p>
          <div className="pt-4">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-3 rounded-full bg-white hover:bg-slate-100 text-primary font-bold text-sm px-6 py-3 transition-colors shadow-md h-12"
            >
              Book a Free Demo
              <div className="flex h-7 w-7 items-center justify-center rounded-full bg-primary text-white">
                <ArrowUpRight className="h-4 w-4" />
              </div>
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}

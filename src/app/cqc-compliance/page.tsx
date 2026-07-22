'use client'

import { CqcHero } from "@/components/cqc-compliance/CqcHero"
import { CqcMetrics } from "@/components/cqc-compliance/CqcMetrics"
import { CqcFeatures } from "@/components/cqc-compliance/CqcFeatures"
import { CqcReportGeneration } from "@/components/cqc-compliance/CqcReportGeneration"
import { CqcDataExport } from "@/components/cqc-compliance/CqcDataExport"
import { CqcOutcomes } from "@/components/cqc-compliance/CqcOutcomes"
import { CqcCTA } from "@/components/cqc-compliance/CqcCTA"

export default function CqcCompliancePage() {
  return (
    <div className="min-h-screen bg-white text-[#293836]">

      {/* 1. Hero Header */}
      <div className="mx-auto max-w-[1440px] px-4 sm:px-6 lg:px-8 space-y-12 sm:space-y-16 md:space-y-20">
        <CqcHero />
      </div>

      {/* 2. Dark Green Metrics & Statistics Banner (Full Bleed Background) */}
      <CqcMetrics />

      {/* Centralized Page Container for Middle Sections */}
      <div className="mx-auto max-w-[1240px] px-4 sm:px-6 lg:px-8 space-y-16 sm:space-y-24 md:space-y-32 py-16 md:py-24">
        {/* 3. Alternating Feature Collages (Evidence, Quality Mapping, PIR, Breach Alerts) */}
        <CqcFeatures />

        {/* 4. 6-Card Report Generation Grid */}
        <CqcReportGeneration />

        {/* 5. Data Export Desktop Section */}
        <CqcDataExport />

        {/* 6. Key Outcomes 2x2 Grid */}
        <CqcOutcomes />
      </div>

      {/* 7. Bottom Call to Action Banner (Full Bleed Background) */}
      <CqcCTA />

    </div>
  )
}

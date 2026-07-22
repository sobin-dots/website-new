'use client'

import { CqcHero } from "@/components/cqc-compliance/CqcHero"
import { CqcMetrics } from "@/components/cqc-compliance/CqcMetrics"
import { CqcFeatures } from "@/components/cqc-compliance/CqcFeatures"
import { CqcReportGeneration } from "@/components/cqc-compliance/CqcReportGeneration"
import { CqcDataExport } from "@/components/cqc-compliance/CqcDataExport"
import { CqcOutcomes } from "@/components/cqc-compliance/CqcOutcomes"
import { CareServiceCTA } from "@/components/care-service-types/CareServiceCTA"

export default function CqcCompliancePage() {
  return (
    <div className="min-h-screen pt-5 bg-white text-[#293836]">
      
      {/* Centralized Page Container with Standard Max-Width & Padding */}
      <div className="mx-auto max-w-[1440px] px-4 sm:px-6 lg:px-8 space-y-12 sm:space-y-16 md:space-y-20">
        {/* 1. Hero Header */}
        <CqcHero />

        {/* 2. Dark Green Metrics & Statistics Banner */}
        <CqcMetrics />

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
      <div className="mt-16 sm:mt-24">
        <CareServiceCTA />
      </div>

    </div>
  )
}

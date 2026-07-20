'use client'

import * as React from "react"
import { CqcHero } from "@/components/cqc-compliance/CqcHero"
import { CqcMetrics } from "@/components/cqc-compliance/CqcMetrics"
import { CqcFeatures } from "@/components/cqc-compliance/CqcFeatures"
import { CqcReportGeneration } from "@/components/cqc-compliance/CqcReportGeneration"
import { CqcDataExport } from "@/components/cqc-compliance/CqcDataExport"
import { CqcOutcomes } from "@/components/cqc-compliance/CqcOutcomes"
import { CqcCTA } from "@/components/cqc-compliance/CqcCTA"

export default function CqcCompliancePage() {
  return (
    <div className="min-h-screen pt-20 bg-white text-slate-900">
      
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

      {/* 7. Bottom Call to Action Banner */}
      <CqcCTA />

    </div>
  )
}

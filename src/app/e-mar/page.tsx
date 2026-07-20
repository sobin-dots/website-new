'use client'

import * as React from "react"
import { EmarHero } from "@/components/e-mar/EmarHero"
import { EmarFeatures } from "@/components/e-mar/EmarFeatures"
import { EmarClinicalSafety } from "@/components/e-mar/EmarClinicalSafety"
import { EmarAdvantage } from "@/components/e-mar/EmarAdvantage"
import { EmarCTA } from "@/components/e-mar/EmarCTA"

export default function EmarPage() {
  return (
    <div className="min-h-screen pt-20 bg-white text-slate-900">
      
      {/* 1. Hero Header */}
      <EmarHero />

      {/* 2. 5 Alternating Feature Blocks (EMAR Charts, PRN, Instructions, Alerts, Stock) */}
      <EmarFeatures />

      {/* 3. Built For Clinical Safety And Regulatory Compliance */}
      <EmarClinicalSafety />

      {/* 4. The Cantra Advantage */}
      <EmarAdvantage />

      {/* 5. Bottom Call to Action Banner */}
      <EmarCTA />

    </div>
  )
}

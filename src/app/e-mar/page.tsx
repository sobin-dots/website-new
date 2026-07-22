'use client'

import { EmarHero } from "@/components/e-mar/EmarHero"
import { EmarFeatures } from "@/components/e-mar/EmarFeatures"
import { EmarClinicalSafety } from "@/components/e-mar/EmarClinicalSafety"
import { EmarAdvantage } from "@/components/e-mar/EmarAdvantage"
import { CareServiceCTA } from "@/components/care-service-types/CareServiceCTA"

export default function EmarPage() {
  return (
    <div className="min-h-screen pt-5 bg-white text-[#293836]">
      
      {/* Centralized Page Container with Standard Max-Width & Padding */}
      <div className="mx-auto max-w-[1440px] px-4 sm:px-6 lg:px-8 space-y-12 sm:space-y-16 md:space-y-20">
        {/* 1. Hero Header */}
        <EmarHero />

        {/* 2. 5 Alternating Feature Blocks */}
        <EmarFeatures />

        {/* 3. Built For Clinical Safety And Regulatory Compliance */}
        <EmarClinicalSafety />

        {/* 4. The Cantra Advantage */}
        <EmarAdvantage />
      </div>

      {/* 5. Bottom Call to Action Banner (Full Bleed Background) */}
      <div className="mt-16 sm:mt-24">
        <CareServiceCTA />
      </div>

    </div>
  )
}


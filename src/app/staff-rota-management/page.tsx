'use client'

import { RotaHero } from "@/components/staff-rota-management/RotaHero"
import { RotaPlatform } from "@/components/staff-rota-management/RotaPlatform"
import { RotaFeatures } from "@/components/staff-rota-management/RotaFeatures"
import { RotaWorkflow } from "@/components/staff-rota-management/RotaWorkflow"
import { RotaAdvantage } from "@/components/staff-rota-management/RotaAdvantage"
import { RotaCTA } from "@/components/staff-rota-management/RotaCTA"

export default function StaffRotaManagementPage() {
  return (
    <div className="min-h-screen bg-white text-[#293836]">

      {/* 1. Hero Header */}
      <div className="mx-auto max-w-[1240px] px-4 sm:px-6 lg:px-8 pb-12 sm:pb-16">
        <RotaHero />
      </div>

      {/* 2. One Connected Platform Block (Full Bleed Background) */}
      <RotaPlatform />

      {/* Centered Container for Middle Sections */}
      <div className="mx-auto max-w-[1240px] px-4 sm:px-6 lg:px-8 space-y-16 sm:space-y-24 md:space-y-32 py-16 md:py-24">
        {/* 3. Key Features 6-Card Grid */}
        <RotaFeatures />

        {/* 4. Smarter Workflow For Every Shift */}
        <RotaWorkflow />
      </div>

      {/* 5. Terracotta Advantage Banner (Full Bleed Background) */}
      <RotaAdvantage />

      {/* 6. Bottom Call to Action Banner (Full Bleed Background) */}
      <RotaCTA />

    </div>
  )
}

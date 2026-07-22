'use client'

import { CareHero } from "@/components/care-management/CareHero"
import { CareFeatures } from "@/components/care-management/CareFeatures"
import { CareConnectBanner } from "@/components/care-management/CareConnectBanner"
import { CareDifference } from "@/components/care-management/CareDifference"
import { CareServiceCTA } from "@/components/care-service-types/CareServiceCTA"

export default function CareManagementPage() {
  return (
    <div className="min-h-screen pt-5 bg-white text-slate-900">
      
      {/* Centralized Page Container with Standard Max-Width & Padding */}
      <div className="mx-auto max-w-[1440px] px-4 sm:px-6 lg:px-8 space-y-12 sm:space-y-16 md:space-y-20">
        {/* 1. Hero Header Section */}
        <CareHero />

        {/* 2. Intro Block + Alternating Features collage blocks */}
        <CareFeatures />

        {/* 3. Muted Terracotta Connecting Care Banner */}
        <CareConnectBanner />

        {/* 4. Card Grid benefit details "The Difference Cantra Makes" */}
        <CareDifference />
      </div>

      {/* 5. Bottom Call to Action Banner (Full Bleed Background) */}
      <div className="mt-16 sm:mt-24">
        <CareServiceCTA />
      </div>

    </div>
  )
}


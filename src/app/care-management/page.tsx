'use client'

import * as React from "react"
import { CareHero } from "@/components/care-management/CareHero"
import { CareFeatures } from "@/components/care-management/CareFeatures"
import { CareConnectBanner } from "@/components/care-management/CareConnectBanner"
import { CareDifference } from "@/components/care-management/CareDifference"
import { CareCTA } from "@/components/care-management/CareCTA"

export default function CareManagementPage() {
  return (
    <div className="min-h-screen pt-20 bg-white text-slate-900">
      
      {/* 1. Hero Header Section */}
      <CareHero />

      {/* 2. Intro Block + Alternating Features collage blocks (Risk, Care Plans, Observations, History, Input) */}
      <CareFeatures />

      {/* 3. Muted Terracotta Connecting Care Banner */}
      <CareConnectBanner />

      {/* 4. Card Grid benefit details "The Difference Cantra Makes" */}
      <CareDifference />

      {/* 5. Bottom Call to Action Banner */}
      <CareCTA />

    </div>
  )
}

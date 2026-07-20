'use client'

import { CareServiceSubNav } from "@/components/care-service-types/CareServiceSubNav"
import { ResidentialCareHomes } from "@/components/care-service-types/ResidentialCareHomes"
import { NursingHomes } from "@/components/care-service-types/NursingHomes"
import { MentalHealthCareHomes } from "@/components/care-service-types/MentalHealthCareHomes"
import { CareServiceCTA } from "@/components/care-service-types/CareServiceCTA"

export default function CareServiceTypesPage() {
  return (
    <div className="min-h-screen pt-2 bg-white text-slate-900">

      {/* Sticky Sub-Navigation */}
      {/* <CareServiceSubNav /> */}

      {/* 1. Residential Care Homes Section */}
      <ResidentialCareHomes />

      {/* 2. Nursing Homes Section */}
      <NursingHomes />

      {/* 3. Mental Health Care Homes Section */}
      <MentalHealthCareHomes />

      {/* 4. Bottom CTA Banner */}
      <CareServiceCTA />

    </div>
  )
}

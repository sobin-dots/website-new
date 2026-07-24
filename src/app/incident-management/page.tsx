'use client'

import { IncidentHero } from "@/components/incident-management/IncidentHero"
import { IncidentOpportunity } from "@/components/incident-management/IncidentOpportunity"
import { IncidentTools } from "@/components/incident-management/IncidentTools"
import { IncidentWorkflow } from "@/components/incident-management/IncidentWorkflow"
import { IncidentWhyChoose } from "@/components/incident-management/IncidentWhyChoose"
import { IncidentStages } from "@/components/incident-management/IncidentStages"
import { IncidentImpact } from "@/components/incident-management/IncidentImpact"
import { CareServiceCTA } from "@/components/care-service-types/CareServiceCTA"

export default function IncidentManagementPage() {
  return (
    <div className="min-h-screen pt-5 bg-white text-[#293836]">

      {/* Centralized Page Container with Standard Max-Width & Padding */}
      <div className="mx-auto max-w-[1440px] px-4 sm:px-6 lg:px-8 space-y-12 sm:space-y-16 md:space-y-20">
        {/* 1. Hero Header */}
        <IncidentHero />

        {/* 2. Terracotta Banner: Every Incident Is An Opportunity */}
        <IncidentOpportunity />

        {/* 3. 6-Tool Grid: Powerful Tools For Incident & Safeguarding Management */}
        <IncidentTools />

        {/* 4. S-Curve Timeline: From Incident To Resolution In One Connected Workflow */}
        <IncidentWorkflow />

        {/* 5. Why Care Providers Choose Cantra */}
        <IncidentWhyChoose />

        {/* 6. Supporting Every Stage Of Incident Management */}
        <IncidentStages />

        {/* 7. 4-Column Impact: The Impact Of Smarter Incident Management */}
        <IncidentImpact />
      </div>

      {/* 8. Bottom CTA Banner (Full Bleed Background) */}
      <div className="mt-16 sm:mt-24">
        <CareServiceCTA />
      </div>

    </div>
  )
}

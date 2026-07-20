'use client'

import * as React from "react"
import { IncidentHero } from "@/components/incident-management/IncidentHero"
import { IncidentOpportunity } from "@/components/incident-management/IncidentOpportunity"
import { IncidentTools } from "@/components/incident-management/IncidentTools"
import { IncidentWorkflow } from "@/components/incident-management/IncidentWorkflow"
import { IncidentWhyChoose } from "@/components/incident-management/IncidentWhyChoose"
import { IncidentStages } from "@/components/incident-management/IncidentStages"
import { IncidentImpact } from "@/components/incident-management/IncidentImpact"
import { IncidentCTA } from "@/components/incident-management/IncidentCTA"

export default function IncidentManagementPage() {
  return (
    <div className="min-h-screen pt-20 bg-white text-slate-900">
      
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

      {/* 8. Bottom CTA Banner: Safer Care Starts With Better Incident Management */}
      <IncidentCTA />

    </div>
  )
}

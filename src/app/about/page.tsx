'use client'

import * as React from "react"
import { AboutHero } from "@/components/about/AboutHero"
import { AboutStory } from "@/components/about/AboutStory"
import { AboutPhilosophy } from "@/components/about/AboutPhilosophy"
import { AboutValues } from "@/components/about/AboutValues"
import { AboutCTA } from "@/components/about/AboutCTA"

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-white text-slate-900">
      
      {/* 1. Hero Block with Team Image */}
      <AboutHero />

      {/* 2. Our Story narrative on warm background */}
      <AboutStory />

      {/* 3. Our Philosophy, Mission & Vision card grid */}
      <AboutPhilosophy />

      {/* 4. Values defines us terracotta block */}
      <AboutValues />

      {/* 5. Inspection Ready bottom CTA section */}
      <AboutCTA />

    </div>
  )
}

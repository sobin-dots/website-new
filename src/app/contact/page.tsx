'use client'

import * as React from "react"
import { ContactHero } from "@/components/contact/ContactHero"
import { ContactForm } from "@/components/contact/ContactForm"
import { ContactInfo } from "@/components/contact/ContactInfo"

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-white text-slate-900">
      
      {/* 1. Hero Block, CTAs, & Department Cards */}
      <ContactHero />

      {/* 2. Interactive Contact Form with Caregiver Meeting Graphic */}
      <ContactForm />

      {/* 3. Office Map & Detailed Locations Grid */}
      <ContactInfo />

    </div>
  )
}

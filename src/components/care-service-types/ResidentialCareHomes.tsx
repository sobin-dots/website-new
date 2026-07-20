'use client'

import * as React from "react"
import Image from "next/image"
import Link from "next/link"
import { CheckSquare, ArrowUpRight } from "lucide-react"

const capabilities = [
  "Person-Centred Care Plans",
  "Daily Care & Task Management",
  "Activities & Wellbeing",
  "Resident Observations",
  "Family Communication",
  "Incident Reporting"
]

export function ResidentialCareHomes() {
  return (
    <section id="residential-care-homes" className="pt-2 pb-8 md:pt-4 md:pb-16 bg-white text-slate-900 overflow-hidden">
      <div className="mx-auto max-w-6xl px-6 md:px-8 space-y-12">

        {/* Centered Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <h1 className="text-4xl md:text-5xl lg:text-[50px] font-bold tracking-tight text-primary font-sans leading-tight">
            Residential Care Homes
          </h1>
          <h2 className="text-lg md:text-xl font-bold text-slate-700 font-sans">
            Supporting Everyday Care With Confidence.
          </h2>
        </div>

        {/* Featured Center Image */}
        <div className="relative w-full aspect-[16/9] md:aspect-[2/1] rounded-3xl overflow-hidden shadow-sm">
          <Image
            src="/images/care-service-types/residential-care-homes.png"
            alt="Caregivers serving tea and playing board games with senior residents in residential care home"
            fill
            sizes="100vw"
            className="object-cover object-center"
            priority
          />
        </div>

        {/* Paragraph Description */}
        <div className="text-center max-w-3xl mx-auto">
          <p className="text-xs md:text-sm text-slate-500 leading-relaxed">
            Residential Care Homes Focus On Helping Residents Live Comfortably, Safely, And Independently. Cantra Streamlines Daily Care Delivery By Giving Teams Easy Access To Personalised Care Plans, Daily Tasks, Observations, Activities, Family Communication, And Digital Records—All From One Connected Platform.
          </p>
        </div>

        {/* Key Capabilities */}
        <div className="space-y-8 pt-4">
          <h3 className="text-xl font-bold text-slate-800 text-center font-sans">
            Key Capabilities
          </h3>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {capabilities.map((item, idx) => (
              <div key={idx} className="flex items-center gap-3 text-xs md:text-sm font-medium text-slate-700">
                <CheckSquare className="h-4 w-4 text-emerald-600 shrink-0" />
                <span>{item}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom Outlined Callout Box */}
        <div className="mt-12 p-8 md:p-10 rounded-3xl border border-slate-200/80 bg-white flex flex-col lg:flex-row items-center justify-between gap-8">
          <p className="text-xs md:text-sm text-slate-500 leading-relaxed max-w-3xl">
            Cantra Simplifies Every Stage Of Care Delivery, From Personalised Care Plans And Daily Routines To Resident Observations, Activities, Family Communication, And Compliance. By Bringing Everything Together In One Connected Platform, Care Teams Can Spend Less Time On Administration And More Time Delivering Meaningful, Person-Centred Support.
          </p>

          <Link
            href="/care-management"
            className="inline-flex items-center justify-center gap-3 rounded-full bg-primary hover:bg-primary/95 text-white font-bold text-xs md:text-sm px-6 py-3 transition-colors shadow-sm shrink-0 h-12"
          >
            Explore More
            <div className="flex h-6 w-6 items-center justify-center rounded-full bg-white/20 text-white">
              <ArrowUpRight className="h-3.5 w-3.5" />
            </div>
          </Link>
        </div>

      </div>
    </section>
  )
}

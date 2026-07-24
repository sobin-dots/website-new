'use client'

import Link from "next/link"
import { FileText, Pill, FileUser, ShieldCheck, ArrowRight } from "lucide-react"

const coreFeatures = [
  {
    icon: FileText,
    title: "Care Management",
    description: "Build, review, and update personalised care plans, assessments, and daily records in one secure workspace. Keep every team member aligned with real-time information and automated workflows.",
    href: "/care-management"
  },
  {
    icon: Pill,
    title: "e-MAR",
    description: "Digitise medication administration with eMAR, barcode verification, PRN recording, allergy alerts, and complete audit trails to reduce errors and support regulatory compliance.",
    href: "/incident-management" // Placeholder until eMAR/incident page is created
  },
  {
    icon: FileUser,
    title: "Staff & Rota Management",
    description: "Plan staff schedules with ease using smart rota management, shift planning, availability tracking, leave management, and real-time updates to ensure safe staffing and seamless care delivery.",
    href: "/staff-rota-management" // Placeholder until rota page is created
  },
  {
    icon: ShieldCheck,
    title: "Compliance & Reports",
    description: "Stay audit-ready with CQC aligned reports & dashboards.",
    href: "/cqc-compliance"
  }
]

export function Features() {
  return (
    <section id="features" className="py-24 bg-white text-slate-900">
      <div className="mx-auto max-w-7xl px-6 md:px-8">

        {/* Heading Section */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-20 scroll-section">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-primary">
            Everything Your Care Team Needs
          </h2>
          <p className="text-base md:text-lg text-slate-500 leading-relaxed max-w-2xl mx-auto">
            Cantra helps adult social care providers to manage care plans, medication records, assessments, incidents, compliance, and reporting - all from a single platform.
          </p>
        </div>

        {/* Features Flat Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-x-6 gap-y-10 sm:gap-x-8 sm:gap-y-16 scroll-section">
          {coreFeatures.map((feat, idx) => {
            const IconComp = feat.icon
            return (
              <div key={idx} className="flex flex-col items-start space-y-5">
                {/* Circular Icon Container */}
                <div className="flex h-14 w-14 items-center justify-center rounded-full bg-[#EAF0EE]/85 text-primary transition-all duration-300 hover:bg-primary hover:text-white">
                  <IconComp className="h-6 w-6" />
                </div>

                {/* Title */}
                <h3 className="text-xl font-bold text-primary">
                  {feat.title}
                </h3>

                {/* Description */}
                <p className="text-sm leading-relaxed text-slate-500 flex-grow">
                  {feat.description}
                </p>

                {/* Clean Link */}
                <Link
                  href={feat.href}
                  className="inline-flex items-center gap-2 text-sm font-bold text-primary hover:text-primary/80 transition-colors pt-2 group"
                >
                  Learn More
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </div>
            )
          })}
        </div>

      </div>
    </section>
  )
}

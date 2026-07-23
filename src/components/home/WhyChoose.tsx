'use client'


import Image from "next/image"

const pillars = [
  {
    image: "/images/home-page/person-centered-care.png",
    title: "Person-Centered Care",
    description: "Deliver personalised, outcome-focused care by keeping every resident's preferences, goals, needs, and care history accessible to every caregiver."
  },
  {
    image: "/images/home-page/designed-for-front- line-teams.png",
    title: "Designed for front- line Teams",
    description: "Built with carers and nurses in mind, intuitive workflows simplify daily tasks, reduce paperwork, and support confident care delivery."
  },
  {
    image: "/images/home-page/compliance-confidence.png",
    title: "Compliance Confidence",
    description: "Stay inspection-ready with complete audit trails, accurate digital records, and workflows aligned to CQC expectations and regulatory best practices."
  },
  {
    image: "/images/home-page/real-time-oversight.png",
    title: "Real-Time Oversight",
    description: "Gain instant visibility into care delivery, incidents, medication, staffing, and compliance through live dashboards, alerts, and actionable insights."
  },
  {
    image: "/images/home-page/secure-reliable.png",
    title: "Secure & Reliable",
    description: "Protect sensitive care data with enterprise-grade security, role-based access, encrypted records, and dependable cloud infrastructure you can trust."
  },
  {
    image: "/images/home-page/continuous-innovation.png",
    title: "Continuous Innovation",
    description: "We're constantly enhancing Cantra with new features, customer feedback, and evolving care standards to support the future of care delivery."
  }
]

export function WhyChoose() {
  return (
    <section className="py-24 bg-white text-slate-900 border-slate-100">
      <div className="mx-auto max-w-7xl px-6 md:px-8">

        {/* Header Block */}
        <div className="text-center max-w-3xl mx-auto space-y-5 mb-20">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-primary">
            Why Care Providers Choose Cantra
          </h2>
          <p className="text-base md:text-lg text-slate-500 leading-relaxed max-w-2xl mx-auto">
            Cantra helps adult social care providers to manage care plans, medication records, assessments, incidents, compliance, and reporting - all from a single platform.
          </p>
        </div>

        {/* 6-Pillar Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-16">
          {pillars.map((pillar, idx) => (
            <div key={idx} className="flex flex-col items-start space-y-4">
              {/* Pillar Image */}
              <div className="relative w-full aspect-[16/10] overflow-hidden rounded-2xl bg-slate-100">
                <Image
                  src={pillar.image}
                  alt={pillar.title}
                  fill
                  sizes="(max-w-768px) 100vw, (max-w-1200px) 50vw, 33vw"
                  className="object-cover transition-transform duration-500 hover:scale-[1.03]"
                />
              </div>

              {/* Pillar Title */}
              <h3 className="text-xl font-bold text-primary pt-2">
                {pillar.title}
              </h3>

              {/* Pillar Description */}
              <p className="text-sm leading-relaxed text-slate-500">
                {pillar.description}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}

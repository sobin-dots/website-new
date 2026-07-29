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
    <section className="py-16 md:py-24 xl:py-32 2xl:py-40 bg-white text-slate-900 border-slate-100">
      <div className="mx-auto max-w-7xl px-6 md:px-8">

        {/* Header Block */}
        <div className="text-center max-w-3xl mx-auto space-y-5 mb-12 sm:mb-20 scroll-section">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-primary">
            Why Care Providers Choose Cantra
          </h2>
          <p className="text-base md:text-lg text-slate-500 leading-relaxed max-w-2xl mx-auto">
            Cantra helps adult social care providers to manage care plans, medication records, assessments, incidents, compliance, and reporting - all from a single platform.
          </p>
        </div>

        {/* 6-Pillar Layout (Alternating horizontal rows on mobile, 3-column grid on desktop) */}
        <div className="flex flex-col gap-10 sm:gap-12 lg:grid lg:grid-cols-3 lg:gap-x-8 lg:gap-y-16 scroll-section">
          {pillars.map((pillar, idx) => {
            const isOdd = idx % 2 === 1;
            return (
              <div
                key={idx}
                className="grid grid-cols-12 gap-4 sm:gap-6 items-center lg:flex lg:flex-col lg:items-start lg:space-y-4"
              >
                {/* Pillar Image */}
                <div
                  className={`col-span-5 relative w-full aspect-[4/3] rounded-2xl overflow-hidden bg-slate-100 lg:aspect-[16/10] ${
                    isOdd ? "order-2 lg:order-none" : "order-1 lg:order-none"
                  }`}
                >
                  <Image
                    src={pillar.image}
                    alt={pillar.title}
                    fill
                    sizes="(max-w-768px) 45vw, (max-w-1200px) 33vw, 33vw"
                    className="object-cover transition-transform duration-500 hover:scale-[1.03]"
                  />
                </div>

                {/* Pillar Text Content */}
                <div
                  className={`col-span-7 space-y-1.5 sm:space-y-2 lg:space-y-0 ${
                    isOdd ? "order-1 lg:order-none" : "order-2 lg:order-none"
                  }`}
                >
                  {/* Pillar Title */}
                  <h3 className="text-base sm:text-lg md:text-xl font-bold text-primary lg:pt-2">
                    {pillar.title}
                  </h3>

                  {/* Pillar Description */}
                  <p className="text-xs sm:text-sm leading-relaxed text-slate-500">
                    {pillar.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  )
}

'use client'

import * as React from "react"
import Image from "next/image"

export function CareFeatures() {
  return (
    <section className="py-16 bg-white text-slate-900">
      <div className="mx-auto max-w-7xl px-6 md:px-8">
        
        {/* Intro Centered Section */}
        <div className="text-center max-w-3xl mx-auto space-y-5 mb-24">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-primary">
            Supporting Every Step Of Care Delivery
          </h2>
          <p className="text-sm md:text-base text-slate-500 leading-relaxed max-w-2xl mx-auto">
            Cantra helps care teams transform care plans into structured daily care, ensuring every interaction, observation, and update is accurately recorded, easy to access, and aligned with each person's unique needs.
          </p>
        </div>

        {/* Feature Blocks Stack */}
        <div className="space-y-32">

          {/* Block 1: Risk Assessments (Image Left, Text Right) */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-center">
            {/* Image Wrapper */}
            <div className="lg:col-span-6 relative w-full aspect-[4/3] rounded-3xl overflow-hidden">
              <Image 
                src="/images/care-management/risk-assessments.png"
                alt="Risk Assessments"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover object-center"
              />
            </div>
            {/* Text Copy */}
            <div className="lg:col-span-6 space-y-4">
              <span className="text-xs font-bold uppercase tracking-wider text-secondary">
                Risk Assessments
              </span>
              <h3 className="text-2xl md:text-3xl font-bold text-primary font-sans leading-snug">
                Manage Risks Before They Become Incidents
              </h3>
              <p className="text-sm md:text-base text-slate-500 leading-relaxed">
                Create comprehensive digital assessments and risk management strategies. Evolve care plans with every resident's needs. Ensure CQC-aligned protocols are met seamlessly.
              </p>
            </div>
          </div>

          {/* Block 2: Person-Centred Care Plans (Text Left, Image Right) */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-center">
            {/* Text Copy */}
            <div className="lg:col-span-6 space-y-4 lg:order-1 order-2">
              <span className="text-xs font-bold uppercase tracking-wider text-secondary">
                Person-Centred Care Plans
              </span>
              <h3 className="text-2xl md:text-3xl font-bold text-primary font-sans leading-snug">
                Online Care Plans Tailored To Each Individual
              </h3>
              <p className="text-sm md:text-base text-slate-500 leading-relaxed">
                Collaborate on care goals, preferences, and dietary needs. Empower your care team with immediate access to updated care profiles from any device.
              </p>
            </div>
            {/* Overlapping Images Collage Wrapper (6 columns) */}
            <div className="lg:col-span-6 relative w-full h-[320px] md:h-[400px] lg:order-2 order-1">
              {/* Back Image: App Dashboard View */}
              <div className="absolute left-0 top-0 w-[60%] aspect-[4/5] rounded-2xl overflow-hidden">
                <Image 
                  src="/images/care-management/person-centred-care-plans-1.png"
                  alt="App Dashboard View"
                  fill
                  sizes="30vw"
                  className="object-cover object-top"
                />
              </div>
              {/* Front Image: Caregiver and Resident */}
              <div className="absolute right-0 bottom-4 w-[55%] aspect-[1.1] rounded-2xl overflow-hidden">
                <Image 
                  src="/images/care-management/person-centred-care-plans-2.png"
                  alt="Caregiver explaining care plan to resident"
                  fill
                  sizes="30vw"
                  className="object-cover object-center"
                />
              </div>
            </div>
          </div>

          {/* Block 3: Observations (Image Left, Text Right) */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-center">
            {/* Observations Grid collage (6 columns) */}
            <div className="lg:col-span-6 space-y-4">
              {/* Row 1: Two Images */}
              <div className="grid grid-cols-2 gap-4">
                <div className="relative aspect-[1.3] rounded-2xl overflow-hidden">
                  <Image 
                    src="/images/care-management/observations-1.png"
                    alt="Caregiver showing tablet to resident"
                    fill
                    sizes="25vw"
                    className="object-cover object-center"
                  />
                </div>
                <div className="relative aspect-[1.3] rounded-2xl overflow-hidden">
                  <Image 
                    src="/images/care-management/Observations-2.png"
                    alt="Caregiver assisting senior resident"
                    fill
                    sizes="25vw"
                    className="object-cover object-center"
                  />
                </div>
              </div>
              {/* Row 2: Full Width Image */}
              <div className="relative w-full aspect-[2.1] rounded-2xl overflow-hidden">
                <Image 
                  src="/images/care-management/Observations-3.png"
                  alt="Caregiver walking with resident"
                  fill
                  sizes="50vw"
                  className="object-cover object-center"
                />
              </div>
            </div>
            {/* Text Copy */}
            <div className="lg:col-span-6 space-y-4">
              <span className="text-xs font-bold uppercase tracking-wider text-secondary">
                Observations
              </span>
              <h3 className="text-2xl md:text-3xl font-bold text-primary font-sans leading-snug">
                Observe & Record Care Actions Real-Time
              </h3>
              <p className="text-sm md:text-base text-slate-500 leading-relaxed">
                Record vital signs, fluid intake, nutrition, and daily activities in real-time. Instantly flag concerns to managers and clinicians for immediate intervention.
              </p>
            </div>
          </div>

          {/* Block 4: Version History (Text Left, Image Right) */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-center">
            {/* Text Copy */}
            <div className="lg:col-span-6 space-y-4 lg:order-1 order-2">
              <span className="text-xs font-bold uppercase tracking-wider text-secondary">
                Version History
              </span>
              <h3 className="text-2xl md:text-3xl font-bold text-primary font-sans leading-snug">
                Track Every Edit, Update, And Approval
              </h3>
              <p className="text-sm md:text-base text-slate-500 leading-relaxed">
                Maintain a complete audit trail of every care plan modification. Access previous versions instantly, verify author credentials, and satisfy compliance requirements.
              </p>
            </div>
            {/* Image Wrapper - Two portrait mobile panels side by side */}
            <div className="lg:col-span-6 grid grid-cols-2 gap-4 lg:order-2 order-1">
              <div className="relative aspect-[0.75] rounded-3xl overflow-hidden">
                <Image 
                  src="/images/care-management/version-history-1.png"
                  alt="Version History Log"
                  fill
                  sizes="25vw"
                  className="object-cover object-center"
                />
              </div>
              <div className="relative aspect-[0.75] rounded-3xl overflow-hidden">
                <Image 
                  src="/images/care-management/version-history-2.png"
                  alt="Audit log and approval workflow"
                  fill
                  sizes="25vw"
                  className="object-cover object-center"
                />
              </div>
            </div>
          </div>

          {/* Block 5: Client & Family Input (Image Left, Text Right) */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-center">
            {/* Image Wrapper - Two stacked landscape cards */}
            <div className="lg:col-span-6 space-y-4">
              <div className="relative w-full aspect-[2.1] rounded-2xl overflow-hidden">
                <Image 
                  src="/images/care-management/client-family-input-1.png"
                  alt="Family portal overview"
                  fill
                  sizes="50vw"
                  className="object-cover object-center"
                />
              </div>
              <div className="relative w-full aspect-[2.1] rounded-2xl overflow-hidden">
                <Image 
                  src="/images/care-management/client-family-input-2.png"
                  alt="Family feedback meeting"
                  fill
                  sizes="50vw"
                  className="object-cover object-center"
                />
              </div>
            </div>
            {/* Text Copy */}
            <div className="lg:col-span-6 space-y-4">
              <span className="text-xs font-bold uppercase tracking-wider text-secondary">
                Client & Family Input
              </span>
              <h3 className="text-2xl md:text-3xl font-bold text-primary font-sans leading-snug">
                Empower Collaborative Person-Centred Care
              </h3>
              <p className="text-sm md:text-base text-slate-500 leading-relaxed">
                Allow families and residents to share feedback, update details, and view care progress. Build trust and keep everyone informed in real-time.
              </p>
            </div>
          </div>

        </div>

      </div>
    </section>
  )
}

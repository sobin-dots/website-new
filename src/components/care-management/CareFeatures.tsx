'use client'

import * as React from "react"
import Image from "next/image"
import { SlidersHorizontal, ShieldCheck } from "lucide-react"

export function CareFeatures() {
  return (
    <section className="py-4 sm:py-8 bg-white text-[#293836]">
      <div className="w-full space-y-16 sm:space-y-24 md:space-y-32">
        
        {/* Intro Centered Section (Frame 863 & 860) */}
        <div className="text-center max-w-[893px] mx-auto space-y-3 sm:space-y-4 scroll-section">
          <h2 className="text-2xl sm:text-3xl md:text-[40px] font-bold leading-tight md:leading-[66px] capitalize text-[#293836] font-['Lato',sans-serif]">
            Supporting Every Step of Care Delivery
          </h2>
          <p className="text-xs sm:text-sm md:text-base font-normal leading-relaxed md:leading-[28px] text-[#293836] capitalize font-['Lato',sans-serif] max-w-[763px] mx-auto">
            Cantra equips care teams with the tools to understand each person's needs, record meaningful interactions, monitor changes, and maintain a complete history of care—helping providers deliver safe, person-centred support while meeting regulatory expectations.
          </p>
        </div>

        {/* Feature Blocks Stack */}
        <div className="space-y-16 sm:space-y-24 md:space-y-32">

          {/* Block 1: Risk Assessments (Image Left, Text Right) - Frame 856 */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 lg:gap-16 items-center max-w-[1240px] mx-auto scroll-section">
            {/* Image Wrapper */}
            <div className="lg:col-span-6 relative w-full h-[260px] sm:h-[380px] md:h-[480px] rounded-[16px] sm:rounded-[20px] overflow-hidden">
              <Image 
                src="/images/care-management/risk-assessments.png"
                alt="Risk Assessments"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover object-center"
              />
            </div>
            {/* Text Copy (Frame 926 / 888) */}
            <div className="lg:col-span-6 space-y-2 sm:space-y-3 max-w-[571px]">
              <h3 className="text-2xl sm:text-3xl md:text-[40px] font-bold leading-tight md:leading-[50px] capitalize text-[#293836] font-['Lato',sans-serif]">
                Risk Assessments
              </h3>
              <h4 className="text-lg sm:text-xl md:text-[24px] font-medium leading-snug md:leading-[32px] capitalize text-[#293836] font-['Lato',sans-serif]">
                Manage risks before they become incidents.
              </h4>
              <p className="text-xs sm:text-sm md:text-base font-normal leading-relaxed md:leading-[27px] text-[#293836] capitalize font-['Inter',sans-serif] pt-1 sm:pt-2">
                Identify and manage potential risks before they become incidents. Record personalised risk assessments, review outcomes regularly, and ensure every member of staff has access to the latest information to support safer care.
              </p>
            </div>
          </div>

          {/* Block 2: Person-Centred Care Plans (Text Left, Visual Right) - Frame 858 */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 lg:gap-16 items-center max-w-[1240px] mx-auto scroll-section">
            {/* Text Copy */}
            <div className="lg:col-span-6 space-y-2 sm:space-y-3 max-w-[563px] lg:order-1 order-2">
              <h3 className="text-2xl sm:text-3xl md:text-[40px] font-bold leading-tight md:leading-[50px] capitalize text-[#293836] font-['Lato',sans-serif]">
                Person-Centred Care Plans
              </h3>
              <h4 className="text-lg sm:text-xl md:text-[24px] font-medium leading-snug md:leading-[32px] capitalize text-[#293836] font-['Lato',sans-serif]">
                Deliver care that's tailored to every individual.
              </h4>
              <p className="text-xs sm:text-sm md:text-base font-normal leading-relaxed md:leading-[27px] text-[#293836] capitalize font-['Inter',sans-serif] pt-1 sm:pt-2">
                Import or recreate externally developed care plans and tailor them to each resident's evolving needs. Keep goals, preferences, routines, and support requirements accessible so every caregiver can deliver consistent, personalised care.
              </p>
            </div>

            {/* Visual Collage Wrapper (Frame 1768) */}
            <div className="lg:col-span-6 relative w-full h-[320px] sm:h-[440px] md:h-[500px] flex items-center justify-center lg:order-2 order-1">
              {/* Back Image (person-centred-care-plans-1.png) */}
              <div className="absolute left-1 sm:left-4 top-0 w-[52%] h-[84%] rounded-[16px] sm:rounded-[20px] overflow-hidden z-10">
                <Image 
                  src="/images/care-management/person-centred-care-plans-1.png"
                  alt="Person-centred care management dashboard"
                  fill
                  sizes="(max-width: 1024px) 50vw, 30vw"
                  className="object-cover object-top"
                />
              </div>

              {/* Floating 99.8% Vision Control Badge (Frame 960) */}
              <div className="absolute left-[36%] top-[4%] z-30 bg-white px-2.5 sm:px-3 py-1.5 sm:py-2 rounded-[8px] sm:rounded-[10px] shadow-[0_4px_12px_rgba(0,0,0,0.12)] border border-slate-100 flex items-center gap-2">
                <div className="space-y-0.5">
                  <span className="text-xs sm:text-base font-bold text-[#293836] font-['Lato',sans-serif] block leading-none">
                    99.8%
                  </span>
                  <span className="text-[9px] sm:text-[11px] font-normal text-[#293836] font-['Inter',sans-serif] block leading-none whitespace-nowrap">
                    Vision Control
                  </span>
                </div>
                <div className="w-5 h-5 sm:w-7 sm:h-7 rounded-full bg-[#DEE9E6] border border-[#3D5D58]/30 flex items-center justify-center shrink-0">
                  <SlidersHorizontal className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-[#3D5D58]" />
                </div>
              </div>

              {/* Front Image (person-centred-care-plans-2.png) */}
              <div className="absolute right-1 sm:right-4 bottom-0 w-[50%] h-[72%] rounded-[16px] sm:rounded-[20px] overflow-hidden z-20">
                <Image 
                  src="/images/care-management/person-centred-care-plans-2.png"
                  alt="Caregiver explaining care plan to resident"
                  fill
                  sizes="(max-width: 1024px) 50vw, 30vw"
                  className="object-cover object-center"
                />
              </div>
            </div>
          </div>

          {/* Block 3: Observations (Image Left, Text Right) - Frame 859 */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 lg:gap-16 items-center max-w-[1240px] mx-auto scroll-section">
            {/* Visual Collage (Frame 2248) */}
            <div className="lg:col-span-6 flex flex-col gap-2.5 sm:gap-3 max-w-[571px] mx-auto w-full">
              {/* Row 1: Two Side-by-Side Images */}
              <div className="grid grid-cols-2 gap-2.5 sm:gap-3 w-full">
                <div className="relative aspect-[1.4] rounded-[14px] sm:rounded-[20px] overflow-hidden">
                  <Image 
                    src="/images/care-management/observations-1.png"
                    alt="Caregiver recording observations"
                    fill
                    sizes="(max-width: 1024px) 50vw, 25vw"
                    className="object-cover object-center"
                  />
                </div>
                <div className="relative aspect-[1.4] rounded-[14px] sm:rounded-[20px] overflow-hidden">
                  <Image 
                    src="/images/care-management/Observations-2.png"
                    alt="Caregiver assisting senior resident"
                    fill
                    sizes="(max-width: 1024px) 50vw, 25vw"
                    className="object-cover object-center"
                  />
                </div>
              </div>
              {/* Row 2: Full Width Image */}
              <div className="relative w-full aspect-[2.1] rounded-[14px] sm:rounded-[20px] overflow-hidden">
                <Image 
                  src="/images/care-management/Observations-3.png"
                  alt="Caregiver walking with resident"
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover object-center"
                />
              </div>
            </div>

            {/* Text Copy (Frame 926 / 888) */}
            <div className="lg:col-span-6 space-y-2 sm:space-y-3 max-w-[571px]">
              <h3 className="text-2xl sm:text-3xl md:text-[40px] font-bold leading-tight md:leading-[50px] capitalize text-[#293836] font-['Lato',sans-serif]">
                Observations
              </h3>
              <h4 className="text-lg sm:text-xl md:text-[24px] font-medium leading-snug md:leading-[32px] capitalize text-[#293836] font-['Lato',sans-serif]">
                Record real-time insights that improve outcomes.
              </h4>
              <p className="text-xs sm:text-sm md:text-base font-normal leading-relaxed md:leading-[27px] text-[#293836] capitalize font-['Inter',sans-serif] pt-1 sm:pt-2">
                Capture day-to-day observations, wellbeing updates, and health indicators as care is delivered. Real-time recording helps teams identify changes early, improve communication, and support informed clinical decisions.
              </p>
            </div>
          </div>

          {/* Block 4: Version History (Text Left, Image Right) - Frame 860 */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 lg:gap-16 items-center max-w-[1240px] mx-auto scroll-section">
            {/* Text Copy */}
            <div className="lg:col-span-6 space-y-2 sm:space-y-3 max-w-[571px] lg:order-1 order-2">
              <h3 className="text-2xl sm:text-3xl md:text-[40px] font-bold leading-tight md:leading-[50px] capitalize text-[#293836] font-['Lato',sans-serif]">
                Version History
              </h3>
              <h4 className="text-lg sm:text-xl md:text-[24px] font-medium leading-snug md:leading-[32px] capitalize text-[#141F1E] font-['Lato',sans-serif]">
                Every Update Recorded. Every Decision Traceable.
              </h4>
              <p className="text-xs sm:text-sm md:text-base font-normal leading-relaxed md:leading-[27px] text-[#293836] capitalize font-['Inter',sans-serif] pt-1 sm:pt-2">
                Maintain A Complete Audit Trail Of Every Care Plan Update, Review, And Amendment. Track Who Made Changes, When They Were Made, And Why, Providing Transparency For Inspections And Internal Governance.
              </p>
            </div>

            {/* Overlapping Images with Floating 100% Secure Storage Badges (Frame 2250) */}
            <div className="lg:col-span-6 relative w-full h-[360px] sm:h-[460px] md:h-[520px] flex items-center justify-center lg:order-2 order-1">
              
              {/* Left Image Card */}
              <div className="absolute left-1 sm:left-4 top-[5%] w-[48%] h-[90%] flex flex-col items-center z-10">
                {/* Floating Badge 1 */}
                <div className="bg-white px-2.5 sm:px-3.5 py-1.5 sm:py-2 rounded-[8px] sm:rounded-[10px] shadow-[0_4px_12px_rgba(0,0,0,0.10)] border border-slate-100 flex items-center gap-2 mb-2 z-20">
                  <div className="space-y-0.5">
                    <span className="text-xs sm:text-sm font-bold text-[#293836] font-['Lato',sans-serif] block leading-none">100%</span>
                    <span className="text-[8px] sm:text-[10px] font-normal text-[#293836] font-['Inter',sans-serif] block leading-none whitespace-nowrap">Secure Storage</span>
                  </div>
                  <div className="w-5 h-5 sm:w-6 sm:h-6 rounded-full bg-[#DEE9E6] border border-[#3D5D58]/30 flex items-center justify-center shrink-0">
                    <ShieldCheck className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-[#3D5D58]" />
                  </div>
                </div>

                <div className="relative w-full flex-1 rounded-[16px] sm:rounded-[20px] overflow-hidden">
                  <Image 
                    src="/images/care-management/version-history-1.png"
                    alt="Version History Log"
                    fill
                    sizes="(max-width: 1024px) 45vw, 25vw"
                    className="object-cover object-top"
                  />
                </div>
              </div>

              {/* Right Image Card */}
              <div className="absolute right-1 sm:right-4 top-0 w-[48%] h-[92%] flex flex-col items-center z-20">
                {/* Floating Badge 2 */}
                <div className="bg-white px-2.5 sm:px-3.5 py-1.5 sm:py-2 rounded-[8px] sm:rounded-[10px] shadow-[0_4px_12px_rgba(0,0,0,0.10)] border border-slate-100 flex items-center gap-2 mb-2 z-20">
                  <div className="space-y-0.5">
                    <span className="text-xs sm:text-sm font-bold text-[#293836] font-['Lato',sans-serif] block leading-none">100%</span>
                    <span className="text-[8px] sm:text-[10px] font-normal text-[#293836] font-['Inter',sans-serif] block leading-none whitespace-nowrap">Secure Storage</span>
                  </div>
                  <div className="w-5 h-5 sm:w-6 sm:h-6 rounded-full bg-[#DEE9E6] border border-[#3D5D58]/30 flex items-center justify-center shrink-0">
                    <ShieldCheck className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-[#3D5D58]" />
                  </div>
                </div>

                <div className="relative w-full flex-1 rounded-[16px] sm:rounded-[20px] overflow-hidden">
                  <Image 
                    src="/images/care-management/version-history-2.png"
                    alt="Audit log and approval workflow"
                    fill
                    sizes="(max-width: 1024px) 45vw, 25vw"
                    className="object-cover object-top"
                  />
                </div>
              </div>

            </div>
          </div>

          {/* Block 5: Client & Family Input (Image Left, Text Right) - Frame 1875 */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 lg:gap-16 items-center max-w-[1240px] mx-auto scroll-section">
            {/* Visual Stack (Frame 1778) */}
            <div className="lg:col-span-6 flex flex-col gap-2.5 sm:gap-3 max-w-[571px] mx-auto w-full">
              <div className="relative w-full aspect-[2.2] rounded-[14px] sm:rounded-[20px] overflow-hidden">
                <Image 
                  src="/images/care-management/client-family-input-1.png"
                  alt="Family portal overview"
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover object-center"
                />
              </div>
              <div className="relative w-full aspect-[1.65] rounded-[14px] sm:rounded-[20px] overflow-hidden">
                <Image 
                  src="/images/care-management/client-family-input-2.png"
                  alt="Family feedback meeting"
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover object-center"
                />
              </div>
            </div>

            {/* Text Copy (Frame 926 / 888) */}
            <div className="lg:col-span-6 space-y-2 sm:space-y-3 max-w-[571px]">
              <h3 className="text-2xl sm:text-3xl md:text-[40px] font-bold leading-tight md:leading-[50px] capitalize text-[#293836] font-['Lato',sans-serif]">
                Client & Family Input
              </h3>
              <h4 className="text-lg sm:text-xl md:text-[24px] font-medium leading-snug md:leading-[32px] capitalize text-[#293836] font-['Lato',sans-serif]">
                Empower collaborative, person-centred care.
              </h4>
              <p className="text-xs sm:text-sm md:text-base font-normal leading-relaxed md:leading-[27px] text-[#293836] capitalize font-['Inter',sans-serif] pt-1 sm:pt-2">
                Encourage collaborative care by recording feedback, preferences, and contributions from residents and their families. Keeping everyone involved helps ensure care remains personal, respectful, and aligned with individual wishes.
              </p>
            </div>
          </div>

        </div>

      </div>
    </section>
  )
}


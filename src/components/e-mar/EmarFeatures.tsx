'use client'

import * as React from "react"
import Image from "next/image"

export function EmarFeatures() {
  return (
    <section className="py-4 sm:py-8 bg-white text-[#293836] overflow-hidden">
      <div className="w-full space-y-16 sm:space-y-24 md:space-y-32">

        {/* Centered Section Header */}
        <div className="text-center max-w-[893px] mx-auto space-y-3 sm:space-y-4 scroll-section">
          <h2 className="text-2xl sm:text-3xl md:text-[40px] font-bold leading-tight md:leading-[66px] capitalize text-[#293836] font-['Lato',sans-serif]">
            Smarter Medication Management Starts Here
          </h2>
          <p className="text-xs sm:text-sm md:text-base font-normal leading-relaxed md:leading-[28px] text-[#293836] capitalize font-['Lato',sans-serif] max-w-[763px] mx-auto">
            Cantra Equips Care Teams With The Tools To Understand Each Person's Needs, Record Meaningful Interactions, Monitor Changes, And Maintain A Complete History Of Care—Helping Providers Deliver Safe, Person-Centred Support While Meeting Regulatory Expectations.
          </p>
        </div>

        {/* Feature Blocks Stack */}
        <div className="space-y-16 sm:space-y-24 md:space-y-32">

          {/* Block 1: EMAR Charts (Image Left, Copy Right) */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 lg:gap-16 items-center max-w-[1240px] mx-auto scroll-section">
            {/* Left Image (6 cols) */}
            <div className="lg:col-span-6 relative w-full h-[260px] sm:h-[380px] md:h-[480px] rounded-[20px] overflow-hidden">
              <Image
                src="/images/e-mar/eMAR-charts.png"
                alt="Caregiver reviewing eMAR charts on tablet with resident"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover object-center"
              />
            </div>

            {/* Right Copy (6 cols) */}
            <div className="lg:col-span-6 space-y-2 sm:space-y-3 max-w-[571px]">
              <h3 className="text-2xl sm:text-3xl md:text-[40px] font-bold leading-tight md:leading-[50px] capitalize text-[#293836] font-['Lato',sans-serif]">
                EMAR Charts
              </h3>
              <h4 className="text-lg sm:text-xl md:text-[24px] font-medium leading-snug md:leading-[32px] capitalize text-[#293836] font-['Lato',sans-serif]">
                Safer Medication Rounds And Digital Accountability
              </h4>
              <p className="text-xs sm:text-sm md:text-base font-normal leading-relaxed md:leading-[27px] text-[#293836] capitalize font-['Inter',sans-serif] pt-1 sm:pt-2">
                Replace Paper MAR Charts With Secure Digital Records That Guide Carers Through Every Medication Round. Record Administrations, Omissions, Refusals, And Exceptions In Real Time While Maintaining A Complete Audit Trail For Every Resident.
              </p>
            </div>
          </div>


          {/* Block 2: PRN Management (Copy Left, Image Right) */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 lg:gap-16 items-center max-w-[1240px] mx-auto scroll-section">
            {/* Left Copy (6 cols) */}
            <div className="lg:col-span-6 space-y-2 sm:space-y-3 max-w-[563px] lg:order-1 order-2">
              <h3 className="text-2xl sm:text-3xl md:text-[40px] font-bold leading-tight md:leading-[50px] capitalize text-[#293836] font-['Lato',sans-serif]">
                PRN Management
              </h3>
              <h4 className="text-lg sm:text-xl md:text-[18px] font-bold leading-snug md:leading-[32px] capitalize text-[#293836] font-['Lato',sans-serif]">
                Clinical Governance And Safer Decision-Making.
              </h4>
              <p className="text-xs sm:text-sm md:text-base font-normal leading-relaxed md:leading-[27px] text-[#293836] capitalize font-['Inter',sans-serif] pt-1 sm:pt-2">
                Record PRN Medications With Clear Administration Reasons, Effectiveness Reviews, And Follow-Up Notes. Support Safer Decision-Making While Providing The Evidence Required For Inspections And Clinical Governance.
              </p>
            </div>

            {/* Right Image Collage (6 cols) */}
            <div className="lg:col-span-6 relative w-full h-[320px] sm:h-[440px] md:h-[500px] lg:order-2 order-1 flex items-center justify-center">
              <div className="absolute left-1 sm:left-4 top-0 w-[55%] h-[56%] rounded-[20px] overflow-hidden">
                <Image
                  src="/images/e-mar/PRN-management-1.png"
                  alt="PRN administration record view"
                  fill
                  sizes="(max-width: 1024px) 50vw, 30vw"
                  className="object-cover object-center"
                />
              </div>
              <div className="absolute right-1 sm:right-4 top-[10%] w-[55%] h-[56%] rounded-[20px] overflow-hidden">
                <Image
                  src="/images/e-mar/PRN-management-2.png"
                  alt="Caregiver administering PRN medication"
                  fill
                  sizes="(max-width: 1024px) 50vw, 30vw"
                  className="object-cover object-center"
                />
              </div>
              <div className="absolute left-[20%] bottom-0 w-[60%] h-[44%] rounded-[20px] overflow-hidden">
                <Image
                  src="/images/e-mar/PRN-management-3.png"
                  alt="Caregiver reviewing PRN logs"
                  fill
                  sizes="(max-width: 1024px) 50vw, 30vw"
                  className="object-cover object-center"
                />
              </div>
            </div>
          </div>


          {/* Block 3: Medication Instructions (Image Left, Copy Right) */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 lg:gap-16 items-center max-w-[1240px] mx-auto scroll-section">
            {/* Left Image Collage (6 cols) */}
            <div className="lg:col-span-6 relative w-full h-[320px] sm:h-[440px] md:h-[500px] flex items-center justify-center">
              <div className="absolute left-1 sm:left-4 top-[10%] w-[50%] h-[80%] rounded-[20px] overflow-hidden">
                <Image
                  src="/images/e-mar/medication-instructions-1.png"
                  alt="Medication dosage instructions view"
                  fill
                  sizes="(max-width: 1024px) 50vw, 25vw"
                  className="object-cover object-center"
                />
              </div>
              <div className="absolute right-1 sm:right-4 top-0 w-[55%] h-[82%] rounded-[20px] overflow-hidden">
                <Image
                  src="/images/e-mar/medication-instructions-2.png"
                  alt="Caregiver checking tablet instructions"
                  fill
                  sizes="(max-width: 1024px) 50vw, 30vw"
                  className="object-cover object-center"
                />
              </div>
            </div>

            {/* Right Copy (6 cols) */}
            <div className="lg:col-span-6 space-y-2 sm:space-y-3 max-w-[571px]">
              <h3 className="text-2xl sm:text-3xl md:text-[40px] font-bold leading-tight md:leading-[50px] capitalize text-[#293836] font-['Lato',sans-serif]">
                Medication Instructions
              </h3>
              <h4 className="text-lg sm:text-xl md:text-[18px] font-bold leading-snug md:leading-[32px] capitalize text-[#293836] font-['Lato',sans-serif]">
                Consistency And Reduced Errors
              </h4>
              <p className="text-xs sm:text-sm md:text-base font-normal leading-relaxed md:leading-[27px] text-[#293836] capitalize font-['Inter',sans-serif] pt-1 sm:pt-2">
                Provide Clear Dosage Instructions, Administration Guidance, Allergy Information, Timing Requirements, And Special Precautions Alongside Every Medication, Helping Reduce Uncertainty And Improve Consistency Across Every Shift.
              </p>
            </div>
          </div>


          {/* Block 4: Smart Alerts (Copy Left, Image Right) */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 lg:gap-16 items-center max-w-[1240px] mx-auto scroll-section">
            {/* Left Copy (6 cols) */}
            <div className="lg:col-span-6 space-y-2 sm:space-y-3 max-w-[563px] lg:order-1 order-2">
              <h3 className="text-2xl sm:text-3xl md:text-[40px] font-bold leading-tight md:leading-[50px] capitalize text-[#293836] font-['Lato',sans-serif]">
                Smart Alerts
              </h3>
              <h4 className="text-lg sm:text-xl md:text-[18px] font-bold leading-snug md:leading-[32px] capitalize text-[#293836] font-['Lato',sans-serif]">
                Prevent Missed Doses Before They Become Risks.
              </h4>
              <p className="text-xs sm:text-sm md:text-base font-normal leading-relaxed md:leading-[27px] text-[#293836] capitalize font-['Inter',sans-serif] pt-1 sm:pt-2">
                Receive Intelligent Notifications For Overdue Medications, Missed Administrations, Potential Scheduling Conflicts, Expiring Prescriptions, And Other Critical Events, Helping Teams Respond Quickly And Maintain Medication Compliance.
              </p>
            </div>

            {/* Right Image (6 cols) */}
            <div className="lg:col-span-6 relative w-full h-[260px] sm:h-[380px] md:h-[480px] rounded-[16px] sm:rounded-[20px] overflow-hidden lg:order-2 order-1">
              <Image
                src="/images/e-mar/smart-alerts.png"
                alt="Caregiver holding tablet with medication cup for resident"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover object-center"
              />
            </div>
          </div>


          {/* Block 5: Stock Control (Image Left, Copy Right) */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 lg:gap-16 items-center max-w-[1240px] mx-auto scroll-section">
            {/* Left Image Collage (6 cols) */}
            <div className="lg:col-span-6 flex flex-col gap-2.5 sm:gap-3 max-w-[571px] mx-auto w-full">
              <div className="grid grid-cols-2 gap-2.5 sm:gap-3 w-full">
                <div className="relative aspect-[1.4] rounded-[14px] sm:rounded-[20px] overflow-hidden">
                  <Image
                    src="/images/e-mar/stock-control-1.png"
                    alt="Caregiver reviewing tablet stock"
                    fill
                    sizes="(max-width: 1024px) 50vw, 25vw"
                    className="object-cover object-center"
                  />
                </div>
                <div className="relative aspect-[1.4] rounded-[14px] sm:rounded-[20px] overflow-hidden">
                  <Image
                    src="/images/e-mar/stock-control-2.png"
                    alt="Caregiver scanning medication barcode"
                    fill
                    sizes="(max-width: 1024px) 50vw, 25vw"
                    className="object-cover object-center"
                  />
                </div>
              </div>
              <div className="relative w-full aspect-[1.9] rounded-[14px] sm:rounded-[20px] overflow-hidden">
                <Image
                  src="/images/e-mar/stock-control-3.png"
                  alt="Caregiver inspecting pharmacy storage cabinet"
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover object-center"
                />
              </div>
            </div>

            {/* Right Copy (6 cols) */}
            <div className="lg:col-span-6 space-y-2 sm:space-y-3 max-w-[571px]">
              <h3 className="text-2xl sm:text-3xl md:text-[40px] font-bold leading-tight md:leading-[50px] capitalize text-[#293836] font-['Lato',sans-serif]">
                Stock Control
              </h3>
              <h4 className="text-lg sm:text-xl md:text-[18px] font-bold leading-snug md:leading-[32px] capitalize text-[#293836] font-['Lato',sans-serif]">
                Always Know What's In Stock And What's Running Low.
              </h4>
              <p className="text-xs sm:text-sm md:text-base font-normal leading-relaxed md:leading-[27px] text-[#293836] capitalize font-['Inter',sans-serif] pt-1 sm:pt-2">
                Track Medication Inventories In Real Time, Manage Reorders, Monitor Expiry Dates, And Streamline Pharmacy Deliveries To Ensure Medication Is Always Available When Needed.
              </p>
            </div>
          </div>

        </div>

      </div>
    </section>
  )
}

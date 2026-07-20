'use client'

import * as React from "react"
import Image from "next/image"

export function EmarFeatures() {
  return (
    <section className="py-20 bg-white text-slate-900 overflow-hidden">
      <div className="mx-auto max-w-7xl px-6 md:px-8">
        
        {/* Centered Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-24">
          <h2 className="text-3xl md:text-4xl lg:text-[42px] font-bold tracking-tight text-primary font-sans leading-tight">
            Smarter Medication Management Starts Here
          </h2>
          <p className="text-xs md:text-sm text-slate-500 leading-relaxed max-w-2xl mx-auto">
            Cantra Equips Care Teams With The Tools To Understand Each Person's Needs, Record Meaningful Interactions, Monitor Changes, And Maintain A Complete History Of Care—Helping Providers Deliver Safe, Person-Centred Support While Meeting Regulatory Expectations.
          </p>
        </div>

        {/* Feature Blocks Stack */}
        <div className="space-y-32">

          {/* ------------------------------------------------------------- */}
          {/* Block 1: EMAR Charts (Image Left, Copy Right) */}
          {/* ------------------------------------------------------------- */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            {/* Left Image (6 cols) */}
            <div className="lg:col-span-6 relative w-full aspect-[1.3] rounded-3xl overflow-hidden shadow-sm">
              <Image 
                src="/images/e-mar/eMAR-charts.png"
                alt="Caregiver reviewing eMAR charts on tablet with senior resident"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover object-center"
              />
            </div>

            {/* Right Copy (6 cols) */}
            <div className="lg:col-span-6 space-y-4">
              <h3 className="text-3xl md:text-4xl font-bold text-primary font-sans leading-tight">
                EMAR Charts
              </h3>
              <h4 className="text-lg md:text-xl font-bold text-slate-700 font-sans">
                Safer Medication Rounds And Digital Accountability
              </h4>
              <p className="text-xs md:text-sm text-slate-500 leading-relaxed">
                Replace Paper MAR Charts With Secure Digital Records That Guide Carers Through Every Medication Round. Record Administrations, Omissions, Refusals, And Exceptions In Real Time While Maintaining A Complete Audit Trail For Every Resident.
              </p>
            </div>
          </div>


          {/* ------------------------------------------------------------- */}
          {/* Block 2: PRN Management (Copy Left, Image Right) */}
          {/* ------------------------------------------------------------- */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            {/* Left Copy (6 cols) */}
            <div className="lg:col-span-6 space-y-4 lg:order-1 order-2">
              <h3 className="text-3xl md:text-4xl font-bold text-primary font-sans leading-tight">
                PRN Management
              </h3>
              <h4 className="text-lg md:text-xl font-bold text-slate-700 font-sans">
                Clinical Governance And Safer Decision-Making.
              </h4>
              <p className="text-xs md:text-sm text-slate-500 leading-relaxed">
                Record PRN Medications With Clear Administration Reasons, Effectiveness Reviews, And Follow-Up Notes. Support Safer Decision-Making While Providing The Evidence Required For Inspections And Clinical Governance.
              </p>
            </div>

            {/* Right Image Collage (6 cols) */}
            <div className="lg:col-span-6 relative w-full h-[360px] md:h-[420px] lg:order-2 order-1">
              <div className="absolute left-0 top-0 w-[55%] aspect-[1.2] rounded-2xl overflow-hidden shadow-sm">
                <Image 
                  src="/images/e-mar/PRN-management-1.png"
                  alt="PRN administration record view"
                  fill
                  sizes="30vw"
                  className="object-cover object-center"
                />
              </div>
              <div className="absolute right-0 top-4 w-[55%] aspect-[1.2] rounded-2xl overflow-hidden shadow-sm">
                <Image 
                  src="/images/e-mar/PRN-management-2.png"
                  alt="Caregiver administering PRN medication"
                  fill
                  sizes="30vw"
                  className="object-cover object-center"
                />
              </div>
              <div className="absolute left-1/4 bottom-0 w-[60%] aspect-[1.6] rounded-2xl overflow-hidden shadow-md">
                <Image 
                  src="/images/e-mar/PRN-management-3.png"
                  alt="Caregiver reviewing PRN logs"
                  fill
                  sizes="30vw"
                  className="object-cover object-center"
                />
              </div>
            </div>
          </div>


          {/* ------------------------------------------------------------- */}
          {/* Block 3: Medication Instructions (Image Left, Copy Right) */}
          {/* ------------------------------------------------------------- */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            {/* Left Image Collage (6 cols) */}
            <div className="lg:col-span-6 relative w-full h-[380px] md:h-[440px]">
              <div className="absolute left-0 top-8 w-[50%] aspect-[0.8] rounded-2xl overflow-hidden shadow-sm">
                <Image 
                  src="/images/e-mar/medication-instructions-1.png"
                  alt="Medication dosage instructions view"
                  fill
                  sizes="25vw"
                  className="object-cover object-center"
                />
              </div>
              <div className="absolute right-0 top-0 w-[55%] aspect-[0.75] rounded-2xl overflow-hidden shadow-sm">
                <Image 
                  src="/images/e-mar/medication-instructions-2.png"
                  alt="Caregiver checking tablet instructions"
                  fill
                  sizes="30vw"
                  className="object-cover object-center"
                />
              </div>
            </div>

            {/* Right Copy (6 cols) */}
            <div className="lg:col-span-6 space-y-4">
              <h3 className="text-3xl md:text-4xl font-bold text-primary font-sans leading-tight">
                Medication Instructions
              </h3>
              <h4 className="text-lg md:text-xl font-bold text-slate-700 font-sans">
                Consistency And Reduced Errors
              </h4>
              <p className="text-xs md:text-sm text-slate-500 leading-relaxed">
                Provide Clear Dosage Instructions, Administration Guidance, Allergy Information, Timing Requirements, And Special Precautions Alongside Every Medication, Helping Reduce Uncertainty And Improve Consistency Across Every Shift.
              </p>
            </div>
          </div>


          {/* ------------------------------------------------------------- */}
          {/* Block 4: Smart Alerts (Copy Left, Image Right) */}
          {/* ------------------------------------------------------------- */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            {/* Left Copy (6 cols) */}
            <div className="lg:col-span-6 space-y-4 lg:order-1 order-2">
              <h3 className="text-3xl md:text-4xl font-bold text-primary font-sans leading-tight">
                Smart Alerts
              </h3>
              <h4 className="text-lg md:text-xl font-bold text-slate-700 font-sans">
                Prevent Missed Doses Before They Become Risks.
              </h4>
              <p className="text-xs md:text-sm text-slate-500 leading-relaxed">
                Receive Intelligent Notifications For Overdue Medications, Missed Administrations, Potential Scheduling Conflicts, Expiring Prescriptions, And Other Critical Events, Helping Teams Respond Quickly And Maintain Medication Compliance.
              </p>
            </div>

            {/* Right Image (6 cols) */}
            <div className="lg:col-span-6 relative w-full aspect-[1.2] rounded-3xl overflow-hidden shadow-sm lg:order-2 order-1">
              <Image 
                src="/images/e-mar/smart-alerts.png"
                alt="Caregiver holding tablet with medication cup for resident"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover object-center"
              />
            </div>
          </div>


          {/* ------------------------------------------------------------- */}
          {/* Block 5: Stock Control (Image Left, Copy Right) */}
          {/* ------------------------------------------------------------- */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            {/* Left Image Collage (6 cols) */}
            <div className="lg:col-span-6 space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div className="relative aspect-[1.3] rounded-2xl overflow-hidden shadow-sm">
                  <Image 
                    src="/images/e-mar/stock-control-1.png"
                    alt="Caregiver reviewing tablet stock"
                    fill
                    sizes="25vw"
                    className="object-cover object-center"
                  />
                </div>
                <div className="relative aspect-[1.3] rounded-2xl overflow-hidden shadow-sm">
                  <Image 
                    src="/images/e-mar/stock-control-2.png"
                    alt="Caregiver scanning medication barcode"
                    fill
                    sizes="25vw"
                    className="object-cover object-center"
                  />
                </div>
              </div>
              <div className="relative w-full aspect-[1.9] rounded-2xl overflow-hidden shadow-sm">
                <Image 
                  src="/images/e-mar/stock-control-3.png"
                  alt="Caregiver inspecting pharmacy storage cabinet"
                  fill
                  sizes="50vw"
                  className="object-cover object-center"
                />
              </div>
            </div>

            {/* Right Copy (6 cols) */}
            <div className="lg:col-span-6 space-y-4">
              <h3 className="text-3xl md:text-4xl font-bold text-primary font-sans leading-tight">
                Stock Control
              </h3>
              <h4 className="text-lg md:text-xl font-bold text-slate-700 font-sans">
                Always Know What's In Stock And What's Running Low.
              </h4>
              <p className="text-xs md:text-sm text-slate-500 leading-relaxed">
                Track Medication Inventories In Real Time, Manage Reorders, Monitor Expiry Dates, And Streamline Pharmacy Deliveries To Ensure Medication Is Always Available When Needed.
              </p>
            </div>
          </div>

        </div>

      </div>
    </section>
  )
}

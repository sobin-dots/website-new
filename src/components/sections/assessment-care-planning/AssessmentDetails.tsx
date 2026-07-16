'use client'

import { ArrowUpRight, ClipboardSignature, ShieldCheck, Key } from "lucide-react"
import { Button } from "@/components/ui/button"

export function AssessmentDetails() {
  return (
    <section className="py-16 bg-white border-t border-slate-100">
      <div className="mx-auto max-w-7xl px-6 md:px-8">

        {/* 2-Column Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">

          {/* Left Column: Heading & Description (7 columns) */}
          <div className="lg:col-span-7 space-y-6">
            <div className="space-y-3">
              <h1 className="text-3xl md:text-[40px] font-bold tracking-tight text-primary leading-tight">
                Assessment & Care Planning
              </h1>
              <p className="text-lg md:text-xl font-medium text-secondary font-serif italic">
                Person-Centred Assessments & Care Planning
              </p>
            </div>

            <p className="text-sm md:text-base text-slate-500 leading-relaxed max-w-2xl">
              Create comprehensive digital assessments and personalised care plans that evolve with every resident's needs. Record outcomes, schedule reviews, and ensure every member of your team has access to accurate, up-to-date care information from a single platform.
            </p>
          </div>

          {/* Right Column: Checklist & Buttons (5 columns) */}
          <div className="lg:col-span-5 space-y-10">

            {/* Checklist Grid */}
            <div className="grid gap-6">

              {/* Feature 1 */}
              <div className="flex items-start gap-4">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-slate-50 text-primary border border-slate-100">
                  <ClipboardSignature className="h-5 w-5" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-primary">Compliant</h4>
                  <p className="text-xs text-slate-500 mt-0.5">Industry standard compliance</p>
                </div>
              </div>

              {/* Feature 2 */}
              <div className="flex items-start gap-4">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-slate-50 text-primary border border-slate-100">
                  <ShieldCheck className="h-5 w-5" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-primary">Secure</h4>
                  <p className="text-xs text-slate-500 mt-0.5">End-to-end data encryption</p>
                </div>
              </div>

              {/* Feature 3 */}
              <div className="flex items-start gap-4">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-slate-50 text-primary border border-slate-100">
                  <Key className="h-5 w-5" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-primary">Accessible</h4>
                  <p className="text-xs text-slate-500 mt-0.5">Anywhere, anytime access</p>
                </div>
              </div>

            </div>

            {/* CTA Buttons */}
            <div className="flex flex-wrap gap-4 pt-6 border-t border-slate-100">
              <Button
                variant="outline"
                size="lg"
                className="rounded-full border-primary/30 text-primary hover:bg-primary/5 font-semibold flex items-center gap-3 px-6 h-12 transition-all duration-300"
              >
                Start free trial
                <div className="flex h-7 w-7 items-center justify-center rounded-full bg-primary text-white">
                  <ArrowUpRight className="h-4 w-4" />
                </div>
              </Button>
              <Button
                variant="default"
                size="lg"
                className="rounded-full bg-primary hover:bg-primary/95 text-white font-semibold flex items-center gap-3 px-6 h-12 transition-all duration-300"
              >
                Book a Demo
                <div className="flex h-7 w-7 items-center justify-center rounded-full bg-white text-primary">
                  <ArrowUpRight className="h-4 w-4" />
                </div>
              </Button>
            </div>

          </div>

        </div>

      </div>
    </section>
  )
}

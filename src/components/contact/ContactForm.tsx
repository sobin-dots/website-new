'use client'

import * as React from "react"
import Image from "next/image"
import { ArrowUpRight, ShieldCheck } from "lucide-react"
import { Button } from "@/components/ui/button"

export function ContactForm() {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
  }

  return (
    <section className="py-20 bg-[#FAF8F5] text-slate-900 overflow-hidden">
      <div className="mx-auto max-w-7xl px-6 md:px-8">
        
        {/* 2-Column Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Contact Form (7 columns) */}
          <div className="lg:col-span-7 space-y-8 animate-in fade-in slide-in-from-left-4 duration-500 scroll-section">
            <div className="space-y-4">
              <h2 className="text-3xl md:text-[38px] font-bold tracking-tight text-primary leading-tight">
                We're Here To Help. <br />How Can We Support You?
              </h2>
              <p className="text-sm md:text-base text-slate-500 leading-relaxed max-w-xl">
                Complete the form below and we will connect you with the right member of our team.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-5 max-w-2xl">
              
              {/* Row 1: First Name & Last Name */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label htmlFor="firstName" className="text-xs font-bold text-primary">
                    First Name <span className="text-secondary">*</span>
                  </label>
                  <input
                    type="text"
                    id="firstName"
                    placeholder="Enter First Name"
                    className="w-full rounded-xl bg-white border border-slate-200/80 px-4 py-3 text-sm text-slate-800 focus:outline-none focus:border-primary/50 transition-colors"
                    required
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="lastName" className="text-xs font-bold text-primary">
                    Last Name <span className="text-secondary">*</span>
                  </label>
                  <input
                    type="text"
                    id="lastName"
                    placeholder="Enter Last Name"
                    className="w-full rounded-xl bg-white border border-slate-200/80 px-4 py-3 text-sm text-slate-800 focus:outline-none focus:border-primary/50 transition-colors"
                    required
                  />
                </div>
              </div>

              {/* Row 2: Work Email & Phone Number */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label htmlFor="email" className="text-xs font-bold text-primary">
                    Work Email <span className="text-secondary">*</span>
                  </label>
                  <input
                    type="email"
                    id="email"
                    placeholder="Enter Work Email"
                    className="w-full rounded-xl bg-white border border-slate-200/80 px-4 py-3 text-sm text-slate-800 focus:outline-none focus:border-primary/50 transition-colors"
                    required
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="phone" className="text-xs font-bold text-primary">
                    Phone Number <span className="text-secondary">*</span>
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    placeholder="Enter Phone Number"
                    className="w-full rounded-xl bg-white border border-slate-200/80 px-4 py-3 text-sm text-slate-800 focus:outline-none focus:border-primary/50 transition-colors"
                    required
                  />
                </div>
              </div>

              {/* Row 3: Organization Name & Care Setting Select */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label htmlFor="orgName" className="text-xs font-bold text-primary">
                    Organization Name <span className="text-secondary">*</span>
                  </label>
                  <input
                    type="text"
                    id="orgName"
                    placeholder="Enter Organization Name"
                    className="w-full rounded-xl bg-white border border-slate-200/80 px-4 py-3 text-sm text-slate-800 focus:outline-none focus:border-primary/50 transition-colors"
                    required
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="careSetting" className="text-xs font-bold text-primary">
                    Care Setting <span className="text-secondary">*</span>
                  </label>
                  <select
                    id="careSetting"
                    className="w-full rounded-xl bg-white border border-slate-200/80 px-4 py-3 text-sm text-slate-500 focus:outline-none focus:border-primary/50 transition-colors appearance-none"
                    required
                  >
                    <option value="" disabled selected>Select Care Setting</option>
                    <option value="residential">Residential Care Home</option>
                    <option value="nursing">Nursing Home</option>
                    <option value="mental-health">Mental Health Care Home</option>
                    <option value="other">Other</option>
                  </select>
                </div>
              </div>

              {/* Row 4: Message Textarea */}
              <div className="space-y-2">
                <label htmlFor="message" className="text-xs font-bold text-primary">
                  Message <span className="text-secondary">*</span>
                </label>
                <textarea
                  id="message"
                  rows={4}
                  placeholder="Tell Us About Your Requirements..."
                  className="w-full rounded-xl bg-white border border-slate-200/80 px-4 py-3 text-sm text-slate-800 focus:outline-none focus:border-primary/50 transition-colors resize-none"
                  required
                />
              </div>

              {/* Submit Block */}
              <div className="space-y-4 pt-2">
                <Button
                  type="submit"
                  size="lg"
                  className="rounded-full bg-primary hover:bg-primary/95 text-white font-bold flex items-center gap-3 px-8 h-12 shadow-md transition-colors"
                >
                  Send Message
                  <div className="flex h-7 w-7 items-center justify-center rounded-full bg-white text-primary ml-1">
                    <ArrowUpRight className="h-4 w-4" />
                  </div>
                </Button>
                
                <div className="flex items-center gap-2 text-xs text-slate-500">
                  <ShieldCheck className="h-4 w-4 text-emerald-600" />
                  <span>Your Information Is Secure And Only Will Be Used To Respond To Your Enquiry.</span>
                </div>
              </div>

            </form>
          </div>

          {/* Right Column: Support Graphic Collage (5 columns) */}
          <div className="lg:col-span-5 relative w-full aspect-[0.9] max-w-md lg:max-w-none mx-auto rounded-[32px] overflow-hidden animate-in fade-in slide-in-from-right-4 duration-500 scroll-section">
            <Image
              src="/images/home-page/how-can-we-support-you.png"
              alt="How can we support you care managers team"
              fill
              sizes="(max-width: 1024px) 100vw, 40vw"
              className="object-cover object-center"
            />
          </div>

        </div>

      </div>
    </section>
  )
}

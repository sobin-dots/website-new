'use client'

import * as React from "react"
import Link from "next/link"
import { ArrowUpRight, Mail, Headphones, MessageSquare } from "lucide-react"
import { Button } from "@/components/ui/button"

const departments = [
  {
    icon: Mail,
    iconColor: "text-blue-600 bg-blue-50 border-blue-100",
    bgColor: "bg-[#F0F7FF] border-blue-100/50",
    title: "Sales Enquiries",
    description: "Questions about Pricing, custom plans, or Enterprise deployments?",
    email: "Sales@Cantra.com"
  },
  {
    icon: Headphones,
    iconColor: "text-purple-600 bg-purple-50 border-purple-100",
    bgColor: "bg-[#FAF5FF] border-purple-100/50",
    title: "Customer Support",
    description: "Already using Cantra? Access our Help Center or speak with our Support specialists.",
    email: "Support@Cantra.com"
  },
  {
    icon: MessageSquare,
    iconColor: "text-orange-600 bg-orange-50 border-orange-100",
    bgColor: "bg-[#FFFBF5] border-orange-100/50",
    title: "Partnerships",
    description: "Interested in collaborating with us for events, research, or integration? Talk to our specialists.",
    email: "Partners@Cantra.com"
  }
]

export function ContactHero() {
  return (
    <section className="pt-20 pb-16 bg-white text-slate-900 text-center">
      <div className="mx-auto max-w-7xl px-6 md:px-8 space-y-14">
        
        {/* Title Block */}
        <div className="space-y-6 max-w-3xl mx-auto scroll-section">
          <span className="text-xs font-semibold text-muted-foreground uppercase tracking-widest block">
            Contact Us
          </span>
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-primary leading-tight">
            Let's Talk About <br />Better Care Management
          </h1>
          <p className="text-sm md:text-base text-slate-500 leading-relaxed max-w-2xl mx-auto">
            Whether you are delivering care for the first time, planning integrations, or looking to streamline your care operations, our team is here to help.
          </p>
          
          {/* Hero CTAs */}
          <div className="flex flex-wrap items-center justify-center gap-4 pt-2">
            <Link 
              href="/book-demo"
              className="inline-flex items-center justify-center gap-3 rounded-full bg-primary hover:bg-primary/95 text-white font-bold text-sm px-6 py-3 transition-colors shadow-md h-12"
            >
              Book a Demo
              <div className="flex h-7 w-7 items-center justify-center rounded-full bg-white text-primary">
                <ArrowUpRight className="h-4 w-4" />
              </div>
            </Link>
            
            <Link 
              href="/free-trial"
              className="inline-flex items-center justify-center gap-3 rounded-full border border-primary/20 hover:bg-primary/5 text-primary font-bold text-sm px-6 py-3 transition-colors h-12"
            >
              Free Trial
              <div className="flex h-7 w-7 items-center justify-center rounded-full bg-primary text-white">
                <ArrowUpRight className="h-4 w-4" />
              </div>
            </Link>
          </div>
        </div>

        {/* 3 Department Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-left max-w-6xl mx-auto scroll-section">
          {departments.map((dept, idx) => {
            const IconComp = dept.icon
            return (
              <div key={idx} className={`p-8 rounded-3xl border ${dept.bgColor} space-y-5 flex flex-col justify-between shadow-sm`}>
                <div className="space-y-4">
                  <div className={`flex h-10 w-10 items-center justify-center rounded-xl border ${dept.iconColor}`}>
                    <IconComp className="h-5 w-5" />
                  </div>
                  <div className="space-y-2">
                    <h3 className="text-base font-bold text-primary font-sans">{dept.title}</h3>
                    <p className="text-xs text-slate-500 leading-relaxed">{dept.description}</p>
                  </div>
                </div>
                <div className="pt-2">
                  <a href={`mailto:${dept.email}`} className="text-sm font-bold text-primary hover:text-primary/80 transition-colors underline underline-offset-4 decoration-primary/30">
                    {dept.email}
                  </a>
                </div>
              </div>
            )
          })}
        </div>

      </div>
    </section>
  )
}

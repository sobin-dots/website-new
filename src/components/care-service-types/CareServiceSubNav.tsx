'use client'

import * as React from "react"
import Link from "next/link"

const navItems = [
  { name: "Residential Care Homes", href: "#residential-care-homes" },
  { name: "Nursing Homes", href: "#nursing-homes" },
  { name: "Mental Health Care Homes", href: "#mental-health-care-homes" }
]

export function CareServiceSubNav() {
  return (
    <div className="sticky top-20 z-30 bg-white/90 backdrop-blur-md border-b border-slate-100 py-3 shadow-2xs">
      <div className="mx-auto max-w-6xl px-6 md:px-8 flex items-center justify-center gap-2 sm:gap-4 overflow-x-auto no-scrollbar">
        {navItems.map((item, idx) => (
          <Link
            key={idx}
            href={item.href}
            className="whitespace-nowrap px-4 py-2 rounded-full text-xs md:text-sm font-semibold text-slate-700 hover:text-primary hover:bg-slate-100/80 transition-all border border-slate-200/60"
          >
            {item.name}
          </Link>
        ))}
      </div>
    </div>
  )
}

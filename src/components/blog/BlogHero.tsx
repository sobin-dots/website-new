'use client'

import * as React from "react"
import { Search } from "lucide-react"

const categories = [
  { name: "All Topics", active: true },
  { name: "Product Updates", active: false },
  { name: "Case Studies", active: false },
  { name: "Care Service", active: false },
  { name: "Better Practices", active: false },
  { name: "Operations", active: false }
]

export function BlogHero() {
  const [activeTab, setActiveTab] = React.useState("All Topics")

  return (
    <section className="pt-20 pb-10 bg-white text-slate-900 text-center">
      <div className="mx-auto max-w-7xl px-6 md:px-8 space-y-10">

        {/* Title Block */}
        <div className="space-y-5 max-w-3xl mx-auto scroll-section">
          <span className="text-xs font-semibold text-muted-foreground uppercase tracking-widest block">
            Blog
          </span>
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-primary leading-tight">
            Insights That Help You Deliver <br />Better Care
          </h1>
          <p className="text-sm md:text-base text-slate-500 leading-relaxed max-w-2xl mx-auto">
            Practical insights, expert advice, and industry news to help care workers stay compliant, relieve workloads, and support their teams.
          </p>
        </div>

        {/* Search Bar */}
        <div className="max-w-md mx-auto relative flex items-center bg-white border border-slate-200 shadow-sm rounded-full overflow-hidden p-1.5 focus-within:border-primary/50 transition-colors scroll-section">
          <div className="pl-4 text-slate-400">
            <Search className="h-5 w-5" />
          </div>
          <input
            type="text"
            placeholder="Search article"
            className="w-full bg-transparent border-0 px-3 py-2 text-sm text-slate-800 placeholder-slate-400 focus:outline-none focus:ring-0"
          />
          <button className="bg-primary hover:bg-primary/95 text-white font-bold text-sm rounded-full px-6 py-2 transition-colors">
            Search
          </button>
        </div>

        {/* Categories Pills */}
        <div className="flex flex-wrap items-center justify-center gap-3 pt-4 max-w-4xl mx-auto scroll-section">
          {categories.map((cat) => (
            <button
              key={cat.name}
              onClick={() => setActiveTab(cat.name)}
              className={`rounded-full px-5 py-2 text-xs font-semibold border transition-all duration-300 ${activeTab === cat.name
                  ? "bg-primary border-primary text-white shadow-sm"
                  : "bg-slate-50 border-slate-200/80 text-slate-500 hover:bg-slate-100 hover:text-slate-700"
                }`}
            >
              {cat.name}
            </button>
          ))}
        </div>

      </div>
    </section>
  )
}

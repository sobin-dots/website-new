'use client'

import * as React from "react"
import { ChevronDown } from "lucide-react"

const faqItems = [
  {
    question: "What is Cantra?",
    answer: "Yes. The platform helps maintain accurate records, track audits, and support regulatory compliance requirements."
  },
  {
    question: "Who is Cantra designed for?",
    answer: "Cantra is designed for adult social care providers, care home managers, support workers, and clinical team leads seeking to digitise care operations."
  },
  {
    question: "Can I access Cantra on mobile devices?",
    answer: "Yes! Cantra is fully responsive and accessible via web browsers on desktop, laptop, tablet, and mobile devices."
  },
  {
    question: "Can Cantra help with compliance?",
    answer: "Yes. Cantra generates CQC-aligned reports, tracks assessments, and automatically generates compliance audit trails."
  },
  {
    question: "Can Cantra help with compliance?",
    answer: "Yes. The platform has pre-built CQC audit dashboards that help managers instantly compile compliance evidence for inspection reviews."
  }
]

export function Faq() {
  const [openIndex, setOpenIndex] = React.useState<number | null>(0)

  const toggleItem = (idx: number) => {
    setOpenIndex(openIndex === idx ? null : idx)
  }

  return (
    <section className="py-24 bg-white text-slate-900 ">
      <div className="mx-auto max-w-4xl px-6 md:px-8">

        {/* Header Block */}
        <div className="text-center max-w-3xl mx-auto space-y-5 mb-16">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-primary">
            Frequently Asked Questions
          </h2>
          <p className="text-sm md:text-base text-slate-500 leading-relaxed max-w-2xl mx-auto">
            Cantra helps adult social care providers to manage care plans, medication records, assessments, incidents, compliance, and reporting - all from a single platform.
          </p>
        </div>

        {/* Accordion Group */}
        <div className="space-y-4">
          {faqItems.map((item, idx) => {
            const isOpen = openIndex === idx
            return (
              <div
                key={idx}
                className="rounded-2xl bg-[#F4F6F6] overflow-hidden border border-[#EBEFEF]/30"
              >
                {/* Accordion Trigger */}
                <button
                  onClick={() => toggleItem(idx)}
                  className="w-full flex items-center justify-between p-6 text-left font-bold text-base md:text-lg text-primary hover:bg-[#EBEFEF]/30 transition-colors"
                >
                  <span>{item.question}</span>
                  <ChevronDown
                    className={`h-5 w-5 text-primary transition-transform duration-300 ${isOpen ? "rotate-180" : ""
                      }`}
                  />
                </button>

                {/* Accordion Content */}
                <div
                  className={`transition-all duration-300 ease-in-out overflow-hidden ${isOpen ? "max-h-40" : "max-h-0"
                    }`}
                >
                  <div className="p-6 text-sm text-slate-600 leading-relaxed">
                    {item.answer}
                  </div>
                </div>
              </div>
            )
          })}
        </div>

      </div>
    </section>
  )
}

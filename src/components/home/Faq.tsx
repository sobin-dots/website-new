'use client'

import * as React from "react"
import { ChevronDown } from "lucide-react"

const faqItems = [
  {
    question: "What is Cantra, and who is it designed for?",
    answer: "Cantra is an all-in-one care management platform built for UK care providers. It helps residential care homes, nursing homes, and mental health care homes streamline care delivery, medication management, compliance, staffing, and day-to-day operations from a single platform."
  },
  {
    question: "Does Cantra support electronic Medication Administration (eMAR)?",
    answer: "Yes. Cantra includes a comprehensive eMAR solution that enables digital medication administration, PRN management, medication instructions, smart alerts, and stock control. It helps reduce medication errors, improve accountability, and maintain accurate medication records."
  },
  {
    question: "Can Cantra support externally created care plans?",
    answer: "Absolutely. Cantra is designed to work with care plans created through external assessments or clinical professionals. Your team can review, personalise, update, and use those care plans to deliver consistent, person-centred care while maintaining a complete history of changes and observations."
  },
  {
    question: "How does Cantra help with CQC compliance?",
    answer: "Cantra provides digital care records, audit trails, incident reporting, medication documentation, observations, and compliance workflows that help care providers demonstrate safe, effective, and well-governed care during CQC inspections."
  },
  {
    question: "Is Cantra suitable for multi-site care organisations?",
    answer: "Yes. Whether you manage a single care home or multiple locations, Cantra provides centralised oversight with site-specific management, real-time reporting, and standardised workflows across your organisation."
  },
  {
    question: "Can staff access Cantra on mobile devices?",
    answer: "Yes. Care teams can securely access Cantra on mobile phones, tablets, and desktop devices, making it easy to record care, complete medication rounds, update observations, and respond to incidents wherever they are."
  },
  {
    question: "How secure is resident and care data in Cantra?",
    answer: "Security is built into every layer of Cantra. The platform uses encrypted data storage, secure authentication, role-based permissions, and comprehensive audit logs to help protect sensitive resident information and support regulatory compliance."
  },
  {
    question: "How quickly can we get started with Cantra?",
    answer: "Our onboarding team works closely with you to configure your organisation, migrate relevant data, and train your staff. We aim to make implementation straightforward so your team can begin using Cantra with confidence and minimal disruption."
  }
]

export function Faq() {
  const [openIndex, setOpenIndex] = React.useState<number | null>(0)

  const toggleItem = (idx: number) => {
    setOpenIndex(openIndex === idx ? null : idx)
  }

  return (
    <section className="py-20 md:py-24 bg-white text-slate-900">
      <div className="mx-auto max-w-4xl px-6 md:px-8">

        {/* Header Block */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-14">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-primary font-sans">
            Frequently Asked Questions
          </h2>
          <p className="text-xs md:text-sm text-slate-500 leading-relaxed max-w-2xl mx-auto">
            Cantra helps adult social care providers to manage care plans, medication records, assessments, incidents, compliance, and reporting - all from a single platform.
          </p>
        </div>

        {/* Outer Card Container */}
        <div className="rounded-[32px] bg-[#FCFAF6] p-6 sm:p-8 md:p-10 border border-slate-200/60 shadow-xs">
          <div className="divide-y divide-slate-200/80">
            {faqItems.map((item, idx) => {
              const isOpen = openIndex === idx
              return (
                <div key={idx} className="py-5 first:pt-0 last:pb-0">
                  {/* Accordion Trigger */}
                  <button
                    onClick={() => toggleItem(idx)}
                    className="w-full flex items-center justify-between gap-4 text-left py-2 focus:outline-none group"
                  >
                    <span className="font-bold text-sm md:text-base text-slate-800 group-hover:text-primary transition-colors font-sans">
                      {item.question}
                    </span>
                    <ChevronDown
                      className={`h-5 w-5 text-slate-600 shrink-0 transition-transform duration-300 ${
                        isOpen ? "rotate-180" : ""
                      }`}
                    />
                  </button>

                  {/* Accordion Content */}
                  {isOpen && (
                    <div className="pt-3 pb-2 text-xs md:text-sm text-slate-500 leading-relaxed font-sans animate-in fade-in duration-200">
                      {item.answer}
                    </div>
                  )}
                </div>
              )
            })}
          </div>
        </div>

      </div>
    </section>
  )
}

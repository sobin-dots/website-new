'use client'

import * as React from "react"
import Image from "next/image"
import { MapPin, Clock, Phone, Mail } from "lucide-react"

export function ContactInfo() {
  return (
    <section className="py-20 bg-white text-slate-900">
      <div className="mx-auto max-w-7xl px-6 md:px-8">
        
        {/* 2-Column Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Office Location Map (6 columns) */}
          <div className="lg:col-span-6 relative w-full aspect-[1.5] rounded-3xl overflow-hidden shadow-sm animate-in fade-in slide-in-from-left-4 duration-500 scroll-section">
            <Image
              src="/images/home-page/visit-or-contact-us.png"
              alt="Office location map - London England United Kingdom"
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover object-center"
            />
          </div>

          {/* Right Column: Contact Details Grid (6 columns) */}
          <div className="lg:col-span-6 space-y-8 lg:pl-4 animate-in fade-in slide-in-from-right-4 duration-500 scroll-section">
            
            <h2 className="text-3xl font-bold tracking-tight text-primary leading-tight font-sans">
              Visit Or Contact Us
            </h2>
            
            {/* Info Grid - 2x2 layout */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
              
              {/* Item 1: Office Address */}
              <div className="flex items-start gap-3">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-slate-50 text-primary border border-slate-100">
                  <MapPin className="h-5 w-5" />
                </div>
                <div>
                  <h4 className="text-xs font-bold text-primary tracking-wide uppercase">Office</h4>
                  <p className="text-xs text-slate-500 mt-1 leading-relaxed">
                    Cantra Care Ltd.,<br />
                    London, England, United Kingdom
                  </p>
                </div>
              </div>

              {/* Item 2: Business Hours */}
              <div className="flex items-start gap-3">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-slate-50 text-primary border border-slate-100">
                  <Clock className="h-5 w-5" />
                </div>
                <div>
                  <h4 className="text-xs font-bold text-primary tracking-wide uppercase">Business Hours</h4>
                  <p className="text-xs text-slate-500 mt-1 leading-relaxed">
                    Monday - Friday:<br />
                    09:00 AM - 05:00 PM
                  </p>
                </div>
              </div>

              {/* Item 3: Phone */}
              <div className="flex items-start gap-3">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-slate-50 text-primary border border-slate-100">
                  <Phone className="h-5 w-5" />
                </div>
                <div>
                  <h4 className="text-xs font-bold text-primary tracking-wide uppercase">Phone</h4>
                  <p className="text-xs text-slate-500 mt-1">
                    <a href="tel:+442073460250" className="hover:text-primary hover:underline transition-colors">
                      +44 2073460250
                    </a>
                  </p>
                </div>
              </div>

              {/* Item 4: Email */}
              <div className="flex items-start gap-3">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-slate-50 text-primary border border-slate-100">
                  <Mail className="h-5 w-5" />
                </div>
                <div>
                  <h4 className="text-xs font-bold text-primary tracking-wide uppercase">Email</h4>
                  <p className="text-xs text-slate-500 mt-1">
                    <a href="mailto:Hello@Cantra.com" className="hover:text-primary hover:underline transition-colors">
                      Hello@Cantra.com
                    </a>
                  </p>
                </div>
              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
  )
}

'use client'

import * as React from "react"
import Link from "next/link"
import { 
  ArrowUpRight, 
  ArrowRight,
  CheckCircle2, 
  Lock, 
  Globe, 
  Sparkles,
  Heart,
  FileText,
  Calendar,
  Activity,
  Plus
} from "lucide-react"
import { Button } from "@/components/ui/button"

export default function AssessmentCarePlanningPage() {
  const [activeScreen, setActiveScreen] = React.useState<'desktop' | 'tablet' | 'mobile'>('desktop')

  return (
    <div className="min-h-screen py-16 md:py-24 bg-gradient-to-b from-secondary/20 via-background to-background">
      <div className="mx-auto max-w-7xl px-6 md:px-8">
        
        {/* Breadcrumb */}
        <div className="flex items-center gap-2 text-xs font-semibold text-muted-foreground uppercase tracking-widest mb-12 animate-in fade-in duration-300">
          <Link href="/" className="hover:text-primary transition-colors">Home</Link>
          <span>/</span>
          <span className="text-accent">Features</span>
          <span>/</span>
          <span className="text-primary font-bold">Assessment & Care Planning</span>
        </div>

        {/* Top Section: Dashboard Device Preview Mockup (matches Figma mockup placement) */}
        <div className="space-y-6 mb-20 animate-in fade-in slide-in-from-top-4 duration-500">
          {/* View Switchers */}
          <div className="flex justify-center gap-2 border-b border-primary/5 pb-4">
            {['desktop', 'tablet', 'mobile'].map((mode) => (
              <button
                key={mode}
                onClick={() => setActiveScreen(mode as any)}
                className={`text-xs px-4 py-2 rounded-full font-semibold border transition-all duration-250 capitalize ${
                  activeScreen === mode 
                    ? 'bg-[#3C5D58] text-white border-[#3C5D58] shadow-sm' 
                    : 'bg-white text-muted-foreground border-border hover:bg-secondary/60 hover:text-primary'
                }`}
              >
                {mode} View
              </button>
            ))}
          </div>

          {/* Screen Container */}
          <div className="relative mx-auto w-full flex items-center justify-center pt-4">
            
            {/* Desktop View */}
            {activeScreen === 'desktop' && (
              <div className="w-full max-w-[800px] rounded-2xl bg-slate-900 p-4 shadow-2xl ring-1 ring-slate-800 animate-in zoom-in-98 duration-300">
                <div className="flex items-center justify-between pb-3.5 border-b border-slate-800/80 px-1">
                  <div className="flex items-center gap-1.5">
                    <div className="h-3 w-3 rounded-full bg-rose-500" />
                    <div className="h-3 w-3 rounded-full bg-amber-500" />
                    <div className="h-3 w-3 rounded-full bg-emerald-500" />
                  </div>
                  <div className="text-[10px] text-slate-500 font-mono">cantra-desktop-shell.com</div>
                  <div className="w-12" />
                </div>

                {/* Desktop Content App */}
                <div className="bg-slate-950 rounded-xl p-4 md:p-6 mt-4 text-slate-100 grid grid-cols-1 md:grid-cols-12 gap-6">
                  {/* Left Sidebar */}
                  <div className="col-span-12 md:col-span-3 border-b md:border-b-0 md:border-r border-slate-850 pb-4 md:pb-0 md:pr-4 space-y-4">
                    <div className="flex items-center gap-1.5 text-white font-bold text-sm">
                      <Heart className="h-4 w-4 fill-accent text-accent" /> Cantra
                    </div>
                    <div className="space-y-2 pt-2">
                      <div className="text-[10px] bg-[#3C5D58]/20 text-[#DDEAE6] p-2 rounded-lg font-semibold flex items-center gap-2 border border-[#3C5D58]/20">
                        <FileText className="h-3.5 w-3.5" /> Care Plans
                      </div>
                      <div className="text-[10px] text-slate-400 p-2 rounded-lg font-medium flex items-center gap-2 hover:bg-slate-900 transition-colors">
                        <Calendar className="h-3.5 w-3.5" /> Rotas
                      </div>
                      <div className="text-[10px] text-slate-400 p-2 rounded-lg font-medium flex items-center gap-2 hover:bg-slate-900 transition-colors">
                        <Activity className="h-3.5 w-3.5" /> Alerts
                      </div>
                    </div>
                  </div>

                  {/* Right Panel Main Dashboard */}
                  <div className="col-span-12 md:col-span-9 space-y-4 md:pl-2">
                    <div className="flex items-center justify-between pb-2 border-b border-slate-850">
                      <h4 className="text-xs font-bold text-white">Resident Assessments</h4>
                      <button className="flex items-center gap-1 text-[9px] bg-accent text-white px-2 py-1 rounded-md font-bold">
                        <Plus className="h-3 w-3" /> New Assessment
                      </button>
                    </div>

                    <div className="space-y-3.5">
                      <div className="bg-slate-900/80 border border-slate-800 p-3.5 rounded-xl flex items-center justify-between gap-2">
                        <div>
                          <div className="text-xs font-bold text-white">Vulnerability & Fall Risk</div>
                          <div className="text-[9px] text-slate-400 mt-0.5">Assigned to: Eleanor Vance • Priority: High</div>
                        </div>
                        <span className="text-[9px] bg-red-500/10 text-red-400 px-2 py-0.5 rounded-full font-bold border border-red-500/15 shrink-0">CQC Audit Due</span>
                      </div>

                      <div className="bg-slate-900/80 border border-slate-800 p-3.5 rounded-xl flex items-center justify-between gap-2">
                        <div>
                          <div className="text-xs font-bold text-white">Nutrition & Hydration Assessment</div>
                          <div className="text-[9px] text-slate-400 mt-0.5">Assigned to: Mable Vance • Priority: Medium</div>
                        </div>
                        <span className="text-[9px] bg-emerald-500/10 text-emerald-400 px-2 py-0.5 rounded-full font-bold border border-emerald-500/15 shrink-0">Active</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* Tablet View */}
            {activeScreen === 'tablet' && (
              <div className="w-full max-w-[450px] rounded-2xl bg-slate-900 p-4 shadow-2xl ring-1 ring-slate-800 animate-in zoom-in-98 duration-300">
                <div className="flex items-center justify-between pb-2 border-b border-slate-850 px-1">
                  <div className="w-3 h-3 rounded-full bg-slate-800" />
                  <div className="text-[9px] text-slate-500 font-mono">cantra-tablet-shell.com</div>
                  <div className="w-3 h-3 rounded-full bg-slate-800" />
                </div>

                <div className="bg-slate-950 rounded-xl p-4 mt-3 text-slate-100 space-y-4">
                  <div className="flex items-center justify-between">
                    <h4 className="text-sm font-bold text-white">Care Plan Actions</h4>
                    <span className="text-[9px] text-slate-400">Sync: OK</span>
                  </div>

                  <div className="grid grid-cols-2 gap-3">
                    <div className="bg-slate-900 border border-slate-800 rounded-xl p-3 text-center">
                      <div className="text-lg font-extrabold text-white">24</div>
                      <div className="text-[9px] text-slate-400 uppercase tracking-wider font-semibold mt-1">Caretakers Active</div>
                    </div>
                    <div className="bg-slate-900 border border-slate-800 rounded-xl p-3 text-center">
                      <div className="text-lg font-extrabold text-[#C0714F]">98%</div>
                      <div className="text-[9px] text-slate-400 uppercase tracking-wider font-semibold mt-1">CQC Readiness</div>
                    </div>
                  </div>

                  <div className="bg-slate-900/60 border border-slate-800/60 rounded-xl p-3 space-y-2">
                    <span className="text-[9px] text-slate-400 font-bold block">Live Roster Shift Logs</span>
                    <div className="text-[11px] flex justify-between">
                      <span>● Nurse Alice Mercer</span>
                      <span className="text-slate-500">Checked In</span>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* Mobile View */}
            {activeScreen === 'mobile' && (
              <div className="w-full max-w-[300px] rounded-[36px] bg-slate-900 p-4 shadow-2xl ring-1 ring-slate-800 border-4 border-slate-950 animate-in zoom-in-98 duration-300">
                <div className="mx-auto h-4 w-28 rounded-full bg-slate-950 mb-3" />
                
                <div className="bg-slate-950 rounded-[28px] p-4 text-slate-100 space-y-4 overflow-hidden">
                  <div className="flex items-center justify-between">
                    <Heart className="h-4 w-4 fill-accent text-accent" />
                    <span className="text-[10px] font-bold text-white bg-slate-900 px-2 py-0.5 rounded-full">4G Live</span>
                  </div>

                  <div className="space-y-1">
                    <h4 className="text-xs font-bold text-white">Active Shift Rota</h4>
                    <p className="text-[9px] text-slate-400">Carehouse South Branch</p>
                  </div>

                  <div className="bg-slate-900 border border-slate-800 rounded-xl p-3 space-y-2">
                    <div className="text-[10px] font-semibold flex items-center justify-between">
                      <span>Eleanor Vance</span>
                      <span className="text-red-400 font-bold">12:00 Meds</span>
                    </div>
                    <div className="text-[10px] font-semibold flex items-center justify-between">
                      <span>Arthur Pendelton</span>
                      <span className="text-emerald-400 font-bold font-mono">Completed</span>
                    </div>
                  </div>
                </div>
              </div>
            )}

          </div>
        </div>

        {/* Bottom Section: Details and Checklist Columns (matches Figma page flow) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start pt-12 border-t border-primary/5">
          
          {/* Left Details block (7 columns) */}
          <div className="lg:col-span-7 space-y-6 animate-in fade-in slide-in-from-left-4 duration-500">
            <div className="space-y-3">
              <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-[#3C5D58] font-sans leading-tight">
                Assessment & Care Planning
              </h1>
              <h2 className="text-xl font-bold text-[#C0714F] font-serif italic leading-snug">
                Person-Centred Assessments & Care Planning
              </h2>
            </div>

            <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
              Create comprehensive digital assessments and personalised care plans that evolve with every resident's needs. Record outcomes, schedule reviews, and ensure every member of your team has access to accurate, up-to-date care information from a single platform.
            </p>
          </div>

          {/* Right Checklist and Buttons block (5 columns) */}
          <div className="lg:col-span-5 space-y-8 animate-in fade-in slide-in-from-right-4 duration-500">
            
            {/* Checklist items with customized icons */}
            <div className="grid gap-5">
              <div className="flex items-start gap-4">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-emerald-50 text-emerald-600">
                  <CheckCircle2 className="h-5 w-5" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-[#3C5D58]">Compliant</h4>
                  <p className="text-xs text-muted-foreground mt-0.5">Industry-standard compliance templates.</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-blue-50 text-blue-600">
                  <Lock className="h-5 w-5" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-[#3C5D58]">Secure</h4>
                  <p className="text-xs text-muted-foreground mt-0.5">End-to-end data encryption protocols.</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-purple-50 text-purple-600">
                  <Globe className="h-5 w-5" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-[#3C5D58]">Accessible</h4>
                  <p className="text-xs text-muted-foreground mt-0.5">Anywhere, anytime mobile access.</p>
                </div>
              </div>
            </div>

            {/* CTAs matching Figma buttons precisely */}
            <div className="flex flex-wrap gap-4 pt-4 border-t border-primary/5">
              <Button variant="outline" size="lg" className="rounded-full border-[#3C5D58]/35 text-[#3C5D58] hover:bg-[#3C5D58]/5 font-semibold flex items-center gap-3 px-6 h-12">
                Start free trial
                <div className="flex h-6 w-6 items-center justify-center rounded-full bg-[#3C5D58] text-white">
                  <ArrowUpRight className="h-3.5 w-3.5" />
                </div>
              </Button>
              <Button variant="default" size="lg" className="rounded-full bg-[#3C5D58] hover:bg-[#3C5D58]/90 text-white font-semibold flex items-center gap-3 px-6 h-12">
                Book a Demo
                <div className="flex h-6 w-6 items-center justify-center rounded-full bg-white text-[#3C5D58]">
                  <ArrowUpRight className="h-3.5 w-3.5" />
                </div>
              </Button>
            </div>

          </div>

        </div>

      </div>
    </div>
  )
}

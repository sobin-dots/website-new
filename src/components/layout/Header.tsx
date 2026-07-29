'use client'

import * as React from "react"
import Link from "next/link"
import Image from "next/image"
import { usePathname } from "next/navigation"
import { Menu, X, ChevronDown } from "lucide-react"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { useGSAP } from "@gsap/react"

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger)
}

const navigation = [
  { name: "Home", href: "/" },
  {
    name: "Features",
    href: "#",
    dropdown: [
      { name: "Care Management", href: "/care-management", description: "Personalised care plans & digital assessments." },
      { name: "Medication Management e-MAR", href: "/e-mar", description: "Digitised medication administration & stock control." },
      { name: "Incident Management", href: "/incident-management", description: "Log, track & report care incidents." },
      { name: "CQC Compliance, Reporting & Analytics", href: "/cqc-compliance", description: "CQC-aligned dashboards & audits." },
      { name: "Staff Rota Management", href: "/staff-rota-management", description: "Personalised care plans & digital assessments." },
    ],
  },
  {
    name: "Insights",
    href: "#",
    dropdown: [
      { name: "Blog", href: "/blog", description: "Read our latest news, articles & insights." },
      { name: "Resources", href: "/resources", description: "Access free guides, checklists & templates." },
    ],
  },
  { name: "About", href: "/about" },
  { name: "Contact", href: "/contact" },
]

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = React.useState(false)
  const [activeDropdown, setActiveDropdown] = React.useState<string | null>(null)
  const [scrolled, setScrolled] = React.useState(false)
  const pathname = usePathname()
  const navRef = React.useRef<HTMLDivElement>(null)

  const isHome = pathname === '/'

  useGSAP(() => {
    if (!isHome) {
      setScrolled(true)
      return
    }

    setScrolled(false)

    const trigger = ScrollTrigger.create({
      start: 500,
      end: 99999,
      onToggle: (self) => {
        setScrolled(self.isActive)
      }
    })

    return () => {
      trigger.kill()
    }
  }, { dependencies: [isHome] })

  React.useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (navRef.current && !navRef.current.contains(event.target as Node)) {
        setActiveDropdown(null)
      }
    }
    document.addEventListener("mousedown", handleClickOutside)
    return () => document.removeEventListener("mousedown", handleClickOutside)
  }, [])

  const linkColorClass = isHome && !mobileMenuOpen
    ? "text-white hover:text-white"
    : "hover:text-primary"

  const activeLinkColorClass = isHome && !mobileMenuOpen
    ? "text-white font-semibold border-b-2 border-white pb-1"
    : "text-primary font-semibold border-b-2 border-primary pb-1"

  return (
    <header className={cn(
      "z-50 w-full font-body transition-[background-color,border-color,box-shadow] duration-300",
      isHome
        ? scrolled
          ? "sticky top-0 bg-primary shadow-md"
          : "absolute top-6 left-0 border-b border-transparent bg-transparent"
        : "sticky top-0 bg-white/95 backdrop-blur-md"
    )}>
      <div className="mx-auto flex h-16 md:h-24 max-w-[2000px] items-center justify-between px-5">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2 group">
          <Image
            src={isHome ? "/images/home-page/logo-secondary.svg" : "/images/home-page/logo-primary.svg"}
            alt="Cantra Logo"
            width={200}
            height={58}
            className="h-10 md:h-14 w-auto object-contain group-hover:opacity-90"
            style={{ imageRendering: '-webkit-optimize-contrast' }}
            priority
          />
        </Link>

        {/* Desktop Navigation */}
        <nav ref={navRef} className="hidden md:flex items-center gap-8 ml-auto mr-8">
          {navigation.map((item) => {
            const isDropdownOpen = activeDropdown === item.name
            return (
              <div key={item.name} className="relative">
                {item.dropdown ? (
                  <>
                    <button
                      onClick={() => setActiveDropdown(isDropdownOpen ? null : item.name)}
                      className={cn(
                        "flex items-center gap-1 text-base font-inter font-medium transition-colors py-2",
                        item.dropdown?.some(subItem => pathname === subItem.href) ? activeLinkColorClass : linkColorClass,
                        isDropdownOpen && (isHome ? "text-white" : "text-primary")
                      )}
                    >
                      {item.name}
                      <ChevronDown className={cn("h-4 w-4 transition-transform duration-200", isDropdownOpen && "rotate-180")} />
                    </button>

                    {/* Dropdown Menu */}
                    {isDropdownOpen && (
                      <div className="absolute left-1/2 top-full z-10 mt-3 w-[380px] -translate-x-1/2 rounded border border-slate-100 bg-white p-6 shadow-xl shadow-primary/5 ring-1 ring-black/5 animate-in fade-in slide-in-from-top-2 duration-200">
                        {/* Title and Divider */}
                        <div className="pb-3 border-b border-slate-200/60 mb-4">
                          <span className="text-base font-semibold text-slate-800 tracking-wide block">
                            {item.name === "Features" ? "Products" : "Insights"}
                          </span>
                        </div>

                        {/* Links List */}
                        <div className="flex flex-col gap-2">
                          {item.dropdown.map((subItem) => (
                            <Link
                              key={subItem.name}
                              href={subItem.href}
                              onClick={() => setActiveDropdown(null)}
                              className="group flex flex-col justify-center rounded py-1.5 px-3 hover:bg-slate-100 transition-colors"
                            >
                              <span className="text-base font-small text-slate-700 group-hover:text-primary transition-colors">
                                {subItem.name}
                              </span>
                              {subItem.description && (
                                <span className="text-xs text-slate-500 font-normal mt-0.5 leading-normal">
                                  {subItem.description}
                                </span>
                              )}
                            </Link>
                          ))}
                        </div>
                      </div>
                    )}
                  </>
                ) : (
                  <Link
                    href={item.href}
                    className={cn(
                      "text-base font-inter font-medium transition-colors py-2",
                      pathname === item.href ? activeLinkColorClass : linkColorClass
                    )}
                  >
                    {item.name}
                  </Link>
                )}
              </div>
            )
          })}
        </nav>

        {/* Action Button */}
        <div className="hidden md:flex items-center gap-4">
          <Button
            variant="default"
            size="default"
            className={cn(
              "font-semibold text-base px-7 rounded-full transition-all",
              isHome && !mobileMenuOpen
                ? scrolled
                  ? "bg-white hover:bg-slate-100 text-primary"
                  : "bg-primary hover:bg-primary/90 text-white"
                : "bg-primary text-primary-foreground hover:bg-primary/90"
            )}
          >
            Login
          </Button>
        </div>

        {/* Mobile menu button */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className={cn(
            "flex h-10 w-10 items-center justify-center rounded-full border transition-colors md:hidden",
            isHome && !mobileMenuOpen
              ? "border-white/20 text-white hover:bg-white/10"
              : "border-border text-primary hover:bg-secondary/60"
          )}
        >
          {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 top-16 md:top-20 z-45 h-[calc(100vh-4rem)] md:h-[calc(100vh-5rem)] w-full border-t border-border bg-background px-6 py-8 md:hidden animate-in fade-in slide-in-from-top-4 duration-300">
          <nav className="flex flex-col gap-6">
            {navigation.map((item) => (
              <div key={item.name} className="flex flex-col gap-2">
                {item.dropdown ? (
                  <>
                    <span className="text-lg font-semibold text-primary">{item.name}</span>
                    <div className="ml-4 flex flex-col gap-3 border-l border-border pl-4 mt-2">
                      {item.dropdown.map((subItem) => (
                        <Link
                          key={subItem.name}
                          href={subItem.href}
                          onClick={() => setMobileMenuOpen(false)}
                          className="text-base font-medium text-muted-foreground hover:text-primary transition-colors"
                        >
                          {subItem.name}
                        </Link>
                      ))}
                    </div>
                  </>
                ) : (
                  <Link
                    href={item.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className="text-lg font-medium text-muted-foreground hover:text-primary transition-colors"
                  >
                    {item.name}
                  </Link>
                )}
              </div>
            ))}
            <div className="mt-8 border-t border-border pt-6">
              <Button className="w-full font-semibold" size="lg">
                Login
              </Button>
            </div>
          </nav>
        </div>
      )}
    </header>
  )
}

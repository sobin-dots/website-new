import type { Metadata } from "next"
import { Lato, DM_Serif_Display } from "next/font/google"
import "./globals.css"
import { Header } from "@/components/layout/Header"
import { Footer } from "@/components/layout/Footer"

const sansFont = Lato({
  subsets: ["latin"],
  variable: "--font-lato",
  weight: ["300", "400", "700", "900"],
})

const serifFont = DM_Serif_Display({
  subsets: ["latin"],
  variable: "--font-dm-serif",
  weight: ["400"],
  style: ["normal", "italic"],
})

export const metadata: Metadata = {
  title: "Cantra - Care Management That Puts People First",
  description: "Cantra helps adult social care providers manage Care Plans, Medication Records, Assessments, Incidents, Compliance, and Reporting.",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${sansFont.variable} ${serifFont.variable} font-sans antialiased min-h-screen flex flex-col bg-background text-primary`}>
        <Header />
        <main className="flex-grow">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  )
}

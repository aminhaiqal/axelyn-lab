import { Hero } from "@/components/hero"
import { Intro } from "@/components/intro"
import { WhatWeDo } from "@/components/what-we-do"
import { CaseHighlights } from "@/components/case-highlights"
import { Process } from "@/components/process"
import { Pricing } from "@/components/pricing"
import { FinalCTA } from "@/components/final-cta"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <main className="min-h-screen">
      <Hero />
      <Intro />
      <WhatWeDo />
      <CaseHighlights />
      <Process />
      <Pricing />
      <FinalCTA />
      <Footer />
    </main>
  )
}

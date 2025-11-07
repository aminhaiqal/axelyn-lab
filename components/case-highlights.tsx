"use client"

import { useEffect, useRef } from "react"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"
import Link from "next/link"

const cases = [
  {
    title: "Bright Social Studio",
    description:
      "How a Kuala Lumpur agency cut 80% of reporting time with Axelyn’s automation — no code, no new tools.",
    href: "/case-studies/bright-social-studio",
  },
  {
    title: "ClientOps Flow",
    description: "Onboarding automation using Notion + Gmail + Sheets. 80% fewer follow-ups.",
    href: "#",
  },
  {
    title: "SupportBot",
    description: "WhatsApp FAQ bot handling 70% of client messages.",
    href: "#",
  },
]

export function CaseHighlights() {
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const cards = entry.target.querySelectorAll(".case-card")
            cards.forEach((card, index) => {
              setTimeout(() => {
                card.classList.add("animate-fade-in-up")
              }, index * 150)
            })
          }
        })
      },
      { threshold: 0.1 },
    )

    if (sectionRef.current) observer.observe(sectionRef.current)
    return () => observer.disconnect()
  }, [])

  return (
    <section ref={sectionRef} className="border-b border-border/50 py-24 sm:py-32 lg:py-40">
      <div className="mx-auto max-w-6xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-medium tracking-tight text-foreground sm:text-4xl lg:text-5xl">
            Precision in Action
          </h2>
        </div>

        <div className="mt-16 space-y-6">
          {cases.map((caseItem, index) => (
            <Link
              key={index}
              href={caseItem.href}
              className="block case-card group rounded-2xl border border-border bg-card p-8 transition-all hover:border-foreground/20 hover:shadow-sm lg:p-10"
            >
              <h3 className="text-2xl font-medium text-foreground flex items-center justify-between">
                {caseItem.title}
                <ArrowRight className="h-5 w-5 opacity-0 group-hover:opacity-100 transition-all group-hover:translate-x-1" />
              </h3>
              <p className="mt-4 text-lg leading-relaxed text-muted-foreground">
                {caseItem.description}
              </p>
            </Link>
          ))}
        </div>

        <div className="mt-12 text-center">
          <Button size="lg" variant="outline" className="group bg-transparent">
            Ask for a Walk-through
            <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
          </Button>
        </div>
      </div>
    </section>
  )
}

"use client"

import { useEffect, useRef } from "react"

const pricingBands = [
  {
    title: "Quick Wins",
    range: "From RM800",
    description:
      "Fast, focused automation or integration tasks that deliver instant results. Ideal for small teams starting to streamline workflows.",
  },
  {
    title: "System Builds",
    range: "From RM3,000",
    description:
      "End-to-end workflow design and system integrations that connect your tools into one seamless ecosystem.",
  },
  {
    title: "Retainers",
    range: "From RM500/month",
    description:
      "Ongoing optimization, monitoring, and tech support to keep your automations running smoothly as your business grows.",
  },
]

export function Pricing() {
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const cards = entry.target.querySelectorAll(".pricing-card")
            cards.forEach((card, index) => {
              setTimeout(() => {
                card.classList.add("animate-fade-in-up")
              }, index * 100)
            })
          }
        })
      },
      { threshold: 0.1 },
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  return (
    <section
      ref={sectionRef}
      className="border-b border-border/50 py-24 sm:py-32 lg:py-40"
    >
      <div className="mx-auto max-w-6xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-medium tracking-tight text-foreground sm:text-4xl lg:text-5xl">
            Project Models
          </h2>
        </div>

        <div className="mt-16 grid gap-6 sm:grid-cols-3 lg:gap-8">
          {pricingBands.map((band, index) => (
            <div
              key={index}
              className="pricing-card rounded-2xl border border-border bg-card p-8 transition-all hover:border-foreground/20 hover:shadow-sm"
            >
              <h3 className="text-2xl font-medium text-foreground">{band.title}</h3>
              <p className="mt-4 text-3xl font-medium text-foreground">{band.range}</p>
              <p className="mt-4 text-base leading-relaxed text-muted-foreground">
                {band.description}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <p className="text-sm text-muted-foreground">
            Final pricing depends on project scope after a free intro audit.
          </p>
        </div>
      </div>
    </section>
  )
}

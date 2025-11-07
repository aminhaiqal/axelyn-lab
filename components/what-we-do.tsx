"use client"

import { useEffect, useRef } from "react"
import { Zap, Link2, MessageSquare, BarChart3 } from "lucide-react"

const systems = [
  {
    icon: Zap,
    title: "Automation Systems",
    description: "Workflows that eliminate repetitive work and run on autopilot.",
  },
  {
    icon: Link2,
    title: "Integration Architecture",
    description: "Connect your tools so data flows exactly where it needs to go.",
  },
  {
    icon: MessageSquare,
    title: "Chat & Communication Systems",
    description: "Chatbots and messaging automation for support and operations.",
  },
  {
    icon: BarChart3,
    title: "Operational Intelligence",
    description: "Turn raw data into insights and automated reporting systems.",
  },
]

export function WhatWeDo() {
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const cards = entry.target.querySelectorAll(".system-card")
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
    <section ref={sectionRef} className="border-b border-border/50 py-24 sm:py-32 lg:py-40">
      <div className="mx-auto max-w-6xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-medium tracking-tight text-foreground sm:text-4xl lg:text-5xl">
            Systems We Build
          </h2>
        </div>

        <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:gap-8">
          {systems.map((system, index) => (
            <div
              key={index}
              className="system-card group relative rounded-2xl border border-border bg-card p-8 transition-all hover:border-foreground/20 hover:shadow-sm"
            >
              <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-muted">
                <system.icon className="h-6 w-6 text-foreground" />
              </div>
              <h3 className="text-xl font-medium text-foreground">{system.title}</h3>
              <p className="mt-3 text-base leading-relaxed text-muted-foreground">{system.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

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
    <section ref={sectionRef} className="py-24 sm:py-32 lg:py-40 bg-[#FFFFFF]">
      <div className="mx-auto max-w-6xl px-6 lg:px-8">
        {/* Section header */}
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-medium tracking-tight text-[#232627] sm:text-4xl lg:text-5xl">
            Systems We Build
          </h2>
          <p className="mt-4 text-lg text-[#2A2A25]">
            Reliable, precise, and engineered to scale — the systems that power modern teams.
          </p>
        </div>

        {/* System cards */}
        <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:gap-8">
          {systems.map((system, index) => (
            <div
              key={index}
              className="system-card group relative rounded-2xl bg-[#F3F3EE] p-8 transition-all hover:border-[#232627]/20 hover:shadow-lg"
            >
              <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-[#FF5C26] shadow-sm">
                <system.icon className="h-6 w-6 text-[#FFF]" />
              </div>
              <h3 className="text-xl font-medium text-[#232627]">{system.title}</h3>
              <p className="mt-3 text-base leading-relaxed text-[#2A2A25]">
                {system.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

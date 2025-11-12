"use client"

import { useEffect, useRef } from "react"
import { ArrowRight } from "lucide-react"
import Link from "next/link"

const cases = [
  {
    title: "Bright Social Studio",
    description:
      "How a Kuala Lumpur agency cut 80% of reporting time with Axelyn's automation — no code, no new tools.",
    href: "/case-studies/bright-social-studio",
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
    <section ref={sectionRef} className="border-b border-[#E8E8DE]/50 bg-[#F3F3EE] py-24 sm:py-32 lg:py-40">
      <div className="mx-auto max-w-6xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-medium tracking-tight text-[#232627] sm:text-4xl lg:text-5xl">
            Precision in Action
          </h2>
        </div>

        <div className="mt-16 space-y-6">
          {cases.map((caseItem, index) => (
            <Link
              key={index}
              href={caseItem.href}
              className="block case-card group rounded-2xl border border-[#E8E8DE] bg-white p-8 transition-all hover:border-[#FF5C26] hover:shadow-lg lg:p-10"
            >
              <h3 className="text-2xl font-medium text-[#232627] flex items-center justify-between">
                {caseItem.title}
                <ArrowRight className="h-5 w-5 text-[#FF5C26] opacity-0 group-hover:opacity-100 transition-all group-hover:translate-x-1" />
              </h3>
              <p className="mt-4 text-lg leading-relaxed text-[#2A2A25]/70">
                {caseItem.description}
              </p>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}

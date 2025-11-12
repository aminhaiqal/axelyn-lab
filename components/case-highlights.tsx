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
    <section ref={sectionRef} className="bg-[#FFFFFF] py-24 sm:py-32 lg:py-40">
      <div className="mx-auto max-w-6xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-medium tracking-tight text-[#232627] sm:text-4xl lg:text-5xl">
            Precision in Action
          </h2>
        </div>

        <div className="mt-16 flex justify-center">
          {cases.map((caseItem, index) => (
            <Link
              key={index}
              href={caseItem.href}
              className="case-card group relative rounded-3xl bg-[#FF5C26] p-10 transition-all hover:shadow-2xl max-w-[500px] w-full aspect-[1/1] flex flex-col justify-between"
            >
              <div>
                <h3 className="text-3xl font-semibold text-white flex items-center justify-between">
                  {caseItem.title}
                  <ArrowRight className="h-6 w-6 text-white opacity-0 group-hover:opacity-100 transition-all group-hover:translate-x-2" />
                </h3>
                <p className="mt-6 text-lg leading-relaxed text-white/90">
                  {caseItem.description}
                </p>
              </div>

              <div className="mt-6 text-center">
                <span className="inline-flex items-center justify-center bg-white text-[#FF5C26] font-medium px-6 py-3 rounded-full shadow-md transition-all group-hover:translate-y-[-2px] group-hover:shadow-lg">
                  View Case Study
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}

"use client"

import { useEffect, useRef } from "react"

const pricingBands = [
  {
    title: "Quick Wins",
    range: "From RM800",
    description:
      "Fast, focused automation or integration tasks that deliver instant results. Ideal for small teams.",
    highlights: ["No‑code automation", "Quick setup (< 1 week)", "Immediate ROI"],
    highlight: true,
  },
  {
    title: "System Builds",
    range: "From RM3,000",
    description:
      "End‑to-end workflow design and system integrations connecting your tools into one ecosystem.",
    highlights: ["Custom workflows", "Tool integration", "Full documentation"],
    highlight: false,
  },
  {
    title: "Retainers",
    range: "From RM500/month",
    description:
      "Ongoing optimization, monitoring, and tech support to keep automations running smoothly as your business grows.",
    highlights: ["Monthly check‑ins", "Alert & monitoring", "Continuous optimisation"],
    highlight: false,
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
              }, index * 150)
            })
          }
        })
      },
      { threshold: 0.2 }
    )

    if (sectionRef.current) observer.observe(sectionRef.current)
    return () => observer.disconnect()
  }, [])

  return (
    <section ref={sectionRef} className="bg-[#FFFFFF] py-24 sm:py-32 lg:py-40">
      <div className="mx-auto max-w-6xl px-6 lg:px-8 text-center">
        <h2 className="text-3xl font-semibold text-[#232627] sm:text-4xl lg:text-5xl">
          Project Models
        </h2>
        <p className="mt-4 text-lg text-[#2A2A25]/70">
          Choose the level that fits your team and goals.
        </p>

        <div className="mt-16 grid gap-8 sm:grid-cols-1 md:grid-cols-3">
          {pricingBands.map((band, idx) => (
            <div
              key={idx}
              className={`pricing-card group rounded-3xl p-8 transition-all shadow-lg flex flex-col justify-between ${
                band.highlight
                  ? "bg-[#FF5C26] text-white border-2 border-[#FF5C26] hover:shadow-xl"
                  : "bg-white text-[#232627] border border-[#E8E8DE] hover:shadow-md"
              }`}
            >
              <div>
                <h3 className={`text-2xl font-semibold ${band.highlight ? "text-white" : "text-[#232627]"}`}>
                  {band.title}
                </h3>
                <p className={`mt-2 text-3xl font-bold ${band.highlight ? "text-white" : "text-[#232627]"}`}>
                  {band.range}
                </p>
                <p className={`mt-4 text-base leading-relaxed ${band.highlight ? "text-white/90" : "text-[#2A2A25]/80"}`}>
                  {band.description}
                </p>

                {/* Highlights list */}
                <ul className="mt-6 space-y-2">
                  {band.highlights.map((item, i) => (
                    <li key={i} className={`flex items-center gap-2 text-sm font-medium ${band.highlight ? "text-white" : "text-[#2A2A25]"}`}>
                      <span className={`inline-block h-2 w-2 rounded-full ${band.highlight ? "bg-white" : "bg-[#232627]"}`} />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mt-6">
                <button className={`w-full py-3 px-6 rounded-full font-semibold transition-all ${
                  band.highlight
                    ? "bg-white text-[#FF5C26] hover:translate-y-[-2px] hover:shadow-xl"
                    : "bg-[#232627] text-white hover:translate-y-[-2px] hover:shadow-xl"
                }`}>
                  {band.highlight ? "Book a call" : "Book a call"}
                </button>
              </div>
            </div>
          ))}
        </div>

        <p className="mt-12 text-sm text-[#2A2A25]/60">
          Final pricing depends on project scope after a free intro audit.
        </p>
      </div>
    </section>
  )
}

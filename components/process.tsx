"use client"

import { useEffect, useRef, useState } from "react"
import { ArrowRight } from "lucide-react"

const steps = [
  {
    number: "1",
    title: "Intro & Audit",
    description: "15-minute call",
    detail: "We map your workflow and identify what's slowing you down",
  },
  {
    number: "2",
    title: "Build & Deliver",
    description: "1–7 days",
    detail: "Fast, focused implementation with zero disruption",
  },
  {
    number: "3",
    title: "Operate & Scale",
    description: "Optional retainer",
    detail: "Ongoing support as your systems grow",
  },
]

export function Process() {
  const sectionRef = useRef<HTMLElement>(null)
  const [isVisible, setIsVisible] = useState(false)
  const [hoveredStep, setHoveredStep] = useState<number | null>(null)
  const stepsRef = useRef<HTMLDivElement[]>([])

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !isVisible) {
            setIsVisible(true)
          }
        })
      },
      { threshold: 0.2 }
    )

    if (sectionRef.current) observer.observe(sectionRef.current)
    return () => observer.disconnect()
  }, [isVisible])

  return (
    <section
      ref={sectionRef}
      className="relative py-24 sm:py-32 lg:py-40 bg-gradient-to-b from-[#FFFFFF] via-[#E8E8DE]/20 to-[#FFFFFF] overflow-hidden"
    >
      <div className="relative mx-auto max-w-4xl px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto">
          <h2
            className={`text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-tight text-[#232627] transition-all duration-1000 ease-out ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            How We Work
          </h2>
          <p
            className={`mt-4 text-lg text-[#2A2A25]/80 transition-all duration-1000 ease-out delay-200 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            Three steps. No complexity. Just results.
          </p>
        </div>

        {/* Vertical Steps */}
        <div className="mt-16 relative flex flex-col gap-12">
          {steps.map((step, index) => (
            <div
              key={index}
              ref={(el) => {
                if (el) stepsRef.current[index] = el
              }}
              className={`relative flex items-start gap-6 transition-all duration-700 ease-out ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
              }`}
              style={{ transitionDelay: `${200 + index * 150}ms` }}
              onMouseEnter={() => setHoveredStep(index)}
              onMouseLeave={() => setHoveredStep(null)}
            >
              {/* Number badge */}
              <div className="relative flex-shrink-0">
                <div
                  className={`flex h-14 w-14 items-center justify-center rounded-full font-semibold text-white text-xl transition-all duration-500 ${
                    hoveredStep === index
                      ? "bg-[#FF5C26] scale-110 shadow-lg"
                      : "bg-[#2A2A25]"
                  }`}
                >
                  {step.number}
                </div>
              </div>

              {/* Step Card */}
              <div className="flex-1 bg-white rounded-3xl border border-[#E8E8DE] p-6 shadow-sm transition-all duration-500 hover:shadow-lg">
                <h3 className="text-xl font-semibold text-[#232627]">{step.title}</h3>
                <p className="mt-1 text-sm font-medium text-[#2A2A25]/70">{step.description}</p>
                <p className="mt-3 text-sm leading-relaxed text-[#2A2A25]/80">{step.detail}</p>
              </div>

              {/* Arrow connector - desktop */}
              {index < steps.length - 1 && (
                <div className="hidden sm:block absolute top-7 left-[72px] h-0 w-10">
                  <ArrowRight className="h-6 w-6 text-[#FF5C26] rotate-90" />
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Bottom Tagline */}
        <div
          className={`mt-12 text-center transition-all duration-1000 ease-out delay-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <p className="text-sm text-[#2A2A25]/70">
            Fast delivery. Clear process. Zero surprises.
          </p>
        </div>
      </div>

      {/* Optional Floating Dots */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(4)].map((_, i) => (
          <div
            key={i}
            className={`absolute w-2 h-2 rounded-full bg-[#FF5C26]/30 transition-all duration-[2000ms] ease-in-out ${
              isVisible ? "opacity-100" : "opacity-0"
            }`}
            style={{
              left: `${20 + i * 20}%`,
              top: `${25 + (i % 2) * 40}%`,
              animation: isVisible ? `float-slow ${5 + i * 0.8}s ease-in-out infinite` : "none",
              animationDelay: `${i * 0.3}s`,
            }}
          />
        ))}
      </div>

      <style jsx>{`
        @keyframes float-slow {
          0%, 100% {
            transform: translateY(0px) translateX(0px);
          }
          50% {
            transform: translateY(-15px) translateX(8px);
          }
        }
      `}</style>
    </section>
  )
}

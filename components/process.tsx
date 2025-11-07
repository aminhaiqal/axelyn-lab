"use client"

import { useEffect, useRef, useState } from "react"
import { ArrowRight } from "lucide-react"

const steps = [
  {
    number: "1",
    title: "Intro & Audit",
    description: "15-minute call",
    detail: "We map your workflow and identify what's slowing you down"
  },
  {
    number: "2",
    title: "Build & Deliver",
    description: "1–7 days",
    detail: "Fast, focused implementation with zero disruption"
  },
  {
    number: "3",
    title: "Operate & Scale",
    description: "Optional retainer",
    detail: "Ongoing support as your systems grow"
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

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [isVisible])

  return (
    <section 
      ref={sectionRef} 
      className="relative border-b border-zinc-200 py-24 sm:py-32 lg:py-40 bg-gradient-to-b from-white via-zinc-50/30 to-white overflow-hidden"
    >
      {/* Animated connecting line background */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div 
          className={`hidden sm:block h-px bg-gradient-to-r from-transparent via-zinc-300 to-transparent transition-all duration-1500 ease-out ${
            isVisible ? "w-[800px] opacity-100" : "w-0 opacity-0"
          }`}
          style={{ transitionDelay: "300ms" }}
        />
      </div>

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        {/* Section header */}
        <div className="mx-auto max-w-2xl text-center">
          <h2 
            className={`text-3xl font-semibold tracking-tight text-zinc-900 sm:text-4xl lg:text-5xl transition-all duration-1000 ease-out ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            How We Work
          </h2>
          <p 
            className={`mt-4 text-lg text-zinc-600 transition-all duration-1000 ease-out delay-200 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            Three steps. No complexity. Just results.
          </p>
        </div>

        {/* Process steps */}
        <div className="mt-20 grid gap-8 sm:grid-cols-3 relative">
          {steps.map((step, index) => (
            <div
              key={index}
              ref={(el) => {
                if (el) stepsRef.current[index] = el
              }}
              className={`relative group cursor-default transition-all duration-700 ease-out ${
                isVisible 
                  ? "opacity-100 translate-y-0" 
                  : "opacity-0 translate-y-12"
              }`}
              style={{ transitionDelay: `${400 + index * 200}ms` }}
              onMouseEnter={() => setHoveredStep(index)}
              onMouseLeave={() => setHoveredStep(null)}
            >
              {/* Card container */}
              <div className="relative h-full rounded-3xl border border-zinc-200 bg-white p-8 shadow-sm transition-all duration-500 ease-out group-hover:shadow-xl group-hover:border-zinc-300 group-hover:-translate-y-2">
                
                {/* Animated number badge */}
                <div className="relative inline-flex items-center justify-center">
                  <div 
                    className={`absolute inset-0 rounded-full bg-zinc-900 transition-all duration-500 ${
                      hoveredStep === index ? "scale-110 opacity-100" : "scale-100 opacity-100"
                    }`}
                  />
                  <div 
                    className={`absolute inset-0 rounded-full bg-zinc-900 blur-xl transition-all duration-500 ${
                      hoveredStep === index ? "scale-150 opacity-30" : "scale-0 opacity-0"
                    }`}
                  />
                  <div className="relative flex h-16 w-16 items-center justify-center rounded-full text-2xl font-semibold text-white">
                    {step.number}
                  </div>
                </div>

                {/* Content */}
                <h3 className="mt-6 text-xl font-semibold text-zinc-900 transition-colors duration-300 group-hover:text-zinc-800">
                  {step.title}
                </h3>
                
                <p className="mt-2 text-sm font-medium text-zinc-500">
                  {step.description}
                </p>
                
                <p 
                  className={`mt-4 text-sm leading-relaxed text-zinc-600 transition-all duration-500 ${
                    hoveredStep === index 
                      ? "opacity-100 translate-y-0" 
                      : "opacity-70 translate-y-1"
                  }`}
                >
                  {step.detail}
                </p>

                {/* Arrow connector - visible on desktop */}
                {index < steps.length - 1 && (
                  <div className="hidden sm:block absolute top-8 -right-4 z-10">
                    <ArrowRight 
                      className={`h-8 w-8 text-zinc-300 transition-all duration-700 ease-out ${
                        isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-4"
                      }`}
                      style={{ transitionDelay: `${600 + index * 200}ms` }}
                    />
                  </div>
                )}

                {/* Hover glow effect */}
                <div 
                  className={`absolute inset-0 rounded-3xl bg-gradient-to-br from-zinc-100/0 via-zinc-100/50 to-zinc-100/0 transition-opacity duration-500 pointer-events-none ${
                    hoveredStep === index ? "opacity-100" : "opacity-0"
                  }`}
                />
              </div>
            </div>
          ))}
        </div>

        {/* Timeline indicator - mobile only */}
        <div className="sm:hidden mt-8 flex justify-center gap-2">
          {steps.map((_, index) => (
            <div
              key={index}
              className={`h-1 rounded-full bg-zinc-900 transition-all duration-700 ease-out ${
                isVisible ? "w-12 opacity-100" : "w-0 opacity-0"
              }`}
              style={{ transitionDelay: `${400 + index * 200}ms` }}
            />
          ))}
        </div>

        {/* Bottom tagline */}
        <div 
          className={`mt-16 text-center transition-all duration-1000 ease-out delay-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <p className="text-sm font-medium text-zinc-500">
            Fast delivery. Clear process. Zero surprises.
          </p>
        </div>
      </div>

      {/* Floating accent dots */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(4)].map((_, i) => (
          <div
            key={i}
            className={`absolute w-2 h-2 rounded-full bg-zinc-200/60 transition-all duration-[2000ms] ease-in-out ${
              isVisible ? "opacity-100" : "opacity-0"
            }`}
            style={{
              left: `${20 + i * 20}%`,
              top: `${30 + (i % 2) * 40}%`,
              animation: isVisible ? `float-slow ${5 + i * 0.8}s ease-in-out infinite` : "none",
              animationDelay: `${i * 0.4}s`
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
            transform: translateY(-30px) translateX(15px);
          }
        }
      `}</style>
    </section>
  )
}
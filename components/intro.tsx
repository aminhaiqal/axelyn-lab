"use client"

import { useEffect, useRef, useState } from "react"

export function Intro() {
  const sectionRef = useRef<HTMLElement>(null)
  const [isVisible, setIsVisible] = useState(false)
  const wordsRef = useRef<HTMLSpanElement[]>([])

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !isVisible) {
            setIsVisible(true)
            
            // Stagger animation for each word
            wordsRef.current.forEach((word, index) => {
              if (word) {
                setTimeout(() => {
                  word.style.opacity = "1"
                  word.style.transform = "translateY(0)"
                }, index * 100)
              }
            })
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

  const headline = ["Independent.", "Focused.", "Precise."]

  return (
    <section 
      ref={sectionRef} 
      className="relative border-b border-zinc-200 py-24 sm:py-32 lg:py-40 overflow-hidden bg-white"
    >
      {/* Animated gradient orb - subtle background movement */}
      <div 
        className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-gradient-to-br from-zinc-100 via-zinc-50 to-transparent blur-3xl transition-all duration-[2000ms] ease-out ${
          isVisible ? "opacity-60 scale-100" : "opacity-0 scale-75"
        }`}
      />

      <div className="relative mx-auto max-w-6xl px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          {/* Animated headline with word-by-word reveal */}
          <h2 className="text-3xl font-semibold tracking-tight text-zinc-900 sm:text-4xl lg:text-5xl leading-tight">
            {headline.map((word, index) => (
              <span
                key={word}
                ref={(el) => {
                  if (el) wordsRef.current[index] = el
                }}
                className="inline-block opacity-0 translate-y-4 transition-all duration-700 ease-out mr-3"
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                {word}
              </span>
            ))}
          </h2>

          {/* Animated paragraph with fade + slide */}
          <p 
            className={`mt-8 text-lg leading-relaxed text-zinc-600 sm:text-xl transition-all duration-1000 ease-out delay-500 ${
              isVisible 
                ? "opacity-100 translate-y-0" 
                : "opacity-0 translate-y-6"
            }`}
          >
            We design reliable automation frameworks and integration architectures for teams that need results, not experiments.
          </p>

          {/* Animated accent line */}
          <div className="mt-8 flex justify-center">
            <div 
              className={`h-px bg-gradient-to-r from-transparent via-zinc-300 to-transparent transition-all duration-1000 ease-out delay-700 ${
                isVisible ? "w-48 opacity-100" : "w-0 opacity-0"
              }`}
            />
          </div>

          {/* Animated feature pills */}
          <div className="mt-12 flex flex-wrap items-center justify-center gap-3">
            {["Fast", "Precise", "Engineered to scale"].map((feature, index) => (
              <span
                key={feature}
                className={`inline-flex items-center rounded-full border border-zinc-200 bg-white/80 backdrop-blur-sm px-4 py-2 text-sm font-medium text-zinc-700 shadow-sm transition-all duration-700 ease-out ${
                  isVisible 
                    ? "opacity-100 translate-y-0 scale-100" 
                    : "opacity-0 translate-y-4 scale-95"
                }`}
                style={{ transitionDelay: `${900 + index * 100}ms` }}
              >
                {feature}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Floating particles effect - very subtle */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(6)].map((_, i) => (
          <div
            key={i}
            className={`absolute w-1 h-1 rounded-full bg-zinc-300/40 transition-all duration-[3000ms] ease-in-out ${
              isVisible ? "opacity-100" : "opacity-0"
            }`}
            style={{
              left: `${15 + i * 15}%`,
              top: `${20 + (i % 3) * 20}%`,
              animation: isVisible ? `float ${4 + i * 0.5}s ease-in-out infinite` : "none",
              animationDelay: `${i * 0.3}s`
            }}
          />
        ))}
      </div>

      <style jsx>{`
        @keyframes float {
          0%, 100% {
            transform: translateY(0px) translateX(0px);
          }
          33% {
            transform: translateY(-20px) translateX(10px);
          }
          66% {
            transform: translateY(-10px) translateX(-10px);
          }
        }
      `}</style>
    </section>
  )
}
"use client"

import { useEffect, useRef, useState } from "react"
import { Search, Zap, TrendingUp } from "lucide-react"

const steps = [
  {
    number: "1",
    title: "Intro & Audit",
    duration: "15 minutes",
    icon: Search,
    detail: "We learn your workflow, identify bottlenecks, and scope what's possible.",
    highlights: ["Map your workflow", "Identify bottlenecks", "Scope possibilities"]
  },
  {
    number: "2",
    title: "Build & Deliver",
    duration: "1–7 days",
    icon: Zap,
    detail: "We design and deploy your automation system. Fast, focused, functional.",
    highlights: ["Design system", "Deploy automation", "Test & verify"]
  },
  {
    number: "3",
    title: "Operate & Scale",
    duration: "Optional",
    icon: TrendingUp,
    detail: "Some clients want ongoing support as their systems grow. We offer retainers for maintenance, optimization, and expansion.",
    highlights: ["Ongoing maintenance", "System optimization", "Continuous expansion"]
  },
]

export function Process() {
  const sectionRef = useRef<HTMLElement>(null)
  const [isVisible, setIsVisible] = useState(false)
  const [activeStep, setActiveStep] = useState<number | null>(null)

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
      className="relative py-24 sm:py-32 bg-[#FFFFFF] overflow-hidden"
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 overflow-hidden opacity-30">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-[#FF5C26]/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-[#232627]/5 rounded-full blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-6xl px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-20">
          <h2
            className={`text-4xl sm:text-5xl font-bold text-[#232627] mb-4 transition-all duration-1000 ease-out ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            How We Work
          </h2>
          <p
            className={`text-xl text-[#2A2A25]/70 transition-all duration-1000 ease-out delay-200 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            No long-term contracts. No enterprise sales cycles. Just fast, focused execution.
          </p>
        </div>

        {/* Steps Grid */}
        <div className="grid md:grid-cols-3 gap-8 relative">
          {/* Connection Lines - Desktop */}
          <div className="hidden md:block absolute top-24 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-[#E8E8DE] to-transparent" />
          
          {steps.map((step, index) => {
            const Icon = step.icon
            const isActive = activeStep === index
            
            return (
              <div
                key={index}
                className={`relative transition-all duration-700 ease-out ${
                  isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
                }`}
                style={{ transitionDelay: `${300 + index * 200}ms` }}
                onMouseEnter={() => setActiveStep(index)}
                onMouseLeave={() => setActiveStep(null)}
              >
                {/* Card */}
                <div className={`relative bg-white rounded-3xl border-2 p-8 transition-all duration-500 h-full ${
                  isActive 
                    ? "border-[#FF5C26] shadow-2xl transform scale-105" 
                    : "border-[#E8E8DE] shadow-lg hover:shadow-xl"
                }`}>
                  
                  {/* Step Number Badge */}
                  <div className="absolute -top-6 left-1/2 transform -translate-x-1/2">
                    <div className={`w-12 h-12 rounded-full flex items-center justify-center font-bold text-xl transition-all duration-500 ${
                      isActive 
                        ? "bg-[#FF5C26] text-white scale-110 shadow-lg" 
                        : "bg-[#232627] text-white"
                    }`}>
                      {step.number}
                    </div>
                  </div>

                  {/* Icon */}
                  <div className="flex justify-center mt-8 mb-6">
                    <div className={`p-4 rounded-2xl transition-all duration-500 ${
                      isActive 
                        ? "bg-[#FF5C26]/10 scale-110" 
                        : "bg-[#E8E8DE]"
                    }`}>
                      <Icon className={`w-8 h-8 transition-colors duration-500 ${
                        isActive ? "text-[#FF5C26]" : "text-[#232627]"
                      }`} />
                    </div>
                  </div>

                  {/* Content */}
                  <div className="text-center">
                    <h3 className="text-2xl font-bold text-[#232627] mb-2">
                      {step.title}
                    </h3>
                    <p className="text-sm font-semibold text-[#FF5C26] mb-4">
                      {step.duration}
                    </p>
                    <p className="text-sm text-[#2A2A25]/80 leading-relaxed mb-6">
                      {step.detail}
                    </p>

                    {/* Highlights */}
                    <div className="space-y-2">
                      {step.highlights.map((highlight, i) => (
                        <div 
                          key={i}
                          className="flex items-center justify-center gap-2 text-xs text-[#2A2A25]/70"
                        >
                          <span className={`w-1.5 h-1.5 rounded-full transition-colors duration-500 ${
                            isActive ? "bg-[#FF5C26]" : "bg-[#232627]"
                          }`} />
                          <span>{highlight}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Decorative Corner */}
                  <div className={`absolute bottom-0 right-0 w-20 h-20 transition-opacity duration-500 ${
                    isActive ? "opacity-100" : "opacity-0"
                  }`}>
                    <div className="absolute bottom-0 right-0 w-full h-full bg-gradient-to-tl from-[#FF5C26]/10 to-transparent rounded-tl-full" />
                  </div>
                </div>
              </div>
            )
          })}
        </div>

        {/* Bottom CTA */}
        <div
          className={`mt-16 text-center transition-all duration-1000 ease-out delay-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <div className="inline-block bg-[#E8E8DE] rounded-full px-8 py-4">
            <p className="text-base font-medium text-[#232627]">
              Most projects go live in <span className="text-[#FF5C26] font-bold">1–7 days</span>. Not weeks. Not months.
            </p>
          </div>
        </div>
      </div>

      {/* Animated Dots */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(6)].map((_, i) => (
          <div
            key={i}
            className={`absolute w-2 h-2 rounded-full bg-[#FF5C26]/20 transition-all duration-[2000ms] ease-in-out ${
              isVisible ? "opacity-100" : "opacity-0"
            }`}
            style={{
              left: `${15 + i * 15}%`,
              top: `${20 + (i % 3) * 30}%`,
              animation: isVisible ? `float-slow ${4 + i * 0.5}s ease-in-out infinite` : "none",
              animationDelay: `${i * 0.4}s`,
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
            transform: translateY(-20px) translateX(10px);
          }
        }
      `}</style>
    </section>
  )
}
"use client"

import { useEffect, useRef, useState } from "react"
import { Check, X, Sparkles } from "lucide-react"

export function Comparison() {
  const sectionRef = useRef<HTMLElement>(null)
  const [isVisible, setIsVisible] = useState(false)

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

  const comparisons = [
    {
      aspect: "Reliability",
      freelancer: "Built once, hope it works",
      axelyn: "Monitored, tested & improved continuously"
    },
    {
      aspect: "Support",
      freelancer: "Disappears when issues arise",
      axelyn: "Local support & ongoing maintenance"
    },
    {
      aspect: "Documentation",
      freelancer: "Minimal or no handover",
      axelyn: "Complete documentation & training"
    },
    {
      aspect: "Longevity",
      freelancer: "Workflows degrade over time",
      axelyn: "Lasting reliability with monitoring"
    },
    {
      aspect: "Availability",
      freelancer: "Time zone delays, slow responses",
      axelyn: "Same-day support in your timezone"
    }
  ]

  return (
    <section ref={sectionRef} className="py-16 sm:py-24 bg-gradient-to-b from-white to-gray-50">
      <div className="container mx-auto px-4 sm:px-6 max-w-6xl">
        
        {/* Header */}
        <div className={`text-center mb-12 sm:mb-16 transition-all duration-1000 ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
        }`}>
          <div className="inline-block mb-4">
            <span className="inline-flex items-center gap-2 rounded-full bg-[#FF5C26]/10 border border-[#FF5C26]/30 px-4 py-2 text-sm font-semibold text-[#FF5C26]">
              <Sparkles className="w-4 h-4" />
              The Axelyn Difference
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 text-[#232627]">
            Not Your Average Freelancer
          </h2>
          <p className="text-lg sm:text-xl text-[#2A2A25]/70 max-w-2xl mx-auto px-4">
            We're not a freelancer on Upwork. Here's why that matters.
          </p>
        </div>

        {/* Desktop Table View */}
        <div className={`hidden lg:block transition-all duration-1000 delay-300 ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
        }`}>
          <div className="bg-white rounded-3xl shadow-2xl border-2 border-[#E8E8DE] relative">
            {/* Header */}
            <div className="grid grid-cols-3 bg-gradient-to-r from-[#E8E8DE] to-[#F5F5F0] border-b-2 border-[#E8E8DE]">
              <div className="p-6"></div>
              <div className="p-6 text-center bg-[#FF5C26] border-x-2 border-[#E8E8DE] relative">
                <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                  <span className="inline-block bg-[#232627] text-white text-xs font-bold px-4 py-1 rounded-full shadow-lg">
                    RECOMMENDED
                  </span>
                </div>
                <h3 className="font-bold text-xl text-white mt-2">Axelyn</h3>
              </div>
              <div className="p-6 text-center">
                <h3 className="font-semibold text-lg text-[#2A2A25]/60">Generic Freelancer</h3>
              </div>
            </div>

            {/* Comparison Rows */}
            {comparisons.map((item, index) => (
              <div
                key={index}
                className={`grid grid-cols-3 transition-all duration-500 hover:bg-gray-50 ${
                  index !== comparisons.length - 1 ? "border-b border-[#E8E8DE]" : ""
                }`}
              >
                <div className="p-6 font-bold text-[#232627] flex items-center text-lg">
                  {item.aspect}
                </div>

                {/* Axelyn Column */}
                <div className="p-6 bg-[#FF5C26]/5 border-x border-[#E8E8DE] flex items-start gap-3">
                  <div className="flex-shrink-0 w-6 h-6 rounded-full bg-green-100 flex items-center justify-center mt-0.5">
                    <Check className="w-4 h-4 text-green-600" />
                  </div>
                  <span className="text-[#232627] font-medium">{item.axelyn}</span>
                </div>

                {/* Freelancer Column */}
                <div className="p-6 flex items-start gap-3">
                  <div className="flex-shrink-0 w-6 h-6 rounded-full bg-red-100 flex items-center justify-center mt-0.5">
                    <X className="w-4 h-4 text-red-500" />
                  </div>
                  <span className="text-[#2A2A25]/70">{item.freelancer}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Mobile Card View */}
        <div className={`lg:hidden space-y-6 transition-all duration-1000 delay-300 ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
        }`}>
          {comparisons.map((item, index) => (
            <div 
              key={index}
              className="bg-white rounded-2xl shadow-lg overflow-hidden border-2 border-[#E8E8DE]"
            >
              {/* Aspect Header */}
              <div className="bg-gradient-to-r from-[#232627] to-[#2A2A25] p-4">
                <h3 className="font-bold text-lg text-white text-center">{item.aspect}</h3>
              </div>

              {/* Axelyn Card */}
              <div className="p-5 bg-[#FF5C26]/5 border-b-2 border-[#E8E8DE]">
                <div className="flex items-start gap-3 mb-2">
                  <div className="flex-shrink-0">
                    <span className="inline-block bg-[#FF5C26] text-white text-xs font-bold px-3 py-1 rounded-full">
                      AXELYN
                    </span>
                  </div>
                  <div className="flex-shrink-0 w-6 h-6 rounded-full bg-green-100 flex items-center justify-center">
                    <Check className="w-4 h-4 text-green-600" />
                  </div>
                </div>
                <p className="text-[#232627] font-medium ml-0 mt-2">{item.axelyn}</p>
              </div>

              {/* Freelancer Card */}
              <div className="p-5">
                <div className="flex items-start gap-3 mb-2">
                  <div className="flex-shrink-0">
                    <span className="inline-block bg-[#2A2A25]/20 text-[#2A2A25] text-xs font-bold px-3 py-1 rounded-full">
                      FREELANCER
                    </span>
                  </div>
                  <div className="flex-shrink-0 w-6 h-6 rounded-full bg-red-100 flex items-center justify-center">
                    <X className="w-4 h-4 text-red-500" />
                  </div>
                </div>
                <p className="text-[#2A2A25]/70 ml-0 mt-2">{item.freelancer}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Message */}
        <div className={`mt-12 sm:mt-16 text-center transition-all duration-1000 delay-500 ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
        }`}>
          <div className="bg-white rounded-2xl border-2 border-[#FF5C26]/20 p-6 sm:p-8 max-w-4xl mx-auto shadow-lg">
            <p className="text-base sm:text-lg text-[#232627] leading-relaxed">
              <span className="font-bold text-[#FF5C26]">Local reliability matters.</span> We're based in KL, speak your language (literally and figuratively), and understand Malaysian business contexts. When something breaks at 3pm on a deadline day, we're here.
            </p>
          </div>
        </div>

        {/* Decorative Elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none -z-10">
          <div className="absolute top-1/4 right-0 w-64 h-64 bg-[#FF5C26]/5 rounded-full blur-3xl" />
          <div className="absolute bottom-1/4 left-0 w-64 h-64 bg-[#232627]/5 rounded-full blur-3xl" />
        </div>
      </div>
    </section>
  )
}
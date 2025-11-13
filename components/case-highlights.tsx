"use client"

import { useEffect, useRef, useState } from "react"
import { ArrowRight, TrendingUp, Clock, Users } from "lucide-react"
import Link from "next/link"

const cases = [
  {
    title: "Bright Social Studio",
    subtitle: "Social Media Agency · KL",
    description:
      "From 2-3 hours daily building client reports to 30 minutes weekly. Zero manual errors across 15 clients.",
    href: "/case-studies/bright-social-studio",
    stats: [
      { label: "Time Saved", value: "80%", icon: Clock },
      { label: "Clients Automated", value: "15", icon: Users },
      { label: "Deploy Time", value: "7 days", icon: TrendingUp }
    ],
    tags: ["Meta Ads", "TikTok", "Looker Studio"],
    featured: true
  },
  // Uncomment when you have more case studies:
  // {
  //   title: "Another Case Study",
  //   subtitle: "E-commerce · Singapore",
  //   description: "How we automated inventory sync across 3 platforms.",
  //   href: "/case-studies/another-case",
  //   stats: [
  //     { label: "Inventory Items", value: "5K+", icon: TrendingUp },
  //     { label: "Platforms Synced", value: "3", icon: Users },
  //     { label: "Update Time", value: "Real-time", icon: Clock }
  //   ],
  //   tags: ["Shopify", "Warehouse", "Accounting"],
  //   featured: false
  // },
]

export function CaseHighlights() {
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
      { threshold: 0.1 }
    )

    if (sectionRef.current) observer.observe(sectionRef.current)
    return () => observer.disconnect()
  }, [isVisible])

  // Determine grid layout based on number of cases
  const gridClass = cases.length === 1 
    ? "flex justify-center" 
    : cases.length === 2 
    ? "grid md:grid-cols-2 gap-8" 
    : "grid md:grid-cols-2 lg:grid-cols-3 gap-8"

  return (
    <section ref={sectionRef} className="bg-gradient-to-b from-white to-gray-50 py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        
        {/* Section Header */}
        <div className={`mx-auto max-w-3xl text-center mb-16 transition-all duration-1000 ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
        }`}>
          <div className="inline-block mb-4">
            <span className="inline-flex items-center gap-2 rounded-full bg-[#FF5C26]/10 border border-[#FF5C26]/30 px-4 py-2 text-sm font-semibold text-[#FF5C26]">
              <TrendingUp className="w-4 h-4" />
              Proof: Real Results
            </span>
          </div>
          <h2 className="text-4xl font-bold text-[#232627] sm:text-5xl mb-4">
            Systems That Deliver
          </h2>
          <p className="text-xl text-[#2A2A25]/70">
            See how we've helped teams eliminate waste and unlock speed.
          </p>
        </div>

        {/* Case Studies Grid */}
        <div className={gridClass}>
          {cases.map((caseItem, index) => {
            const isSingle = cases.length === 1
            
            return (
              <Link
                key={index}
                href={caseItem.href}
                className={`case-card group relative rounded-3xl bg-white border-2 border-[#E8E8DE] overflow-hidden transition-all duration-500 hover:shadow-2xl hover:border-[#FF5C26] hover:scale-[1.02] ${
                  isSingle ? "max-w-2xl w-full" : ""
                } ${
                  isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
                }`}
                style={{ transitionDelay: `${index * 150}ms` }}
              >
                {/* Featured Badge */}
                {caseItem.featured && (
                  <div className="absolute top-6 right-6 z-10">
                    <div className="bg-[#FF5C26] text-white text-xs font-bold px-3 py-1.5 rounded-full shadow-lg">
                      FEATURED
                    </div>
                  </div>
                )}

                {/* Orange Accent Bar */}
                <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#FF5C26] to-[#ff7f50] transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500" />

                <div className="p-8 sm:p-10">
                  {/* Header */}
                  <div className="mb-6">
                    <h3 className="text-2xl sm:text-3xl font-bold text-[#232627] mb-2 group-hover:text-[#FF5C26] transition-colors duration-300">
                      {caseItem.title}
                    </h3>
                    <p className="text-sm font-medium text-[#2A2A25]/60 uppercase tracking-wide">
                      {caseItem.subtitle}
                    </p>
                  </div>

                  {/* Description */}
                  <p className="text-base text-[#2A2A25]/80 leading-relaxed mb-6">
                    {caseItem.description}
                  </p>

                  {/* Stats Grid */}
                  <div className="grid grid-cols-3 gap-4 mb-6 py-6 border-y border-[#E8E8DE]">
                    {caseItem.stats.map((stat, i) => {
                      const Icon = stat.icon
                      return (
                        <div key={i} className="text-center">
                          <div className="inline-flex items-center justify-center w-10 h-10 rounded-xl bg-[#FF5C26]/10 mb-2 group-hover:bg-[#FF5C26]/20 transition-colors">
                            <Icon className="w-5 h-5 text-[#FF5C26]" />
                          </div>
                          <div className="text-2xl font-bold text-[#232627] mb-1">
                            {stat.value}
                          </div>
                          <div className="text-xs text-[#2A2A25]/60 font-medium">
                            {stat.label}
                          </div>
                        </div>
                      )
                    })}
                  </div>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {caseItem.tags.map((tag, i) => (
                      <span
                        key={i}
                        className="inline-flex items-center rounded-full bg-[#E8E8DE] px-3 py-1 text-xs font-medium text-[#232627]"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* CTA Button */}
                  <div className="flex items-center justify-between pt-4">
                    <span className="text-sm font-semibold text-[#FF5C26]">
                      Read Full Case Study
                    </span>
                    <div className="flex items-center justify-center w-10 h-10 rounded-full bg-[#FF5C26] text-white transform group-hover:translate-x-2 transition-transform duration-300">
                      <ArrowRight className="w-5 h-5" />
                    </div>
                  </div>
                </div>

                {/* Decorative Corner Gradient */}
                <div className="absolute bottom-0 right-0 w-32 h-32 bg-gradient-to-tl from-[#FF5C26]/5 to-transparent rounded-tl-full opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </Link>
            )
          })}
        </div>

        {/* Bottom CTA - Only show if single case study */}
        {cases.length === 1 && (
          <div className={`mt-16 text-center transition-all duration-1000 delay-500 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}>
            <p className="text-base text-[#2A2A25]/70 mb-6">
              Want to see similar results for your team?
            </p>
            <button className="inline-flex items-center gap-2 bg-[#232627] text-white px-8 py-4 rounded-full font-semibold hover:bg-[#FF5C26] transition-all hover:scale-105 shadow-lg">
              Book Your Free Audit
              <ArrowRight className="w-5 h-5" />
            </button>
          </div>
        )}

        {/* More Coming Soon - Show when you have 1-2 case studies */}
        {cases.length < 3 && (
          <div className={`mt-12 text-center transition-all duration-1000 delay-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}>
            <div className="inline-flex items-center gap-2 text-sm text-[#2A2A25]/60">
              <div className="w-2 h-2 rounded-full bg-[#FF5C26] animate-pulse" />
              <span>More case studies coming soon</span>
            </div>
          </div>
        )}
      </div>
    </section>
  )
}
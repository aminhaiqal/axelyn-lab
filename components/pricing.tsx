"use client"

import { useEffect, useRef } from "react"
import { Zap, TrendingUp, Network, Headphones } from "lucide-react"

const packages = [
  {
    name: "Starter Package",
    tagline: "Eliminate Daily Manual Tasks",
    price: "800",
    priceRange: "- 1,500",
    duration: "1-3 days",
    icon: Zap,
    popular: true,
    description: "Perfect for teams just starting with automation who want quick wins.",
    features: [
      "1-3 automated workflows",
      "Eliminate repetitive daily tasks",
      "Basic documentation & handover"
    ],
    outcomes: [
      "Form submissions → tasks",
      "Sales data → reports",
      "One-click client onboarding"
    ]
  },
  {
    name: "Growth Package",
    tagline: "Build Your Live Business Dashboard",
    price: "1,200",
    priceRange: "- 2,500",
    duration: "3-7 days",
    icon: TrendingUp,
    description: "Perfect for agencies and operations teams drowning in manual reporting.",
    features: [
      "Multi-source reporting dashboard",
      "5-10 automated workflows",
      "Live data updates",
      "Complete documentation & training"
    ],
    outcomes: [
      "Real-time client dashboards",
      "Automated weekly/monthly reports",
      "Sales pipeline visibility"
    ]
  },
  {
    name: "Scale Package",
    tagline: "Connect Your Business End-to-End",
    price: "2,500",
    priceRange: "- 5,000",
    duration: "5-10 days",
    icon: Network,
    description: "Perfect for growing businesses with complex operations spanning multiple platforms.",
    features: [
      "Complex multi-system integrations",
      "Custom API connections",
      "15+ automated workflows",
      "Advanced monitoring & error handling",
      "Priority support"
    ],
    outcomes: [
      "Inventory synced everywhere",
      "Full lifecycle automation",
      "Bi-directional sync"
    ]
  }
]

const retainer = {
  name: "Ongoing Support Retainer",
  price: "500",
  priceRange: "- 1,500",
  period: "/month",
  icon: Headphones,
  description: "Perfect for teams who want peace of mind and ongoing system evolution.",
  features: [
    "Monitoring & maintenance",
    "Monthly optimization reviews",
    "Priority fixes when issues arise",
    "Continuous improvement"
  ]
}

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
              }, index * 100)
            })
          }
        })
      },
      { threshold: 0.1 }
    )

    if (sectionRef.current) observer.observe(sectionRef.current)
    return () => observer.disconnect()
  }, [])

  return (
    <section ref={sectionRef} className="bg-[#FFFFFF] py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-[#232627] sm:text-5xl mb-4">
            Packages & Investment
          </h2>
          <p className="text-xl text-[#2A2A25]/70 max-w-2xl mx-auto">
            We scope every project individually, but here's what to expect.
          </p>
        </div>

        {/* Main Packages Grid */}
        <div className="grid gap-6 lg:grid-cols-3 mb-8">
          {packages.map((pkg, idx) => {
            const Icon = pkg.icon
            
            return (
              <div
                key={idx}
                className={`pricing-card relative rounded-3xl p-8 opacity-0 transition-all duration-300 hover:scale-[1.02] ${
                  pkg.popular
                    ? "bg-[#FF5C26] text-white shadow-2xl"
                    : "bg-[#E8E8DE] text-[#232627] shadow-lg hover:shadow-xl"
                }`}
              >
                {pkg.popular && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                    <div className="bg-[#232627] text-white text-xs font-bold px-6 py-2 rounded-full shadow-lg">
                      MOST POPULAR
                    </div>
                  </div>
                )}

                <div className="flex flex-col h-full">
                  {/* Icon */}
                  <div className={`inline-flex self-start p-3 rounded-2xl mb-6 ${
                    pkg.popular ? "bg-white/20" : "bg-white"
                  }`}>
                    <Icon className={`w-7 h-7 ${pkg.popular ? "text-white" : "text-[#FF5C26]"}`} />
                  </div>

                  {/* Header */}
                  <h3 className="text-2xl font-bold mb-2">
                    {pkg.name.toUpperCase()}
                  </h3>
                  <p className={`text-sm mb-6 ${pkg.popular ? "text-white/90" : "text-[#2A2A25]/80"}`}>
                    {pkg.tagline}
                  </p>

                  {/* Description */}
                  <p className={`text-sm mb-6 leading-relaxed ${pkg.popular ? "text-white/90" : "text-[#2A2A25]/80"}`}>
                    {pkg.description}
                  </p>

                  {/* Features */}
                  <div className="mb-8 flex-grow">
                    <ul className="space-y-3">
                      {pkg.features.map((feature, i) => (
                        <li key={i} className="flex items-start gap-3 text-sm">
                          <Icon className={`w-4 h-4 flex-shrink-0 mt-0.5 ${pkg.popular ? "text-white" : "text-[#232627]"}`} />
                          <span className={pkg.popular ? "text-white" : "text-[#232627]"}>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Price & CTA */}
                  <div className="mt-auto">
                    <div className="mb-6">
                      <div className="text-sm font-medium mb-1 opacity-90">starting at</div>
                      <div className="flex items-baseline gap-1">
                        <span className="text-sm">RM</span>
                        <span className="text-5xl font-bold">{pkg.price}</span>
                        <span className="text-xl">{pkg.priceRange}</span>
                      </div>
                      <div className={`text-xs mt-1 ${pkg.popular ? "text-white/70" : "text-[#2A2A25]/60"}`}>
                        {pkg.duration}
                      </div>
                    </div>

                    <button className={`w-full py-4 px-6 rounded-full font-semibold transition-all hover:translate-y-[-2px] hover:shadow-xl ${
                      pkg.popular
                        ? "bg-white text-[#FF5C26]"
                        : "bg-[#232627] text-white"
                    }`}>
                      Book a call
                    </button>
                  </div>
                </div>
              </div>
            )
          })}
        </div>

        {/* Retainer Card - Full Width */}
        <div className="pricing-card opacity-0">
          <div className="bg-[#232627] rounded-3xl shadow-2xl p-8 text-white">
            <div className="flex flex-col lg:flex-row gap-8 items-start lg:items-center">
              {/* Icon & Title Section */}
              <div className="flex items-start gap-6 flex-1">
                <div className="inline-flex p-3 rounded-2xl bg-white/10 flex-shrink-0">
                  <Headphones className="w-7 h-7" />
                </div>
                
                <div className="flex-1">
                  <h3 className="text-2xl font-bold mb-2">{retainer.name.toUpperCase()}</h3>
                  <p className="text-white/80 text-sm mb-6">{retainer.description}</p>
                  
                  <div className="grid sm:grid-cols-2 gap-x-6 gap-y-3">
                    {retainer.features.map((feature, i) => (
                      <div key={i} className="flex items-start gap-3 text-sm">
                        <Headphones className="w-4 h-4 flex-shrink-0 mt-0.5 text-[#FF5C26]" />
                        <span>{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Price & CTA Section */}
              <div className="flex-shrink-0 text-center lg:text-right w-full lg:w-auto">
                <div className="mb-6">
                  <div className="text-sm font-medium mb-1 opacity-90">starting at</div>
                  <div className="flex items-baseline gap-1 justify-center lg:justify-end">
                    <span className="text-sm">RM</span>
                    <span className="text-5xl font-bold">{retainer.price}</span>
                    <span className="text-xl">{retainer.priceRange}</span>
                    <span className="text-sm">{retainer.period}</span>
                  </div>
                </div>

                <button className="w-full lg:w-auto bg-white text-[#232627] px-8 py-4 rounded-full font-semibold hover:bg-[#E8E8DE] transition-all hover:translate-y-[-2px] hover:shadow-xl">
                  Book a call
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Footer Note */}
        <div className="mt-12 text-center">
          <p className="text-sm text-[#2A2A25]/60 max-w-4xl mx-auto leading-relaxed">
            <span className="font-semibold text-[#232627]">What's included in every package:</span> Fully functional system, deployed and tested • Complete documentation and handover • 30-day post-launch support for tweaks • No hidden costs or surprise invoices
          </p>
        </div>
      </div>

      <style jsx>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        .animate-fade-in-up {
          animation: fadeInUp 0.6s ease-out forwards;
        }
      `}</style>
    </section>
  )
}
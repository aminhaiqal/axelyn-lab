"use client"

import { useEffect, useRef } from "react"
import { Zap, Link2, MessageSquare, BarChart3 } from "lucide-react"

const systems = [
  {
    icon: Zap,
    title: "Automation Workflows",
    description: "Connect tools so data moves automatically between them.",
    examples: [
      "Form submission → CRM entry → Slack notification → Task created",
      "New sale → Invoice generated → Payment tracked → Client email sent",
      "Ad platform data → Google Sheets → Dashboard → Weekly report emailed"
    ],
    gradient: "from-orange-500 to-red-500"
  },
  {
    icon: BarChart3,
    title: "Reporting & Dashboards",
    description: "Live dashboards that pull data from multiple sources automatically.",
    examples: [
      "Agency client reporting (Meta + TikTok + Google Ads → Looker Studio)",
      "Sales pipeline tracking (CRM + Stripe + Notion → real-time dashboard)",
      "Operational KPIs (project tracker + time logs + revenue data → executive view)"
    ],
    gradient: "from-blue-500 to-cyan-500"
  },
  {
    icon: Link2,
    title: "Database & CRM Systems",
    description: "Structured systems for managing clients, projects, inventory, or leads.",
    examples: [
      "Client management hub in Notion or Airtable",
      "Project tracking with automated status updates",
      "Lead scoring and nurture sequences"
    ],
    gradient: "from-purple-500 to-pink-500"
  },
  {
    icon: MessageSquare,
    title: "Integration Architecture",
    description: "Custom API connections and middleware for complex workflows.",
    examples: [
      "Syncing inventory across Shopify, warehouse system, and accounting software",
      "Two-way sync between project management tool and billing platform",
      "Connecting proprietary software to modern tools via API"
    ],
    gradient: "from-green-500 to-emerald-500"
  },
]

export function WhatWeDo() {
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const cards = entry.target.querySelectorAll(".system-card")
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

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  return (
    <section ref={sectionRef} className="py-24 sm:py-32 bg-gradient-to-b from-white to-gray-50">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Section header */}
        <div className="mx-auto max-w-3xl text-center mb-20">
          <h2 className="text-4xl font-bold text-[#232627] sm:text-5xl mb-4">
            What We Build
          </h2>
          <p className="text-xl text-[#2A2A25]/70">
            The systems layer that connects your scattered tools into one coherent infrastructure.
          </p>
        </div>

        {/* System cards */}
        <div className="grid gap-8 sm:grid-cols-2">
          {systems.map((system, index) => {
            const Icon = system.icon
            
            return (
              <div
                key={index}
                className="system-card group relative opacity-0"
              >
                {/* Card Background with Gradient Border Effect */}
                <div className="relative h-full bg-white rounded-3xl p-8 transition-all duration-500 hover:shadow-2xl border border-gray-200 hover:border-transparent overflow-hidden">
                  {/* Gradient Border on Hover */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${system.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-3xl`} style={{ padding: '2px' }}>
                    <div className="h-full w-full bg-white rounded-3xl" />
                  </div>

                  {/* Content */}
                  <div className="relative z-10">
                    {/* Icon with Gradient Background */}
                    <div className="relative mb-6 inline-block">
                      <div className={`absolute inset-0 bg-gradient-to-br ${system.gradient} opacity-20 blur-xl rounded-full`} />
                      <div className={`relative inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br ${system.gradient} shadow-lg transform group-hover:scale-110 group-hover:rotate-3 transition-all duration-300`}>
                        <Icon className="h-7 w-7 text-white" />
                      </div>
                    </div>

                    {/* Title */}
                    <h3 className="text-2xl font-bold text-[#232627] mb-3 group-hover:text-[#FF5C26] transition-colors duration-300">
                      {system.title}
                    </h3>

                    {/* Description */}
                    <p className="text-base text-[#2A2A25]/80 leading-relaxed mb-6">
                      {system.description}
                    </p>

                    {/* Examples */}
                    <div className="space-y-2">
                      <div className="text-xs font-semibold text-[#2A2A25]/60 uppercase tracking-wider mb-3">
                        Examples:
                      </div>
                      {system.examples.map((example, i) => (
                        <div 
                          key={i} 
                          className="flex items-start gap-2 text-sm text-[#2A2A25]/70 group/item hover:text-[#232627] transition-colors"
                        >
                          <span className="text-[#FF5C26] mt-1">•</span>
                          <span className="flex-1">{example}</span>
                        </div>
                      ))}
                    </div>

                    {/* Decorative Element */}
                    <div className={`absolute -bottom-10 -right-10 w-32 h-32 bg-gradient-to-br ${system.gradient} opacity-0 group-hover:opacity-10 blur-3xl transition-all duration-700 rounded-full`} />
                  </div>
                </div>
              </div>
            )
          })}
        </div>

        {/* Bottom CTA or Note */}
        <div className="mt-16 text-center">
          <p className="text-base text-[#2A2A25]/70 max-w-2xl mx-auto">
            We take what you already use — <span className="font-semibold text-[#232627]">Notion, Google Sheets, Slack, Airtable, Meta Ads, Zapier, Make</span> — and engineer automation layers that make them work together seamlessly.
          </p>
        </div>
      </div>

      <style jsx>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(40px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        .animate-fade-in-up {
          animation: fadeInUp 0.8s ease-out forwards;
        }
      `}</style>
    </section>
  )
}
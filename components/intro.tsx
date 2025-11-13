"use client"

import { useEffect, useRef, useState } from "react"
import { X, ArrowRight, Zap } from "lucide-react"

export function Intro() {
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
      { threshold: 0.3 }
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [isVisible])

  const problems = [
    "Your CRM doesn't update your project tracker",
    "Ad platforms don't feed your reporting dashboard",
    "Form submissions sit in one app while your team works in another"
  ]

  return (
    <section
      ref={sectionRef}
      className="relative py-24 sm:py-32 bg-[#232627] overflow-hidden"
    >
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden opacity-20">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-[#FF5C26] rounded-full blur-3xl animate-pulse-slow" />
        <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-[#FF5C26] rounded-full blur-3xl animate-pulse-slower" />
      </div>

      {/* Grid Pattern Overlay */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI0MCIgaGVpZ2h0PSI0MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAwIDEwIEwgNDAgMTAgTSAxMCAwIEwgMTAgNDAiIGZpbGw9Im5vbmUiIHN0cm9rZT0id2hpdGUiIHN0cm9rZS1vcGFjaXR5PSIwLjAzIiBzdHJva2Utd2lkdGg9IjEiLz48L3BhdHRlcm4+PC9kZWZzPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9InVybCgjZ3JpZCkiLz48L3N2Zz4=')] opacity-30" />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          
          {/* Left Side - Problem Statement */}
          <div className={`transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-12"
          }`}>
            <div className="inline-block mb-6">
              <span className="inline-flex items-center gap-2 rounded-full bg-[#FF5C26]/10 border border-[#FF5C26]/30 px-4 py-2 text-sm font-semibold text-[#FF5C26]">
                <Zap className="w-4 h-4" />
                The Problem We Solve
              </span>
            </div>

            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
              Most teams aren't slow because they lack talent.
            </h2>

            <p className="text-xl text-white/80 mb-8 leading-relaxed">
              They're slow because <span className="text-[#FF5C26] font-semibold">their tools don't talk to each other.</span>
            </p>

            {/* Problem List */}
            <div className="space-y-4 mb-8">
              {problems.map((problem, index) => (
                <div 
                  key={index}
                  className={`flex items-start gap-3 transition-all duration-700 ${
                    isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-8"
                  }`}
                  style={{ transitionDelay: `${400 + index * 150}ms` }}
                >
                  <div className="flex-shrink-0 mt-1">
                    <X className="w-5 h-5 text-red-400" />
                  </div>
                  <p className="text-white/70 text-base leading-relaxed">{problem}</p>
                </div>
              ))}
            </div>

            <div className="p-6 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm">
              <p className="text-lg text-white/90 leading-relaxed">
                So people become the glue — copying, pasting, reconciling, reminding.
              </p>
              <p className="text-xl font-bold text-[#FF5C26] mt-3">
                That's not work. That's waste.
              </p>
            </div>
          </div>

          {/* Right Side - Solution Statement */}
          <div className={`transition-all duration-1000 delay-300 ${
            isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-12"
          }`}>
            <div className="bg-white rounded-3xl p-8 sm:p-10 shadow-2xl relative overflow-hidden">
              {/* Decorative Element */}
              <div className="absolute top-0 right-0 w-40 h-40 bg-[#FF5C26]/10 rounded-full blur-3xl" />
              
              <div className="relative">
                <div className="inline-block mb-6">
                  <div className="w-12 h-12 rounded-2xl bg-[#FF5C26] flex items-center justify-center shadow-lg">
                    <ArrowRight className="w-6 h-6 text-white" />
                  </div>
                </div>

                <h3 className="text-3xl sm:text-4xl font-bold text-[#232627] mb-4 leading-tight">
                  We're the systems layer that connects everything.
                </h3>

                <p className="text-lg text-[#2A2A25]/80 mb-6 leading-relaxed">
                  We take what you already use — Notion, Google Sheets, Slack, Airtable, Meta Ads, Zapier, Make — and engineer automation layers that make them work together seamlessly.
                </p>

                {/* Result Metrics */}
                <div className="grid grid-cols-2 gap-4 mb-6">
                  <div className="bg-[#E8E8DE] rounded-xl p-4">
                    <div className="text-3xl font-bold text-[#FF5C26] mb-1">80%</div>
                    <div className="text-xs font-medium text-[#2A2A25]/70 uppercase tracking-wide">Time Saved</div>
                  </div>
                  <div className="bg-[#E8E8DE] rounded-xl p-4">
                    <div className="text-3xl font-bold text-[#FF5C26] mb-1">1-7</div>
                    <div className="text-xs font-medium text-[#2A2A25]/70 uppercase tracking-wide">Days to Deploy</div>
                  </div>
                </div>

                <div className="space-y-3">
                  {[
                    "Your team moves faster",
                    "Manual work disappears",
                    "Data flows where it needs to go"
                  ].map((benefit, index) => (
                    <div key={index} className="flex items-center gap-3">
                      <div className="w-1.5 h-1.5 rounded-full bg-[#FF5C26]" />
                      <span className="text-[#232627] font-medium">{benefit}</span>
                    </div>
                  ))}
                </div>

                <div className="mt-8 pt-6 border-t border-[#E8E8DE]">
                  <p className="text-sm font-semibold text-[#232627] mb-2">No intervention required.</p>
                  <p className="text-sm text-[#2A2A25]/70">
                    The best systems are the ones you forget are running.
                  </p>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>

      {/* Floating Connection Lines */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-20">
        {[...Array(5)].map((_, i) => (
          <div
            key={i}
            className={`absolute transition-all duration-[3000ms] ${
              isVisible ? "opacity-100" : "opacity-0"
            }`}
            style={{
              left: `${20 + i * 15}%`,
              top: `${30 + (i % 2) * 30}%`,
              animation: isVisible ? `float-line ${5 + i * 0.8}s ease-in-out infinite` : "none",
              animationDelay: `${i * 0.5}s`,
            }}
          >
            <div className="w-px h-20 bg-gradient-to-b from-transparent via-white to-transparent" />
          </div>
        ))}
      </div>

      <style jsx>{`
        @keyframes pulse-slow {
          0%, 100% {
            opacity: 0.3;
            transform: scale(1);
          }
          50% {
            opacity: 0.5;
            transform: scale(1.1);
          }
        }
        
        @keyframes pulse-slower {
          0%, 100% {
            opacity: 0.2;
            transform: scale(1);
          }
          50% {
            opacity: 0.4;
            transform: scale(1.15);
          }
        }
        
        @keyframes float-line {
          0%, 100% {
            transform: translateY(0px);
            opacity: 0.3;
          }
          50% {
            transform: translateY(-30px);
            opacity: 0.8;
          }
        }
      `}</style>
    </section>
  )
}
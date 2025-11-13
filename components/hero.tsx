"use client"

import { useEffect, useState } from "react"
import { ArrowRight, Zap, Clock, Shield } from "lucide-react"

export function Hero() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  return (
    <section className="relative min-h-[90vh] flex items-center overflow-hidden bg-gradient-to-br from-[#FFFFFF] via-[#F8F8F8] to-[#E8E8DE]">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Large Gradient Orbs */}
        <div className="absolute -top-40 -right-40 w-96 h-96 bg-[#FF5C26]/20 rounded-full blur-3xl animate-float" />
        <div className="absolute top-1/2 -left-40 w-80 h-80 bg-[#232627]/10 rounded-full blur-3xl animate-float-delayed" />
        <div className="absolute -bottom-20 right-1/4 w-72 h-72 bg-[#FF5C26]/10 rounded-full blur-3xl animate-float-slow" />
        
        {/* Grid Pattern */}
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAxMCAwIEwgMCAwIDAgMTAiIGZpbGw9Im5vbmUiIHN0cm9rZT0iIzIzMjYyNyIgc3Ryb2tlLW9wYWNpdHk9IjAuMDMiIHN0cm9rZS13aWR0aD0iMSIvPjwvcGF0dGVybj48L2RlZnM+PHJlY3Qgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIgZmlsbD0idXJsKCNncmlkKSIvPjwvc3ZnPg==')] opacity-40" />
      </div>

      <div className="relative mx-auto max-w-7xl px-6 py-20 sm:py-24 lg:px-8">
        <div className="mx-auto max-w-5xl">
          
          {/* Animated Badge */}
          <div className={`mb-8 flex justify-center transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-4"
          }`}>
            <div className="inline-flex items-center gap-2.5 rounded-full bg-white border-2 border-[#E8E8DE] px-5 py-2.5 shadow-lg">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#FF5C26] opacity-75" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-[#FF5C26]" />
              </span>
              <span className="text-sm font-semibold text-[#232627]">Systems That Work While You Sleep</span>
            </div>
          </div>

          {/* Main Headline */}
          <div className={`transition-all duration-1000 delay-200 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}>
            <h1 className="text-center text-5xl font-bold tracking-tight text-[#232627] sm:text-6xl lg:text-7xl xl:text-8xl leading-[1.1]">
              Your tools don't talk.
              <br />
              <span className="text-[#FF5C26]">We make them.</span>
            </h1>
          </div>

          {/* Subheadline */}
          <p className={`mx-auto mt-8 max-w-3xl text-center text-lg leading-relaxed text-[#2A2A25]/80 sm:text-xl lg:text-2xl transition-all duration-1000 delay-300 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}>
            The systems layer that connects your scattered tools into one coherent infrastructure. 
            <span className="font-semibold text-[#232627]"> No more copying, pasting, or manual work.</span>
          </p>

          {/* CTA Buttons */}
          <div className={`mt-12 flex flex-col items-center justify-center gap-4 sm:flex-row transition-all duration-1000 delay-500 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}>
            <button className="group relative h-14 w-full sm:w-auto rounded-full bg-[#FF5C26] px-8 text-base font-semibold text-white shadow-xl shadow-[#FF5C26]/30 transition-all hover:bg-[#e14d1f] hover:shadow-2xl hover:shadow-[#FF5C26]/40 hover:scale-105">
              <span className="flex items-center justify-center gap-2">
                Book a 15-min call
                <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
              </span>
            </button>
            <button className="h-14 w-full sm:w-auto rounded-full border-2 border-[#232627] bg-white px-8 text-base font-semibold text-[#232627] transition-all hover:bg-[#232627] hover:text-white hover:scale-105">
              See how it works
            </button>
          </div>

          {/* Trust Indicators - Feature Pills */}
          <div className={`mt-16 flex flex-wrap items-center justify-center gap-4 transition-all duration-1000 delay-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}>
            <div className="flex items-center gap-2 rounded-full bg-white/80 backdrop-blur-sm border border-[#E8E8DE] px-5 py-3 shadow-sm">
              <Zap className="h-4 w-4 text-[#FF5C26]" />
              <span className="text-sm font-medium text-[#232627]">1-7 day delivery</span>
            </div>
            <div className="flex items-center gap-2 rounded-full bg-white/80 backdrop-blur-sm border border-[#E8E8DE] px-5 py-3 shadow-sm">
              <Clock className="h-4 w-4 text-[#FF5C26]" />
              <span className="text-sm font-medium text-[#232627]">No long-term contracts</span>
            </div>
            <div className="flex items-center gap-2 rounded-full bg-white/80 backdrop-blur-sm border border-[#E8E8DE] px-5 py-3 shadow-sm">
              <Shield className="h-4 w-4 text-[#FF5C26]" />
              <span className="text-sm font-medium text-[#232627]">30-day support included</span>
            </div>
          </div>

          {/* Social Proof / Client Logos Section */}
          <div className={`mt-20 transition-all duration-1000 delay-900 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}>
            <p className="text-center text-sm font-medium text-[#2A2A25]/60 uppercase tracking-wide mb-6">
              Trusted by SMEs & agencies across Malaysia
            </p>
            <div className="flex items-center justify-center gap-8 opacity-40">
              {/* Placeholder for client logos - you can replace with actual logos */}
              <div className="h-8 w-24 bg-[#232627]/20 rounded" />
              <div className="h-8 w-24 bg-[#232627]/20 rounded" />
              <div className="h-8 w-24 bg-[#232627]/20 rounded" />
              <div className="h-8 w-24 bg-[#232627]/20 rounded" />
            </div>
          </div>

        </div>
      </div>

      {/* Floating Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(8)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 rounded-full bg-[#FF5C26]/30"
            style={{
              left: `${10 + i * 12}%`,
              top: `${15 + (i % 3) * 25}%`,
              animation: `float-particle ${3 + i * 0.5}s ease-in-out infinite`,
              animationDelay: `${i * 0.3}s`,
            }}
          />
        ))}
      </div>

      <style jsx>{`
        @keyframes float {
          0%, 100% {
            transform: translate(0, 0) scale(1);
          }
          50% {
            transform: translate(30px, -30px) scale(1.1);
          }
        }
        
        @keyframes float-delayed {
          0%, 100% {
            transform: translate(0, 0) scale(1);
          }
          50% {
            transform: translate(-40px, 40px) scale(1.05);
          }
        }
        
        @keyframes float-slow {
          0%, 100% {
            transform: translate(0, 0);
          }
          50% {
            transform: translate(20px, -50px);
          }
        }
        
        @keyframes float-particle {
          0%, 100% {
            transform: translateY(0px) translateX(0px);
            opacity: 0.3;
          }
          50% {
            transform: translateY(-30px) translateX(15px);
            opacity: 0.8;
          }
        }
      `}</style>
    </section>
  )
}
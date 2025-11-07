"use client"

import { useEffect, useRef, useState } from "react"
import { Button } from "@/components/ui/button"
import { ArrowRight, Mail, Sparkles } from "lucide-react"

export function FinalCTA() {
  const sectionRef = useRef<HTMLElement>(null)
  const [isVisible, setIsVisible] = useState(false)
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })

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

  const handleMouseMove = (e: React.MouseEvent<HTMLElement>) => {
    const rect = e.currentTarget.getBoundingClientRect()
    setMousePosition({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    })
  }

  return (
    <section 
      ref={sectionRef}
      onMouseMove={handleMouseMove}
      className="relative border-b border-zinc-800 py-24 sm:py-32 lg:py-40 bg-zinc-900 overflow-hidden"
    >
      {/* Animated gradient orbs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div 
          className={`absolute top-0 right-0 w-[600px] h-[600px] rounded-full bg-gradient-to-br from-zinc-700/40 via-zinc-800/20 to-transparent blur-3xl transition-all duration-[3000ms] ease-out ${
            isVisible ? "opacity-100 translate-x-0 translate-y-0" : "opacity-0 translate-x-32 -translate-y-32"
          }`}
        />
        <div 
          className={`absolute bottom-0 left-0 w-[500px] h-[500px] rounded-full bg-gradient-to-tr from-zinc-700/30 via-zinc-800/20 to-transparent blur-3xl transition-all duration-[3000ms] ease-out delay-300 ${
            isVisible ? "opacity-100 translate-x-0 translate-y-0" : "opacity-0 -translate-x-32 translate-y-32"
          }`}
        />
      </div>

      {/* Interactive spotlight effect */}
      <div 
        className="absolute inset-0 opacity-0 hover:opacity-100 transition-opacity duration-500 pointer-events-none"
        style={{
          background: `radial-gradient(600px circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(255,255,255,0.06), transparent 40%)`
        }}
      />

      {/* Subtle grid pattern */}
      <div className="absolute inset-0 opacity-[0.03]">
        <div className="absolute inset-0" style={{
          backgroundImage: `linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)`,
          backgroundSize: '50px 50px'
        }} />
      </div>

      <div className="relative mx-auto max-w-6xl px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          {/* Floating badge */}
          <div 
            className={`mb-8 inline-flex items-center gap-2 rounded-full border border-zinc-700/50 bg-zinc-800/50 backdrop-blur-sm px-4 py-2 text-sm font-medium text-zinc-300 shadow-lg transition-all duration-1000 ease-out ${
              isVisible ? "opacity-100 translate-y-0 scale-100" : "opacity-0 -translate-y-4 scale-95"
            }`}
          >
            <Sparkles className="h-3.5 w-3.5 text-zinc-400" />
            <span>Let's build something together</span>
          </div>

          {/* Main headline */}
          <h2 
            className={`text-4xl font-semibold tracking-tight text-white sm:text-5xl lg:text-6xl transition-all duration-1000 ease-out delay-100 leading-tight ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            Ready to Move Faster?
          </h2>

          {/* Supporting text */}
          <p 
            className={`mt-6 text-lg leading-relaxed text-zinc-400 sm:text-xl transition-all duration-1000 ease-out delay-300 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            Book a 15-minute intro to uncover automation opportunities and see how Axelyn delivers results in days, not months.
          </p>

          {/* Animated divider */}
          <div className="mt-8 flex justify-center">
            <div 
              className={`h-px bg-gradient-to-r from-transparent via-zinc-700 to-transparent transition-all duration-1000 ease-out delay-500 ${
                isVisible ? "w-64 opacity-100" : "w-0 opacity-0"
              }`}
            />
          </div>

          {/* CTA Buttons */}
          <div 
            className={`mt-12 flex flex-col items-center justify-center gap-4 sm:flex-row transition-all duration-1000 ease-out delay-700 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            <Button 
              size="lg" 
              className="group relative h-14 w-full sm:w-auto rounded-full bg-white px-8 text-base font-semibold text-zinc-900 shadow-2xl shadow-white/20 transition-all duration-300 hover:bg-zinc-100 hover:scale-105 hover:shadow-white/30 overflow-hidden"
            >
              {/* Button shimmer effect */}
              <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 bg-gradient-to-r from-transparent via-white/30 to-transparent" />
              <span className="relative">Book Intro Call</span>
              <ArrowRight className="relative ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Button>

            <Button 
              size="lg" 
              variant="outline" 
              className="group h-14 w-full sm:w-auto rounded-full border-zinc-700 bg-zinc-800/50 backdrop-blur-sm px-8 text-base font-medium text-zinc-100 transition-all duration-300 hover:bg-zinc-800 hover:border-zinc-600 hover:scale-105"
            >
              <Mail className="mr-2 h-4 w-4" />
              hello@axelyn.tech
            </Button>
          </div>

          {/* Trust indicator */}
          <div 
            className={`mt-12 flex items-center justify-center gap-6 text-sm text-zinc-500 transition-all duration-1000 ease-out delay-900 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            <div className="flex items-center gap-2">
              <div className="h-px w-6 bg-zinc-700" />
              <span>Response in 24 hours</span>
            </div>
            <div className="h-4 w-px bg-zinc-700" />
            <div className="flex items-center gap-2">
              <span>No obligation</span>
              <div className="h-px w-6 bg-zinc-700" />
            </div>
          </div>
        </div>
      </div>

      {/* Floating particles - enhanced for dark mode */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(8)].map((_, i) => (
          <div
            key={i}
            className={`absolute rounded-full transition-all duration-[3000ms] ease-in-out ${
              isVisible ? "opacity-100" : "opacity-0"
            }`}
            style={{
              width: i % 2 === 0 ? "3px" : "2px",
              height: i % 2 === 0 ? "3px" : "2px",
              background: "rgba(255, 255, 255, 0.3)",
              left: `${10 + i * 12}%`,
              top: `${15 + (i % 4) * 20}%`,
              animation: isVisible ? `float-glow ${4 + i * 0.6}s ease-in-out infinite` : "none",
              animationDelay: `${i * 0.3}s`,
              boxShadow: "0 0 10px rgba(255, 255, 255, 0.5)"
            }}
          />
        ))}
      </div>

      <style jsx>{`
        @keyframes float-glow {
          0%, 100% {
            transform: translateY(0px) translateX(0px);
            opacity: 0.3;
          }
          33% {
            transform: translateY(-25px) translateX(15px);
            opacity: 0.6;
          }
          66% {
            transform: translateY(-15px) translateX(-15px);
            opacity: 0.4;
          }
        }
      `}</style>
    </section>
  )
}
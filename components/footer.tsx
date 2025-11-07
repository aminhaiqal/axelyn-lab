"use client"

import { useEffect, useRef, useState } from "react"
import Link from "next/link"
import { ArrowUpRight, Mail, MapPin } from "lucide-react"

const links = [
  { name: "Home", href: "/" },
  { name: "Systems", href: "#systems" },
  { name: "Case Studies", href: "#case-studies" },
  { name: "Contact", href: "#contact" },
]

const socialLinks = [
  { name: "LinkedIn", href: "#" },
  { name: "Twitter", href: "#" },
]

export function Footer() {
  const footerRef = useRef<HTMLElement>(null)
  const [isVisible, setIsVisible] = useState(false)
  const [hoveredLink, setHoveredLink] = useState<string | null>(null)

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

    if (footerRef.current) {
      observer.observe(footerRef.current)
    }

    return () => observer.disconnect()
  }, [isVisible])

  return (
    <footer 
      ref={footerRef}
      className="relative bg-zinc-950 overflow-hidden"
    >
      {/* Animated gradient background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div 
          className={`absolute -top-32 left-1/2 -translate-x-1/2 w-[800px] h-[400px] rounded-full bg-gradient-to-b from-zinc-800/20 to-transparent blur-3xl transition-all duration-[2000ms] ease-out ${
            isVisible ? "opacity-100 scale-100" : "opacity-0 scale-75"
          }`}
        />
      </div>

      {/* Subtle grid overlay */}
      <div className="absolute inset-0 opacity-[0.02]">
        <div className="absolute inset-0" style={{
          backgroundImage: `linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)`,
          backgroundSize: '40px 40px'
        }} />
      </div>

      <div className="relative mx-auto max-w-7xl px-6 py-16 lg:px-8 lg:py-20">
        {/* Main footer content */}
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-8">
          
          {/* Brand column */}
          <div 
            className={`lg:col-span-5 transition-all duration-1000 ease-out ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            <div className="max-w-md">
              <h3 className="text-2xl font-semibold text-white mb-4">
                Axelyn
              </h3>
              <p className="text-base text-zinc-400 leading-relaxed mb-6">
                Technology consultancy building precision automation and integration systems for modern teams.
              </p>
              
              {/* Contact info */}
              <div className="space-y-3">
                <a 
                  href="mailto:hello@axelyn.tech" 
                  className="group flex items-center gap-3 text-sm text-zinc-400 hover:text-white transition-colors duration-300"
                >
                  <div className="flex h-8 w-8 items-center justify-center rounded-full bg-zinc-900 border border-zinc-800 group-hover:border-zinc-700 transition-colors duration-300">
                    <Mail className="h-4 w-4" />
                  </div>
                  <span>hello@axelyn.tech</span>
                </a>
                
                <div className="flex items-center gap-3 text-sm text-zinc-400">
                  <div className="flex h-8 w-8 items-center justify-center rounded-full bg-zinc-900 border border-zinc-800">
                    <MapPin className="h-4 w-4" />
                  </div>
                  <span>Kuala Lumpur, Malaysia</span>
                </div>
              </div>
            </div>
          </div>

          {/* Navigation columns */}
          <div 
            className={`lg:col-span-7 grid grid-cols-2 gap-8 sm:grid-cols-3 transition-all duration-1000 ease-out delay-200 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            {/* Quick Links */}
            <div>
              <h4 className="text-sm font-semibold text-white mb-4 tracking-wide">
                Quick Links
              </h4>
              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link.name}>
                    <Link
                      href={link.href}
                      onMouseEnter={() => setHoveredLink(link.name)}
                      onMouseLeave={() => setHoveredLink(null)}
                      className="group inline-flex items-center gap-2 text-sm text-zinc-400 hover:text-white transition-colors duration-300"
                    >
                      <span>{link.name}</span>
                      <ArrowUpRight 
                        className={`h-3 w-3 transition-all duration-300 ${
                          hoveredLink === link.name 
                            ? "opacity-100 translate-x-0.5 -translate-y-0.5" 
                            : "opacity-0 translate-x-0 translate-y-0"
                        }`}
                      />
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Services */}
            <div>
              <h4 className="text-sm font-semibold text-white mb-4 tracking-wide">
                Services
              </h4>
              <ul className="space-y-3">
                <li><span className="text-sm text-zinc-400">Automation</span></li>
                <li><span className="text-sm text-zinc-400">Integration</span></li>
                <li><span className="text-sm text-zinc-400">Systems Design</span></li>
                <li><span className="text-sm text-zinc-400">Consulting</span></li>
              </ul>
            </div>

            {/* Connect */}
            <div>
              <h4 className="text-sm font-semibold text-white mb-4 tracking-wide">
                Connect
              </h4>
              <ul className="space-y-3">
                {socialLinks.map((link) => (
                  <li key={link.name}>
                    <a
                      href={link.href}
                      onMouseEnter={() => setHoveredLink(`social-${link.name}`)}
                      onMouseLeave={() => setHoveredLink(null)}
                      className="group inline-flex items-center gap-2 text-sm text-zinc-400 hover:text-white transition-colors duration-300"
                    >
                      <span>{link.name}</span>
                      <ArrowUpRight 
                        className={`h-3 w-3 transition-all duration-300 ${
                          hoveredLink === `social-${link.name}`
                            ? "opacity-100 translate-x-0.5 -translate-y-0.5" 
                            : "opacity-0 translate-x-0 translate-y-0"
                        }`}
                      />
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div 
          className={`my-12 h-px bg-gradient-to-r from-transparent via-zinc-800 to-transparent transition-all duration-1000 ease-out delay-400 ${
            isVisible ? "opacity-100 scale-x-100" : "opacity-0 scale-x-0"
          }`}
        />

        {/* Bottom bar */}
        <div 
          className={`flex flex-col items-center justify-between gap-4 sm:flex-row transition-all duration-1000 ease-out delay-600 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <p className="text-sm text-zinc-500">
            © 2025 Axelyn Consulting. All rights reserved.
          </p>
          
          <div className="flex items-center gap-6">
            <Link 
              href="#privacy" 
              className="text-sm text-zinc-500 hover:text-zinc-400 transition-colors duration-300"
            >
              Privacy Policy
            </Link>
            <Link 
              href="#terms" 
              className="text-sm text-zinc-500 hover:text-zinc-400 transition-colors duration-300"
            >
              Terms
            </Link>
          </div>
        </div>

        {/* Floating accent line */}
        <div 
          className={`absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-zinc-700/50 to-transparent transition-all duration-1000 ease-out delay-800 ${
            isVisible ? "opacity-100" : "opacity-0"
          }`}
        />
      </div>

      {/* Corner accent dots */}
      <div className="absolute bottom-8 right-8 flex gap-2 pointer-events-none">
        {[...Array(3)].map((_, i) => (
          <div
            key={i}
            className={`w-1.5 h-1.5 rounded-full bg-zinc-700 transition-all duration-700 ease-out ${
              isVisible ? "opacity-100 scale-100" : "opacity-0 scale-0"
            }`}
            style={{ transitionDelay: `${1000 + i * 100}ms` }}
          />
        ))}
      </div>
    </footer>
  )
}
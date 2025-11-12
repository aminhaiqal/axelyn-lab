import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

export function Hero() {
  return (
    <section className="relative overflow-hidden border-b border-zinc-200">
      {/* Sophisticated gradient overlay - iPhone style */}
      <div className="absolute inset-0 bg-gradient-to-b from-zinc-50 via-white to-zinc-50/50" />
      
      {/* Subtle noise texture for depth */}
      <div className="absolute inset-0 opacity-[0.015] mix-blend-multiply">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMDAiIGhlaWdodD0iMzAwIj48ZmlsdGVyIGlkPSJhIiB4PSIwIiB5PSIwIj48ZmVUdXJidWxlbmNlIGJhc2VGcmVxdWVuY3k9Ii43NSIgc3RpdGNoVGlsZXM9InN0aXRjaCIgdHlwZT0iZnJhY3RhbE5vaXNlIi8+PGZlQ29sb3JNYXRyaXggdHlwZT0ic2F0dXJhdGUiIHZhbHVlcz0iMCIvPjwvZmlsdGVyPjxwYXRoIGQ9Ik0wIDBoMzAwdjMwMEgweiIgZmlsdGVyPSJ1cmwoI2EpIiBvcGFjaXR5PSIuMDUiLz48L3N2Zz4=')]" />
      </div>

      <div className="relative mx-auto max-w-7xl px-6 py-24 sm:py-32 lg:px-8 lg:py-40">
        <div className="mx-auto max-w-4xl">
          {/* Refined badge - minimal, clean */}
          <div className="mb-10 flex justify-center animate-fade-in-down">
            <div className="inline-flex items-center gap-2.5 rounded-full border border-zinc-200 bg-white/80 backdrop-blur-sm px-4 py-2 text-sm font-medium text-zinc-700 shadow-sm">
              <span className="relative flex h-1.5 w-1.5">
                {/* Animated ping */}
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#FF5C26] opacity-40" />
                {/* Solid dot */}
                <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-[#FF5C26]" />
              </span>
              <span className="tracking-tight">Based in Malaysia · Built for the world</span>
            </div>
          </div>

          {/* Hero headline - iPhone-style precision */}
          <h1 className="text-center text-5xl font-semibold tracking-[-0.02em] text-zinc-900 sm:text-6xl lg:text-7xl xl:text-8xl animate-fade-in leading-[1.1]">
            Systems that <span className="text-[#FF5C26]">think.</span>
            <br />
            <span className="text-zinc-500">Teams that move.</span>
          </h1>

          <p className="mx-auto mt-8 max-w-2xl text-center text-lg leading-relaxed text-zinc-600 sm:text-xl lg:text-2xl animate-fade-in-up font-normal">
            We build invisible infrastructure. The kind that connects your tools, eliminates manual work, and gives your team time back.
          </p>

          {/* CTA group - sophisticated spacing */}
          <div className="mt-12 flex flex-col items-center justify-center gap-3 sm:flex-row animate-fade-in-up">
            <Button
              size="lg"
              className="group h-12 w-full rounded-full bg-[#FF5C26] px-8 text-base font-medium text-white shadow-lg shadow-[#FF5C26]/20 transition-all hover:bg-[#e14d1f] hover:shadow-xl hover:shadow-[#FF5C26]/30 sm:w-auto"
            >
              Book intro call
              <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-0.5" />
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="h-12 w-full rounded-full border-zinc-300 bg-white/50 backdrop-blur-sm px-8 text-base font-medium text-zinc-900 transition-all hover:bg-[#FF5C26]/10 hover:border-[#FF5C26] hover:text-[#FF5C26] sm:w-auto"
            >
              See case studies
            </Button>
          </div>

          {/* Trust indicator - ultra minimal */}
          <div className="mt-16 flex items-center justify-center gap-6 text-sm text-zinc-400 animate-fade-in-up">
            <div className="flex items-center gap-2">
              <div className="h-px w-8 bg-zinc-200" />
              <span className="font-medium">15-min setup calls</span>
            </div>
            <div className="h-4 w-px bg-zinc-200" />
            <div className="flex items-center gap-2">
              <span className="font-medium">No long-term contracts</span>
              <div className="h-px w-8 bg-zinc-200" />
            </div>
          </div>
        </div>
      </div>

      {/* Bottom fade for seamless transition */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white to-transparent pointer-events-none" />
    </section>
  )
}
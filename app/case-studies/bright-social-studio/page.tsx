"use client"

import Image from "next/image"

export default function BrightSocialStudio() {
  return (
    <section className="border-t border-border/50 py-24 sm:py-32 lg:py-40 bg-background">
      <div className="mx-auto max-w-4xl px-6 lg:px-8">
        {/* Header */}
        <div className="mb-20">
          <p className="text-sm font-medium text-muted-foreground mb-4 tracking-wide uppercase">
            Case Study
          </p>
          <h1 className="text-4xl font-medium tracking-tight text-foreground sm:text-5xl lg:text-6xl leading-tight">
            How a Kuala Lumpur agency reclaimed 10 hours every week
          </h1>
          <p className="mt-6 text-xl text-muted-foreground leading-relaxed">
            Bright Social Studio was drowning in spreadsheets. Now they're not.
          </p>
        </div>

        {/* Story begins */}
        <div className="prose prose-lg max-w-none">
          <div className="space-y-8 text-muted-foreground leading-relaxed">
            <p className="text-lg">
              Every Monday morning started the same way for Nadia.
            </p>
            
            <p>
              She'd open her laptop, pull up Meta Ads Manager, then TikTok Ads, then three different Google Sheets. 
              Copy numbers. Paste them into templates. Format cells. Export PDFs. Send emails to 15 different clients.
            </p>

            <p>
              <span className="text-foreground font-medium">Two to three hours. Every single day.</span>
            </p>

            <p>
              Her team at Bright Social Studio was doing what they were hired to do — manage social campaigns for SMEs across Kuala Lumpur. 
              But instead of creating content or optimizing ads, they were trapped in reporting hell.
            </p>

            <p className="italic border-l-4 border-border pl-6 py-2 text-foreground/80">
              "We knew there had to be a better way. But we're not developers. We didn't know where to start, 
              and we couldn't afford to hire someone full-time just to fix this."
            </p>

            <p>
              That's where Axelyn came in.
            </p>
          </div>

          {/* The Approach */}
          <div className="mt-16 pt-16 border-t border-border/50">
            <h2 className="text-2xl font-medium text-foreground mb-6">
              The approach: No new software. No coding. Just smart connections.
            </h2>
            
            <p className="text-muted-foreground leading-relaxed mb-6">
              Nadia didn't need another tool to learn. She needed her existing tools to talk to each other.
            </p>

            <div className="bg-card border border-border rounded-2xl p-8 my-8">
              <p className="text-sm font-medium text-foreground mb-4">What we built:</p>
              <ul className="space-y-3 text-muted-foreground">
                <li className="flex items-start">
                  <span className="text-foreground mr-3 mt-1">→</span>
                  <span>Connected Meta Ads and TikTok directly to Google Sheets using Make (Integromat)</span>
                </li>
                <li className="flex items-start">
                  <span className="text-foreground mr-3 mt-1">→</span>
                  <span>Set up automatic daily syncs at 6 AM — no manual refreshing</span>
                </li>
                <li className="flex items-start">
                  <span className="text-foreground mr-3 mt-1">→</span>
                  <span>Built a live Looker Studio dashboard pulling real-time data</span>
                </li>
                <li className="flex items-start">
                  <span className="text-foreground mr-3 mt-1">→</span>
                  <span>Automated weekly email delivery — each client gets their report, on schedule, every Monday at 9 AM</span>
                </li>
              </ul>
            </div>

            <p className="text-muted-foreground leading-relaxed">
              The entire system was live in seven days. No code written. No new platforms to learn. Just invisible infrastructure doing the heavy lifting.
            </p>
          </div>

          {/* Visual Showcase */}
          <div className="mt-16 grid grid-cols-1 gap-6 sm:grid-cols-2">
            <div className="rounded-2xl overflow-hidden border border-border bg-card aspect-video flex items-center justify-center">
              <Image
                src="/images/case-study-dashboard.jpg"
                alt="Looker Studio dashboard showing real-time campaign metrics"
                width={600}
                height={400}
                className="object-cover w-full h-full"
              />
            </div>
            <div className="rounded-2xl overflow-hidden border border-border bg-card aspect-video flex items-center justify-center">
              <Image
                src="/images/case-study-workflow.jpg"
                alt="Automated workflow connecting Meta, TikTok, and Google Sheets"
                width={600}
                height={400}
                className="object-cover w-full h-full"
              />
            </div>
          </div>

          {/* The Result */}
          <div className="mt-16 pt-16 border-t border-border/50">
            <h2 className="text-2xl font-medium text-foreground mb-6">
              What changed
            </h2>
            
            <div className="space-y-6 text-muted-foreground leading-relaxed">
              <p>
                Nadia's Monday mornings look different now.
              </p>

              <p>
                She opens her inbox. Fifteen reports are already sitting there — generated overnight, formatted perfectly, 
                sent to clients automatically. What used to take 2–3 hours now takes less than 30 minutes to review and customize if needed.
              </p>

              <div className="bg-card border border-border rounded-2xl p-8 my-8">
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
                  <div>
                    <p className="text-3xl font-medium text-foreground mb-2">80%</p>
                    <p className="text-sm text-muted-foreground">less time on reporting</p>
                  </div>
                  <div>
                    <p className="text-3xl font-medium text-foreground mb-2">Zero</p>
                    <p className="text-sm text-muted-foreground">manual copy-paste errors</p>
                  </div>
                  <div>
                    <p className="text-3xl font-medium text-foreground mb-2">15</p>
                    <p className="text-sm text-muted-foreground">clients automated</p>
                  </div>
                </div>
              </div>

              <p>
                Her team isn't stuck in spreadsheets anymore. They're doing the work they were hired to do — creating campaigns, 
                testing creatives, growing their clients' brands.
              </p>

              <p className="italic border-l-4 border-border pl-6 py-2 text-foreground/80">
                "I didn't think automation was for small agencies like us. I thought it was expensive, complicated, 
                or required a tech team. Turns out, we just needed someone who understood our workflow and knew how to connect the dots."
              </p>
            </div>
          </div>

          {/* Project Details */}
          <div className="mt-16 pt-16 border-t border-border/50">
            <h3 className="text-xl font-medium text-foreground mb-6">Project snapshot</h3>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              <div className="rounded-2xl border border-border p-6 text-center">
                <p className="text-2xl font-medium text-foreground">RM 1,200</p>
                <p className="text-sm text-muted-foreground mt-2">Total investment</p>
              </div>
              <div className="rounded-2xl border border-border p-6 text-center">
                <p className="text-2xl font-medium text-foreground">7 Days</p>
                <p className="text-sm text-muted-foreground mt-2">From kickoff to live</p>
              </div>
              <div className="rounded-2xl border border-border p-6 text-center">
                <p className="text-2xl font-medium text-foreground">10+ hrs</p>
                <p className="text-sm text-muted-foreground mt-2">Saved every week</p>
              </div>
            </div>
          </div>

          {/* CTA */}
          <div className="mt-20 pt-16 border-t border-border/50 text-center">
            <h3 className="text-2xl font-medium text-foreground mb-4">
              Your team shouldn't waste time on work a system could do.
            </h3>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
              If you're losing hours to manual processes, disconnected tools, or repetitive admin work — 
              let's talk about what automation could look like for you.
            </p>
            <a
              href="#contact"
              className="inline-flex items-center justify-center rounded-xl border border-border bg-foreground px-8 py-4 text-background text-base font-medium transition-all hover:bg-foreground/90 hover:scale-105"
            >
              Book a free intro call
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
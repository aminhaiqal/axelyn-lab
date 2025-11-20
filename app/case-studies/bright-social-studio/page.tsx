"use client"

import Image from "next/image"
import { useState } from "react"
import { ArrowLeft, ChevronDown, ChevronUp } from "lucide-react"
import { Dialog, DialogContent } from "@/components/ui/dialog";

export default function BrightSocialStudio() {
  const [expandedSections, setExpandedSections] = useState<string[]>([])
  const [previewImage, setPreviewImage] = useState<string | null>(null);

  const toggleSection = (section: string) => {
    setExpandedSections(prev =>
      prev.includes(section)
        ? prev.filter(s => s !== section)
        : [...prev, section]
    )
  }

  return (
    <section className="border-t border-border/50 py-24 bg-background">
      <div className="border-b border-border/50 bg-background/80 backdrop-blur-sm sticky top-0 z-10">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="flex items-center h-16">
            <button 
              onClick={() => window.history.back()}
              className="inline-flex items-center gap-2 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors group"
            >
              <ArrowLeft className="w-4 h-4 transition-transform group-hover:-translate-x-1" />
              <span>Back to home</span>
            </button>
          </div>
        </div>
      </div>
      <div className="mx-auto max-w-4xl px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="mb-12">
          <p className="text-sm font-medium text-muted-foreground mb-4 tracking-wide uppercase">
            Example Case Study
          </p>
          <h1 className="text-4xl font-medium tracking-tight text-foreground sm:text-5xl lg:text-6xl leading-tight">
            How a KL social media agency reclaimed 10 hours every week
          </h1>
          <p className="mt-6 text-lg text-muted-foreground leading-relaxed">
            Representative example based on real automation workflows we've built for Malaysian agencies. Outcomes are actual, details are anonymized.
          </p>
        </div>

        {/* Results Summary - Hero Section */}
        <div className="bg-gradient-to-br from-foreground to-foreground/90 text-background rounded-3xl p-8 sm:p-12 mb-12">
          <p className="text-sm font-medium mb-6 opacity-90 uppercase tracking-wide">The Outcome</p>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 sm:gap-8">
            <div>
              <p className="text-4xl font-bold mb-2">80%</p>
              <p className="text-sm opacity-90">Time saved on reporting</p>
            </div>
            <div>
              <p className="text-4xl font-bold mb-2">10+</p>
              <p className="text-sm opacity-90">Hours saved weekly</p>
            </div>
            <div>
              <p className="text-4xl font-bold mb-2">15</p>
              <p className="text-sm opacity-90">Clients automated</p>
            </div>
            <div>
              <p className="text-4xl font-bold mb-2">0</p>
              <p className="text-sm opacity-90">Manual errors</p>
            </div>
          </div>
          <div className="mt-8 pt-8 border-t border-background/20">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-sm">
              <div>
                <span className="opacity-75">Investment:</span>
                <span className="font-semibold ml-2">RM 2,200</span>
              </div>
              <div>
                <span className="opacity-75">Timeline:</span>
                <span className="font-semibold ml-2">7 days</span>
              </div>
              <div>
                <span className="opacity-75">ROI:</span>
                <span className="font-semibold ml-2">Paid back in 5 weeks</span>
              </div>
            </div>
          </div>
        </div>

        {/* CTA #1 - After Hero */}
        <div className="mb-16 text-center bg-muted/30 border border-border rounded-2xl p-8">
          <p className="text-lg text-foreground font-medium mb-4">
            Want similar results for your team?
          </p>
          <a
            href="mailto:aminh@axelyn.com?subject=Interested in Automation&body=Hi aminh, I'm interested in learning how Axelyn can help automate our workflows."
            className="inline-flex items-center justify-center rounded-xl bg-foreground px-8 py-4 text-background text-base font-semibold transition-all hover:bg-foreground/90 hover:scale-105 shadow-lg"
          >
            Book a Free 15-Min Audit
          </a>
          <p className="text-sm text-muted-foreground mt-4">
            No sales pitch. Just honest assessment of what's possible for your workflow.
          </p>
        </div>

        {/* The Story - Human Context */}
        <div className="mb-16">
          <h2 className="text-2xl font-medium text-foreground mb-6">The Reality Before Automation</h2>
          <div className="space-y-4 text-muted-foreground leading-relaxed">
            <p>
              Every Monday morning, Nadia (agency owner) would open her laptop and start the same exhausting routine: 
              Meta Ads Manager, TikTok Ads, three different Google Sheets. Copy numbers. Paste. Format. Export. Email. 
              <span className="text-foreground font-medium"> Two to three hours, every single day.</span>
            </p>
            <p>
              Her 6-person team was managing 15 clients across Meta and TikTok—but they spent more time building reports 
              than optimizing campaigns. The work they were hired to do (strategy, creative, growth) was being crushed 
              under the weight of manual admin.
            </p>
            <p className="italic border-l-4 border-border pl-6 py-2 text-foreground/80">
              "We knew there had to be a better way. But we're not developers. We didn't know where to start, 
              and we couldn't afford to hire someone full-time."
            </p>
          </div>
        </div>

        {/* Before/After Table */}
        <div className="mb-16">
          <h2 className="text-2xl font-medium text-foreground mb-8">Before vs After</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {/* Before Column */}
            <div className="rounded-2xl border-2 border-red-200 dark:border-red-900/30 bg-red-50/50 dark:bg-red-950/10 p-6">
              <div className="flex items-center gap-2 mb-4">
                <span className="text-2xl">❌</span>
                <h3 className="text-lg font-semibold text-foreground">Before</h3>
              </div>
              <ul className="space-y-3 text-sm text-muted-foreground">
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>2-3 hours daily on manual reporting</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>Copy-paste between 5+ different tools</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>Frequent formatting & calculation errors</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>Reports sent manually to each client</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>No real-time performance visibility</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>Team burned out on admin work</span>
                </li>
              </ul>
            </div>

            {/* After Column */}
            <div className="rounded-2xl border-2 border-green-200 dark:border-green-900/30 bg-green-50/50 dark:bg-green-950/10 p-6">
              <div className="flex items-center gap-2 mb-4">
                <span className="text-2xl">✅</span>
                <h3 className="text-lg font-semibold text-foreground">After</h3>
              </div>
              <ul className="space-y-3 text-sm text-muted-foreground">
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>30 minutes weekly review time</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>Automatic data sync from all platforms</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>Zero manual errors or inconsistencies</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>Reports auto-generated & emailed</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>Live dashboard accessible 24/7</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>Team focused on strategy & creative</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* The Solution - Core System */}
        <div className="mb-16">
          <h2 className="text-2xl font-medium text-foreground mb-6">The Solution: Connected Infrastructure</h2>
          <p className="text-muted-foreground mb-8 leading-relaxed">
            We didn't build new software. We connected their existing tools into one seamless system that runs automatically.
          </p>

          {/* Architecture Flow */}
          <div className="bg-card border border-border rounded-2xl p-8 mb-8">
            <p className="text-sm font-medium text-foreground mb-6 uppercase tracking-wide">System Architecture</p>
            <div className="space-y-6 font-mono text-sm">
              <div className="flex items-center gap-3">
                <div className="bg-blue-100 dark:bg-blue-950 border border-blue-300 dark:border-blue-800 rounded px-3 py-2 text-blue-900 dark:text-blue-100 flex-1">
                  Meta Ads API
                </div>
                <span className="text-muted-foreground">→</span>
                <div className="bg-blue-100 dark:bg-blue-950 border border-blue-300 dark:border-blue-800 rounded px-3 py-2 text-blue-900 dark:text-blue-100 flex-1">
                  TikTok Ads API
                </div>
              </div>
              
              <div className="text-center text-muted-foreground text-xs">
                ↓ Daily sync at 6:00 AM
              </div>
              
              <div className="bg-foreground text-background rounded px-3 py-2 text-center font-semibold">
                Make.com (Automation Layer)
              </div>
              
              <div className="text-center text-muted-foreground text-xs">
                ↓ Data transformation & normalization
              </div>
              
              <div className="bg-green-100 dark:bg-green-950 border border-green-300 dark:border-green-800 rounded px-3 py-2 text-green-900 dark:text-green-100 text-center">
                Google Sheets (Central Database)
              </div>
              
              <div className="text-center text-muted-foreground text-xs">
                ↓ Live connection
              </div>
              
              <div className="grid grid-cols-2 gap-3">
                <div className="bg-purple-100 dark:bg-purple-950 border border-purple-300 dark:border-purple-800 rounded px-3 py-2 text-purple-900 dark:text-purple-100 text-center text-xs">
                  Looker Studio<br/>Dashboard
                </div>
                <div className="bg-purple-100 dark:bg-purple-950 border border-purple-300 dark:border-purple-800 rounded px-3 py-2 text-purple-900 dark:text-purple-100 text-center text-xs">
                  Automated<br/>Email Reports
                </div>
              </div>
            </div>

            <div className="mt-6 pt-6 border-t border-border">
              <p className="text-xs text-muted-foreground">
                <span className="font-medium text-foreground">Error Handling:</span> Built-in retry logic, 
                Slack alerts on failures, automatic fallback to cached data if sync fails
              </p>
            </div>
          </div>

          {/* What We Delivered */}
          <div className="space-y-3">
            <div className="border border-border rounded-xl p-5 hover:border-foreground/50 transition-colors">
              <h3 className="font-semibold text-foreground mb-2">Multi-Platform Data Integration</h3>
              <p className="text-sm text-muted-foreground">
                Daily automated syncs pulling spend, impressions, clicks, conversions, and ROAS from Meta and TikTok
              </p>
            </div>
            <div className="border border-border rounded-xl p-5 hover:border-foreground/50 transition-colors">
              <h3 className="font-semibold text-foreground mb-2">Live 4-Page Looker Studio Dashboard</h3>
              <p className="text-sm text-muted-foreground">
                Performance Overview • Client Breakdown • Optimization Insights • Automated Alerts
              </p>
            </div>
            <div className="border border-border rounded-xl p-5 hover:border-foreground/50 transition-colors">
              <h3 className="font-semibold text-foreground mb-2">Automated Weekly Reporting</h3>
              <p className="text-sm text-muted-foreground">
                Client-specific reports auto-generated and emailed every Monday at 9 AM
              </p>
            </div>
          </div>
        </div>

        {/* Why Axelyn Section */}
        <div className="mb-16">
          <h2 className="text-2xl font-medium text-foreground mb-6">Why Axelyn Was the Right Fit</h2>
          <p className="text-muted-foreground mb-6 leading-relaxed">
            A freelancer on Upwork could connect APIs. But this project needed more than technical execution—it needed systems thinking.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="bg-card border border-border rounded-xl p-5">
              <p className="font-medium text-foreground mb-2">✓ Agency-Specific Experience</p>
              <p className="text-sm text-muted-foreground">
                We've built reporting systems for 10+ agencies. We know Meta API quirks, TikTok data inconsistencies, and how agencies actually work.
              </p>
            </div>
            <div className="bg-card border border-border rounded-xl p-5">
              <p className="font-medium text-foreground mb-2">✓ Hybrid No-Code + Code Approach</p>
              <p className="text-sm text-muted-foreground">
                Started with Make.com (no-code), added custom JavaScript for edge cases. Best of both worlds.
              </p>
            </div>
            <div className="bg-card border border-border rounded-xl p-5">
              <p className="font-medium text-foreground mb-2">✓ Local Support & Fast Turnaround</p>
              <p className="text-sm text-muted-foreground">
                Based in KL. Same timezone. Speak your language. Live in 7 days, not weeks.
              </p>
            </div>
            <div className="bg-card border border-border rounded-xl p-5">
              <p className="font-medium text-foreground mb-2">✓ Complete Documentation</p>
              <p className="text-sm text-muted-foreground">
                Every workflow documented. Team trained. No "black box" systems that only we understand.
              </p>
            </div>
          </div>
        </div>

        {/* Data Security */}
        <div className="mb-16">
          <h2 className="text-2xl font-medium text-foreground mb-6">Data Security & Privacy</h2>
          <div className="bg-card border border-border rounded-2xl p-6">
            <ul className="space-y-3 text-sm text-muted-foreground">
              <li className="flex items-start">
                <span className="text-foreground mr-3">✓</span>
                <span><span className="font-medium text-foreground">No data stored on Axelyn servers.</span> All data flows through client-controlled accounts.</span>
              </li>
              <li className="flex items-start">
                <span className="text-foreground mr-3">✓</span>
                <span><span className="font-medium text-foreground">OAuth tokens handled by Make.com.</span> We never see or store API credentials.</span>
              </li>
              <li className="flex items-start">
                <span className="text-foreground mr-3">✓</span>
                <span><span className="font-medium text-foreground">No third-party servers involved.</span> Direct platform-to-platform connections only.</span>
              </li>
              <li className="flex items-start">
                <span className="text-foreground mr-3">✓</span>
                <span><span className="font-medium text-foreground">Client owns everything.</span> Full control of Google Sheets, dashboards, and automation accounts.</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Collapsible Advanced Sections */}
        <div className="mb-16 space-y-4">
          {/* Technical Challenges */}
          <div className="border border-border rounded-xl overflow-hidden">
            <button
              onClick={() => toggleSection('challenges')}
              className="w-full flex items-center justify-between p-6 hover:bg-muted/50 transition-colors"
            >
              <h3 className="text-lg font-medium text-foreground">Technical Challenges & Solutions</h3>
              {expandedSections.includes('challenges') ? (
                <ChevronUp className="w-5 h-5 text-muted-foreground" />
              ) : (
                <ChevronDown className="w-5 h-5 text-muted-foreground" />
              )}
            </button>
            {expandedSections.includes('challenges') && (
              <div className="px-6 pb-6 space-y-4 border-t border-border pt-6">
                <div className="border-l-4 border-foreground pl-4 py-2">
                  <p className="font-medium text-foreground mb-1">Meta API rate limits during peak hours</p>
                  <p className="text-sm text-muted-foreground">
                    <span className="font-medium">Solution:</span> Scheduled syncs at 6 AM (off-peak) with exponential backoff retry logic
                  </p>
                </div>
                <div className="border-l-4 border-foreground pl-4 py-2">
                  <p className="font-medium text-foreground mb-1">TikTok data format inconsistencies</p>
                  <p className="text-sm text-muted-foreground">
                    <span className="font-medium">Solution:</span> Custom JavaScript transformation layer to normalize metrics before dashboard ingestion
                  </p>
                </div>
                <div className="border-l-4 border-foreground pl-4 py-2">
                  <p className="font-medium text-foreground mb-1">Client-specific reporting requirements</p>
                  <p className="text-sm text-muted-foreground">
                    <span className="font-medium">Solution:</span> Template system with dynamic filtering—one dashboard, personalized outputs per client
                  </p>
                </div>
              </div>
            )}
          </div>

          {/* Reliability Metrics */}
          <div className="border border-border rounded-xl overflow-hidden">
            <button
              onClick={() => toggleSection('reliability')}
              className="w-full flex items-center justify-between p-6 hover:bg-muted/50 transition-colors"
            >
              <h3 className="text-lg font-medium text-foreground">System Reliability & Monitoring</h3>
              {expandedSections.includes('reliability') ? (
                <ChevronUp className="w-5 h-5 text-muted-foreground" />
              ) : (
                <ChevronDown className="w-5 h-5 text-muted-foreground" />
              )}
            </button>
            {expandedSections.includes('reliability') && (
              <div className="px-6 pb-6 border-t border-border pt-6">
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                  <div>
                    <p className="text-2xl font-medium text-foreground mb-2">&gt;99%</p>
                    <p className="text-sm text-muted-foreground mb-2">System uptime</p>
                    <p className="text-xs text-muted-foreground">Automated health checks every 6 hours</p>
                  </div>
                  <div>
                    <p className="text-2xl font-medium text-foreground mb-2">&lt;30min</p>
                    <p className="text-sm text-muted-foreground mb-2">Average fix time</p>
                    <p className="text-xs text-muted-foreground">Local support responds same-day</p>
                  </div>
                  <div>
                    <p className="text-2xl font-medium text-foreground mb-2">Minimal</p>
                    <p className="text-sm text-muted-foreground mb-2">Issues over 6 months</p>
                    <p className="text-xs text-muted-foreground">Most resolved before client noticed</p>
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Dashboard Preview */}
          <div className="border border-border rounded-xl overflow-hidden">
            <button
              onClick={() => toggleSection('dashboard')}
              className="w-full flex items-center justify-between p-6 hover:bg-muted/50 transition-colors"
            >
              <h3 className="text-lg font-medium text-foreground">Dashboard Screenshots</h3>
              {expandedSections.includes('dashboard') ? (
                <ChevronUp className="w-5 h-5 text-muted-foreground" />
              ) : (
                <ChevronDown className="w-5 h-5 text-muted-foreground" />
              )}
            </button>

            {expandedSections.includes('dashboard') && (
              <div className="px-6 pb-6 border-t border-border pt-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">

                  {/* Screenshot 1 */}
                  <button
                    onClick={() => setPreviewImage("/images/Axelyn_Bright_Social_Studio_page1.jpg")}
                    className="rounded-xl overflow-hidden border border-border bg-muted"
                  >
                    <Image
                      src="/images/Axelyn_Bright_Social_Studio_page1.jpg"
                      alt="Performance Overview"
                      width={1200}
                      height={800}
                      className="w-full h-auto"
                    />
                  </button>

                  {/* Screenshot 2 */}
                  <button
                    onClick={() => setPreviewImage("/images/Axelyn_Bright_Social_Studio_page2.jpg")}
                    className="rounded-xl overflow-hidden border border-border bg-muted"
                  >
                    <Image
                      src="/images/Axelyn_Bright_Social_Studio_page2.jpg"
                      alt="Client Breakdown"
                      width={1200}
                      height={800}
                      className="w-full h-auto"
                    />
                  </button>

                </div>

                {/* Footnote */}
                <p className="text-xs text-muted-foreground mt-4 italic">
                  *These screenshots are previews from the Axelyn Bright Social Studio dashboard.
                </p>
              </div>
            )}

            {/* FULL IMAGE PREVIEW MODAL */}
            <Dialog open={!!previewImage} onOpenChange={() => setPreviewImage(null)}>
              <DialogContent className="max-w-4xl">
                {previewImage && (
                  <Image
                    src={previewImage}
                    alt="Full Preview"
                    width={1600}
                    height={1200}
                    className="w-full h-auto rounded-lg"
                  />
                )}
              </DialogContent>
            </Dialog>
          </div>

          {/* Scalability Roadmap */}
          <div className="border border-border rounded-xl overflow-hidden">
            <button
              onClick={() => toggleSection('scalability')}
              className="w-full flex items-center justify-between p-6 hover:bg-muted/50 transition-colors"
            >
              <h3 className="text-lg font-medium text-foreground">Future Expansion Options</h3>
              {expandedSections.includes('scalability') ? (
                <ChevronUp className="w-5 h-5 text-muted-foreground" />
              ) : (
                <ChevronDown className="w-5 h-5 text-muted-foreground" />
              )}
            </button>
            {expandedSections.includes('scalability') && (
              <div className="px-6 pb-6 border-t border-border pt-6">
                <p className="text-sm text-muted-foreground mb-4">
                  The foundation can grow with the agency. Here's what can be added:
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div className="bg-muted/50 border border-border rounded-lg p-4">
                    <p className="font-medium text-foreground text-sm mb-1">Google Ads Integration</p>
                    <p className="text-xs text-muted-foreground">Add another platform in 1-2 days</p>
                  </div>
                  <div className="bg-muted/50 border border-border rounded-lg p-4">
                    <p className="font-medium text-foreground text-sm mb-1">Client Self-Service Portal</p>
                    <p className="text-xs text-muted-foreground">Direct dashboard access for clients</p>
                  </div>
                  <div className="bg-muted/50 border border-border rounded-lg p-4">
                    <p className="font-medium text-foreground text-sm mb-1">Predictive Alerts</p>
                    <p className="text-xs text-muted-foreground">ML-based performance warnings</p>
                  </div>
                  <div className="bg-muted/50 border border-border rounded-lg p-4">
                    <p className="font-medium text-foreground text-sm mb-1">Budget Optimization</p>
                    <p className="text-xs text-muted-foreground">Smart spend allocation across campaigns</p>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Testimonial */}
        <div className="mb-16">
          <div className="bg-gradient-to-br from-card to-muted/20 border border-border rounded-2xl p-8">
            <p className="text-lg text-foreground leading-relaxed italic mb-4">
              "I didn't think automation was for small agencies like us. I thought it was expensive, complicated, 
              or required a tech team. Turns out, we just needed someone who understood our workflow and knew how to connect the dots."
            </p>
            <p className="text-sm text-muted-foreground">— Agency Owner, KL</p>
          </div>
        </div>

        {/* Investment Breakdown */}
        <div className="mb-16">
          <h2 className="text-2xl font-medium text-foreground mb-6">Investment vs Value</h2>
          <div className="bg-card border-2 border-foreground/20 rounded-2xl p-8">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
              <div>
                <p className="text-sm font-medium text-muted-foreground mb-4 uppercase tracking-wide">One-Time Investment</p>
                <p className="text-4xl font-bold text-foreground mb-2">RM 2,200</p>
                <ul className="text-sm text-muted-foreground space-y-2">
                  <li>• 7-day build & deployment</li>
                  <li>• Complete documentation</li>
                  <li>• Team training included</li>
                  <li>• 30-day support included</li>
                </ul>
              </div>
              <div>
                <p className="text-sm font-medium text-muted-foreground mb-4 uppercase tracking-wide">Annual Value Delivered</p>
                <p className="text-4xl font-bold text-foreground mb-2">RM 52,000+</p>
                <ul className="text-sm text-muted-foreground space-y-2">
                  <li>• 520 hours saved per year</li>
                  <li>• @ RM 100/hour = RM 52,000</li>
                  <li>• Zero manual errors</li>
                  <li>• Better client satisfaction</li>
                </ul>
              </div>
            </div>
            <div className="mt-8 pt-6 border-t border-border text-center">
              <p className="text-sm text-muted-foreground">
                <span className="font-semibold text-foreground">ROI: 2,264%</span> • System paid for itself in 5 weeks
              </p>
            </div>
          </div>
        </div>

        {/* Final CTA */}
        <div className="pt-12 border-t border-border/50">
          <div className="text-center max-w-2xl mx-auto">
            <h2 className="text-3xl font-medium text-foreground mb-4">
              Stop wasting 10+ hours a week on work a system should do
            </h2>
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              Most teams aren't slow because they lack talent—they're slow because their tools don't talk to each other. 
              We fix that in 7 days or less.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <a
                href="mailto:aminh@axelyn.com?subject=Interested in Automation&body=Hi aminh, I'm interested in learning how Axelyn can help automate our workflows."
                className="inline-flex items-center justify-center rounded-xl bg-foreground px-8 py-4 text-background text-base font-semibold transition-all hover:bg-foreground/90 hover:scale-105 shadow-lg"
              >
                Book a Free 15-Min Audit
              </a>
              <a
                href="#packages"
                className="inline-flex items-center justify-center rounded-xl border-2 border-border px-8 py-4 text-foreground text-base font-medium transition-all hover:border-foreground hover:bg-muted"
              >
                See Packages & Pricing
              </a>
            </div>
            <p className="text-sm text-muted-foreground mt-6">
              No sales pitch. Just a quick look at your workflow + honest assessment of what's possible.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
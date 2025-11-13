"use client"

import { Check, X } from "lucide-react"

export function Comparison() {
  const comparisons = [
    {
      aspect: "Reliability",
      freelancer: "Built once, hope it works",
      axelyn: "Monitored, tested & improved continuously"
    },
    {
      aspect: "Support",
      freelancer: "Disappears when issues arise",
      axelyn: "Local support & ongoing maintenance"
    },
    {
      aspect: "Documentation",
      freelancer: "Minimal or no handover",
      axelyn: "Complete documentation & training"
    },
    {
      aspect: "Longevity",
      freelancer: "Workflows degrade over time",
      axelyn: "Lasting reliability with monitoring"
    },
    {
      aspect: "Availability",
      freelancer: "Time zone delays, slow responses",
      axelyn: "Based in KL, same-day support"
    }
  ]

  return (
    <section className="py-24 bg-gradient-to-b from-white to-gray-50">
      <div className="container mx-auto px-6 max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">
            Not Your Average Freelancer
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            We're not a freelancer on Upwork. Here's why that matters.
          </p>
        </div>

        <div className="bg-white rounded-2xl shadow-xl overflow-hidden border border-gray-100">
          {/* Header */}
          <div className="grid grid-cols-3 bg-gray-50 border-b border-gray-200">
            <div className="p-6"></div>
            <div className="p-6 text-center bg-blue-50 border-r border-gray-200">
              <h3 className="font-semibold text-blue-900">Axelyn</h3>
            </div>
            <div className="p-6 text-center">
              <h3 className="font-semibold text-gray-600">Generic Freelancer</h3>
            </div>
          </div>

          {/* Comparison Rows */}
          {comparisons.map((item, index) => (
            <div
              key={index}
              className={`grid grid-cols-3 ${
                index !== comparisons.length - 1 ? "border-b border-gray-100" : ""
              }`}
            >
              <div className="p-6 font-medium text-gray-900 flex items-center">
                {item.aspect}
              </div>

              {/* Axelyn */}
              <div className="p-6 bg-blue-50/30 border-r border-gray-100 flex items-start gap-3">
                <Check className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                <span className="text-gray-900">{item.axelyn}</span>
              </div>

              {/* Freelancer */}
              <div className="p-6 flex items-start gap-3">
                <X className="w-5 h-5 text-red-500 flex-shrink-0 mt-0.5" />
                <span className="text-gray-600">{item.freelancer}</span>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Message */}
        <div className="mt-12 text-center">
          <p className="text-lg text-gray-700 max-w-3xl mx-auto">
            <span className="font-semibold">Local reliability matters.</span> We're based in KL, speak your language (literally and figuratively), and understand Malaysian business contexts. When something breaks at 3pm on a deadline day, we're here.
          </p>
        </div>
      </div>
    </section>
  )
}

import { Clock, TrendingUp, DollarSign } from "lucide-react"

const benefits = [
  {
    icon: Clock,
    title: "Fast Delivery",
    description:
      "Projects done in 1–3 days. We move quickly without compromising quality, getting you results when you need them most.",
  },
  {
    icon: TrendingUp,
    title: "Practical Results",
    description:
      "Solutions that show measurable time savings. Every automation we build is designed to deliver tangible business value.",
  },
  {
    icon: DollarSign,
    title: "Transparent Pricing",
    description:
      "Fixed rates and clear scope. No hidden fees, no surprises — just honest pricing and straightforward communication.",
  },
]

export function WhyChoose() {
  return (
    <section className="border-b border-border bg-background py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-balance text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
            Why Businesses Choose Axelyn
          </h2>
        </div>

        <div className="mx-auto mt-16 grid max-w-5xl grid-cols-1 gap-12 md:grid-cols-3">
          {benefits.map((benefit, index) => (
            <div
              key={benefit.title}
              className="text-center animate-fade-in-up"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="mx-auto mb-6 inline-flex h-16 w-16 items-center justify-center rounded-2xl bg-accent/10 text-accent">
                <benefit.icon className="h-8 w-8" />
              </div>
              <h3 className="mb-4 text-xl font-semibold text-foreground">{benefit.title}</h3>
              <p className="text-pretty leading-relaxed text-muted-foreground">{benefit.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

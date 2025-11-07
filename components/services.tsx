import { Zap, Link2, MessageSquare, Wrench } from "lucide-react"

const services = [
  {
    icon: Zap,
    title: "Workflow Automation",
    description:
      "Eliminate repetitive work using scripts or no-code tools. Let automation handle the mundane so your team can focus on what matters.",
  },
  {
    icon: Link2,
    title: "API Integration",
    description:
      "Connect your systems for seamless data flow. From CRMs to payment processors, we make your tools work together effortlessly.",
  },
  {
    icon: MessageSquare,
    title: "Chatbots and Auto Replies",
    description:
      "Set up WhatsApp or Telegram bots for 24/7 engagement. Respond to customers instantly and save your staff valuable time.",
  },
  {
    icon: Wrench,
    title: "Website Fix and Optimization",
    description:
      "Quick repairs and performance improvements. Get your site running smoothly with fast turnaround times.",
  },
]

export function Services() {
  return (
    <section className="border-b border-border bg-background py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-balance text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
            Our Expertise
          </h2>
        </div>

        <div className="mx-auto mt-16 grid max-w-6xl grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((service, index) => (
            <div
              key={service.title}
              className="group relative rounded-2xl border border-border bg-card p-8 transition-all duration-300 hover:border-accent/50 hover:shadow-lg animate-fade-in-up"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-secondary text-foreground transition-colors group-hover:bg-accent group-hover:text-accent-foreground">
                <service.icon className="h-6 w-6" />
              </div>
              <h3 className="mb-3 text-lg font-semibold text-foreground">{service.title}</h3>
              <p className="text-pretty leading-relaxed text-muted-foreground">{service.description}</p>
            </div>
          ))}
        </div>

        <div className="mx-auto mt-12 max-w-3xl text-center">
          <p className="text-pretty text-lg leading-relaxed text-muted-foreground">
            All projects are designed to be practical, fast, and affordable — delivering impact within days, not weeks.
          </p>
        </div>
      </div>
    </section>
  )
}

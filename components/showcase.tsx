import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

const projects = [
  {
    title: "WhatsApp Reminder Bot",
    description:
      "Automatically sends client reminders from Google Sheets. No more manual follow-ups, just set it and forget it.",
  },
  {
    title: "Stripe to Notion Integration",
    description:
      "Keeps CRM updated automatically after each payment. Real-time sync between your payment system and customer database.",
  },
  {
    title: "Customer FAQ Chatbot",
    description:
      "Responds to questions instantly and saves staff time. Handle common inquiries 24/7 without human intervention.",
  },
]

export function Showcase() {
  return (
    <section className="border-b border-border bg-secondary/30 py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-balance text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
            Recent Projects
          </h2>
        </div>

        <div className="mx-auto mt-16 grid max-w-5xl grid-cols-1 gap-8 md:grid-cols-3">
          {projects.map((project, index) => (
            <div
              key={project.title}
              className="group rounded-2xl border border-border bg-card p-8 transition-all duration-300 hover:border-accent/50 hover:shadow-lg animate-fade-in-up"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-lg bg-accent/10 text-accent">
                <div className="h-2 w-2 rounded-full bg-accent" />
              </div>
              <h3 className="mb-3 text-xl font-semibold text-foreground">{project.title}</h3>
              <p className="text-pretty leading-relaxed text-muted-foreground">{project.description}</p>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <Button variant="outline" className="group bg-transparent">
            {"Let's talk"}
            <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
          </Button>
        </div>
      </div>
    </section>
  )
}

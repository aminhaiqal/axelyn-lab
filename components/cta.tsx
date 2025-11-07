import { Button } from "@/components/ui/button"
import { Mail, Send } from "lucide-react"

export function CTA() {
  return (
    <section className="border-b border-border bg-background py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-balance text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
            {"Let's Build Your Next Automation"}
          </h2>
          <p className="mt-6 text-pretty text-lg leading-relaxed text-muted-foreground">
            Whether you need a quick tech fix or a long-term automation system, Axelyn is ready to help. Get in touch
            today and let's discuss how we can streamline your operations.
          </p>

          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Button size="lg" className="w-full sm:w-auto">
              Book a Free Consultation
            </Button>
            <Button size="lg" variant="outline" className="w-full sm:w-auto bg-transparent">
              <Send className="mr-2 h-4 w-4" />
              DM @axelyn.tech
            </Button>
            <Button size="lg" variant="outline" className="w-full sm:w-auto bg-transparent">
              <Mail className="mr-2 h-4 w-4" />
              Email hello@axelyn.tech
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}

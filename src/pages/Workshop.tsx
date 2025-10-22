import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  CalendarClock,
  Clock,
  Sparkles,
  FileText,
  Users,
  Building2,
  Monitor,
  ReceiptEuro,
  PiggyBank,
} from "lucide-react";
import { Link } from "react-router-dom";

const modules = [
  {
    title: "Session 1 — Master AI Architecture, Agent Workflows & Refactoring",
    summary:
      "Set up the full meeting companion pipeline end-to-end so audio reliably lands as structured transcripts you can build on.",
    bullets: [
      "Clone the starter repo, configure credentials, and map the architecture your team will ship with.",
      "Apply agent vs workflow patterns so your meeting companion reacts predictably for your users.",
      "Wire up the LLM connections and environment management your meeting companion relies on.",
      "Refactor your codebase on the spot with vibe-coding and specification-driven development so it stays adaptable.",
    ],
  },
  {
    title: "Session 2 — Deliver Meeting Intelligence & Plan Future AI Upgrades",
    summary:
      "Layer automation, guardrails, and deployment steps so your first AI companion is ready for your users.",
    bullets: [
      "Master the core AI patterns from the workshop so you can reuse them safely on your own features.",
      "Build agentic tools into your meeting companion so it gets smarter with every release.",
      "Design prompts, guardrails, and fast evaluation loops that keep meeting notes grounded in the transcript.",
      "Explore additional AI concepts you can layer in after the cohort to keep shipping improvements.",
    ],
  },
];

const bonuses = [
  {
    title: "Workshop Starter Repo",
    description:
      "The same meeting companion codebase we configure together, including the transcription pipeline and agent workflow scaffolding.",
  },
  {
    title: "Prompt & Workflow Templates",
    description:
      "Copyable prompts, guardrail patterns, and workflow snippets used in the live build so you can adapt them to your stack immediately.",
  },
  {
    title: "Session Replays",
    description: "Recordings of both live sessions so you can review the walkthroughs and share them with teammates.",
  },
  {
    title: "Slack & Office Hours",
    description:
      "Access to the private Slack channel plus follow-up office hours for troubleshooting once you apply the patterns on your own builds.",
  },
];

const facilitators = [
  {
    name: "Sven Malvik",
    role: "Principal Platform Engineer • Head of Core AI, Vipps MobilePay",
    bio: "Three decades shipping software across cloud and native stacks, now focused on helping teams adopt generative AI across European enterprises.",
    highlights: [
      "Creator of the macOS AI meeting companion used as the workshop case study",
      "Former Microsoft Azure MVP and author of “Mastering Azure API Management”",
      "Public speaker at Microsoft Build, NDC, JavaZone, and more",
      "Leads the Core AI team at Vipps MobilePay with a mandate to ship reliable AI features",
      "30 years of hands-on software engineering across native, cloud, and AI platforms",
    ],
  },
  {
    name: "Guest AI Engineer",
    role: "Generative AI Specialist",
    bio: "Brings deep experience in structured outputs, evaluation harnesses, and agent design.",
  },
];

const Workshop = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <div className="bg-background/90 border-b border-border/60 backdrop-blur">
        <div className="container mx-auto px-4 py-3 flex items-center justify-between text-sm">
          <Link to="/" className="font-semibold tracking-tight text-foreground hover:text-primary transition-colors">
            Vissper — Return to Product Home
          </Link>
        </div>
      </div>
      <section className="relative overflow-hidden bg-gradient-to-br from-background via-background to-primary/10">
        <div className="absolute inset-0">
          <div className="absolute -top-32 -right-32 h-96 w-96 rounded-full bg-primary/30 blur-3xl"></div>
          <div className="absolute bottom-0 left-1/2 h-[600px] w-[600px] -translate-x-1/2 translate-y-1/4 rounded-full bg-accent/20 blur-[220px]"></div>
        </div>

        <div className="relative z-10 container mx-auto px-4 py-24 md:py-32">
          <div className="max-w-4xl mx-auto text-center space-y-8 animate-fade-in">
            <span className="inline-flex items-center gap-2 rounded-full border border-primary/40 bg-primary/10 px-4 py-2 text-sm font-semibold text-primary backdrop-blur">
              <CalendarClock className="h-4 w-4" />
              Live build-along: Ship your first AI companion
            </span>
            <h1 className="text-4xl md:text-6xl font-black leading-tight tracking-tight">
              Build a Smart AI Meeting Companion Together.
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
              A practical workshop where I show exactly how a smart AI meeting companion comes together, step by step. Ideal for developers who have not yet
              shipped their own AI agents or workflows but want to learn the patterns from an end-to-end applied build.
            </p>
            <div className="flex flex-col gap-4 sm:flex-row sm:justify-center">
              <Button size="lg" className="rounded-full px-8 py-6 text-lg shadow-lg shadow-primary/30">
                Join the Online Build Workshop
              </Button>
            </div>
            <div className="flex flex-wrap items-center justify-center gap-6 text-sm text-muted-foreground">
              <div className="flex items-center gap-2">
                <Clock className="h-4 w-4 text-primary" />
                Public cohort · Two live build evenings (2.5h each)
              </div>
              <div className="flex items-center gap-2">
                <Users className="h-4 w-4 text-primary" />
                Built for developers shipping their first AI-powered tool
              </div>
              <div className="flex items-center gap-2">
                <Building2 className="h-4 w-4 text-primary" />
                Private cohorts available for in-house product squads
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="relative py-24 bg-background">
        <div className="absolute inset-0">
          <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-border to-transparent"></div>
        </div>
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Two Live Build Sessions To Ship Your First AI Meeting Companion</h2>
            <p className="text-lg text-muted-foreground">
              Each evening blends live coding with guided labs so you can copy the exact patterns straight into your own product.
            </p>
          </div>
          <div className="grid gap-10">
            {modules.map((module, index) => (
              <div
                key={module.title}
                className="glass border border-border/70 rounded-3xl p-8 md:p-10 shadow-card hover:shadow-primary/20 transition"
              >
                <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-6">
                  <div className="space-y-3 max-w-xl">
                    <h3 className="text-xl md:text-2xl font-semibold">{module.title}</h3>
                    <p className="text-muted-foreground">{module.summary}</p>
                  </div>
                  <span className="self-start rounded-full bg-primary/10 px-4 py-2 text-sm font-medium text-primary">
                    Session {index + 1}
                  </span>
                </div>
                <ul className="mt-6 grid gap-3 md:grid-cols-2 text-sm md:text-base text-muted-foreground">
                  {module.bullets.map((bullet) => (
                    <li key={bullet} className="flex items-start gap-3">
                      <Sparkles className="mt-1 h-4 w-4 text-primary" />
                      <span>{bullet}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-14">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Pick Your Build-Along Format</h2>
            <p className="text-lg text-muted-foreground">
              Join a small public cohort and build alongside peers, or bring me in-house to tailor the smart AI meeting companion blueprint to your stack.
            </p>
          </div>
          <div className="grid gap-8 md:grid-cols-2">
            <Card className="glass border border-border/60 rounded-3xl shadow-card hover:shadow-primary/20 transition">
              <CardHeader className="flex items-start gap-4">
                <div className="rounded-2xl bg-primary/10 p-3 text-primary">
                  <Monitor className="h-6 w-6" />
                </div>
                <div>
                  <CardTitle className="text-2xl">Public Online Cohort</CardTitle>
                  <p className="text-sm text-muted-foreground">Two evenings · Live remote sessions</p>
                </div>
              </CardHeader>
              <CardContent className="space-y-4 text-muted-foreground">
                <p>Perfect for individual developers or small teams ready to ship their first AI workflow.</p>
                <ul className="space-y-2 text-sm">
                  <li>• Live coding with breakout rooms for debugging and Q&amp;A</li>
                  <li>• Includes recordings, private Slack, and follow-up office hours</li>
                  <li>• Cohort capped at 20 seats so everyone gets hands-on help</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="glass border border-border/60 rounded-3xl shadow-card hover:shadow-primary/20 transition">
              <CardHeader className="flex items-start gap-4">
                <div className="rounded-2xl bg-primary/10 p-3 text-primary">
                  <Building2 className="h-6 w-6" />
                </div>
                <div>
                  <CardTitle className="text-2xl">Private On-Site Cohort</CardTitle>
                  <p className="text-sm text-muted-foreground">Full-day intensive · Your location</p>
                </div>
              </CardHeader>
              <CardContent className="space-y-4 text-muted-foreground">
                <p>Bring your product, platform, and design teams together for a targeted build day around your smart AI meeting companion.</p>
                <ul className="space-y-2 text-sm">
                  <li>• Custom agenda aligned to your repositories, security model, and roadmap</li>
                  <li>• Optional follow-up coaching, async code reviews, and integrations</li>
                  <li>• Leadership debrief highlighting risks, quick wins, and next hires</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-14">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Next Public Online Cohort</h2>
            <p className="text-lg text-muted-foreground">
              Two live build evenings delivered online. Every session starts at 18:00 CET (Oslo) so you can join after work and apply the patterns the next morning.
            </p>
          </div>
          <div className="glass border border-border/60 rounded-3xl shadow-card p-8 md:p-10 max-w-2xl mx-auto">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
              <div>
                <p className="text-sm font-semibold text-primary uppercase tracking-wide">December 2025</p>
                <h3 className="text-2xl font-bold mt-1">Evenings: 2 &amp; 4 December</h3>
              </div>
              <span className="inline-flex items-center gap-2 rounded-full bg-primary/10 px-4 py-2 text-sm font-medium text-primary">
                18:00–20:30 CET (Oslo)
              </span>
            </div>
            <ul className="mt-6 space-y-3 text-muted-foreground text-sm md:text-base">
              <li>• Tuesday and Thursday in the first week of December so you can ship updates between sessions</li>
              <li>• Live on Zoom with screen-shared coding, breakout labs, and structured Q&amp;A</li>
              <li>• Recordings, prompts, and code drops shared within 24 hours</li>
            </ul>
            <div className="mt-8 flex flex-col sm:flex-row gap-3">
              <Button className="rounded-full px-6 py-5 text-base sm:flex-1">Apply for the December Cohort</Button>
              <Button variant="outline" className="rounded-full px-6 py-5 text-base sm:flex-1">
                Ask About Team Seats
              </Button>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 bg-muted/20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Pricing &amp; What&apos;s Included</h2>
            <p className="text-lg text-muted-foreground">
              Straightforward pricing for both public and private cohorts. Prices shown before applicable taxes; VAT/GST or sales tax is added when required.
            </p>
          </div>
          <div className="grid gap-8 md:grid-cols-2">
            <Card className="glass border border-border/60 rounded-3xl shadow-card hover:shadow-primary/20 transition">
              <CardHeader className="flex items-start gap-4">
                <div className="rounded-2xl bg-primary/10 p-3 text-primary">
                  <PiggyBank className="h-6 w-6" />
                </div>
                <div>
                  <CardTitle className="text-2xl">Public Online Cohort</CardTitle>
                  <p className="text-sm text-muted-foreground">Two sessions · Live remote build</p>
                </div>
              </CardHeader>
              <CardContent className="space-y-4 text-muted-foreground">
                <div>
                  <p className="text-3xl font-semibold text-foreground">EUR 450</p>
                  <p className="text-sm text-muted-foreground">per developer seat · max 20 participants</p>
                </div>
                <ul className="space-y-2 text-sm">
                  <li>• 10% early bird when you register 21+ days in advance</li>
                  <li>• Team bundle: 4 seats for EUR 1,620 (save EUR 180)</li>
                  <li>• Includes starter repo, prompts, Slack community, and office hours</li>
                  <li>• Prices exclude VAT (charged at checkout)</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="glass border border-border/60 rounded-3xl shadow-card hover:shadow-primary/20 transition">
              <CardHeader className="flex items-start gap-4">
                <div className="rounded-2xl bg-primary/10 p-3 text-primary">
                  <ReceiptEuro className="h-6 w-6" />
                </div>
                <div>
                  <CardTitle className="text-2xl">Private On-Site Cohort</CardTitle>
                  <p className="text-sm text-muted-foreground">Full-day intensive · Your office</p>
                </div>
              </CardHeader>
              <CardContent className="space-y-4 text-muted-foreground">
                <div>
                  <p className="text-3xl font-semibold text-foreground">EUR 6,300</p>
                  <p className="text-sm text-muted-foreground">up to 10 participants · +EUR 320 per additional attendee</p>
                </div>
                <ul className="space-y-2 text-sm">
                  <li>• Custom agenda, async code reviews, and two follow-up coaching calls</li>
                  <li>• Optional remote integration day for EUR 2,200</li>
                  <li>• Travel invoiced at cost or arranged directly by your team</li>
                  <li>• Prices exclude VAT (charged at checkout)</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section className="py-24 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">What You&apos;ll Take Back</h2>
            <p className="text-lg text-muted-foreground">
              Leave with the starter repo, prompts, and support to recreate the full meeting companion flow after the workshop.
            </p>
          </div>
          <div className="grid gap-8 md:grid-cols-2">
            {bonuses.map((bonus) => (
              <Card key={bonus.title} className="border border-border/50 rounded-3xl bg-background/60 backdrop-blur">
                <CardHeader>
                  <CardTitle className="text-2xl flex items-center gap-3">
                    <FileText className="h-6 w-6 text-primary" />
                    {bonus.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground leading-relaxed">{bonus.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Meet the Facilitators</h2>
            <p className="text-lg text-muted-foreground">
              Guided by builders who have shipped AI products from prototype to enterprise deployment.
            </p>
          </div>
          <div className="grid gap-8 md:grid-cols-2">
            {facilitators.map((facilitator) => (
              <div
                key={facilitator.name}
                className="glass border border-border/60 rounded-3xl p-8 shadow-card hover:shadow-primary/20 transition"
              >
                <div className="flex items-start gap-4">
                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-primary/10 text-primary">
                    <Users className="h-7 w-7" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold">{facilitator.name}</h3>
                    <p className="text-sm font-medium text-primary">{facilitator.role}</p>
                  </div>
                </div>
                <p className="mt-4 text-muted-foreground leading-relaxed">{facilitator.bio}</p>
                {facilitator.highlights && (
                  <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
                    {facilitator.highlights.map((item) => (
                      <li key={item} className="flex items-start gap-2">
                        <Sparkles className="mt-0.5 h-4 w-4 text-primary" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 gradient-hero text-primary-foreground relative overflow-hidden">
        <div className="absolute inset-0 opacity-40">
          <div className="absolute top-0 left-0 h-80 w-80 rounded-full bg-white/20 blur-3xl"></div>
          <div className="absolute bottom-0 right-0 h-96 w-96 rounded-full bg-white/10 blur-3xl"></div>
        </div>
        <div className="relative z-10 container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center space-y-8">
            <h2 className="text-3xl md:text-5xl font-bold">
              Ready to Launch Your Smart AI Meeting Companion?
            </h2>
            <p className="text-lg md:text-xl text-primary-foreground/80 leading-relaxed">
              Lock in your workshop dates, bring your toughest meeting workflows, and we will rebuild the smart AI meeting companion together.
              You will leave with code, prompts, and a repeatable playbook for every future AI-powered tool.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Button size="lg" variant="secondary" className="rounded-full px-8 py-6 text-lg">
                Book a Private Build Day
              </Button>
              <Button
                size="lg"
                className="rounded-full px-8 py-6 text-lg bg-white text-primary shadow-primary/30 shadow-lg hover:bg-white/90"
              >
                Join the Next Public Build Cohort
              </Button>
            </div>
            <p className="text-sm text-primary-foreground/70">
              Questions? Email{" "}
              <a
                href="mailto:sven@malvik.de"
                className="underline decoration-primary-foreground/50 hover:decoration-primary-foreground"
              >
                sven@malvik.de
              </a>{" "}
              to tailor the format for your team.
            </p>
          </div>
        </div>
      </section>

      <footer className="border-t border-border/60 bg-background/90">
        <div className="container mx-auto flex flex-col items-center justify-between gap-4 px-4 py-6 text-sm text-muted-foreground md:flex-row">
          <p className="text-center md:text-left">© {new Date().getFullYear()} Vissper. All rights reserved.</p>
          <Link to="/privacy" className="underline decoration-muted-foreground/60 hover:text-primary">
            Privacy
          </Link>
        </div>
      </footer>
    </div>
  );
};

export default Workshop;

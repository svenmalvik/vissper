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

const modules = [
  {
    title: "Module 1 — Real AI Foundations",
    summary:
      "Frame the user problems, pick the right models, and set up your toolkit for the week.",
    bullets: [
      "Walk through the landing page and align on meeting pain points.",
      "Connect to OpenAI and Azure OpenAI safely with environment-based credentials.",
      "Compare GPT, Claude, Gemini, and Llama for latency, quality, and policy fit.",
      "Master tokens, context windows, temperature, and top-p for predictable output.",
      "Structure prompts with system/user/assistant roles and clear tone guides.",
      "Agree when to vibe-code versus follow a spec-driven approach.",
    ],
  },
  {
    title: "Module 2 — Production Workflows",
    summary:
      "Transform raw meeting inputs into clean narratives, insights, and visuals.",
    bullets: [
      "Connect transcription providers and keep transcripts aligned with media events.",
      "Compose instruction, chain-of-thought, and few-shot prompts for fast iteration.",
      "Add reflection loops that critique and improve drafts automatically.",
      "Design function signatures and request structured JSON from tool calls.",
      "Validate tool responses with lightweight unit checks before they reach users.",
      "Use vision models to caption screenshots and weave them into the story.",
    ],
  },
  {
    title: "Module 3 — Trust & Collaboration",
    summary:
      "Add the guardrails, evaluation, and feedback loops that teams expect.",
    bullets: [
      "List high-risk hallucination scenarios and craft targeted guardrails.",
      "Log prompts and responses, redact sensitive data, and replay failures safely.",
      "Manage long sessions with chunking, retrieval, and embedding-powered lookups.",
      "Build rubric-based evaluations and wire automated tests or Evals into CI.",
      "Capture user feedback, comments, and corrections to tune prompts over time.",
    ],
  },
  {
    title: "Module 4 — Launch & Monetize",
    summary:
      "Package the experience, monetize usage, and plan the enterprise rollout.",
    bullets: [
      "Deliver polished exports (Markdown, HTML, PDF) with linked screenshots.",
      "Instrument per-user token meters and surface dashboards or APIs.",
      "Define licensing tiers, usage policies, and alerts for anomalous activity.",
      "Review security, privacy, and compliance steps for enterprise pilots.",
      "Extend tool calling with agent hand-offs and validation gates.",
      "Outline launch analytics, stakeholder comms, and success metrics.",
    ],
  },
];

const bonuses = [
  {
    title: "Live Build Sessions",
    description:
      "Code alongside the instructor during vibe-code segments, then cement the work with specification-driven labs.",
  },
  {
    title: "Reusable Prompt Library",
    description:
      "Leave with ready-to-use prompt templates, evaluation rubrics, and tool-calling schemas.",
  },
  {
    title: "Access to Recordings",
    description:
      "Every evening is recorded so your team can revisit demos and walkthroughs anytime.",
  },
  {
    title: "Office Hours & Slack",
    description:
      "Join follow-up office hours and a private Slack channel to keep shipping after the workshop.",
  },
];

const facilitators = [
  {
    name: "Sven Malvik",
    role: "Principal Platform Engineer • Head of Core AI, Vipps MobilePay",
    bio: "Three decades shipping software across cloud and native stacks, now focused on production-grade generative AI for European enterprises.",
    highlights: [
      "Creator of Vissper, the macOS AI meeting companion we rebuild in the workshop",
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
      <section className="relative overflow-hidden bg-gradient-to-br from-background via-background to-primary/10">
        <div className="absolute inset-0">
          <div className="absolute -top-32 -right-32 h-96 w-96 rounded-full bg-primary/30 blur-3xl"></div>
          <div className="absolute bottom-0 left-1/2 h-[600px] w-[600px] -translate-x-1/2 translate-y-1/4 rounded-full bg-accent/20 blur-[220px]"></div>
        </div>

        <div className="relative z-10 container mx-auto px-4 py-24 md:py-32">
          <div className="max-w-4xl mx-auto text-center space-y-8 animate-fade-in">
            <span className="inline-flex items-center gap-2 rounded-full border border-primary/40 bg-primary/10 px-4 py-2 text-sm font-semibold text-primary backdrop-blur">
              <CalendarClock className="h-4 w-4" />
              Four-Module Generative AI Workshop
            </span>
            <h1 className="text-4xl md:text-6xl font-black leading-tight tracking-tight">
              Build Production-Ready AI Tools
              <br className="hidden md:block" />
              <span className="text-foreground/90">Use Vissper as Your Case Study</span>
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
              A hands-on program for developers who want to ship real generative AI. We use Vissper’s
              meeting companion as the playground, but every pattern, prompt, and tool you learn
              transfers to your own products—online or on-site.
            </p>
            <div className="flex flex-col gap-4 sm:flex-row sm:justify-center">
              <Button size="lg" className="rounded-full px-8 py-6 text-lg shadow-lg shadow-primary/30">
                Reserve Your Seat
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="rounded-full border border-border/60 px-8 py-6 text-lg backdrop-blur"
              >
                Download Workshop Guide
              </Button>
            </div>
            <div className="flex flex-wrap items-center justify-center gap-6 text-sm text-muted-foreground">
              <div className="flex items-center gap-2">
                <Clock className="h-4 w-4 text-primary" />
                Public cohort · Four online evenings (2.5h each)
              </div>
              <div className="flex items-center gap-2">
                <Users className="h-4 w-4 text-primary" />
                Ideal for product-minded developers
              </div>
              <div className="flex items-center gap-2">
                <Building2 className="h-4 w-4 text-primary" />
                Private cohorts available on-site in a single full-day format
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
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Four Modules, One Production-Ready Workflow</h2>
            <p className="text-lg text-muted-foreground">
              Each module blends vibe-coded demos with specification-driven labs so your team can apply the patterns immediately.
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
                    Module {index + 1}
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
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Choose the Format That Fits</h2>
            <p className="text-lg text-muted-foreground">
              Join a public online cohort across four evenings, or bring us on-site for a condensed full-day lab tailored to your team.
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
                  <p className="text-sm text-muted-foreground">Four evenings · Live remote sessions</p>
                </div>
              </CardHeader>
              <CardContent className="space-y-4 text-muted-foreground">
                <p>
                  Ideal for individuals and smaller teams who want to collaborate with peers from other organizations.
                </p>
                <ul className="space-y-2 text-sm">
                  <li>• Zoom-based delivery with collaborative coding sessions</li>
                  <li>• Includes recordings, Slack community, and office hours</li>
                  <li>• Early-bird and team bundles available</li>
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
                <p>
                  We come to your office and guide your cross-functional team through a tailored agenda in one focused day.
                </p>
                <ul className="space-y-2 text-sm">
                  <li>• Custom agenda aligned with your product roadmap</li>
                  <li>• Optional follow-up coaching and integration support</li>
                  <li>• Executive debrief summarizing outcomes and next steps</li>
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
              Four live evening sessions delivered online. Each module runs at 19:00 Oslo (CET) so European teams can join after work.
            </p>
          </div>
          <div className="glass border border-border/60 rounded-3xl shadow-card p-8 md:p-10 max-w-2xl mx-auto">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
              <div>
                <p className="text-sm font-semibold text-primary uppercase tracking-wide">January 2026</p>
                <h3 className="text-2xl font-bold mt-1">Evenings: 20, 22, 27, 29 January</h3>
              </div>
              <span className="inline-flex items-center gap-2 rounded-full bg-primary/10 px-4 py-2 text-sm font-medium text-primary">
                19:00–21:30 Oslo time
              </span>
            </div>
            <ul className="mt-6 space-y-3 text-muted-foreground text-sm md:text-base">
              <li>• Tuesdays & Thursdays across the final two weeks of January</li>
              <li>• Live on Zoom with collaborative coding and Q&amp;A</li>
              <li>• Recordings and resources shared within 24 hours</li>
            </ul>
            <div className="mt-8 flex flex-col sm:flex-row gap-3">
              <Button className="rounded-full px-6 py-5 text-base sm:flex-1">Apply for the January Cohort</Button>
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
              Transparent pricing for both online and on-site cohorts. Rates shown before applicable taxes; VAT/GST or sales tax is added when required.
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
                  <p className="text-sm text-muted-foreground">Four modules · Live remote sessions</p>
                </div>
              </CardHeader>
              <CardContent className="space-y-4 text-muted-foreground">
                <div>
                  <p className="text-3xl font-semibold text-foreground">$850</p>
                  <p className="text-sm text-muted-foreground">per developer seat · max 25 participants</p>
                </div>
                <ul className="space-y-2 text-sm">
                  <li>• 10% early-bird discount when booked 30+ days ahead</li>
                  <li>• Team bundle: 5 seats for $3,800 (save $450)</li>
                  <li>• Includes recordings, Slack community, office hours, and prompt/tool library</li>
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
                  <p className="text-3xl font-semibold text-foreground">$9,500</p>
                  <p className="text-sm text-muted-foreground">up to 12 participants · +$400 per additional attendee</p>
                </div>
                <ul className="space-y-2 text-sm">
                  <li>• Custom agenda, executive debrief, and two follow-up coaching calls</li>
                  <li>• Add remote half-day integration session for $3,000</li>
                  <li>• Travel expenses invoiced at actuals or arranged by your team</li>
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
              Every team leaves with code, templates, and frameworks that slot directly into ongoing projects.
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
              Ready to Build Vissper&apos;s AI Companion With Your Team?
            </h2>
            <p className="text-lg md:text-xl text-primary-foreground/80 leading-relaxed">
              Secure your workshop dates, invite your core product squad, and bring your toughest meeting workflows.
              We’ll transform them together—across four online evenings or a full on-site intensive.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Button size="lg" variant="secondary" className="rounded-full px-8 py-6 text-lg">
                Book Private Cohort
              </Button>
              <Button
                size="lg"
                className="rounded-full px-8 py-6 text-lg bg-white text-primary shadow-primary/30 shadow-lg hover:bg-white/90"
              >
                Join the Next Public Session
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
    </div>
  );
};

export default Workshop;

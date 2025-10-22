import { Link } from "react-router-dom";

const Privacy = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <header className="border-b border-border/60 bg-background/90 backdrop-blur">
        <div className="container mx-auto flex items-center justify-between px-4 py-4">
          <h1 className="text-lg font-semibold tracking-tight">Vissper Privacy Policy</h1>
          <Link to="/" className="text-sm font-medium text-primary hover:text-primary/80 transition-colors">
            Return Home
          </Link>
        </div>
      </header>

      <main className="container mx-auto px-4 py-16">
        <div className="mx-auto max-w-3xl space-y-10">
          <section className="space-y-4">
            <p className="text-sm font-semibold uppercase tracking-wide text-primary">Effective November 2024</p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Vissper helps teams learn how to architect and ship smart meeting companions. This privacy notice explains what data we collect, how we use it,
              and the choices available to you. We aim to keep the policy readable, jargon-free, and aligned with GDPR expectations.
            </p>
          </section>

          <section className="rounded-3xl border border-border/60 bg-background/60 p-8 shadow-card backdrop-blur">
            <h2 className="text-2xl font-semibold">Information We Collect</h2>
            <ul className="mt-6 space-y-3 text-muted-foreground">
              <li>
                <span className="font-medium text-foreground">Workshop inquiries:</span> contact details, company information, and the context you share in
                emails or forms.
              </li>
              <li>
                <span className="font-medium text-foreground">Event participation:</span> registration details, attendance information, and pre-work materials
                you submit for private cohorts.
              </li>
              <li>
                <span className="font-medium text-foreground">Site analytics:</span> aggregated, non-identifying usage metrics to spot broken pages and plan
                future content. We do not run advertising trackers.
              </li>
            </ul>
          </section>

          <section className="rounded-3xl border border-border/60 bg-background/60 p-8 shadow-card backdrop-blur">
            <h2 className="text-2xl font-semibold">How We Use Your Data</h2>
            <p className="mt-4 text-muted-foreground leading-relaxed">
              We process personal data solely to respond to workshop requests, deliver the services you asked for, and improve the curriculum. This includes
              scheduling conversations, tailoring the workshop to your stack, sending invoices, and following up on deliverables. We do not sell or rent your
              information.
            </p>
          </section>

          <section className="rounded-3xl border border-border/60 bg-background/60 p-8 shadow-card backdrop-blur">
            <h2 className="text-2xl font-semibold">Sharing &amp; Retention</h2>
            <ul className="mt-4 space-y-3 text-muted-foreground">
              <li>
                <span className="font-medium text-foreground">Vendors:</span> We rely on trusted providers such as email, video conferencing, and scheduling
                tools. Each vendor only receives the data required to deliver their part of the service.
              </li>
              <li>
                <span className="font-medium text-foreground">Legal requirements:</span> We may disclose information if required to comply with a lawful
                request or protect the rights, property, or safety of participants.
              </li>
              <li>
                <span className="font-medium text-foreground">Retention:</span> We keep workshop records for up to three years to honour follow-up support
                requests, unless you ask for earlier deletion.
              </li>
            </ul>
          </section>

          <section className="rounded-3xl border border-border/60 bg-background/60 p-8 shadow-card backdrop-blur">
            <h2 className="text-2xl font-semibold">Your Rights</h2>
            <p className="mt-4 text-muted-foreground leading-relaxed">
              If you are located in the UK, EU, or another region with data protection laws, you can request a copy of your data, ask for corrections, restrict
              processing, or request deletion. Email us and we will respond within 30 days. You may also lodge a complaint with your local supervisory
              authority.
            </p>
          </section>

          <section className="rounded-3xl border border-border/60 bg-background/60 p-8 shadow-card backdrop-blur">
            <h2 className="text-2xl font-semibold">Contact</h2>
            <p className="mt-4 text-muted-foreground leading-relaxed">
              Questions about this policy or your data rights? Email{" "}
              <a href="mailto:sven@malvik.de" className="text-primary underline decoration-primary/60 hover:decoration-primary">
                sven@malvik.de
              </a>{" "}
            </p>
          </section>

          <div className="text-sm text-muted-foreground">
            Last updated: 23 October 2025. We will post any changes on this page and update the effective date.
          </div>
        </div>
      </main>
    </div>
  );
};

export default Privacy;

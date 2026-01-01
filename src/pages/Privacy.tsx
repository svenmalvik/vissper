const Privacy = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <main className="container mx-auto px-4 py-16">
        <div className="mx-auto max-w-3xl space-y-10">
          <section className="space-y-4">
            <h1 className="text-4xl font-bold">Privacy Policy</h1>
            <p className="text-sm font-semibold uppercase tracking-wide text-primary">Effective October 2025</p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Vissper helps teams learn how to architect and ship smart meeting companions. This privacy notice explains what data is collected, how it is used,
              and the choices available to you. The aim is to keep the policy readable, jargon-free, and aligned with GDPR expectations.
            </p>
          </section>

          <section className="rounded-3xl border border-border/60 bg-background/60 p-8 shadow-card backdrop-blur">
            <h2 className="text-2xl font-semibold">Information Collected</h2>
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
                future content. No advertising trackers run.
              </li>
            </ul>
          </section>

          <section className="rounded-3xl border border-border/60 bg-background/60 p-8 shadow-card backdrop-blur">
            <h2 className="text-2xl font-semibold">How Your Data Is Used</h2>
            <p className="mt-4 text-muted-foreground leading-relaxed">
              Personal data is processed solely to respond to workshop requests, deliver the services you asked for, and improve the curriculum. This includes
              scheduling conversations, tailoring the workshop to your stack, sending invoices, and following up on deliverables. Your information is never sold
              or rented.
            </p>
          </section>

          <section className="rounded-3xl border border-border/60 bg-background/60 p-8 shadow-card backdrop-blur">
            <h2 className="text-2xl font-semibold">Sharing &amp; Retention</h2>
            <ul className="mt-4 space-y-3 text-muted-foreground">
              <li>
                <span className="font-medium text-foreground">Vendors:</span> Trusted providers such as email, video conferencing, and scheduling tools support
                service delivery. Each vendor only receives the data required to deliver their part of the service.
              </li>
              <li>
                <span className="font-medium text-foreground">Legal requirements:</span> Information may be disclosed if required to comply with a lawful
                request or protect the rights, property, or safety of participants.
              </li>
              <li>
                <span className="font-medium text-foreground">Retention:</span> Workshop records are kept for up to three years to honour follow-up support
                requests, unless earlier deletion is requested.
              </li>
            </ul>
          </section>

          <section className="rounded-3xl border border-border/60 bg-background/60 p-8 shadow-card backdrop-blur">
            <h2 className="text-2xl font-semibold">Your Rights</h2>
            <p className="mt-4 text-muted-foreground leading-relaxed">
              If you are located in the UK, EU, or another region with data protection laws, you can request a copy of your data, ask for corrections, restrict
              processing, or request deletion. Email{" "}
              <a href="mailto:sven@malvik.de" className="text-primary underline decoration-primary/60 hover:decoration-primary">
                sven@malvik.de
              </a>{" "}
              to receive a response within 30 days. You may also lodge a complaint with your local supervisory authority.
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
            Last updated: 23 October 2025. Any changes will be posted on this page and the effective date updated accordingly.
          </div>
        </div>
      </main>
    </div>
  );
};

export default Privacy;

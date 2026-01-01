const MalfiTerms = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <main className="container mx-auto px-4 py-16">
        <div className="mx-auto max-w-3xl space-y-10">
          <section className="space-y-4">
            <h1 className="text-4xl font-bold">MalFi Terms of Service</h1>
            <p className="text-sm font-semibold uppercase tracking-wide text-primary">Last Updated: January 1, 2026</p>
          </section>

          <section className="rounded-3xl border border-border/60 bg-background/60 p-8 shadow-card backdrop-blur">
            <h2 className="text-2xl font-semibold">1. Service Description</h2>
            <p className="mt-4 text-muted-foreground leading-relaxed">
              MalFi functions as a personal finance tool enabling users to organize mortgages, bank accounts, stocks, and cryptocurrency holdings with visualization capabilities.
            </p>
          </section>

          <section className="rounded-3xl border border-border/60 bg-background/60 p-8 shadow-card backdrop-blur">
            <h2 className="text-2xl font-semibold">2. Not Financial Advice</h2>
            <p className="mt-4 text-muted-foreground leading-relaxed">
              The application provides informational content only. Nothing in this app constitutes financial, investment, tax, or legal advice. Users must consult qualified professionals before making financial decisions. The service disclaims responsibility for choices made using app data.
            </p>
          </section>

          <section className="rounded-3xl border border-border/60 bg-background/60 p-8 shadow-card backdrop-blur">
            <h2 className="text-2xl font-semibold">3. Data Accuracy</h2>
            <p className="mt-4 text-muted-foreground leading-relaxed">
              Financial information originates from third-party sources like Coinbase and Stooq. The service makes no promises regarding the accuracy, completeness, or timeliness of this data. Prices may experience delays or unavailability. Users should independently verify important information through official channels.
            </p>
          </section>

          <section className="rounded-3xl border border-border/60 bg-background/60 p-8 shadow-card backdrop-blur">
            <h2 className="text-2xl font-semibold">4. Your Responsibilities</h2>
            <p className="mt-4 text-muted-foreground leading-relaxed mb-3">
              Users must ensure:
            </p>
            <ul className="space-y-2 text-muted-foreground ml-4">
              <li>• Accuracy of personally entered information</li>
              <li>• Security of their device and Apple ID credentials</li>
              <li>• Regular data backups</li>
              <li>• Compliance with local laws</li>
            </ul>
          </section>

          <section className="rounded-3xl border border-border/60 bg-background/60 p-8 shadow-card backdrop-blur">
            <h2 className="text-2xl font-semibold">5. Your Data</h2>
            <p className="mt-4 text-muted-foreground leading-relaxed">
              Users retain ownership of their information. We do not collect, access, or sell your financial information. Data resides locally on devices or within users' private iCloud accounts, with privacy details in the accompanying Privacy Policy.
            </p>
          </section>

          <section className="rounded-3xl border border-border/60 bg-background/60 p-8 shadow-card backdrop-blur">
            <h2 className="text-2xl font-semibold">6. No Warranty</h2>
            <p className="mt-4 text-muted-foreground leading-relaxed">
              The app is offered "as is" without warranties of any kind, express or implied, with no guarantees regarding error-free or uninterrupted operation.
            </p>
          </section>

          <section className="rounded-3xl border border-border/60 bg-background/60 p-8 shadow-card backdrop-blur">
            <h2 className="text-2xl font-semibold">7. Limitation of Liability</h2>
            <p className="mt-4 text-muted-foreground leading-relaxed">
              The service excludes liability for indirect, incidental, or consequential damages and losses.
            </p>
          </section>

          <section className="rounded-3xl border border-border/60 bg-background/60 p-8 shadow-card backdrop-blur">
            <h2 className="text-2xl font-semibold">8. Changes to Terms</h2>
            <p className="mt-4 text-muted-foreground leading-relaxed">
              Terms may be updated periodically; continued use signals acceptance.
            </p>
          </section>

          <section className="rounded-3xl border border-border/60 bg-background/60 p-8 shadow-card backdrop-blur">
            <h2 className="text-2xl font-semibold">9. Contact</h2>
            <p className="mt-4 text-muted-foreground leading-relaxed">
              Questions should be directed to{" "}
              <a href="mailto:sven@malvik.de" className="text-primary underline decoration-primary/60 hover:decoration-primary">
                sven@malvik.de
              </a>
            </p>
          </section>
        </div>
      </main>
    </div>
  );
};

export default MalfiTerms;

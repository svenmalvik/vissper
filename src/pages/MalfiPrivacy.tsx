const MalfiPrivacy = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <main className="container mx-auto px-4 py-16">
        <div className="mx-auto max-w-3xl space-y-10">
          <section className="space-y-4">
            <h1 className="text-4xl font-bold">MalFi Privacy Policy</h1>
            <p className="text-sm font-semibold uppercase tracking-wide text-primary">Last Updated: January 1, 2026</p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Your financial data is stored locally on your device with encryption. If you enable iCloud sync, your data is stored in your private iCloud account—we do not operate servers.
            </p>
          </section>

          <section className="rounded-3xl border border-border/60 bg-background/60 p-8 shadow-card backdrop-blur">
            <h2 className="text-2xl font-semibold">What MalFi Collects</h2>
            <ul className="mt-6 space-y-3 text-muted-foreground">
              <li>
                <span className="font-medium text-foreground">Portfolio data:</span> stocks, cryptocurrencies, and account balances
              </li>
              <li>
                <span className="font-medium text-foreground">Mortgage details:</span> amounts, rates, and terms
              </li>
              <li>
                <span className="font-medium text-foreground">Currency preferences:</span> your preferred currency settings
              </li>
            </ul>
          </section>

          <section className="rounded-3xl border border-border/60 bg-background/60 p-8 shadow-card backdrop-blur">
            <h2 className="text-2xl font-semibold">What MalFi Does NOT Collect</h2>
            <ul className="mt-4 space-y-3 text-muted-foreground">
              <li>Names, emails, or personal identifiers</li>
              <li>Bank or brokerage account access</li>
              <li>Location data</li>
              <li>Cross-app tracking information</li>
            </ul>
          </section>

          <section className="rounded-3xl border border-border/60 bg-background/60 p-8 shadow-card backdrop-blur">
            <h2 className="text-2xl font-semibold">Data Storage</h2>
            <div className="mt-4 space-y-4 text-muted-foreground">
              <div>
                <h3 className="font-medium text-foreground mb-2">Local Encryption</h3>
                <p className="leading-relaxed">
                  Data uses AES-256 encryption via SQLCipher, with encryption keys secured in iOS Keychain.
                </p>
              </div>
              <div>
                <h3 className="font-medium text-foreground mb-2">iCloud Sync</h3>
                <p className="leading-relaxed">
                  When enabled, data syncs to your private iCloud account. We do not operate our own servers and have no access to your synced data.
                </p>
              </div>
              <div>
                <h3 className="font-medium text-foreground mb-2">Portfolio Sharing</h3>
                <p className="leading-relaxed">
                  Sharing with partners grants read-only access; you can revoke anytime.
                </p>
              </div>
            </div>
          </section>

          <section className="rounded-3xl border border-border/60 bg-background/60 p-8 shadow-card backdrop-blur">
            <h2 className="text-2xl font-semibold">Third-Party Services</h2>
            <p className="mt-4 text-muted-foreground leading-relaxed mb-4">
              The app connects to two services for market data:
            </p>
            <ul className="space-y-3 text-muted-foreground">
              <li>
                <span className="font-medium text-foreground">Coinbase:</span> receives cryptocurrency symbols and currency codes only
              </li>
              <li>
                <span className="font-medium text-foreground">Stooq:</span> receives stock ticker symbols only
              </li>
            </ul>
            <p className="mt-4 text-muted-foreground leading-relaxed font-medium">
              Your portfolio quantities, account balances, and personal financial details are never transmitted.
            </p>
          </section>

          <section className="rounded-3xl border border-border/60 bg-background/60 p-8 shadow-card backdrop-blur">
            <h2 className="text-2xl font-semibold">Your Rights</h2>
            <ul className="mt-4 space-y-3 text-muted-foreground">
              <li>Access all stored data within the app</li>
              <li>Delete data selectively or uninstall completely</li>
              <li>Opt out of analytics via device settings</li>
              <li>GDPR rights apply to European users</li>
              <li>CCPA protections apply to California residents</li>
            </ul>
          </section>

          <section className="rounded-3xl border border-border/60 bg-background/60 p-8 shadow-card backdrop-blur">
            <h2 className="text-2xl font-semibold">Security Measures</h2>
            <ul className="mt-4 space-y-3 text-muted-foreground">
              <li>AES-256 encryption at rest</li>
              <li>Secure key management via iOS Keychain</li>
              <li>Memory protection for sensitive data</li>
              <li>HTTPS for all API communications</li>
              <li>No server transmission of financial data</li>
            </ul>
          </section>

          <section className="rounded-3xl border border-border/60 bg-background/60 p-8 shadow-card backdrop-blur">
            <h2 className="text-2xl font-semibold">Data Retention</h2>
            <p className="mt-4 text-muted-foreground leading-relaxed">
              Local data persists until app deletion. Cached market data auto-expires:
            </p>
            <ul className="mt-3 space-y-2 text-muted-foreground ml-4">
              <li>• Cryptocurrency prices: 5 minutes</li>
              <li>• Stock prices: 15 minutes</li>
              <li>• Exchange rates: 1 hour</li>
            </ul>
          </section>

          <section className="rounded-3xl border border-border/60 bg-background/60 p-8 shadow-card backdrop-blur">
            <h2 className="text-2xl font-semibold">Contact</h2>
            <p className="mt-4 text-muted-foreground leading-relaxed">
              Questions about this policy?{" "}
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

export default MalfiPrivacy;

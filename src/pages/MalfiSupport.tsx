import { Mail, Linkedin } from "lucide-react";
import { Button } from "@/components/ui/button";

const MalfiSupport = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <main className="container mx-auto px-4 py-16">
        <div className="mx-auto max-w-3xl space-y-10">
          <section className="space-y-4">
            <h1 className="text-4xl font-bold">MalFi Support</h1>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Need help with MalFi? Find troubleshooting tips below or reach out directly.
            </p>
          </section>

          <section className="rounded-3xl border border-border/60 bg-background/60 p-8 shadow-card backdrop-blur">
            <h2 className="text-2xl font-semibold mb-6">Contact Information</h2>
            <div className="flex flex-col gap-4">
              <Button variant="outline" size="lg" asChild className="justify-start">
                <a href="mailto:sven@malvik.de">
                  <Mail className="mr-2 h-5 w-5" />
                  sven@malvik.de
                </a>
              </Button>
              <Button variant="outline" size="lg" asChild className="justify-start">
                <a href="https://www.linkedin.com/in/svenmalvik/" target="_blank" rel="noopener noreferrer">
                  <Linkedin className="mr-2 h-5 w-5" />
                  LinkedIn
                </a>
              </Button>
            </div>
          </section>

          <section className="rounded-3xl border border-border/60 bg-background/60 p-8 shadow-card backdrop-blur">
            <h2 className="text-2xl font-semibold mb-6">Troubleshooting</h2>
            <div className="space-y-6">
              <div>
                <h3 className="text-lg font-medium text-foreground mb-2">App not loading data?</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Check your internet connection and try again. MalFi needs an active connection to fetch market data from Coinbase and Stooq.
                </p>
              </div>
              <div>
                <h3 className="text-lg font-medium text-foreground mb-2">Market data delays</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Market data may experience delays. Try refreshing to access current pricing. Cryptocurrency prices update every 5 minutes, stocks every 15 minutes, and exchange rates every hour.
                </p>
              </div>
              <div>
                <h3 className="text-lg font-medium text-foreground mb-2">Application crashes</h3>
                <p className="text-muted-foreground leading-relaxed">
                  If the app crashes unexpectedly, please update to the latest version from the App Store. If the issue persists, contact support with details about what you were doing when the crash occurred.
                </p>
              </div>
            </div>
          </section>

          <section className="rounded-3xl border border-border/60 bg-background/60 p-8 shadow-card backdrop-blur">
            <h2 className="text-2xl font-semibold mb-4">Still Need Help?</h2>
            <p className="text-muted-foreground leading-relaxed">
              Can't find the answer you're looking for? Email{" "}
              <a href="mailto:sven@malvik.de" className="text-primary underline decoration-primary/60 hover:decoration-primary">
                sven@malvik.de
              </a>{" "}
              with details about your issue, and I'll get back to you as soon as possible.
            </p>
          </section>
        </div>
      </main>
    </div>
  );
};

export default MalfiSupport;

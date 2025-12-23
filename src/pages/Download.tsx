import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Download, Apple, Shield, HardDrive, Building2 } from "lucide-react";

const DownloadPage = () => {
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
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute -top-32 -right-32 h-96 w-96 rounded-full bg-primary/30 blur-3xl"></div>
          <div className="absolute bottom-0 left-1/2 h-[520px] w-[520px] -translate-x-1/2 translate-y-1/4 rounded-full bg-accent/20 blur-[220px]"></div>
        </div>

        <div className="relative z-10 container mx-auto px-4 py-24 md:py-32">
          <div className="mx-auto max-w-3xl text-center space-y-8 animate-fade-in">
            <span className="inline-flex items-center gap-2 rounded-full border border-primary/40 bg-primary/10 px-4 py-2 text-sm font-semibold text-primary backdrop-blur">
              <Download className="h-4 w-4" />
              Download Vissper Cloud
            </span>
            <h1 className="text-4xl md:text-5xl font-black leading-tight tracking-tight">
              Get Vissper Cloud for macOS
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
              Download the latest version of Vissper Cloud and transform your meetings with AI-powered insights.
            </p>

            <div className="flex flex-col items-center gap-6">
              <Button asChild size="lg" className="rounded-full px-10 py-7 text-lg shadow-lg shadow-primary/30">
                <a href="/vissper-cloud-0.3.2.dmg" download>
                  <Apple className="mr-2 h-5 w-5" />
                  Download for macOS
                </a>
              </Button>
              <span className="text-sm text-muted-foreground">Version 0.3.2 • macOS 12.0+</span>
              <Button asChild variant="outline" size="lg" className="rounded-full px-8 py-6 text-base border-border/60">
                <a href="https://www.linkedin.com/in/svenmalvik/" target="_blank" rel="noopener noreferrer">
                  <Building2 className="mr-2 h-5 w-5" />
                  Enterprise? Contact Sven Malvik
                </a>
              </Button>
            </div>

            <div className="pt-8 grid gap-6 sm:grid-cols-2 max-w-xl mx-auto text-left">
              <div className="flex items-start gap-3 p-4 rounded-lg bg-card/50 border border-border/40">
                <Shield className="h-5 w-5 text-primary mt-0.5" />
                <div>
                  <h3 className="font-semibold text-sm">Secure & Private</h3>
                  <p className="text-sm text-muted-foreground">Your data stays on your device</p>
                </div>
              </div>
              <div className="flex items-start gap-3 p-4 rounded-lg bg-card/50 border border-border/40">
                <HardDrive className="h-5 w-5 text-primary mt-0.5" />
                <div>
                  <h3 className="font-semibold text-sm">Easy Installation</h3>
                  <p className="text-sm text-muted-foreground">Drag and drop to Applications</p>
                </div>
              </div>
            </div>

            <div className="pt-4">
              <Button asChild variant="outline" size="lg" className="rounded-full px-8 py-6 text-lg border-primary/40 text-primary">
                <Link to="/">Learn More About Vissper</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default DownloadPage;

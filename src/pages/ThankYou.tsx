import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Sparkles } from "lucide-react";

const ThankYou = () => {
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
              <Sparkles className="h-4 w-4" />
              Thanks for reaching out
            </span>
            <h1 className="text-4xl md:text-5xl font-black leading-tight tracking-tight">
              I Received Your Submission.
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
              Thanks for sharing your details—I'll review everything and get back to you shortly with next steps. Looking forward to continuing the conversation.
            </p>
            <div className="flex flex-col sm:flex-row sm:justify-center gap-3">
              <Button asChild size="lg" className="rounded-full px-8 py-6 text-lg shadow-lg shadow-primary/30">
                <Link to="/">Return to Vissper</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ThankYou;

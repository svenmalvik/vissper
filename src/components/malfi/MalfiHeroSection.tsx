import { Button } from "@/components/ui/button";
import { Apple, Sparkles } from "lucide-react";

const MalfiHeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-background">
      {/* Modern mesh gradient background */}
      <div className="absolute inset-0 gradient-mesh"></div>

      {/* Animated orbs */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-96 h-96 bg-primary/30 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-accent/30 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
      </div>

      <div className="container mx-auto px-4 py-20 relative z-10">
        <div className="text-center max-w-5xl mx-auto animate-fade-in">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 glass px-4 py-2 rounded-full mb-8 border border-primary/20 shadow-glow">
            <Sparkles className="h-4 w-4 text-primary" />
            <span className="text-sm font-medium text-foreground">Privacy-First Personal Finance</span>
          </div>

          {/* Main Headline */}
          <h2 className="text-6xl md:text-8xl font-black text-foreground mb-6 leading-tight tracking-tight">
            Take Control of Your Finances
          </h2>

          {/* Subheadline */}
          <p className="text-xl md:text-2xl text-muted-foreground mb-12 max-w-3xl mx-auto leading-relaxed">
            Smart budgeting, portfolio tracking, and mortgage planning for iOS. Know where every dollar goes.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button
              size="lg"
              disabled
              className="bg-primary hover:bg-primary/90 text-primary-foreground text-lg px-10 py-7 rounded-2xl shadow-glow"
            >
              <Apple className="mr-2 h-5 w-5" />
              Download on App Store (Coming Soon)
            </Button>
          </div>

          {/* Visual indicator */}
          <div className="mt-20 text-muted-foreground animate-bounce">
            <p className="text-sm mb-2">Scroll to explore</p>
            <div className="w-6 h-10 border-2 border-border rounded-full mx-auto flex justify-center">
              <div className="w-1 h-3 bg-primary rounded-full mt-2"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MalfiHeroSection;

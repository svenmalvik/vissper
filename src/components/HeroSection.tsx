import { Button } from "@/components/ui/button";
import { Github, Play } from "lucide-react";
import vispperLogo from "@/assets/vispper-logo.png";

const HeroSection = () => {
  return (
    <section className="relative min-h-[90vh] flex items-center justify-center gradient-hero overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-20 left-20 w-72 h-72 bg-accent rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-primary rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>

      <div className="container mx-auto px-4 py-20 relative z-10">
        <div className="text-center max-w-5xl mx-auto animate-fade-in">
          {/* Logo */}
          <div className="flex justify-center mb-8">
            <img 
              src={vispperLogo} 
              alt="Vispper Logo" 
              className="w-24 h-24 md:w-32 md:h-32 animate-scale-in"
            />
          </div>

          {/* Main Headline */}
          <h1 className="text-5xl md:text-7xl font-bold text-primary-foreground mb-6 leading-tight">
            Never Miss a<br />Meeting Moment
          </h1>

          {/* Subheadline */}
          <p className="text-xl md:text-2xl text-primary-foreground/90 mb-12 max-w-3xl mx-auto leading-relaxed">
            AI-powered meeting notes that write themselves. Record, transcribe, 
            copyedit, and summarize—all with one click.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button 
              size="lg" 
              className="bg-accent hover:bg-accent/90 text-accent-foreground text-lg px-8 py-6 shadow-lg hover:shadow-xl transition-all hover:scale-105"
            >
              <Play className="mr-2 h-5 w-5" />
              Watch Live Demo
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="bg-white/10 hover:bg-white/20 text-primary-foreground border-white/30 text-lg px-8 py-6 backdrop-blur-sm transition-all hover:scale-105"
              onClick={() => window.open('https://github.com/svenmalvik/MeetSync', '_blank')}
            >
              <Github className="mr-2 h-5 w-5" />
              View on GitHub
            </Button>
          </div>

          {/* Visual indicator */}
          <div className="mt-16 text-primary-foreground/60 animate-bounce">
            <p className="text-sm mb-2">Scroll to explore</p>
            <div className="w-6 h-10 border-2 border-primary-foreground/30 rounded-full mx-auto flex justify-center">
              <div className="w-1 h-3 bg-primary-foreground/60 rounded-full mt-2"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;

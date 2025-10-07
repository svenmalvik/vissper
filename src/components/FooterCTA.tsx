import { Button } from "@/components/ui/button";
import { Github, BookOpen } from "lucide-react";

const FooterCTA = () => {
  return (
    <section className="py-24 gradient-hero">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center animate-fade-in-up">
          <h2 className="text-4xl md:text-5xl font-bold text-primary-foreground mb-6">
            Ready to Transform<br />Your Meetings?
          </h2>
          <p className="text-xl text-primary-foreground/90 mb-12 max-w-2xl mx-auto">
            Built in 48 hours at the hackathon. 100% open source. Production-ready architecture.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Button 
              size="lg"
              className="bg-accent hover:bg-accent/90 text-accent-foreground text-lg px-8 py-6 shadow-xl hover:scale-105 transition-all"
              onClick={() => window.open('https://github.com/svenmalvik/MeetSync', '_blank')}
            >
              <Github className="mr-2 h-5 w-5" />
              Star on GitHub
            </Button>
            <Button 
              size="lg"
              variant="outline"
              className="bg-white/10 hover:bg-white/20 text-primary-foreground border-white/30 text-lg px-8 py-6 backdrop-blur-sm hover:scale-105 transition-all"
            >
              <BookOpen className="mr-2 h-5 w-5" />
              Technical Documentation
            </Button>
          </div>

          {/* Footer info */}
          <div className="border-t border-white/20 pt-8 mt-8">
            <p className="text-primary-foreground/70 text-sm">
              Built with ❤️ by Sven Malvik
            </p>
            <div className="flex justify-center gap-6 mt-4 text-xs text-primary-foreground/60">
              <a href="#" className="hover:text-primary-foreground transition-colors">Privacy Policy</a>
              <span>•</span>
              <a href="mailto:sven@vispper.app" className="hover:text-primary-foreground transition-colors">Contact</a>
              <span>•</span>
              <a href="https://github.com/svenmalvik/MeetSync" className="hover:text-primary-foreground transition-colors">GitHub</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FooterCTA;

import { Play } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroMenubar from "@/assets/hero-menubar.png";

const DemoSection = () => {
  return (
    <section className="py-24 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            See It In Action
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            From starting a recording to polished notes in seconds
          </p>
        </div>

        <div className="max-w-5xl mx-auto">
          {/* Demo Video Placeholder */}
          <div className="relative rounded-2xl overflow-hidden shadow-soft bg-card animate-scale-in">
            <div className="aspect-video relative">
              <img 
                src={heroMenubar} 
                alt="Vispper Demo" 
                className="w-full h-full object-cover"
              />
              {/* Play button overlay */}
              <div className="absolute inset-0 flex items-center justify-center bg-primary/10 backdrop-blur-sm hover:bg-primary/20 transition-all cursor-pointer group">
                <Button 
                  size="lg"
                  className="bg-accent hover:bg-accent/90 text-accent-foreground shadow-xl group-hover:scale-110 transition-all"
                >
                  <Play className="mr-2 h-6 w-6" />
                  Watch Demo
                </Button>
              </div>
            </div>
          </div>

          {/* Demo highlights */}
          <div className="grid md:grid-cols-4 gap-4 mt-8">
            {[
              "Start recording with one click",
              "Take timestamped screenshots",
              "Stop to trigger AI processing",
              "Get polished Markdown notes"
            ].map((step, index) => (
              <div 
                key={index}
                className="bg-card p-4 rounded-lg shadow-card text-center animate-fade-in-up"
                style={{ animationDelay: `${400 + index * 100}ms` }}
              >
                <div className="w-8 h-8 bg-accent/10 text-accent rounded-full flex items-center justify-center mx-auto mb-2 font-bold">
                  {index + 1}
                </div>
                <p className="text-sm text-foreground font-medium">{step}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default DemoSection;

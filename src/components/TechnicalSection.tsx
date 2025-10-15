import { CheckCircle2 } from "lucide-react";

const technicalHighlights = [
  {
    title: "Native Swift + AppKit",
    description: "Native macOS performance, not a web wrapper",
  },
  {
    title: "ScreenCaptureKit Integration",
    description: "System-level audio capture for any application",
  },
  {
    title: "Flexible AI Pipeline",
    description: "Plug in enterprise-approved ASR and LLM providers like Whisper, GPT-4, Claude, or your own models",
  },
  {
    title: "Intelligent Screenshot Detection",
    description: "Multi-language filename pattern matching with chronological merging",
  },
  {
    title: "Smart Timeline Merging",
    description: "Transcriptions and screenshots merged chronologically with millisecond precision",
  },
  {
    title: "Robust Architecture",
    description: "Dependency injection, protocol-based design, state machine pattern, atomic file writes",
  },
];

const TechnicalSection = () => {
  return (
    <section className="py-32 bg-muted/30 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-4xl h-full max-h-4xl bg-primary/5 rounded-full blur-3xl"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-20 animate-fade-in-up">
            <h2 className="text-5xl md:text-6xl font-bold text-foreground mb-6">
              Engineered for Enterprise Teams,<br />
              <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                Ready for Production
              </span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Vissper is a production-grade macOS application designed to meet enterprise expectations for reliability, security, and seamless integration across complex ecosystems.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {technicalHighlights.map((highlight, index) => (
              <div 
                key={index}
                className="flex gap-5 p-7 glass rounded-2xl shadow-card hover:shadow-soft transition-all animate-fade-in-up border border-border group hover:border-primary/30"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="flex-shrink-0">
                  <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-success/20 to-success/10 flex items-center justify-center group-hover:scale-110 transition-transform">
                    <CheckCircle2 className="h-5 w-5 text-success" strokeWidth={2.5} />
                  </div>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">
                    {highlight.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {highlight.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Tech Stack Badges */}
          <div className="mt-16 flex flex-wrap justify-center gap-4">
            {['Swift', 'AppKit', 'ScreenCaptureKit', 'Custom AI Stack', 'Combine'].map((tech, index) => (
              <span 
                key={index}
                className="px-5 py-2.5 glass border border-primary/20 text-primary font-semibold rounded-xl text-sm animate-scale-in hover:border-primary/40 hover:scale-105 transition-all shadow-card"
                style={{ animationDelay: `${600 + index * 50}ms` }}
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TechnicalSection;

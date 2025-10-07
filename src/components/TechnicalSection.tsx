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
    title: "Azure OpenAI Pipeline",
    description: "Whisper for transcription, GPT-4 for copyediting and summarization",
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
    <section className="py-24 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16 animate-fade-in-up">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              Built for the Hackathon,<br />Built for Production
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Vispper isn't just a proof-of-concept—it's a production-quality macOS application 
              built during this hackathon with enterprise-grade architecture.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {technicalHighlights.map((highlight, index) => (
              <div 
                key={index}
                className="flex gap-4 p-6 bg-card rounded-xl shadow-card hover:shadow-soft transition-all animate-fade-in-up"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="flex-shrink-0">
                  <CheckCircle2 className="h-6 w-6 text-success" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-foreground mb-2">
                    {highlight.title}
                  </h3>
                  <p className="text-muted-foreground">
                    {highlight.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Tech Stack Badges */}
          <div className="mt-12 flex flex-wrap justify-center gap-3">
            {['Swift', 'AppKit', 'ScreenCaptureKit', 'Azure OpenAI', 'Combine'].map((tech, index) => (
              <span 
                key={index}
                className="px-4 py-2 bg-primary/10 text-primary font-semibold rounded-full text-sm animate-scale-in"
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

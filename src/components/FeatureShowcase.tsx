import { Mic, Brain, FileText, Zap } from "lucide-react";

const features = [
  {
    icon: Mic,
    title: "One-Click Recording",
    description: "Captures system audio from Zoom, Teams, or WebEx. Works invisibly in the background while you focus on the conversation.",
    gradient: "from-primary/20 to-accent/20",
  },
  {
    icon: Brain,
    title: "Real-Time AI Processing",
    description: "Your preferred AI services transcribe as you speak. Screenshots are automatically timestamped and linked to exact moments in the conversation.",
    gradient: "from-accent/20 to-success/20",
  },
  {
    icon: FileText,
    title: "Smart Copyediting",
    description: "An LLM cleans up transcripts, removes filler words, embeds screenshots contextually, and generates concise summaries.",
    gradient: "from-success/20 to-primary/20",
  },
  {
    icon: Zap,
    title: "Instant Markdown Export",
    description: "Polished notes ready in seconds. Copy to clipboard or open in Obsidian, Notion, Slack—wherever you work.",
    gradient: "from-primary/20 to-accent/20",
  },
];

const FeatureShowcase = () => {
  return (
    <section className="py-32 bg-background relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-4xl h-px bg-gradient-to-r from-transparent via-border to-transparent"></div>
      
      <div className="container mx-auto px-4">
        <div className="text-center mb-20 animate-fade-in-up">
          <h2 className="text-5xl md:text-6xl font-bold text-foreground mb-6">
            Four Steps to<br />
            <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              Perfect Notes
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            From meeting to markdown in seconds
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div 
                key={index}
                className="group relative animate-fade-in-up"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className={`absolute inset-0 bg-gradient-to-br ${feature.gradient} rounded-3xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500`}></div>
                <div className="relative glass border border-border rounded-3xl p-8 hover:border-primary/30 transition-all duration-500 h-full">
                  <div className="flex items-start gap-6">
                    <div className={`flex-shrink-0 w-14 h-14 rounded-2xl bg-gradient-to-br ${feature.gradient} flex items-center justify-center shadow-card`}>
                      <Icon className="h-7 w-7 text-primary" strokeWidth={2} />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-2xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors">
                        {feature.title}
                      </h3>
                      <p className="text-muted-foreground leading-relaxed">
                        {feature.description}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default FeatureShowcase;

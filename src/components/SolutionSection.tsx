import { Mic, Radio, Sparkles, FileCheck } from "lucide-react";

const steps = [
  {
    icon: Mic,
    title: "Click to Record",
    description: "One click starts recording. Captures system audio (Zoom, Teams, WebEx) or microphone input. Works invisibly in the background.",
    badge: "Step 1",
    color: "text-accent",
  },
  {
    icon: Radio,
    title: "AI Processing (Real-Time)",
    description: "While you talk, Vispper transcribes in real-time using Azure OpenAI. Screenshots you take are automatically timestamped and tracked.",
    badge: "Step 2",
    color: "text-primary",
  },
  {
    icon: Sparkles,
    title: "Smart Enhancement",
    description: "When you stop, GPT-4 copyedits the transcript, embeds screenshots at exact timestamps, generates a concise summary, and exports to Markdown.",
    badge: "Step 3",
    color: "text-success",
  },
  {
    icon: FileCheck,
    title: "Instant Delivery",
    description: "Polished notes copied to clipboard and exported as Markdown. Ready to paste into Slack, Notion, Obsidian, or anywhere.",
    badge: "Step 4",
    color: "text-accent",
  },
];

const SolutionSection = () => {
  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            One Click to Perfect Notes
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            From meeting to markdown in seconds
          </p>
        </div>

        <div className="max-w-4xl mx-auto space-y-12">
          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <div 
                key={index}
                className="flex flex-col md:flex-row gap-6 items-start animate-fade-in-up"
                style={{ animationDelay: `${index * 150}ms` }}
              >
                {/* Icon and connector */}
                <div className="flex flex-col items-center">
                  <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br from-primary/10 to-accent/10 flex items-center justify-center ${step.color} shadow-card`}>
                    <Icon className="h-8 w-8" strokeWidth={2} />
                  </div>
                  {index < steps.length - 1 && (
                    <div className="w-0.5 h-16 bg-gradient-to-b from-primary/30 to-accent/30 mt-4 hidden md:block"></div>
                  )}
                </div>

                {/* Content */}
                <div className="flex-1">
                  <div className="inline-block px-3 py-1 bg-primary/10 text-primary text-sm font-semibold rounded-full mb-3">
                    {step.badge}
                  </div>
                  <h3 className="text-2xl font-bold text-foreground mb-3">
                    {step.title}
                  </h3>
                  <p className="text-muted-foreground text-lg leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default SolutionSection;

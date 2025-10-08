import { CheckCircle2, Target, Rocket } from "lucide-react";

const phases = [
  {
    icon: CheckCircle2,
    title: "Phase 1",
    status: "Current",
    statusColor: "bg-success/10 text-success",
    items: [
      "Audio capture (system + microphone)",
      "Real-time transcription",
      "Screenshot integration",
      "AI copyediting",
      "Auto-summarization",
      "Markdown export",
    ],
    completed: true,
  },
  {
    icon: Target,
    title: "Phase 2",
    status: "Planned",
    statusColor: "bg-accent/10 text-accent",
    items: [
      "Smart AI contributions to ongoing meetings",
      "Speaker diarization (who said what)",
      "Custom summarization templates",
    ],
    completed: false,
  },
  {
    icon: Rocket,
    title: "Phase 3",
    status: "Future",
    statusColor: "bg-primary/10 text-primary",
    items: [
      "Multi-language support (beyond English)",
      "Team collaboration (shared meeting libraries)",
      "Action item extraction",
    ],
    completed: false,
  },
];

const RoadmapSection = () => {
  return (
    <section className="py-32 bg-background relative">
      <div className="container mx-auto px-4">
        <div className="text-center mb-20 animate-fade-in-up">
          <h2 className="text-5xl md:text-6xl font-bold text-foreground mb-6">
            What's Next?
          </h2>
          <p className="text-xl text-muted-foreground">
            Our vision for the future of meeting notes
          </p>
        </div>

        <div className="max-w-5xl mx-auto grid md:grid-cols-3 gap-8">
          {phases.map((phase, index) => {
            const Icon = phase.icon;
            return (
              <div 
                key={index}
                className="animate-fade-in-up"
                style={{ animationDelay: `${index * 150}ms` }}
              >
                <div className="bg-card rounded-xl p-6 shadow-card border-2 border-border hover:shadow-soft transition-all h-full">
                  {/* Header */}
                  <div className="flex flex-col items-center text-center mb-6">
                    <div className="w-12 h-12 bg-gradient-to-br from-primary/10 to-accent/10 rounded-xl flex items-center justify-center mb-4">
                      <Icon className="h-6 w-6 text-primary" />
                    </div>
                    <h3 className="text-2xl font-bold text-foreground">
                      {phase.status}
                    </h3>
                  </div>

                  {/* Items */}
                  <ul className="space-y-3">
                    {phase.items.map((item, itemIndex) => (
                      <li key={itemIndex} className="flex items-start gap-2 text-sm">
                        <span className="text-lg leading-none">
                          {phase.completed ? "✅" : "🎯"}
                        </span>
                        <span className="text-muted-foreground">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default RoadmapSection;

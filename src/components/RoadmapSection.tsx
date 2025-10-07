import { CheckCircle2, Target, Rocket } from "lucide-react";

const phases = [
  {
    icon: CheckCircle2,
    title: "Phase 1: Hackathon MVP",
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
    title: "Phase 2: Next 3 Months",
    status: "Planned",
    statusColor: "bg-accent/10 text-accent",
    items: [
      "Speaker diarization (who said what)",
      "Multi-language support (beyond English)",
      "Custom summarization templates",
    ],
    completed: false,
  },
  {
    icon: Rocket,
    title: "Phase 3: 6+ Months",
    status: "Future",
    statusColor: "bg-primary/10 text-primary",
    items: [
      "Team collaboration (shared meeting libraries)",
      "Action item extraction",
      "Calendar integration",
    ],
    completed: false,
  },
];

const RoadmapSection = () => {
  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
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
                  <div className="flex items-start gap-4 mb-6">
                    <div className="w-12 h-12 bg-gradient-to-br from-primary/10 to-accent/10 rounded-xl flex items-center justify-center flex-shrink-0">
                      <Icon className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <span className={`inline-block px-3 py-1 rounded-full text-xs font-semibold mb-2 ${phase.statusColor}`}>
                        {phase.status}
                      </span>
                      <h3 className="text-lg font-bold text-foreground">
                        {phase.title}
                      </h3>
                    </div>
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

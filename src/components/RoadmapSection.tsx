import { Building2, CheckCircle2 } from "lucide-react";

const plans = [
  {
    name: "Integration Pilot",
    price: "Invite-only beta",
    description: "Ideal for companies or teams evaluating how Vissper fits into their meeting workflows or product roadmap.",
    icon: Building2,
    features: [
      "Hands-on evaluation to trial your data and meeting flows",
      "Integration support with your current collaboration tools",
      "Security and compliance review with your stakeholders",
      "Joint roadmap session to plan a wider rollout if it fits",
    ],
    badge: "For product & engineering leads",
  },
];

const RoadmapSection = () => {
  return (
    <section className="py-32 bg-background relative">
      <div className="container mx-auto px-4">
        <div className="text-center mb-20 animate-fade-in-up">
          <h2 className="text-5xl md:text-6xl font-bold text-foreground mb-6">
            Integration & Partnership
          </h2>
          <p className="text-xl text-muted-foreground">
            Exploring Vissper for your team? Start with an integration pilot built around your workflows and security needs.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          {plans.map((plan, index) => {
            const Icon = plan.icon;
            return (
              <div 
                key={index}
                className="animate-fade-in-up"
                style={{ animationDelay: `${index * 150}ms` }}
              >
                <div className="bg-card rounded-2xl p-8 shadow-card border-2 border-border hover:border-primary/30 hover:shadow-soft transition-all h-full flex flex-col">
                  {plan.badge && (
                    <span className="inline-flex items-center justify-center text-xs font-semibold uppercase tracking-wide px-3 py-1 rounded-full bg-primary/10 text-primary mb-5 self-start">
                      {plan.badge}
                    </span>
                  )}
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-12 h-12 bg-gradient-to-br from-primary/10 to-accent/10 rounded-xl flex items-center justify-center">
                      <Icon className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-foreground">{plan.name}</h3>
                      <p className="text-sm text-muted-foreground">{plan.price}</p>
                    </div>
                  </div>

                  <p className="text-muted-foreground text-sm mb-6 flex-1">
                    {plan.description}
                  </p>

                  <ul className="space-y-3 mb-8">
                    {plan.features.map((feature, itemIndex) => (
                      <li key={itemIndex} className="flex items-start gap-3 text-sm">
                        <CheckCircle2 className="mt-0.5 h-4 w-4 text-primary flex-shrink-0" strokeWidth={2.5} />
                        <span className="text-muted-foreground">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <a
                    href="https://tally.so/r/3xkjvE"
                    className="mt-auto inline-flex items-center justify-center rounded-full bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground shadow-lg shadow-primary/30 transition hover:bg-primary/90"
                  >
                    Reach out if interested
                  </a>
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

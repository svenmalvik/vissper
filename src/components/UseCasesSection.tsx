import { Code, Users, Briefcase } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const useCases = [
  {
    icon: Code,
    title: "Individual Contributors",
    description: "Developers, designers, PMs who attend daily standups and need quick notes",
    benefit: "Participate fully without missing action items",
  },
  {
    icon: Users,
    title: "Remote Teams",
    description: "Distributed teams using Zoom, Teams, WebEx",
    benefit: "Never ask 'wait, what did we decide?' again",
  },
  {
    icon: Briefcase,
    title: "Knowledge Workers",
    description: "Anyone who attends meetings and values documentation",
    benefit: "Turn every conversation into searchable, shareable knowledge",
  },
];

const UseCasesSection = () => {
  return (
    <section className="py-24 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Who Is This For?
          </h2>
          <p className="text-xl text-muted-foreground">
            Built for anyone who values their time in meetings
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {useCases.map((useCase, index) => {
            const Icon = useCase.icon;
            return (
              <Card 
                key={index}
                className="border-border shadow-card hover:shadow-soft transition-all hover:-translate-y-1 animate-fade-in-up bg-card"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <CardHeader>
                  <div className="w-14 h-14 bg-accent/10 rounded-xl flex items-center justify-center mb-4">
                    <Icon className="h-7 w-7 text-accent" />
                  </div>
                  <CardTitle className="text-xl">{useCase.title}</CardTitle>
                  <CardDescription className="text-base">
                    {useCase.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="bg-primary/5 p-4 rounded-lg border-l-4 border-primary">
                    <p className="text-sm font-medium text-primary">
                      "{useCase.benefit}"
                    </p>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default UseCasesSection;

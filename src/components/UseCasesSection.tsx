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
    <section className="py-32 bg-muted/30 relative">
      <div className="container mx-auto px-4">
        <div className="text-center mb-20 animate-fade-in-up">
          <h2 className="text-5xl md:text-6xl font-bold text-foreground mb-6">
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
                className="border-border shadow-card hover:shadow-soft transition-all hover:-translate-y-2 animate-fade-in-up glass rounded-2xl group"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <CardHeader>
                  <div className="w-16 h-16 bg-gradient-to-br from-accent/20 to-accent/10 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform shadow-card">
                    <Icon className="h-8 w-8 text-accent" strokeWidth={2} />
                  </div>
                  <CardTitle className="text-2xl mb-3">{useCase.title}</CardTitle>
                  <CardDescription className="text-base leading-relaxed">
                    {useCase.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="bg-gradient-to-r from-primary/5 to-accent/5 p-5 rounded-xl border-l-4 border-primary group-hover:border-accent transition-colors">
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

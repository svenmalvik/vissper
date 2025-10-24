import { Users, ImageOff, Clock } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const problems = [
  {
    icon: Users,
    title: "Participate OR Take Notes?",
    description: "In meetings, you're forced to choose: actively participate or frantically type notes. You can't do both well.",
  },
  {
    icon: ImageOff,
    title: "Lost Context",
    description: "Screenshots and notes are disconnected. You take a screenshot during a critical moment, but later can't remember what was being discussed.",
  },
  {
    icon: Clock,
    title: "Post-Meeting Cleanup",
    description: "After meetings, you spend hours organizing messy notes, cleaning up typos, and trying to remember action items.",
  },
];

const ProblemSection = () => {
  return (
    <section className="py-32 bg-muted/30 relative">
      <div className="container mx-auto px-4">
        <div className="text-center mb-20 animate-fade-in-up">
          <h2 className="text-5xl md:text-6xl font-bold text-foreground mb-6">
            The Problem Vissper Solves
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Meeting notes shouldn't be this hard
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {problems.map((problem, index) => {
            const Icon = problem.icon;
            return (
              <Card 
                key={index} 
                className="border-border shadow-card hover:shadow-soft transition-all hover:-translate-y-2 animate-fade-in-up glass rounded-2xl group"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <CardHeader>
                  <div className="w-16 h-16 bg-gradient-to-br from-primary/10 to-accent/10 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform shadow-card">
                    <Icon className="h-8 w-8 text-primary" strokeWidth={2} />
                  </div>
                  <CardTitle className="text-2xl mb-3">{problem.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base leading-relaxed">
                    {problem.description}
                  </CardDescription>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ProblemSection;

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
    <section className="py-24 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            The Problem We're Solving
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
                className="border-border shadow-card hover:shadow-soft transition-all hover:-translate-y-1 animate-fade-in-up bg-card"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <CardHeader>
                  <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center mb-4">
                    <Icon className="h-7 w-7 text-primary" />
                  </div>
                  <CardTitle className="text-xl">{problem.title}</CardTitle>
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

import { FileSpreadsheet, Eye, Cloud } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const problems = [
  {
    icon: FileSpreadsheet,
    title: "Spreadsheet Overwhelm",
    description: "Manual expense tracking is tedious and error-prone. You spend hours updating spreadsheets instead of understanding your finances.",
  },
  {
    icon: Eye,
    title: "Portfolio Blindness",
    description: "Your money is scattered across banks, crypto wallets, and investment accounts. You can't see your complete financial picture.",
  },
  {
    icon: Cloud,
    title: "Privacy Concerns",
    description: "Cloud-based finance apps expose your sensitive data. You shouldn't have to choose between convenience and privacy.",
  },
];

const MalfiProblemSection = () => {
  return (
    <section className="py-32 bg-muted/30 relative">
      <div className="container mx-auto px-4">
        <div className="text-center mb-20 animate-fade-in-up">
          <h2 className="text-5xl md:text-6xl font-bold text-foreground mb-6">
            Financial Chaos, Solved
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Stop fighting with spreadsheets and scattered accounts
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

export default MalfiProblemSection;

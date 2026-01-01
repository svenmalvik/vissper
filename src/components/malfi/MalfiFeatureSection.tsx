import { Home, TrendingUp, DollarSign, Shield } from "lucide-react";

const features = [
  {
    icon: Home,
    title: "Mortgage Planning",
    description: "Calculate payments, compare scenarios, and plan refinancing. Make informed decisions about your biggest investment.",
    gradient: "from-primary/20 to-accent/20",
  },
  {
    icon: TrendingUp,
    title: "Portfolio Tracking",
    description: "Track stocks, crypto, and bank accounts in one place. Real-time updates from Coinbase and Stooq APIs.",
    gradient: "from-accent/20 to-success/20",
  },
  {
    icon: DollarSign,
    title: "Currency Exchange",
    description: "Real-time NOK/EUR/USD conversion and rates. Perfect for international finances and travel planning.",
    gradient: "from-success/20 to-primary/20",
  },
  {
    icon: Shield,
    title: "Privacy First",
    description: "Local encrypted storage with SQLCipher. Offline-first design. Your financial data stays on your device.",
    gradient: "from-primary/20 to-accent/20",
  },
];

const MalfiFeatureSection = () => {
  return (
    <section className="py-32 bg-background relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-4xl h-px bg-gradient-to-r from-transparent via-border to-transparent"></div>

      <div className="container mx-auto px-4">
        <div className="text-center mb-20 animate-fade-in-up">
          <h2 className="text-5xl md:text-6xl font-bold text-foreground mb-6">
            Everything You Need to<br />
            <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              Master Your Money
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Built with Rust for security and SwiftUI for elegance
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

export default MalfiFeatureSection;

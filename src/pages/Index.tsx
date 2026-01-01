import HeroSection from "@/components/HeroSection";
import ProblemSection from "@/components/ProblemSection";
import FeatureShowcase from "@/components/FeatureShowcase";
import TechnicalSection from "@/components/TechnicalSection";
import ComparisonSection from "@/components/ComparisonSection";
import UseCasesSection from "@/components/UseCasesSection";
import RoadmapSection from "@/components/RoadmapSection";
import FooterCTA from "@/components/FooterCTA";
import { Link } from "react-router-dom";
import { Sun, Moon } from "lucide-react";
import { useTheme } from "@/hooks/use-theme";

const Index = () => {
  const { isDark, toggle } = useTheme();

  return (
    <div className="min-h-screen bg-background">
      <div className="bg-background/90 border-b border-border/60 backdrop-blur">
        <div className="container mx-auto px-4 py-3 flex items-center justify-end gap-4 text-sm">
          <button
            onClick={toggle}
            className="p-2 rounded-md hover:bg-muted transition-colors"
            aria-label="Toggle theme"
          >
            {isDark ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
          </button>
          <Link to="/download" className="font-semibold tracking-tight text-foreground hover:text-primary transition-colors">
            <span className="text-primary">Download</span>
          </Link>
        </div>
      </div>
      <HeroSection />
      <ProblemSection />
      <FeatureShowcase />
      <TechnicalSection />
      <ComparisonSection />
      <UseCasesSection />
      <RoadmapSection />
      <FooterCTA />
    </div>
  );
};

export default Index;

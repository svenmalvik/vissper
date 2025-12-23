import HeroSection from "@/components/HeroSection";
import ProblemSection from "@/components/ProblemSection";
import FeatureShowcase from "@/components/FeatureShowcase";
import TechnicalSection from "@/components/TechnicalSection";
import ComparisonSection from "@/components/ComparisonSection";
import UseCasesSection from "@/components/UseCasesSection";
import RoadmapSection from "@/components/RoadmapSection";
import FooterCTA from "@/components/FooterCTA";
import { Link } from "react-router-dom";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <div className="bg-background/90 border-b border-border/60 backdrop-blur">
        <div className="container mx-auto px-4 py-3 flex items-center justify-between text-sm">
          <Link to="/workshop" className="font-semibold tracking-tight text-foreground hover:text-primary transition-colors">
            Join the Smart AI Meeting Companion <span className="text-primary">Workshop</span>
          </Link>
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

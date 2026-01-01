import HeroSection from "@/components/HeroSection";
import ProblemSection from "@/components/ProblemSection";
import FeatureShowcase from "@/components/FeatureShowcase";
import TechnicalSection from "@/components/TechnicalSection";
import ComparisonSection from "@/components/ComparisonSection";
import UseCasesSection from "@/components/UseCasesSection";
import RoadmapSection from "@/components/RoadmapSection";
import FooterCTA from "@/components/FooterCTA";

const VissperLanding = () => {
  return (
    <div className="min-h-screen bg-background">
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

export default VissperLanding;

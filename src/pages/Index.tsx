import HeroSection from "@/components/HeroSection";
import ProblemSection from "@/components/ProblemSection";
import SolutionSection from "@/components/SolutionSection";
import DemoSection from "@/components/DemoSection";
import TechnicalSection from "@/components/TechnicalSection";
import ComparisonSection from "@/components/ComparisonSection";
import UseCasesSection from "@/components/UseCasesSection";
import RoadmapSection from "@/components/RoadmapSection";
import FooterCTA from "@/components/FooterCTA";

const Index = () => {
  return (
    <div className="min-h-screen">
      <HeroSection />
      <ProblemSection />
      <SolutionSection />
      <DemoSection />
      <TechnicalSection />
      <ComparisonSection />
      <UseCasesSection />
      <RoadmapSection />
      <FooterCTA />
    </div>
  );
};

export default Index;

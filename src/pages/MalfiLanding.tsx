import MalfiHeroSection from "@/components/malfi/MalfiHeroSection";
import MalfiProblemSection from "@/components/malfi/MalfiProblemSection";
import MalfiFeatureSection from "@/components/malfi/MalfiFeatureSection";
import MalfiCTASection from "@/components/malfi/MalfiCTASection";

const MalfiLanding = () => {
  return (
    <div className="min-h-screen bg-background">
      <MalfiHeroSection />
      <MalfiProblemSection />
      <MalfiFeatureSection />
      <MalfiCTASection />
    </div>
  );
};

export default MalfiLanding;

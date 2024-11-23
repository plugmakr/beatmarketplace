import TopNavigation from "@/components/landing/TopNavigation";
import HeroSection from "@/components/landing/HeroSection";
import FeaturesSection from "@/components/landing/FeaturesSection";
import BeatsSection from "@/components/landing/BeatsSection";
import KitsSection from "@/components/landing/KitsSection";
import ArtistsSection from "@/components/landing/ArtistsSection";
import PricingSection from "@/components/landing/PricingSection";
import CTASection from "@/components/landing/CTASection";

const Index = () => {
  return (
    <div className="min-h-screen bg-black">
      <TopNavigation />
      <div className="pt-16"> {/* Add padding-top to account for fixed navigation */}
        <HeroSection />
        <FeaturesSection />
        <BeatsSection />
        <KitsSection />
        <ArtistsSection />
        <PricingSection />
        <CTASection />
      </div>
    </div>
  );
};

export default Index;
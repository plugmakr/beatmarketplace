import Navigation from "@/components/landing/Navigation";
import HeroSection from "@/components/landing/HeroSection";
import FeaturesSection from "@/components/landing/FeaturesSection";
import BeatsSection from "@/components/landing/BeatsSection";
import KitsSection from "@/components/landing/KitsSection";
import CTASection from "@/components/landing/CTASection";

const Index = () => {
  return (
    <div className="min-h-screen bg-black">
      <Navigation />
      <HeroSection />
      <FeaturesSection />
      <BeatsSection />
      <KitsSection />
      <CTASection />
    </div>
  );
};

export default Index;
import { HoverCard, HoverCardContent, HoverCardTrigger } from "@/components/ui/hover-card";
import { Music, Headphones, Upload, ShoppingCart } from "lucide-react";

const features = [
  {
    icon: <Music className="w-6 h-6" />,
    title: "Sell Your Beats",
    description: "Upload and sell your beats to artists worldwide"
  },
  {
    icon: <Headphones className="w-6 h-6" />,
    title: "License Your Music",
    description: "Multiple license types for different uses"
  },
  {
    icon: <Upload className="w-6 h-6" />,
    title: "Easy Upload",
    description: "Simple drag and drop interface for your beats"
  },
  {
    icon: <ShoppingCart className="w-6 h-6" />,
    title: "Secure Payments",
    description: "Safe and secure payment processing"
  }
];

const FeaturesSection = () => (
  <section className="py-20 bg-black/50 backdrop-blur-sm">
    <div className="container mx-auto px-4">
      <h3 className="text-3xl font-bold text-center text-white mb-12">
        Everything You Need to
        <span className="bg-gradient-to-r from-yellow-500 to-yellow-200 bg-clip-text text-transparent">
          {" "}Succeed
        </span>
      </h3>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {features.map((feature, index) => (
          <HoverCard key={index}>
            <HoverCardTrigger>
              <div className="p-6 rounded-lg border border-yellow-500/20 bg-black/40 backdrop-blur-sm transition-all duration-300 hover:scale-105 hover:border-yellow-500/40">
                <div className="text-yellow-500 mb-4">{feature.icon}</div>
                <h4 className="text-xl font-semibold text-white mb-2">{feature.title}</h4>
                <p className="text-gray-400">{feature.description}</p>
              </div>
            </HoverCardTrigger>
            <HoverCardContent className="bg-black/90 border border-yellow-500/20">
              <p className="text-gray-300">{feature.description}</p>
            </HoverCardContent>
          </HoverCard>
        ))}
      </div>
    </div>
  </section>
);

export default FeaturesSection;
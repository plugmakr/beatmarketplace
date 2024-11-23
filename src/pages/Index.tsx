import { Button } from "@/components/ui/button";
import { NavigationMenu } from "@/components/ui/navigation-menu";
import { HoverCard, HoverCardContent, HoverCardTrigger } from "@/components/ui/hover-card";
import { Menubar } from "@/components/ui/menubar";
import { Music, Headphones, Upload, ShoppingCart } from "lucide-react";

const Index = () => {
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

  return (
    <div className="min-h-screen bg-black">
      {/* Navigation */}
      <nav className="border-b border-yellow-500/20">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <h1 className="text-2xl font-bold bg-gradient-to-r from-yellow-500 to-yellow-200 bg-clip-text text-transparent">
            BeatMarketplace
          </h1>
          <div className="flex gap-4">
            <Button variant="ghost" className="text-yellow-500 hover:text-yellow-400">
              Browse Beats
            </Button>
            <Button variant="ghost" className="text-yellow-500 hover:text-yellow-400">
              Sell Beats
            </Button>
            <Button className="bg-yellow-500 hover:bg-yellow-400 text-black">
              Sign Up
            </Button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div 
          className="absolute inset-0 z-0 opacity-20"
          style={{
            backgroundImage: "url('https://images.unsplash.com/photo-1488590528505-98d2b5aba04b')",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl">
            <h2 className="text-5xl font-bold text-white mb-6">
              Turn Your Beats Into
              <span className="bg-gradient-to-r from-yellow-500 to-yellow-200 bg-clip-text text-transparent">
                {" "}Success
              </span>
            </h2>
            <p className="text-gray-300 text-xl mb-8">
              Join thousands of producers selling their beats to artists worldwide. Start your journey today.
            </p>
            <Button className="bg-yellow-500 hover:bg-yellow-400 text-black text-lg px-8 py-6">
              Start Selling
            </Button>
          </div>
        </div>
      </section>

      {/* Features Section */}
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

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-b from-black to-yellow-950">
        <div className="container mx-auto px-4 text-center">
          <h3 className="text-4xl font-bold text-white mb-6">
            Ready to Start Selling?
          </h3>
          <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
            Join our community of producers and start selling your beats today. No hidden fees, just pure music business.
          </p>
          <Button className="bg-yellow-500 hover:bg-yellow-400 text-black text-lg px-8 py-6">
            Create Your Account
          </Button>
        </div>
      </section>
    </div>
  );
};

export default Index;
import { Button } from "@/components/ui/button";

const HeroSection = () => (
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
);

export default HeroSection;
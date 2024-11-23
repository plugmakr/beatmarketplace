import Navigation from "@/components/landing/Navigation";

const HowItWorks = () => {
  return (
    <div className="min-h-screen bg-black">
      <Navigation />
      <div className="container mx-auto px-4 py-20">
        <h1 className="text-4xl font-bold text-center mb-12">
          How It
          <span className="bg-gradient-to-r from-yellow-500 to-yellow-200 bg-clip-text text-transparent">
            {" "}Works
          </span>
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          <div className="text-center p-6 bg-black/60 border border-yellow-500/20 rounded-lg">
            <div className="text-4xl font-bold text-yellow-500 mb-4">1</div>
            <h3 className="text-xl font-semibold text-white mb-2">Browse</h3>
            <p className="text-gray-400">Explore our vast collection of beats and sound kits from top producers</p>
          </div>
          <div className="text-center p-6 bg-black/60 border border-yellow-500/20 rounded-lg">
            <div className="text-4xl font-bold text-yellow-500 mb-4">2</div>
            <h3 className="text-xl font-semibold text-white mb-2">Preview</h3>
            <p className="text-gray-400">Listen to high-quality previews before making your purchase</p>
          </div>
          <div className="text-center p-6 bg-black/60 border border-yellow-500/20 rounded-lg">
            <div className="text-4xl font-bold text-yellow-500 mb-4">3</div>
            <h3 className="text-xl font-semibold text-white mb-2">Purchase</h3>
            <p className="text-gray-400">Buy and instantly download your favorite beats and kits</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HowItWorks;
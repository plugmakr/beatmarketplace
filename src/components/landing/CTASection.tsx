import { Button } from "@/components/ui/button";

const CTASection = () => (
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
);

export default CTASection;
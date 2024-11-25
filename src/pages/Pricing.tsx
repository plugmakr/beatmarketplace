import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import TopNavigation from "@/components/landing/TopNavigation";
import { Check } from "lucide-react";
import { useNavigate } from "react-router-dom";

const plans = [
  {
    name: "Basic",
    description: "For hobbyists and beginners",
    price: "$9.99",
    features: [
      "Upload up to 50 beats",
      "Basic analytics",
      "Standard portfolio page",
      "Email support"
    ]
  },
  {
    name: "Pro",
    description: "For professional producers",
    price: "$24.99",
    features: [
      "Unlimited uploads",
      "Advanced analytics",
      "Custom portfolio website",
      "Priority support",
      "Marketing tools",
      "Beat licensing options"
    ]
  },
  {
    name: "Enterprise",
    description: "For labels and studios",
    price: "$99.99",
    features: [
      "Everything in Pro",
      "Multiple team members",
      "API access",
      "24/7 dedicated support",
      "Custom contracts",
      "White-label options"
    ]
  }
];

const Pricing = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-black">
      <TopNavigation />
      <div className="container mx-auto px-4 py-20">
        <h1 className="text-4xl font-bold text-center mb-12">
          <span className="text-white">Our</span>
          <span className="bg-gradient-to-r from-yellow-500 to-yellow-200 bg-clip-text text-transparent">
            {" "}Pricing
          </span>
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {plans.map((plan, index) => (
            <Card 
              key={plan.name} 
              className={`bg-black/60 border ${
                index === 1 
                  ? "border-2 border-yellow-500" 
                  : "border-yellow-500/20"
              }`}
            >
              <CardHeader>
                <CardTitle className="text-2xl text-yellow-500">{plan.name}</CardTitle>
                <CardDescription className="text-gray-400">{plan.description}</CardDescription>
                <div className="text-3xl font-bold text-white">
                  {plan.price}<span className="text-sm text-gray-400">/month</span>
                </div>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  {plan.features.map((feature, i) => (
                    <li key={i} className="flex items-center gap-2">
                      <Check className="text-yellow-500" size={16} />
                      <span className="text-gray-300">{feature}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
              <CardFooter>
                <Button 
                  className="w-full bg-yellow-500 hover:bg-yellow-400 text-black"
                  onClick={() => navigate('/signup')}
                >
                  {index === 2 ? "Contact Sales" : "Get Started"}
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>

        <div className="mt-20 text-center">
          <h2 className="text-3xl font-bold text-white mb-6">Frequently Asked Questions</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <Card className="bg-black/60 border border-yellow-500/20">
              <CardHeader>
                <CardTitle className="text-xl text-yellow-500">What payment methods do you accept?</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-300">
                  We accept all major credit cards, PayPal, and various cryptocurrency options for your convenience.
                </p>
              </CardContent>
            </Card>
            <Card className="bg-black/60 border border-yellow-500/20">
              <CardHeader>
                <CardTitle className="text-xl text-yellow-500">Can I upgrade or downgrade my plan?</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-300">
                  Yes, you can change your plan at any time. Changes will be reflected in your next billing cycle.
                </p>
              </CardContent>
            </Card>
            <Card className="bg-black/60 border border-yellow-500/20">
              <CardHeader>
                <CardTitle className="text-xl text-yellow-500">Is there a free trial?</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-300">
                  Yes, all plans come with a 14-day free trial. No credit card required to start.
                </p>
              </CardContent>
            </Card>
            <Card className="bg-black/60 border border-yellow-500/20">
              <CardHeader>
                <CardTitle className="text-xl text-yellow-500">What happens to my content if I cancel?</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-300">
                  You'll have 30 days to download your content after cancellation. After that, it will be removed from our servers.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Pricing;
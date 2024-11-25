import TopNavigation from "@/components/landing/TopNavigation";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Check } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { useToast } from "@/components/ui/use-toast";

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

const faqs = [
  {
    question: "What payment methods do you accept?",
    answer: "We accept all major credit cards, PayPal, and various cryptocurrency options for your convenience."
  },
  {
    question: "Can I upgrade or downgrade my plan?",
    answer: "Yes, you can change your plan at any time. Changes will be reflected in your next billing cycle."
  },
  {
    question: "Is there a free trial?",
    answer: "Yes, all plans come with a 14-day free trial. No credit card required to start."
  },
  {
    question: "What happens to my content if I cancel?",
    answer: "You'll have 30 days to download your content after cancellation. After that, it will be removed from our servers."
  }
];

const Pricing = () => {
  const navigate = useNavigate();
  const { toast } = useToast();

  const handleSubscribe = (planName: string) => {
    toast({
      title: "Subscription Started",
      description: `You've selected the ${planName} plan. Redirecting to checkout...`,
    });
    // In a real app, this would redirect to a checkout page
  };

  return (
    <div className="min-h-screen bg-black">
      <TopNavigation />
      <div className="container mx-auto px-4 py-20">
        <h1 className="text-4xl font-bold text-center mb-12">
          <span className="text-white">Simple</span>
          <span className="bg-gradient-to-r from-yellow-500 to-yellow-200 bg-clip-text text-transparent">
            {" "}Pricing
          </span>
        </h1>

        {/* Plans */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto mb-20">
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
                  onClick={() => handleSubscribe(plan.name)}
                >
                  {plan.name === "Enterprise" ? "Contact Sales" : "Get Started"}
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>

        {/* FAQs */}
        <div className="mt-20 text-center">
          <h2 className="text-3xl font-bold text-white mb-12">Frequently Asked Questions</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {faqs.map((faq) => (
              <Card key={faq.question} className="bg-black/60 border border-yellow-500/20">
                <CardHeader>
                  <CardTitle className="text-xl text-yellow-500">{faq.question}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-300">{faq.answer}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center mt-20 bg-black/60 border border-yellow-500/20 rounded-lg p-8">
          <h2 className="text-3xl font-bold text-yellow-500 mb-4">Ready to Get Started?</h2>
          <p className="text-gray-300 mb-6">Join thousands of producers and artists already using our platform.</p>
          <Button 
            className="bg-yellow-500 hover:bg-yellow-400 text-black"
            onClick={() => navigate('/signup')}
          >
            Start Free Trial
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Pricing;
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Check } from "lucide-react";

const PricingSection = () => {
  return (
    <section id="pricing" className="py-20 bg-black/40">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12">
          <span className="text-white">Simple</span>
          <span className="bg-gradient-to-r from-yellow-500 to-yellow-200 bg-clip-text text-transparent">
            {" "}Pricing
          </span>
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          <Card className="bg-black/60 border border-yellow-500/20">
            <CardHeader>
              <CardTitle className="text-2xl text-yellow-500">Basic</CardTitle>
              <CardDescription className="text-gray-400">For hobbyists and beginners</CardDescription>
              <div className="text-3xl font-bold text-white">$9.99<span className="text-sm text-gray-400">/month</span></div>
            </CardHeader>
            <CardContent>
              <ul className="space-y-3">
                <li className="flex items-center gap-2">
                  <Check className="text-yellow-500" size={16} />
                  <span className="text-gray-300">Upload up to 50 beats</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check className="text-yellow-500" size={16} />
                  <span className="text-gray-300">Basic analytics</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check className="text-yellow-500" size={16} />
                  <span className="text-gray-300">Standard portfolio page</span>
                </li>
              </ul>
            </CardContent>
            <CardFooter>
              <Button className="w-full bg-yellow-500 hover:bg-yellow-400 text-black">Get Started</Button>
            </CardFooter>
          </Card>

          <Card className="bg-black/60 border-2 border-yellow-500">
            <CardHeader>
              <CardTitle className="text-2xl text-yellow-500">Pro</CardTitle>
              <CardDescription className="text-gray-400">For professional producers</CardDescription>
              <div className="text-3xl font-bold text-white">$24.99<span className="text-sm text-gray-400">/month</span></div>
            </CardHeader>
            <CardContent>
              <ul className="space-y-3">
                <li className="flex items-center gap-2">
                  <Check className="text-yellow-500" size={16} />
                  <span className="text-gray-300">Unlimited uploads</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check className="text-yellow-500" size={16} />
                  <span className="text-gray-300">Advanced analytics</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check className="text-yellow-500" size={16} />
                  <span className="text-gray-300">Custom portfolio website</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check className="text-yellow-500" size={16} />
                  <span className="text-gray-300">Priority support</span>
                </li>
              </ul>
            </CardContent>
            <CardFooter>
              <Button className="w-full bg-yellow-500 hover:bg-yellow-400 text-black">Get Started</Button>
            </CardFooter>
          </Card>

          <Card className="bg-black/60 border border-yellow-500/20">
            <CardHeader>
              <CardTitle className="text-2xl text-yellow-500">Enterprise</CardTitle>
              <CardDescription className="text-gray-400">For labels and studios</CardDescription>
              <div className="text-3xl font-bold text-white">$99.99<span className="text-sm text-gray-400">/month</span></div>
            </CardHeader>
            <CardContent>
              <ul className="space-y-3">
                <li className="flex items-center gap-2">
                  <Check className="text-yellow-500" size={16} />
                  <span className="text-gray-300">Everything in Pro</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check className="text-yellow-500" size={16} />
                  <span className="text-gray-300">Multiple team members</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check className="text-yellow-500" size={16} />
                  <span className="text-gray-300">API access</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check className="text-yellow-500" size={16} />
                  <span className="text-gray-300">24/7 dedicated support</span>
                </li>
              </ul>
            </CardContent>
            <CardFooter>
              <Button className="w-full bg-yellow-500 hover:bg-yellow-400 text-black">Contact Sales</Button>
            </CardFooter>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
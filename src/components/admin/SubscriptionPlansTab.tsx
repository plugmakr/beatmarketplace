import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { CreditCard, Trash2, PenLine } from "lucide-react";
import { useToast } from "@/components/ui/use-toast";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { useState } from "react";
import { useLandingPageStore } from "@/store/landingPageStore";

interface Plan {
  name: string;
  price: string;
  features: string[];
}

const SubscriptionPlansTab = () => {
  const { toast } = useToast();
  const [plans, setPlans] = useState<Plan[]>([
    {
      name: 'Basic Plan',
      price: '$9.99',
      features: ['Upload up to 50 beats', 'Basic analytics', 'Standard portfolio page', 'Email support']
    },
    {
      name: 'Pro Plan',
      price: '$24.99',
      features: ['Unlimited uploads', 'Advanced analytics', 'Custom portfolio website', 'Priority support', 'Marketing tools', 'Beat licensing options']
    },
    {
      name: 'Enterprise Plan',
      price: '$99.99',
      features: ['Everything in Pro', 'Multiple team members', 'API access', '24/7 dedicated support', 'Custom contracts', 'White-label options']
    }
  ]);
  const { updateContent } = useLandingPageStore();

  const handleDelete = (planName: string) => {
    setPlans(plans.filter(plan => plan.name !== planName));
    toast({
      title: "Plan Deleted",
      description: `${planName} has been deleted successfully.`,
    });
  };

  const handleEdit = (planIndex: number, updatedPlan: Plan) => {
    const newPlans = [...plans];
    newPlans[planIndex] = updatedPlan;
    setPlans(newPlans);
    updateContent('pricing', { title: 'Simple Pricing', plans: newPlans });
    toast({
      title: "Plan Updated",
      description: `${updatedPlan.name} has been updated successfully.`,
    });
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      <Card className="bg-black/60 border border-yellow-500/20">
        <CardHeader>
          <CardTitle className="text-yellow-500 flex items-center gap-2">
            <CreditCard className="w-4 h-4" />
            Active Plans
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {plans.map((plan, index) => (
              <div key={plan.name} className="flex items-center justify-between p-4 border border-yellow-500/20 rounded">
                <div>
                  <h3 className="font-semibold text-white">{plan.name}</h3>
                  <p className="text-sm text-gray-400">{plan.price}/month</p>
                </div>
                <div className="flex gap-2">
                  <Dialog>
                    <DialogTrigger asChild>
                      <Button 
                        variant="outline" 
                        className="border-yellow-500 text-yellow-500 hover:bg-yellow-500 hover:text-black"
                      >
                        <PenLine className="w-4 h-4" />
                      </Button>
                    </DialogTrigger>
                    <DialogContent className="bg-black/90 border border-yellow-500/20">
                      <DialogHeader>
                        <DialogTitle className="text-yellow-500">Edit Plan</DialogTitle>
                      </DialogHeader>
                      <form onSubmit={(e) => {
                        e.preventDefault();
                        const formData = new FormData(e.currentTarget);
                        const updatedPlan = {
                          name: formData.get('name') as string,
                          price: formData.get('price') as string,
                          features: (formData.get('features') as string).split('\n').filter(f => f.trim() !== '')
                        };
                        handleEdit(index, updatedPlan);
                      }} className="space-y-4">
                        <div>
                          <Label htmlFor="name" className="text-white">Plan Name</Label>
                          <Input 
                            id="name" 
                            name="name" 
                            defaultValue={plan.name}
                            className="bg-black/60 text-white" 
                          />
                        </div>
                        <div>
                          <Label htmlFor="price" className="text-white">Price</Label>
                          <Input 
                            id="price" 
                            name="price" 
                            defaultValue={plan.price}
                            className="bg-black/60 text-white" 
                          />
                        </div>
                        <div>
                          <Label htmlFor="features" className="text-white">Features (one per line)</Label>
                          <Textarea
                            id="features"
                            name="features"
                            defaultValue={plan.features.join('\n')}
                            className="bg-black/60 min-h-[100px] text-white"
                          />
                        </div>
                        <Button type="submit" className="w-full bg-yellow-500 hover:bg-yellow-400 text-black">
                          Save Changes
                        </Button>
                      </form>
                    </DialogContent>
                  </Dialog>
                  <Button 
                    variant="outline" 
                    className="border-red-500 text-red-500 hover:bg-red-500 hover:text-black"
                    onClick={() => handleDelete(plan.name)}
                  >
                    <Trash2 className="w-4 h-4" />
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      <Card className="bg-black/60 border border-yellow-500/20">
        <CardHeader>
          <CardTitle className="text-yellow-500">Add New Plan</CardTitle>
        </CardHeader>
        <CardContent>
          <form className="space-y-4">
            <div>
              <Label htmlFor="plan-name" className="text-white">Plan Name</Label>
              <Input id="plan-name" className="bg-black/60 text-white" />
            </div>
            <div>
              <Label htmlFor="plan-price" className="text-white">Monthly Price</Label>
              <Input id="plan-price" type="number" className="bg-black/60 text-white" />
            </div>
            <div>
              <Label htmlFor="plan-features" className="text-white">Features (one per line)</Label>
              <Textarea
                id="plan-features"
                className="bg-black/60 min-h-[100px] text-white"
              />
            </div>
            <Button className="w-full bg-yellow-500 hover:bg-yellow-400 text-black">
              Add Plan
            </Button>
          </form>
        </CardContent>
      </Card>
    </div>
  );
};

export default SubscriptionPlansTab;
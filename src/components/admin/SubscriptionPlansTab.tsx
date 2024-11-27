import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { CreditCard, Trash2, PenLine } from "lucide-react";
import { useToast } from "@/components/ui/use-toast";

const SubscriptionPlansTab = () => {
  const { toast } = useToast();

  const handleDelete = (planName: string) => {
    toast({
      title: "Plan Deleted",
      description: `${planName} has been deleted successfully.`,
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
            {['Basic Plan', 'Pro Plan', 'Enterprise Plan'].map((plan) => (
              <div key={plan} className="flex items-center justify-between p-4 border border-yellow-500/20 rounded">
                <div>
                  <h3 className="font-semibold text-white">{plan}</h3>
                  <p className="text-sm text-gray-400">$9.99/month</p>
                </div>
                <div className="flex gap-2">
                  <Button 
                    variant="outline" 
                    className="border-yellow-500 text-yellow-500 hover:bg-yellow-500 hover:text-black"
                  >
                    <PenLine className="w-4 h-4" />
                  </Button>
                  <Button 
                    variant="outline" 
                    className="border-red-500 text-red-500 hover:bg-red-500 hover:text-black"
                    onClick={() => handleDelete(plan)}
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
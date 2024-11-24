import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Users, Package, BarChart3, Settings, Edit3, CreditCard } from "lucide-react";
import { useNavigate } from "react-router-dom";

const AdminPortal = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-black">
      <div className="p-8">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-3xl font-bold text-yellow-500">Admin Portal</h1>
          <Button 
            variant="ghost" 
            className="text-yellow-500 hover:text-yellow-400"
            onClick={() => navigate('/')}
          >
            Back to Home
          </Button>
        </div>
        
        <Tabs defaultValue="dashboard" className="space-y-6">
          <TabsList className="bg-black/60 border border-yellow-500/20">
            <TabsTrigger value="dashboard">Dashboard</TabsTrigger>
            <TabsTrigger value="users">Users</TabsTrigger>
            <TabsTrigger value="content">Content</TabsTrigger>
            <TabsTrigger value="subscription-plans">Subscription Plans</TabsTrigger>
            <TabsTrigger value="settings">Settings</TabsTrigger>
          </TabsList>

          <TabsContent value="dashboard">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <Card className="bg-black/60 border border-yellow-500/20">
                <CardHeader>
                  <CardTitle className="text-yellow-500 flex items-center gap-2">
                    <Users className="w-4 h-4" />
                    Total Users
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-2xl font-bold text-white">1,234</p>
                </CardContent>
              </Card>
              
              <Card className="bg-black/60 border border-yellow-500/20">
                <CardHeader>
                  <CardTitle className="text-yellow-500 flex items-center gap-2">
                    <Package className="w-4 h-4" />
                    Active Beats
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-2xl font-bold text-white">567</p>
                </CardContent>
              </Card>

              <Card className="bg-black/60 border border-yellow-500/20">
                <CardHeader>
                  <CardTitle className="text-yellow-500 flex items-center gap-2">
                    <BarChart3 className="w-4 h-4" />
                    Monthly Revenue
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-2xl font-bold text-white">$12,345</p>
                </CardContent>
              </Card>

              <Card className="bg-black/60 border border-yellow-500/20">
                <CardHeader>
                  <CardTitle className="text-yellow-500 flex items-center gap-2">
                    <Settings className="w-4 h-4" />
                    Active Plans
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-2xl font-bold text-white">3</p>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="content">
            <Card className="bg-black/60 border border-yellow-500/20">
              <CardHeader>
                <CardTitle className="text-yellow-500">Landing Page Content</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <Label htmlFor="hero-title">Hero Title</Label>
                  <Input id="hero-title" defaultValue="Find Your Perfect Beat" />
                </div>
                <div>
                  <Label htmlFor="hero-subtitle">Hero Subtitle</Label>
                  <Input id="hero-subtitle" defaultValue="Browse thousands of beats from top producers" />
                </div>
                <Button className="bg-yellow-500 hover:bg-yellow-400 text-black">
                  <Edit3 className="w-4 h-4 mr-2" />
                  Save Changes
                </Button>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="subscription-plans">
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
                    <div className="flex items-center justify-between p-4 border border-yellow-500/20 rounded">
                      <div>
                        <h3 className="font-semibold text-white">Basic Plan</h3>
                        <p className="text-sm text-gray-400">$9.99/month</p>
                      </div>
                      <Button variant="outline" className="border-yellow-500 text-yellow-500 hover:bg-yellow-500 hover:text-black">
                        Edit
                      </Button>
                    </div>
                    <div className="flex items-center justify-between p-4 border border-yellow-500/20 rounded">
                      <div>
                        <h3 className="font-semibold text-white">Pro Plan</h3>
                        <p className="text-sm text-gray-400">$24.99/month</p>
                      </div>
                      <Button variant="outline" className="border-yellow-500 text-yellow-500 hover:bg-yellow-500 hover:text-black">
                        Edit
                      </Button>
                    </div>
                    <div className="flex items-center justify-between p-4 border border-yellow-500/20 rounded">
                      <div>
                        <h3 className="font-semibold text-white">Enterprise Plan</h3>
                        <p className="text-sm text-gray-400">$99.99/month</p>
                      </div>
                      <Button variant="outline" className="border-yellow-500 text-yellow-500 hover:bg-yellow-500 hover:text-black">
                        Edit
                      </Button>
                    </div>
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
                      <Label htmlFor="plan-name">Plan Name</Label>
                      <Input id="plan-name" className="bg-black/60" />
                    </div>
                    <div>
                      <Label htmlFor="plan-price">Monthly Price</Label>
                      <Input id="plan-price" type="number" className="bg-black/60" />
                    </div>
                    <div>
                      <Label htmlFor="plan-features">Features (one per line)</Label>
                      <textarea
                        id="plan-features"
                        className="w-full min-h-[100px] bg-black/60 border border-yellow-500/20 rounded p-2 text-white"
                      />
                    </div>
                    <Button className="w-full bg-yellow-500 hover:bg-yellow-400 text-black">
                      Add Plan
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default AdminPortal;
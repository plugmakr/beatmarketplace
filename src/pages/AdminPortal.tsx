import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Users, Package, BarChart3, Settings, Edit3, CreditCard } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { mockUsers } from "@/data/mockUsers";

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

          <TabsContent value="users">
            <Card className="bg-black/60 border border-yellow-500/20">
              <CardHeader>
                <CardTitle className="text-yellow-500">User Management</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="overflow-x-auto">
                  <table className="w-full text-white">
                    <thead>
                      <tr className="border-b border-yellow-500/20">
                        <th className="text-left p-4">Name</th>
                        <th className="text-left p-4">Email</th>
                        <th className="text-left p-4">Role</th>
                        <th className="text-left p-4">Status</th>
                        <th className="text-left p-4">Join Date</th>
                        <th className="text-left p-4">Last Login</th>
                        <th className="text-left p-4">Actions</th>
                      </tr>
                    </thead>
                    <tbody>
                      {mockUsers.map((user) => (
                        <tr key={user.id} className="border-b border-yellow-500/10">
                          <td className="p-4">{user.name}</td>
                          <td className="p-4">{user.email}</td>
                          <td className="p-4 capitalize">{user.role}</td>
                          <td className="p-4">
                            <span className={`px-2 py-1 rounded-full text-xs ${
                              user.status === 'active' ? 'bg-green-500/20 text-green-500' : 'bg-red-500/20 text-red-500'
                            }`}>
                              {user.status}
                            </span>
                          </td>
                          <td className="p-4">{user.joinDate}</td>
                          <td className="p-4">{user.lastLogin}</td>
                          <td className="p-4">
                            <Button variant="ghost" size="sm" className="text-yellow-500 hover:text-yellow-400">
                              Edit
                            </Button>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="content">
            <Card className="bg-black/60 border border-yellow-500/20">
              <CardHeader>
                <CardTitle className="text-yellow-500">Landing Page Content</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                {/* Hero Section */}
                <div className="space-y-4">
                  <h3 className="text-xl font-semibold text-white">Hero Section</h3>
                  <div className="space-y-4">
                    <div>
                      <Label htmlFor="hero-title">Title</Label>
                      <Input 
                        id="hero-title" 
                        defaultValue="Turn Your Beats Into Success" 
                        className="bg-black/60"
                      />
                    </div>
                    <div>
                      <Label htmlFor="hero-description">Description</Label>
                      <Textarea 
                        id="hero-description" 
                        defaultValue="Join thousands of producers selling their beats to artists worldwide. Start your journey today." 
                        className="bg-black/60"
                      />
                    </div>
                  </div>
                </div>

                {/* Features Section */}
                <div className="space-y-4">
                  <h3 className="text-xl font-semibold text-white">Features Section</h3>
                  <div className="space-y-4">
                    <div>
                      <Label htmlFor="features-title">Title</Label>
                      <Input 
                        id="features-title" 
                        defaultValue="Everything You Need to Succeed" 
                        className="bg-black/60"
                      />
                    </div>
                  </div>
                </div>

                {/* CTA Section */}
                <div className="space-y-4">
                  <h3 className="text-xl font-semibold text-white">CTA Section</h3>
                  <div className="space-y-4">
                    <div>
                      <Label htmlFor="cta-title">Title</Label>
                      <Input 
                        id="cta-title" 
                        defaultValue="Ready to Start Selling?" 
                        className="bg-black/60"
                      />
                    </div>
                    <div>
                      <Label htmlFor="cta-description">Description</Label>
                      <Textarea 
                        id="cta-description" 
                        defaultValue="Join our community of producers and start selling your beats today. No hidden fees, just pure music business." 
                        className="bg-black/60"
                      />
                    </div>
                  </div>
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
                      <Textarea
                        id="plan-features"
                        className="bg-black/60 min-h-[100px]"
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
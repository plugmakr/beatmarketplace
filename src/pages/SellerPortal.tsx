import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { DollarSign, Music2, Package, BarChart3, FileText } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import UploadBeatForm from "@/components/seller/UploadBeatForm";
import CreateKitForm from "@/components/seller/CreateKitForm";
import BeatLibrary from "@/components/seller/BeatLibrary";
import KitLibrary from "@/components/seller/KitLibrary";

const SellerPortal = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-black">
      <div className="p-8">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-3xl font-bold text-yellow-500">Seller Portal</h1>
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
            <TabsTrigger value="beats">Upload Beat</TabsTrigger>
            <TabsTrigger value="kits">Create Kit</TabsTrigger>
            <TabsTrigger value="library">Library</TabsTrigger>
            <TabsTrigger value="licenses">Licenses</TabsTrigger>
            <TabsTrigger value="analytics">Analytics</TabsTrigger>
          </TabsList>

          <TabsContent value="dashboard">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <Card className="bg-black/60 border border-yellow-500/20">
                <CardHeader>
                  <CardTitle className="text-yellow-500 flex items-center gap-2">
                    <Music2 className="w-4 h-4" />
                    Total Beats
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-2xl font-bold text-white">24</p>
                </CardContent>
              </Card>
              
              <Card className="bg-black/60 border border-yellow-500/20">
                <CardHeader>
                  <CardTitle className="text-yellow-500 flex items-center gap-2">
                    <Package className="w-4 h-4" />
                    Total Kits
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-2xl font-bold text-white">8</p>
                </CardContent>
              </Card>

              <Card className="bg-black/60 border border-yellow-500/20">
                <CardHeader>
                  <CardTitle className="text-yellow-500 flex items-center gap-2">
                    <DollarSign className="w-4 h-4" />
                    Revenue
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-2xl font-bold text-white">$5,678</p>
                </CardContent>
              </Card>

              <Card className="bg-black/60 border border-yellow-500/20">
                <CardHeader>
                  <CardTitle className="text-yellow-500 flex items-center gap-2">
                    <FileText className="w-4 h-4" />
                    Active Licenses
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-2xl font-bold text-white">45</p>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="beats">
            <UploadBeatForm />
          </TabsContent>

          <TabsContent value="kits">
            <CreateKitForm />
          </TabsContent>

          <TabsContent value="library">
            <div className="space-y-8">
              <BeatLibrary />
              <KitLibrary />
            </div>
          </TabsContent>

          <TabsContent value="licenses">
            <Card className="bg-black/60 border border-yellow-500/20">
              <CardHeader>
                <CardTitle className="text-yellow-500">License Management</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                    {['Basic', 'Premium', 'Exclusive'].map((type) => (
                      <Card key={type} className="bg-black/40 border border-yellow-500/20">
                        <CardHeader>
                          <CardTitle className="text-yellow-500">{type} License</CardTitle>
                        </CardHeader>
                        <CardContent>
                          <Button className="w-full bg-yellow-500 hover:bg-yellow-400 text-black">
                            Edit License Terms
                          </Button>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="analytics">
            <Card className="bg-black/60 border border-yellow-500/20">
              <CardHeader>
                <CardTitle className="text-yellow-500">Analytics Overview</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <Card className="bg-black/40 border border-yellow-500/20">
                      <CardHeader>
                        <CardTitle className="text-yellow-500">Monthly Sales</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <div className="h-[200px] flex items-center justify-center text-gray-400">
                          Sales chart will be implemented here
                        </div>
                      </CardContent>
                    </Card>
                    
                    <Card className="bg-black/40 border border-yellow-500/20">
                      <CardHeader>
                        <CardTitle className="text-yellow-500">Popular Items</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <div className="h-[200px] flex items-center justify-center text-gray-400">
                          Popular items chart will be implemented here
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default SellerPortal;
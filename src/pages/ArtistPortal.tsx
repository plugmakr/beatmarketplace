import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { Music2, BarChart3, Upload, Package } from "lucide-react";

const ArtistPortal = () => {
  return (
    <div className="min-h-screen bg-black p-8">
      <h1 className="text-3xl font-bold text-yellow-500 mb-8">Artist Portal</h1>
      
      <Tabs defaultValue="dashboard" className="space-y-6">
        <TabsList className="bg-black/60 border border-yellow-500/20">
          <TabsTrigger value="dashboard">Dashboard</TabsTrigger>
          <TabsTrigger value="beats">My Beats</TabsTrigger>
          <TabsTrigger value="analytics">Analytics</TabsTrigger>
          <TabsTrigger value="profile">Profile</TabsTrigger>
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
                  <BarChart3 className="w-4 h-4" />
                  Monthly Sales
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-2xl font-bold text-white">$1,234</p>
              </CardContent>
            </Card>
          </div>

          <div className="mt-8">
            <Card className="bg-black/60 border border-yellow-500/20">
              <CardHeader>
                <CardTitle className="text-yellow-500">Quick Actions</CardTitle>
              </CardHeader>
              <CardContent className="space-x-4">
                <Button className="bg-yellow-500 hover:bg-yellow-400 text-black">
                  <Upload className="w-4 h-4 mr-2" />
                  Upload Beat
                </Button>
                <Button className="bg-yellow-500 hover:bg-yellow-400 text-black">
                  <Package className="w-4 h-4 mr-2" />
                  Create Kit
                </Button>
              </CardContent>
            </Card>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default ArtistPortal;
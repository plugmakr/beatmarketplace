import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Music2, FileText, HeadphonesIcon, WavesIcon, MessageCircle, Star } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";

const ArtistPortal = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-black">
      <div className="p-8">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-3xl font-bold text-yellow-500">Artist Portal</h1>
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
            <TabsTrigger value="purchased">Purchased Beats</TabsTrigger>
            <TabsTrigger value="licenses">License Management</TabsTrigger>
            <TabsTrigger value="projects">My Projects</TabsTrigger>
            <TabsTrigger value="collaboration">Collaboration</TabsTrigger>
            <TabsTrigger value="favorites">Favorites</TabsTrigger>
          </TabsList>

          <TabsContent value="dashboard">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <Card className="bg-black/60 border border-yellow-500/20">
                <CardHeader>
                  <CardTitle className="text-yellow-500 flex items-center gap-2">
                    <HeadphonesIcon className="w-4 h-4" />
                    Purchased Beats
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-2xl font-bold text-white">12</p>
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
                  <p className="text-2xl font-bold text-white">8</p>
                </CardContent>
              </Card>

              <Card className="bg-black/60 border border-yellow-500/20">
                <CardHeader>
                  <CardTitle className="text-yellow-500 flex items-center gap-2">
                    <WavesIcon className="w-4 h-4" />
                    Projects
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-2xl font-bold text-white">5</p>
                </CardContent>
              </Card>

              <Card className="bg-black/60 border border-yellow-500/20">
                <CardHeader>
                  <CardTitle className="text-yellow-500 flex items-center gap-2">
                    <Star className="w-4 h-4" />
                    Favorite Beats
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-2xl font-bold text-white">15</p>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="purchased">
            <Card className="bg-black/60 border border-yellow-500/20">
              <CardHeader>
                <CardTitle className="text-yellow-500">My Purchased Beats</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-400">List of purchased beats will be displayed here.</p>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="licenses">
            <Card className="bg-black/60 border border-yellow-500/20">
              <CardHeader>
                <CardTitle className="text-yellow-500">License Management</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-400">View and manage your licenses here.</p>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="projects">
            <Card className="bg-black/60 border border-yellow-500/20">
              <CardHeader>
                <CardTitle className="text-yellow-500">My Projects</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-400">Track your music projects and releases here.</p>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="collaboration">
            <Card className="bg-black/60 border border-yellow-500/20">
              <CardHeader>
                <CardTitle className="text-yellow-500">Collaboration Hub</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-400">Connect and collaborate with producers here.</p>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="favorites">
            <Card className="bg-black/60 border border-yellow-500/20">
              <CardHeader>
                <CardTitle className="text-yellow-500">Favorite Beats</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-400">Your favorite beats will be displayed here.</p>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default ArtistPortal;

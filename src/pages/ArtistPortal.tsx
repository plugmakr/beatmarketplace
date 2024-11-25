import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Music2, FileText, HeadphonesIcon, WavesIcon, MessageCircle, Star } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import ProjectForm from "@/components/artist/ProjectForm";

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
            <TabsTrigger value="purchased">Purchased</TabsTrigger>
            <TabsTrigger value="projects">Projects</TabsTrigger>
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
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                  {[1, 2, 3].map((i) => (
                    <Card key={i} className="bg-black/40 border border-yellow-500/20">
                      <CardHeader>
                        <img
                          src={`https://images.unsplash.com/photo-148859052850${i}-98d2b5aba04b`}
                          alt={`Beat ${i}`}
                          className="w-full h-32 object-cover rounded-lg"
                        />
                      </CardHeader>
                      <CardContent>
                        <h3 className="text-white font-bold mb-2">Beat Title {i}</h3>
                        <p className="text-gray-400">Producer Name</p>
                        <div className="mt-4 flex gap-2">
                          <Button size="sm" className="bg-yellow-500 hover:bg-yellow-400 text-black">
                            Download
                          </Button>
                          <Button size="sm" variant="outline" className="border-yellow-500 text-yellow-500">
                            License Info
                          </Button>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="projects">
            <ProjectForm />
          </TabsContent>

          <TabsContent value="favorites">
            <Card className="bg-black/60 border border-yellow-500/20">
              <CardHeader>
                <CardTitle className="text-yellow-500">Favorite Beats</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                  {[1, 2, 3].map((i) => (
                    <Card key={i} className="bg-black/40 border border-yellow-500/20">
                      <CardHeader>
                        <img
                          src={`https://images.unsplash.com/photo-148859052850${i}-98d2b5aba04b`}
                          alt={`Beat ${i}`}
                          className="w-full h-32 object-cover rounded-lg"
                        />
                      </CardHeader>
                      <CardContent>
                        <h3 className="text-white font-bold mb-2">Beat Title {i}</h3>
                        <p className="text-gray-400">Producer Name</p>
                        <div className="mt-4 flex gap-2">
                          <Button size="sm" className="bg-yellow-500 hover:bg-yellow-400 text-black">
                            Preview
                          </Button>
                          <Button size="sm" variant="outline" className="border-yellow-500 text-yellow-500">
                            Purchase
                          </Button>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default ArtistPortal;
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Music2, FileText, HeadphonesIcon, WavesIcon, MessageCircle, Star } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import ProjectForm from "@/components/artist/ProjectForm";
import Rating from "@/components/shared/Rating";

const ArtistPortal = () => {
  const navigate = useNavigate();

  const mockPurchasedBeats = [
    { id: 1, title: "Summer Vibes", producer: "BeatMaster", image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b", rating: 4.5 },
    { id: 2, title: "Night Rider", producer: "WaveMaker", image: "https://images.unsplash.com/photo-1649972904349-6e44c42644a7", rating: 4.8 },
    { id: 3, title: "Ocean Dreams", producer: "SoundScape", image: "https://images.unsplash.com/photo-1465146344425-f00d5f5c8f07", rating: 4.2 },
  ];

  const mockFavoriteBeats = [
    { id: 1, title: "Urban Flow", producer: "CityBeats", image: "https://images.unsplash.com/photo-1527576539890-dfa815648363", rating: 4.7 },
    { id: 2, title: "Midnight Drive", producer: "NightOwl", image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b", rating: 4.4 },
    { id: 3, title: "Electric Dreams", producer: "VoltageBeats", image: "https://images.unsplash.com/photo-1649972904349-6e44c42644a7", rating: 4.9 },
  ];

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
            <TabsTrigger value="dashboard" className="text-white">Dashboard</TabsTrigger>
            <TabsTrigger value="purchased" className="text-white">Purchased</TabsTrigger>
            <TabsTrigger value="projects" className="text-white">Projects</TabsTrigger>
            <TabsTrigger value="favorites" className="text-white">Favorites</TabsTrigger>
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
                  {mockPurchasedBeats.map((beat) => (
                    <Card key={beat.id} className="bg-black/40 border border-yellow-500/20">
                      <CardHeader>
                        <img
                          src={beat.image}
                          alt={beat.title}
                          className="w-full h-32 object-cover rounded-lg"
                        />
                      </CardHeader>
                      <CardContent>
                        <h3 className="text-white font-bold mb-2">{beat.title}</h3>
                        <p className="text-gray-400">{beat.producer}</p>
                        <div className="mt-2 mb-4">
                          <Rating initialRating={beat.rating} readonly size="sm" />
                        </div>
                        <div className="flex gap-2">
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
                  {mockFavoriteBeats.map((beat) => (
                    <Card key={beat.id} className="bg-black/40 border border-yellow-500/20">
                      <CardHeader>
                        <img
                          src={beat.image}
                          alt={beat.title}
                          className="w-full h-32 object-cover rounded-lg"
                        />
                      </CardHeader>
                      <CardContent>
                        <h3 className="text-white font-bold mb-2">{beat.title}</h3>
                        <p className="text-gray-400">{beat.producer}</p>
                        <div className="mt-2 mb-4">
                          <Rating initialRating={beat.rating} readonly size="sm" />
                        </div>
                        <div className="flex gap-2">
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
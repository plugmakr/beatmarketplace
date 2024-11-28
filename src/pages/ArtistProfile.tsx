import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Music2, Package, Handshake, Users, Globe, Play, Pause, SkipBack, SkipForward, Volume2 } from "lucide-react";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { useState } from "react";
import { featuredBeats } from "@/data/featuredBeats";

const ArtistProfile = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentBeatIndex, setCurrentBeatIndex] = useState(0);
  const [activeTab, setActiveTab] = useState("beats");

  const artist = {
    name: "BeatMaster",
    image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b",
    bio: "Professional beat maker and sound designer with over 10 years of experience. Specializing in Hip Hop, Trap, and R&B production.",
    stats: {
      sales: "10k+",
      followers: "50k+",
      rating: "4.9/5"
    },
    genres: ["Hip Hop", "Trap", "R&B", "Pop"],
    social: {
      youtube: "https://youtube.com",
      instagram: "https://instagram.com",
      twitter: "https://twitter.com",
      soundcloud: "https://soundcloud.com"
    }
  };

  const handlePlayPause = () => {
    setIsPlaying(!isPlaying);
  };

  const handleNext = () => {
    setCurrentBeatIndex((prev) => (prev + 1) % featuredBeats.length);
  };

  const handlePrevious = () => {
    setCurrentBeatIndex((prev) => (prev - 1 + featuredBeats.length) % featuredBeats.length);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-black to-gray-900">
      {/* Hero Section */}
      <div className="relative h-64 bg-black">
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 to-black"></div>
        <div className="container mx-auto px-4 h-full flex items-end pb-8">
          <div className="flex items-center gap-6">
            <img
              src={artist.image}
              alt={artist.name}
              className="w-32 h-32 rounded-full border-4 border-yellow-500"
            />
            <div>
              <h1 className="text-4xl font-bold text-white mb-2">{artist.name}</h1>
              <div className="flex gap-2">
                {artist.genres.map((genre, index) => (
                  <Badge key={index} variant="outline" className="text-yellow-500 border-yellow-500">
                    {genre}
                  </Badge>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Navigation Menu */}
      <div className="sticky top-0 z-50 bg-black/95 border-b border-yellow-500/20 backdrop-blur-sm">
        <div className="container mx-auto px-4">
          <Tabs defaultValue={activeTab} className="w-full" onValueChange={setActiveTab}>
            <TabsList className="h-16 w-full justify-start bg-transparent border-b border-yellow-500/20">
              <TabsTrigger value="beats" className="data-[state=active]:text-yellow-500">
                <Music2 className="w-4 h-4 mr-2" />
                Beats
              </TabsTrigger>
              <TabsTrigger value="kits" className="data-[state=active]:text-yellow-500">
                <Package className="w-4 h-4 mr-2" />
                Kits
              </TabsTrigger>
              <TabsTrigger value="services" className="data-[state=active]:text-yellow-500">
                <Handshake className="w-4 h-4 mr-2" />
                Services
              </TabsTrigger>
              <TabsTrigger value="collab" className="data-[state=active]:text-yellow-500">
                <Users className="w-4 h-4 mr-2" />
                Collaboration
              </TabsTrigger>
              <TabsTrigger value="social" className="data-[state=active]:text-yellow-500">
                <Globe className="w-4 h-4 mr-2" />
                Social Media
              </TabsTrigger>
            </TabsList>
          </Tabs>
        </div>
      </div>

      {/* Beat Player */}
      <div className="fixed bottom-0 left-0 right-0 bg-black/95 border-t border-yellow-500/20 backdrop-blur-sm">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <img
                src={featuredBeats[currentBeatIndex].image}
                alt={featuredBeats[currentBeatIndex].title}
                className="w-12 h-12 rounded"
              />
              <div>
                <h3 className="text-white font-medium">{featuredBeats[currentBeatIndex].title}</h3>
                <p className="text-gray-400 text-sm">{featuredBeats[currentBeatIndex].producer}</p>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <Button variant="ghost" size="icon" onClick={handlePrevious}>
                <SkipBack className="w-5 h-5 text-yellow-500" />
              </Button>
              <Button variant="ghost" size="icon" onClick={handlePlayPause}>
                {isPlaying ? (
                  <Pause className="w-6 h-6 text-yellow-500" />
                ) : (
                  <Play className="w-6 h-6 text-yellow-500" />
                )}
              </Button>
              <Button variant="ghost" size="icon" onClick={handleNext}>
                <SkipForward className="w-5 h-5 text-yellow-500" />
              </Button>
              <Button variant="ghost" size="icon">
                <Volume2 className="w-5 h-5 text-yellow-500" />
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-8 mb-24">
        <TabsContent value="beats" className="mt-0">
          <Card className="bg-black/60 border border-yellow-500/20">
            <CardContent className="p-6">
              <Table>
                <TableHeader>
                  <TableRow className="border-yellow-500/20">
                    <TableHead className="text-yellow-500">Title</TableHead>
                    <TableHead className="text-yellow-500">BPM</TableHead>
                    <TableHead className="text-yellow-500">Key</TableHead>
                    <TableHead className="text-yellow-500">Genre</TableHead>
                    <TableHead className="text-yellow-500">Price</TableHead>
                    <TableHead className="text-yellow-500">Actions</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {featuredBeats.map((beat, index) => (
                    <TableRow key={beat.id} className="border-yellow-500/20">
                      <TableCell className="font-medium text-white">{beat.title}</TableCell>
                      <TableCell>{beat.bpm}</TableCell>
                      <TableCell>{beat.key}</TableCell>
                      <TableCell>{beat.genres.join(", ")}</TableCell>
                      <TableCell className="text-yellow-500">${beat.price}</TableCell>
                      <TableCell>
                        <Button 
                          variant="ghost" 
                          size="sm"
                          onClick={() => {
                            setCurrentBeatIndex(index);
                            setIsPlaying(true);
                          }}
                        >
                          <Play className="w-4 h-4 text-yellow-500" />
                        </Button>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="kits" className="mt-0">
          <Card className="bg-black/60 border border-yellow-500/20">
            <CardContent className="p-6">
              <h2 className="text-2xl font-bold text-white mb-4">Sound Kits</h2>
              {/* Sound kits content */}
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="services" className="mt-0">
          <Card className="bg-black/60 border border-yellow-500/20">
            <CardContent className="p-6">
              <h2 className="text-2xl font-bold text-white mb-4">Services</h2>
              {/* Services content */}
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="collab" className="mt-0">
          <Card className="bg-black/60 border border-yellow-500/20">
            <CardContent className="p-6">
              <h2 className="text-2xl font-bold text-white mb-4">Collaboration</h2>
              {/* Collaboration content */}
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="social" className="mt-0">
          <Card className="bg-black/60 border border-yellow-500/20">
            <CardContent className="p-6">
              <h2 className="text-2xl font-bold text-white mb-4">Social Media</h2>
              {/* Social media content */}
            </CardContent>
          </Card>
        </TabsContent>
      </div>
    </div>
  );
};

export default ArtistProfile;
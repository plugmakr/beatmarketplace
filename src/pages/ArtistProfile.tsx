import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Music2, Package, Handshake, Users, Globe, Play, Pause, SkipBack, SkipForward, Volume2, CheckCircle2 } from "lucide-react";
import { useState } from "react";
import { featuredBeats } from "@/data/featuredBeats";
import { soundKits } from "@/data/soundKits";
import BeatTable from "@/components/artist/BeatTable";
import KitCard from "@/components/KitCard";

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
      {/* Hero Section - Removed gradient overlay */}
      <div className="relative h-64 bg-black">
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
          <Tabs defaultValue="beats" className="w-full" onValueChange={setActiveTab}>
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

            {/* Main Content */}
            <div className="container mx-auto px-4 py-8 mb-24">
              <TabsContent value="beats">
                <Card className="bg-black/60 border border-yellow-500/20">
                  <CardContent className="p-6">
                    <BeatTable 
                      beats={featuredBeats}
                      onPlay={setCurrentBeatIndex}
                      currentBeatIndex={currentBeatIndex}
                    />
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="kits">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  {soundKits.slice(0, 6).map((kit) => (
                    <KitCard key={kit.id} kit={kit} />
                  ))}
                </div>
              </TabsContent>

              <TabsContent value="services">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <Card className="bg-black/60 border border-yellow-500/20">
                    <CardHeader>
                      <CardTitle className="text-2xl text-yellow-500">Mixing & Mastering</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <p className="text-white">Professional mixing and mastering services for your tracks</p>
                      <ul className="space-y-2">
                        {["24-bit WAV delivery", "3 revisions included", "2-day turnaround", "Stem mixing available"].map((feature, index) => (
                          <li key={index} className="flex items-center gap-2 text-white">
                            <CheckCircle2 className="w-4 h-4 text-yellow-500" />
                            {feature}
                          </li>
                        ))}
                      </ul>
                      <Button className="w-full bg-yellow-500 hover:bg-yellow-400 text-black">
                        Starting at $150
                      </Button>
                    </CardContent>
                  </Card>

                  <Card className="bg-black/60 border border-yellow-500/20">
                    <CardHeader>
                      <CardTitle className="text-2xl text-yellow-500">Custom Production</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <p className="text-white">Tailored beat production for your project</p>
                      <ul className="space-y-2">
                        {["Original composition", "Full ownership rights", "Unlimited revisions", "Source files included"].map((feature, index) => (
                          <li key={index} className="flex items-center gap-2 text-white">
                            <CheckCircle2 className="w-4 h-4 text-yellow-500" />
                            {feature}
                          </li>
                        ))}
                      </ul>
                      <Button className="w-full bg-yellow-500 hover:bg-yellow-400 text-black">
                        Starting at $500
                      </Button>
                    </CardContent>
                  </Card>

                  <Card className="bg-black/60 border border-yellow-500/20">
                    <CardHeader>
                      <CardTitle className="text-2xl text-yellow-500">1-on-1 Mentoring</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <p className="text-white">Learn music production from an industry professional</p>
                      <ul className="space-y-2">
                        {["Weekly sessions", "Project feedback", "Industry insights", "Production techniques"].map((feature, index) => (
                          <li key={index} className="flex items-center gap-2 text-white">
                            <CheckCircle2 className="w-4 h-4 text-yellow-500" />
                            {feature}
                          </li>
                        ))}
                      </ul>
                      <Button className="w-full bg-yellow-500 hover:bg-yellow-400 text-black">
                        $75/hour
                      </Button>
                    </CardContent>
                  </Card>
                </div>
              </TabsContent>

              <TabsContent value="collab">
                <Card className="bg-black/60 border border-yellow-500/20">
                  <CardContent className="p-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                      <div className="space-y-6">
                        <h2 className="text-2xl font-bold text-yellow-500">Collaboration Opportunities</h2>
                        <p className="text-white">I'm always open to collaborating with talented artists and producers. Here's what I offer:</p>
                        <ul className="space-y-4">
                          {[
                            "Remote collaboration sessions",
                            "Split sheet agreements",
                            "Project-based partnerships",
                            "Feature opportunities",
                            "Beat battles and challenges"
                          ].map((item, index) => (
                            <li key={index} className="flex items-center gap-2 text-white">
                              <CheckCircle2 className="w-4 h-4 text-yellow-500" />
                              {item}
                            </li>
                          ))}
                        </ul>
                        <Button className="w-full bg-yellow-500 hover:bg-yellow-400 text-black">
                          Submit Collaboration Request
                        </Button>
                      </div>
                      <div className="space-y-6">
                        <h2 className="text-2xl font-bold text-yellow-500">Past Collaborations</h2>
                        <div className="grid grid-cols-2 gap-4">
                          {[1, 2, 3, 4].map((item) => (
                            <div key={item} className="bg-black/40 p-4 rounded-lg border border-yellow-500/20">
                              <img
                                src={`https://images.unsplash.com/photo-148859052850${item}-98d2b5aba04b`}
                                alt={`Collaboration ${item}`}
                                className="w-full h-32 object-cover rounded-lg mb-2"
                              />
                              <p className="text-white font-medium">Project {item}</p>
                              <p className="text-gray-400 text-sm">with Artist {item}</p>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="social">
                <Card className="bg-black/60 border border-yellow-500/20">
                  <CardContent className="p-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                      <div className="space-y-6">
                        <h2 className="text-2xl font-bold text-yellow-500">Connect With Me</h2>
                        <div className="grid grid-cols-2 gap-4">
                          {Object.entries(artist.social).map(([platform, url]) => (
                            <Button
                              key={platform}
                              variant="outline"
                              className="w-full border-yellow-500 text-yellow-500 hover:bg-yellow-500 hover:text-black"
                              onClick={() => window.open(url, '_blank')}
                            >
                              {platform.charAt(0).toUpperCase() + platform.slice(1)}
                            </Button>
                          ))}
                        </div>
                      </div>
                      <div className="space-y-6">
                        <h2 className="text-2xl font-bold text-yellow-500">Latest Updates</h2>
                        <div className="space-y-4">
                          {[
                            "New beat pack dropping next week! 🎵",
                            "Just wrapped up a collaboration with @artist 🔥",
                            "Check out my latest tutorial video 📺",
                            "Studio session highlights coming soon! 🎹"
                          ].map((update, index) => (
                            <div key={index} className="bg-black/40 p-4 rounded-lg border border-yellow-500/20">
                              <p className="text-white">{update}</p>
                              <p className="text-gray-400 text-sm mt-2">{index + 1}d ago</p>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
            </div>
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
    </div>
  );
};

export default ArtistProfile;
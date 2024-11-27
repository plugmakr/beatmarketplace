import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Play, Music, Package } from "lucide-react";

const ArtistProfile = () => {
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
    topBeats: [
      {
        title: "Summer Vibes",
        plays: "150k",
        price: 29.99
      },
      {
        title: "Night Rider",
        plays: "120k",
        price: 34.99
      },
      {
        title: "Urban Flow",
        plays: "100k",
        price: 31.99
      }
    ],
    soundKits: [
      {
        title: "Ultimate Drums",
        downloads: "5k+",
        price: 49.99
      },
      {
        title: "Trap Essentials",
        downloads: "3k+",
        price: 39.99
      }
    ]
  };

  return (
    <div className="min-h-screen bg-black">
      <div className="container mx-auto px-4 py-20">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="md:col-span-1">
            <div className="bg-black/60 border border-yellow-500/20 rounded-lg p-6 sticky top-20">
              <img
                src={artist.image}
                alt={artist.name}
                className="w-32 h-32 mx-auto rounded-full mb-6"
              />
              <h1 className="text-3xl font-bold text-white text-center mb-2">{artist.name}</h1>
              <div className="flex justify-center gap-2 mb-4">
                {artist.genres.map((genre, index) => (
                  <Badge key={index} variant="outline" className="text-yellow-500 border-yellow-500">
                    {genre}
                  </Badge>
                ))}
              </div>
              <div className="grid grid-cols-3 gap-4 mb-6">
                <div className="text-center">
                  <p className="text-yellow-500 font-bold">{artist.stats.sales}</p>
                  <p className="text-gray-400 text-sm">Sales</p>
                </div>
                <div className="text-center">
                  <p className="text-yellow-500 font-bold">{artist.stats.followers}</p>
                  <p className="text-gray-400 text-sm">Followers</p>
                </div>
                <div className="text-center">
                  <p className="text-yellow-500 font-bold">{artist.stats.rating}</p>
                  <p className="text-gray-400 text-sm">Rating</p>
                </div>
              </div>
              <p className="text-gray-400 text-center mb-6">{artist.bio}</p>
              <Button className="w-full bg-yellow-500 hover:bg-yellow-400 text-black">
                Follow
              </Button>
            </div>
          </div>
          <div className="md:col-span-2 space-y-8">
            <div>
              <h2 className="text-2xl font-bold text-white mb-4 flex items-center gap-2">
                <Music className="w-6 h-6 text-yellow-500" />
                Top Beats
              </h2>
              <div className="grid gap-4">
                {artist.topBeats.map((beat, index) => (
                  <Card key={index} className="bg-black/60 border border-yellow-500/20">
                    <CardContent className="flex items-center justify-between p-4">
                      <div>
                        <h3 className="text-white font-semibold">{beat.title}</h3>
                        <p className="text-gray-400 text-sm">{beat.plays} plays</p>
                      </div>
                      <div className="flex items-center gap-2">
                        <span className="text-yellow-500 font-bold">${beat.price}</span>
                        <Button size="sm" className="bg-yellow-500 hover:bg-yellow-400 text-black">
                          <Play className="w-4 h-4" />
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
            <div>
              <h2 className="text-2xl font-bold text-white mb-4 flex items-center gap-2">
                <Package className="w-6 h-6 text-yellow-500" />
                Sound Kits
              </h2>
              <div className="grid gap-4">
                {artist.soundKits.map((kit, index) => (
                  <Card key={index} className="bg-black/60 border border-yellow-500/20">
                    <CardContent className="flex items-center justify-between p-4">
                      <div>
                        <h3 className="text-white font-semibold">{kit.title}</h3>
                        <p className="text-gray-400 text-sm">{kit.downloads} downloads</p>
                      </div>
                      <div className="flex items-center gap-2">
                        <span className="text-yellow-500 font-bold">${kit.price}</span>
                        <Button size="sm" className="bg-yellow-500 hover:bg-yellow-400 text-black">
                          View Details
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ArtistProfile;
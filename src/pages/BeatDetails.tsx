import { useParams } from "react-router-dom";
import Navigation from "@/components/landing/Navigation";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ShoppingCart, Play, AudioWaveform } from "lucide-react";

const BeatDetails = () => {
  const { id } = useParams();
  const beat = {
    id: 1,
    title: "Summer Vibes",
    producer: "BeatMaster",
    price: 29.99,
    bpm: 140,
    key: "C Minor",
    genres: ["Hip Hop", "Trap"],
    image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b",
    description: "A vibrant summer beat with heavy 808s and melodic elements. Perfect for modern hip-hop and trap productions.",
    features: [
      "Untagged WAV file",
      "Tracked out stems",
      "Unlimited commercial use",
      "Instant delivery"
    ],
    instruments: [
      { name: "808 Bass", count: 1 },
      { name: "Kicks", count: 2 },
      { name: "Snares", count: 3 },
      { name: "Hi-Hats", count: 4 },
      { name: "Melodies", count: 2 }
    ],
    licensing: {
      basic: {
        name: "Basic License",
        price: 29.99,
        features: [
          "MP3 File",
          "Limited to 5000 streams",
          "Non-commercial use only"
        ]
      },
      premium: {
        name: "Premium License",
        price: 99.99,
        features: [
          "WAV File",
          "Unlimited streams",
          "Commercial use",
          "Full trackouts"
        ]
      }
    }
  };

  return (
    <div className="min-h-screen bg-black">
      <Navigation />
      <div className="container mx-auto px-4 py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <img
              src={beat.image}
              alt={beat.title}
              className="w-full rounded-lg mb-6"
            />
            <div className="bg-black/60 border border-yellow-500/20 rounded-lg p-6">
              <h2 className="text-2xl font-bold text-white mb-4">Waveform</h2>
              <div className="h-32 flex items-center justify-center border border-yellow-500/20 rounded">
                <AudioWaveform className="w-12 h-12 text-yellow-500" />
              </div>
            </div>
          </div>
          <div className="space-y-6">
            <h1 className="text-4xl font-bold text-white">{beat.title}</h1>
            <p className="text-xl text-gray-400">by {beat.producer}</p>
            <div className="flex flex-wrap gap-2">
              <Badge variant="outline" className="text-yellow-500 border-yellow-500">
                {beat.bpm} BPM
              </Badge>
              <Badge variant="outline" className="text-yellow-500 border-yellow-500">
                {beat.key}
              </Badge>
              {beat.genres.map((genre, index) => (
                <Badge key={index} variant="outline" className="text-yellow-500 border-yellow-500">
                  {genre}
                </Badge>
              ))}
            </div>
            <p className="text-gray-400">{beat.description}</p>
            <div className="bg-black/60 border border-yellow-500/20 rounded-lg p-6">
              <h2 className="text-xl font-bold text-white mb-4">Instruments</h2>
              <div className="grid grid-cols-2 gap-4">
                {beat.instruments.map((instrument, index) => (
                  <div key={index} className="flex justify-between items-center">
                    <span className="text-gray-400">{instrument.name}</span>
                    <Badge variant="outline" className="text-yellow-500 border-yellow-500">
                      x{instrument.count}
                    </Badge>
                  </div>
                ))}
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {Object.values(beat.licensing).map((license, index) => (
                <div key={index} className="bg-black/60 border border-yellow-500/20 rounded-lg p-6">
                  <h3 className="text-lg font-bold text-white mb-2">{license.name}</h3>
                  <p className="text-2xl font-bold text-yellow-500 mb-4">${license.price}</p>
                  <ul className="space-y-2">
                    {license.features.map((feature, idx) => (
                      <li key={idx} className="text-gray-400 flex items-center gap-2">
                        <span className="w-2 h-2 bg-yellow-500 rounded-full"></span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <Button className="w-full mt-4 bg-yellow-500 hover:bg-yellow-400 text-black">
                    <ShoppingCart className="w-4 h-4 mr-2" />
                    Purchase
                  </Button>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BeatDetails;
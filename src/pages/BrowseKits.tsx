import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import TopNavigation from "@/components/landing/TopNavigation";
import { Link } from "react-router-dom";

const kits = [
  {
    id: 1,
    title: "Ultimate Drums",
    producer: "DrumMaster",
    price: 49.99,
    samples: "250+ samples",
    image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6"
  },
  {
    id: 2,
    title: "Synth Paradise",
    producer: "WaveLab",
    price: 39.99,
    samples: "180+ samples",
    image: "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7"
  },
  {
    id: 3,
    title: "Lo-Fi Essentials",
    producer: "ChillBeats",
    price: 29.99,
    samples: "150+ samples",
    image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158"
  },
  {
    id: 4,
    title: "808 Collection",
    producer: "BassKing",
    price: 44.99,
    samples: "200+ samples",
    image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c"
  },
  {
    id: 5,
    title: "Vintage Drums",
    producer: "RetroBeats",
    price: 35.99,
    samples: "175+ samples",
    image: "https://images.unsplash.com/photo-1523712999610-f77fbcfc3843"
  },
  {
    id: 6,
    title: "Future Bass",
    producer: "WaveMaster",
    price: 42.99,
    samples: "220+ samples",
    image: "https://images.unsplash.com/photo-1518770660439-4636190af475"
  },
  {
    id: 7,
    title: "Analog Dreams",
    producer: "SynthLab",
    price: 38.99,
    samples: "190+ samples",
    image: "https://images.unsplash.com/photo-1649972904349-6e44c42644a7"
  },
  {
    id: 8,
    title: "Percussion Pro",
    producer: "RhythmKing",
    price: 46.99,
    samples: "230+ samples",
    image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b"
  },
  {
    id: 9,
    title: "Digital Tools",
    producer: "TechBeats",
    price: 37.99,
    samples: "165+ samples",
    image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d"
  },
  {
    id: 10,
    title: "World Percussion",
    producer: "GlobalSound",
    price: 41.99,
    samples: "210+ samples",
    image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085"
  }
];

const BrowseKits = () => {
  return (
    <div className="min-h-screen bg-black">
      <TopNavigation />
      <div className="container mx-auto px-4 py-20">
        <h1 className="text-4xl font-bold text-center mb-12">
          <span className="text-white">Browse</span>
          <span className="bg-gradient-to-r from-yellow-500 to-yellow-200 bg-clip-text text-transparent">
            {" "}Kits
          </span>
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {kits.map((kit, index) => (
            <Card key={kit.id} className="bg-black/60 border border-yellow-500/20 hover:border-yellow-500/40 transition-all duration-300">
              <CardHeader>
                <img
                  src={kit.image}
                  alt={kit.title}
                  className="w-full h-36 object-cover rounded-t-lg"
                />
              </CardHeader>
              <CardContent>
                {index === 0 ? (
                  <Link to={`/kits/${kit.id}`}>
                    <CardTitle className="text-white mb-2 text-lg hover:text-yellow-500 transition-colors">
                      {kit.title}
                    </CardTitle>
                  </Link>
                ) : (
                  <CardTitle className="text-white mb-2 text-lg">{kit.title}</CardTitle>
                )}
                <CardDescription className="text-gray-400">
                  by {kit.producer} • {kit.samples}
                </CardDescription>
              </CardContent>
              <CardFooter className="flex justify-between items-center">
                <span className="text-yellow-500 font-bold">${kit.price}</span>
                <Button className="bg-yellow-500 hover:bg-yellow-400 text-black">
                  View Details
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BrowseKits;

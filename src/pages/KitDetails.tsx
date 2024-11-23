import { useParams } from "react-router-dom";
import Navigation from "@/components/landing/Navigation";
import { Button } from "@/components/ui/button";
import { FileAudio } from "lucide-react";

const KitDetails = () => {
  const { id } = useParams();
  const kit = {
    id: 1,
    title: "Ultimate Drums",
    producer: "DrumMaster",
    price: 49.99,
    samples: "250+ samples",
    image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6",
    description: "A comprehensive drum kit featuring over 250 high-quality samples. From punchy kicks to crisp hi-hats, this kit has everything you need for professional productions.",
    features: [
      "250+ WAV files",
      "24-bit quality",
      "Royalty-free",
      "Instant download"
    ],
    categories: [
      {
        name: "Kicks",
        count: 50,
        preview: true
      },
      {
        name: "Snares",
        count: 75,
        preview: true
      },
      {
        name: "Hi-Hats",
        count: 60,
        preview: true
      },
      {
        name: "Percussion",
        count: 65,
        preview: true
      }
    ]
  };

  return (
    <div className="min-h-screen bg-black">
      <Navigation />
      <div className="container mx-auto px-4 py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <img
              src={kit.image}
              alt={kit.title}
              className="w-full rounded-lg mb-6"
            />
            <div className="bg-black/60 border border-yellow-500/20 rounded-lg p-6">
              <h2 className="text-2xl font-bold text-white mb-4">Sample Categories</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {kit.categories.map((category, index) => (
                  <div key={index} className="p-4 border border-yellow-500/20 rounded-lg">
                    <div className="flex justify-between items-center mb-2">
                      <h3 className="text-white font-semibold">{category.name}</h3>
                      <span className="text-yellow-500">{category.count}</span>
                    </div>
                    {category.preview && (
                      <Button size="sm" variant="outline" className="w-full border-yellow-500 text-yellow-500 hover:bg-yellow-500 hover:text-black">
                        Preview
                      </Button>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div className="space-y-6">
            <h1 className="text-4xl font-bold text-white">{kit.title}</h1>
            <p className="text-xl text-gray-400">by {kit.producer}</p>
            <div className="flex items-center gap-2 text-yellow-500">
              <FileAudio className="w-5 h-5" />
              <span>{kit.samples}</span>
            </div>
            <p className="text-gray-400">{kit.description}</p>
            <div className="bg-black/60 border border-yellow-500/20 rounded-lg p-6">
              <h2 className="text-xl font-bold text-white mb-4">Features</h2>
              <ul className="space-y-2">
                {kit.features.map((feature, index) => (
                  <li key={index} className="text-gray-400 flex items-center gap-2">
                    <span className="w-2 h-2 bg-yellow-500 rounded-full"></span>
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-3xl font-bold text-yellow-500">${kit.price}</span>
              <Button size="lg" className="bg-yellow-500 hover:bg-yellow-400 text-black">
                Purchase Now
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default KitDetails;
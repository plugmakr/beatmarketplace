import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";

const soundKits = [
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
  }
];

const KitsSection = () => (
  <section className="py-20 bg-gradient-to-b from-black/40 to-black/60">
    <div className="container mx-auto px-4">
      <h2 className="text-4xl font-bold text-center mb-12">
        Sound
        <span className="bg-gradient-to-r from-yellow-500 to-yellow-200 bg-clip-text text-transparent">
          {" "}Kits
        </span>
      </h2>
      <Carousel className="w-full max-w-5xl mx-auto">
        <CarouselContent>
          {soundKits.map((kit) => (
            <CarouselItem key={kit.id} className="md:basis-1/2 lg:basis-1/3">
              <Card className="bg-black/60 border border-yellow-500/20 hover:border-yellow-500/40 transition-all duration-300">
                <CardHeader>
                  <img
                    src={kit.image}
                    alt={kit.title}
                    className="w-full h-48 object-cover rounded-t-lg"
                  />
                </CardHeader>
                <CardContent>
                  <CardTitle className="text-white mb-2">{kit.title}</CardTitle>
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
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </div>
  </section>
);

export default KitsSection;
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { Badge } from "@/components/ui/badge";
import { ShoppingCart, Play } from "lucide-react";

const featuredBeats = [
  {
    id: 1,
    title: "Summer Vibes",
    producer: "BeatMaster",
    price: 29.99,
    bpm: 140,
    key: "C Minor",
    genres: ["Hip Hop", "Trap"],
    image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b"
  },
  {
    id: 2,
    title: "Night Rider",
    producer: "WaveMaker",
    price: 34.99,
    bpm: 128,
    key: "G Major",
    genres: ["Trap", "R&B"],
    image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d"
  },
  {
    id: 3,
    title: "Ocean Dreams",
    producer: "SoundScape",
    price: 24.99,
    bpm: 95,
    key: "D Minor",
    genres: ["R&B", "Soul"],
    image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085"
  }
];

const BeatsSection = () => (
  <section className="py-20 bg-black/40">
    <div className="container mx-auto px-4">
      <h2 className="text-4xl font-bold text-center mb-12">
        Featured
        <span className="bg-gradient-to-r from-yellow-500 to-yellow-200 bg-clip-text text-transparent">
          {" "}Beats
        </span>
      </h2>
      <Carousel className="w-full max-w-5xl mx-auto">
        <CarouselContent>
          {featuredBeats.map((beat) => (
            <CarouselItem key={beat.id} className="md:basis-1/2 lg:basis-1/3">
              <Card className="bg-black/60 border border-yellow-500/20 hover:border-yellow-500/40 transition-all duration-300">
                <CardHeader>
                  <img
                    src={beat.image}
                    alt={beat.title}
                    className="w-full h-48 object-cover rounded-t-lg"
                  />
                </CardHeader>
                <CardContent>
                  <CardTitle className="text-white mb-2">{beat.title}</CardTitle>
                  <CardDescription className="text-gray-400">
                    by {beat.producer}
                  </CardDescription>
                  <div className="mt-3 flex flex-wrap gap-2">
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
                </CardContent>
                <CardFooter className="flex justify-between items-center">
                  <span className="text-yellow-500 font-bold">${beat.price}</span>
                  <div className="flex gap-2">
                    <Button size="sm" className="bg-yellow-500 hover:bg-yellow-400 text-black">
                      <Play className="w-4 h-4 mr-1" /> Preview
                    </Button>
                    <Button size="sm" variant="outline" className="border-yellow-500 text-yellow-500 hover:bg-yellow-500 hover:text-black">
                      <ShoppingCart className="w-4 h-4" />
                    </Button>
                  </div>
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

export default BeatsSection;
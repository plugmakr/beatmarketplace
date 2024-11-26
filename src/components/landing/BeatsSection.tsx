import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { Badge } from "@/components/ui/badge";
import { ShoppingCart, Play } from "lucide-react";
import { useNavigate } from "react-router-dom";
import Rating from "@/components/shared/Rating";
import { featuredBeats } from "@/data/featuredBeats";

const BeatsSection = () => {
  const navigate = useNavigate();

  return (
    <section className="py-20 bg-black/40">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12">
          <span className="text-white">Featured</span>
          <span className="bg-gradient-to-r from-yellow-500 to-yellow-200 bg-clip-text text-transparent">
            {" "}Beats
          </span>
        </h2>
        <Carousel className="w-full max-w-6xl mx-auto">
          <CarouselContent>
            {featuredBeats.map((beat) => (
              <CarouselItem key={beat.id} className="md:basis-1/3 lg:basis-1/4">
                <Card className="bg-black/60 border border-yellow-500/20 hover:border-yellow-500/40 transition-all duration-300">
                  <CardHeader>
                    <img
                      src={beat.image}
                      alt={beat.title}
                      className="w-full h-36 object-cover rounded-t-lg"
                    />
                  </CardHeader>
                  <CardContent>
                    <CardTitle 
                      className="text-white mb-2 text-lg cursor-pointer hover:text-yellow-500"
                      onClick={() => navigate(`/beats/${beat.id}`)}
                    >
                      {beat.title}
                    </CardTitle>
                    <CardDescription 
                      className="text-gray-400 cursor-pointer hover:text-yellow-500"
                      onClick={() => navigate(`/artists/${beat.producer}`)}
                    >
                      by {beat.producer}
                    </CardDescription>
                    <div className="mt-2">
                      <Rating initialRating={beat.rating} readonly size="sm" />
                    </div>
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
                      <Button 
                        size="sm" 
                        className="bg-yellow-500 hover:bg-yellow-400 text-black"
                        onClick={() => navigate(`/beats/${beat.id}`)}
                      >
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
};

export default BeatsSection;
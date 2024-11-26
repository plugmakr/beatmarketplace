import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { useNavigate } from "react-router-dom";
import Rating from "@/components/shared/Rating";
import { soundKits } from "@/data/soundKits";

const KitsSection = () => {
  const navigate = useNavigate();

  return (
    <section className="py-20 bg-gradient-to-b from-black/40 to-black/60">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12">
          <span className="text-white">Featured</span>
          <span className="bg-gradient-to-r from-yellow-500 to-yellow-200 bg-clip-text text-transparent">
            {" "}Kits
          </span>
        </h2>
        <Carousel className="w-full max-w-6xl mx-auto">
          <CarouselContent>
            {soundKits.map((kit) => (
              <CarouselItem key={kit.id} className="md:basis-1/3 lg:basis-1/4">
                <Card className="bg-black/60 border border-yellow-500/20 hover:border-yellow-500/40 transition-all duration-300">
                  <CardHeader>
                    <img
                      src={kit.image}
                      alt={kit.title}
                      className="w-full h-36 object-cover rounded-t-lg"
                    />
                  </CardHeader>
                  <CardContent>
                    <CardTitle 
                      className="text-white mb-2 text-lg cursor-pointer hover:text-yellow-500"
                      onClick={() => navigate(`/kits/${kit.id}`)}
                    >
                      {kit.title}
                    </CardTitle>
                    <CardDescription 
                      className="text-gray-400 cursor-pointer hover:text-yellow-500"
                      onClick={() => navigate(`/artists/${kit.producer}`)}
                    >
                      by {kit.producer} • {kit.samples}
                    </CardDescription>
                    <div className="mt-2">
                      <Rating initialRating={kit.rating} readonly size="sm" />
                    </div>
                  </CardContent>
                  <CardFooter className="flex justify-between items-center">
                    <span className="text-yellow-500 font-bold">${kit.price}</span>
                    <Button 
                      className="bg-yellow-500 hover:bg-yellow-400 text-black"
                      onClick={() => navigate(`/kits/${kit.id}`)}
                    >
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
};

export default KitsSection;
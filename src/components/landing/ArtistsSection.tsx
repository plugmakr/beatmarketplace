import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { Badge } from "@/components/ui/badge";
import { useNavigate } from "react-router-dom";

const featuredArtists = [
  {
    id: 1,
    name: "BeatMaster",
    genre: "Hip Hop/Trap",
    sales: "10k+ sales",
    image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b"
  },
  {
    id: 2,
    name: "WaveMaker",
    genre: "Electronic/Pop",
    sales: "8k+ sales",
    image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d"
  },
  {
    id: 3,
    name: "SoundScape",
    genre: "R&B/Soul",
    sales: "12k+ sales",
    image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085"
  },
  {
    id: 4,
    name: "CityBeats",
    genre: "Urban/Hip Hop",
    sales: "7k+ sales",
    image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c"
  },
  {
    id: 5,
    name: "NightOwl",
    genre: "R&B/Pop",
    sales: "9k+ sales",
    image: "https://images.unsplash.com/photo-1523712999610-f77fbcfc3843"
  },
  {
    id: 6,
    name: "VoltageBeats",
    genre: "Electronic",
    sales: "11k+ sales",
    image: "https://images.unsplash.com/photo-1518770660439-4636190af475"
  },
  {
    id: 7,
    name: "WestCoast",
    genre: "Hip Hop/Jazz",
    sales: "6k+ sales",
    image: "https://images.unsplash.com/photo-1649972904349-6e44c42644a7"
  },
  {
    id: 8,
    name: "GlassHouse",
    genre: "Pop/Electronic",
    sales: "8.5k+ sales",
    image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b"
  },
  {
    id: 9,
    name: "SandMan",
    genre: "Trap/Arabic",
    sales: "7.5k+ sales",
    image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d"
  },
  {
    id: 10,
    name: "FrostBeat",
    genre: "Electronic/Ambient",
    sales: "9.5k+ sales",
    image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085"
  }
];

const ArtistsSection = () => {
  const navigate = useNavigate();

  return (
    <section className="py-20 bg-black/30">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12">
          Featured
          <span className="bg-gradient-to-r from-yellow-500 to-yellow-200 bg-clip-text text-transparent">
            {" "}Artists
          </span>
        </h2>
        <Carousel className="w-full max-w-6xl mx-auto">
          <CarouselContent>
            {featuredArtists.map((artist) => (
              <CarouselItem key={artist.id} className="md:basis-1/3 lg:basis-1/4">
                <Card 
                  className="bg-black/60 border border-yellow-500/20 hover:border-yellow-500/40 transition-all duration-300 cursor-pointer"
                  onClick={() => navigate(`/artists/${artist.name}`)}
                >
                  <CardHeader>
                    <img
                      src={artist.image}
                      alt={artist.name}
                      className="w-full h-36 object-cover rounded-full"
                    />
                  </CardHeader>
                  <CardContent>
                    <CardTitle className="text-white mb-2 text-lg text-center">{artist.name}</CardTitle>
                    <CardDescription className="text-gray-400 text-center">
                      {artist.genre}
                    </CardDescription>
                    <div className="mt-3 flex justify-center">
                      <Badge variant="outline" className="text-yellow-500 border-yellow-500">
                        {artist.sales}
                      </Badge>
                    </div>
                  </CardContent>
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

export default ArtistsSection;
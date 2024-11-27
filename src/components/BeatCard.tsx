import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ShoppingCart, Play } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";
import Rating from "@/components/shared/Rating";

interface BeatCardProps {
  beat: {
    id: number;
    title: string;
    producer: string;
    price: number;
    bpm: number;
    key: string;
    genres: string[];
    image: string;
    rating: number;
  };
  isFirst?: boolean;
}

const BeatCard = ({ beat, isFirst }: BeatCardProps) => {
  const navigate = useNavigate();

  return (
    <Card className="bg-black/60 border border-yellow-500/20 hover:border-yellow-500/40 transition-all duration-300">
      <CardHeader>
        <img
          src={beat.image}
          alt={beat.title}
          className="w-full h-36 object-cover rounded-t-lg"
        />
      </CardHeader>
      <CardContent>
        {isFirst ? (
          <Link to={`/beats/${beat.id}`}>
            <CardTitle className="text-white mb-2 text-lg hover:text-yellow-500 transition-colors">
              {beat.title}
            </CardTitle>
          </Link>
        ) : (
          <CardTitle className="text-white mb-2 text-lg">{beat.title}</CardTitle>
        )}
        <CardDescription className="text-gray-400">
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
          {beat.genres.map((genre, idx) => (
            <Badge key={idx} variant="outline" className="text-yellow-500 border-yellow-500">
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
  );
};

export default BeatCard;
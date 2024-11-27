import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import Rating from "@/components/shared/Rating";

interface KitCardProps {
  kit: {
    id: number;
    title: string;
    producer: string;
    price: number;
    samples: string;
    image: string;
    rating: number;
  };
  isFirst?: boolean;
}

const KitCard = ({ kit, isFirst }: KitCardProps) => {
  return (
    <Card className="bg-black/60 border border-yellow-500/20 hover:border-yellow-500/40 transition-all duration-300">
      <CardHeader>
        <img
          src={kit.image}
          alt={kit.title}
          className="w-full h-36 object-cover rounded-t-lg"
        />
      </CardHeader>
      <CardContent>
        {isFirst ? (
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
        <div className="mt-2">
          <Rating initialRating={kit.rating} readonly size="sm" />
        </div>
      </CardContent>
      <CardFooter className="flex justify-between items-center">
        <span className="text-yellow-500 font-bold">${kit.price}</span>
        <Button className="bg-yellow-500 hover:bg-yellow-400 text-black">
          View Details
        </Button>
      </CardFooter>
    </Card>
  );
};

export default KitCard;
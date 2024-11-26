import { Star } from "lucide-react";
import { cn } from "@/lib/utils";
import { useState } from "react";
import { useToast } from "@/components/ui/use-toast";

interface RatingProps {
  initialRating?: number;
  onRate?: (rating: number) => void;
  readonly?: boolean;
  size?: "sm" | "md" | "lg";
}

const Rating = ({ initialRating = 0, onRate, readonly = false, size = "md" }: RatingProps) => {
  const [rating, setRating] = useState(initialRating);
  const [hover, setHover] = useState(0);
  const { toast } = useToast();

  const handleRate = (value: number) => {
    if (readonly) return;
    setRating(value);
    if (onRate) {
      onRate(value);
      toast({
        title: "Rating Submitted",
        description: `You rated this ${value} stars`,
      });
    }
  };

  const sizes = {
    sm: "w-4 h-4",
    md: "w-5 h-5",
    lg: "w-6 h-6"
  };

  return (
    <div className="flex items-center gap-1">
      {[1, 2, 3, 4, 5].map((star) => (
        <Star
          key={star}
          className={cn(
            sizes[size],
            "cursor-pointer transition-colors",
            (hover || rating) >= star
              ? "text-yellow-500 fill-yellow-500"
              : "text-gray-300",
            readonly && "cursor-default"
          )}
          onMouseEnter={() => !readonly && setHover(star)}
          onMouseLeave={() => !readonly && setHover(0)}
          onClick={() => handleRate(star)}
        />
      ))}
    </div>
  );
};

export default Rating;
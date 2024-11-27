import { Button } from "@/components/ui/button";
import { ArrowUp, ArrowDown } from "lucide-react";

interface SectionOrderControlsProps {
  sectionName: string;
  index: number;
  totalSections: number;
  onMoveUp: () => void;
  onMoveDown: () => void;
}

const SectionOrderControls = ({
  sectionName,
  index,
  totalSections,
  onMoveUp,
  onMoveDown,
}: SectionOrderControlsProps) => {
  return (
    <div className="flex gap-2">
      <Button
        variant="outline"
        size="sm"
        onClick={onMoveUp}
        disabled={index === 0}
        className="border-yellow-500 text-yellow-500 hover:bg-yellow-500 hover:text-black"
      >
        <ArrowUp className="w-4 h-4" />
      </Button>
      <Button
        variant="outline"
        size="sm"
        onClick={onMoveDown}
        disabled={index === totalSections - 1}
        className="border-yellow-500 text-yellow-500 hover:bg-yellow-500 hover:text-black"
      >
        <ArrowDown className="w-4 h-4" />
      </Button>
    </div>
  );
};

export default SectionOrderControls;
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import { Play } from "lucide-react";
import Rating from "@/components/shared/Rating";
import { Beat } from "@/data/featuredBeats";

interface BeatTableProps {
  beats: Beat[];
  onPlay: (index: number) => void;
  currentBeatIndex: number;
}

const BeatTable = ({ beats, onPlay, currentBeatIndex }: BeatTableProps) => {
  return (
    <Table>
      <TableHeader>
        <TableRow className="border-yellow-500/20">
          <TableHead className="text-yellow-500">Title</TableHead>
          <TableHead className="text-yellow-500">BPM</TableHead>
          <TableHead className="text-yellow-500">Key</TableHead>
          <TableHead className="text-yellow-500">Genre</TableHead>
          <TableHead className="text-yellow-500">Price</TableHead>
          <TableHead className="text-yellow-500">Rating</TableHead>
          <TableHead className="text-yellow-500">Actions</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {beats.map((beat, index) => (
          <TableRow key={beat.id} className="border-yellow-500/20">
            <TableCell className="font-medium text-white">{beat.title}</TableCell>
            <TableCell className="text-white">{beat.bpm}</TableCell>
            <TableCell className="text-white">{beat.key}</TableCell>
            <TableCell className="text-white">{beat.genres.join(", ")}</TableCell>
            <TableCell className="text-yellow-500">${beat.price}</TableCell>
            <TableCell>
              <Rating initialRating={beat.rating} readonly size="sm" />
            </TableCell>
            <TableCell>
              <Button 
                variant="ghost" 
                size="sm"
                onClick={() => onPlay(index)}
                className={currentBeatIndex === index ? "text-yellow-500" : "text-white"}
              >
                <Play className="w-4 h-4" />
              </Button>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
};

export default BeatTable;
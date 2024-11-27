import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Music2, Play, Trash2 } from "lucide-react";
import { useToast } from "@/components/ui/use-toast";
import { featuredBeats, Beat } from "@/data/featuredBeats";
import EditBeatDialog from "./EditBeatDialog";
import { useState } from "react";

const BeatLibrary = () => {
  const { toast } = useToast();
  const [beats, setBeats] = useState<Beat[]>(featuredBeats);

  const handleDelete = (id: number) => {
    setBeats(beats.filter(beat => beat.id !== id));
    toast({
      title: "Delete Beat",
      description: `Beat deleted successfully`,
      variant: "destructive",
    });
  };

  const handleUpdateBeat = (updatedBeat: Beat) => {
    setBeats(beats.map(beat => beat.id === updatedBeat.id ? updatedBeat : beat));
  };

  return (
    <Card className="bg-black/60 border border-yellow-500/20">
      <CardHeader>
        <h2 className="text-2xl font-bold text-yellow-500 flex items-center gap-2">
          <Music2 className="w-6 h-6" />
          Beat Library
        </h2>
      </CardHeader>
      <CardContent>
        <Table>
          <TableHeader>
            <TableRow className="border-yellow-500/20">
              <TableHead className="text-yellow-500">Preview</TableHead>
              <TableHead className="text-yellow-500">Title</TableHead>
              <TableHead className="text-yellow-500">Tags</TableHead>
              <TableHead className="text-yellow-500">Waveform</TableHead>
              <TableHead className="text-yellow-500">Price</TableHead>
              <TableHead className="text-yellow-500">Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {beats.map((beat) => (
              <TableRow key={beat.id} className="border-yellow-500/20">
                <TableCell>
                  <img
                    src={beat.image}
                    alt={beat.title}
                    className="w-16 h-16 object-cover rounded-lg"
                  />
                </TableCell>
                <TableCell>
                  <div>
                    <p className="font-semibold text-yellow-500">{beat.title}</p>
                    <p className="text-sm text-gray-400">by {beat.producer}</p>
                  </div>
                </TableCell>
                <TableCell>
                  <div className="flex flex-wrap gap-1">
                    <Badge variant="outline" className="text-yellow-500 border-yellow-500">
                      {beat.bpm} BPM
                    </Badge>
                    <Badge variant="outline" className="text-yellow-500 border-yellow-500">
                      {beat.key}
                    </Badge>
                  </div>
                </TableCell>
                <TableCell>
                  <div className="h-8 bg-yellow-500/20 rounded-lg"></div>
                </TableCell>
                <TableCell>
                  <span className="text-yellow-500 font-bold">${beat.price}</span>
                </TableCell>
                <TableCell>
                  <div className="flex gap-2">
                    <Button size="sm" className="bg-yellow-500 hover:bg-yellow-400 text-black">
                      <Play className="w-4 h-4" />
                    </Button>
                    <EditBeatDialog beat={beat} onSave={handleUpdateBeat} />
                    <Button 
                      size="sm" 
                      variant="outline" 
                      className="border-red-500 text-red-500 hover:bg-red-500 hover:text-black"
                      onClick={() => handleDelete(beat.id)}
                    >
                      <Trash2 className="w-4 h-4" />
                    </Button>
                  </div>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  );
};

export default BeatLibrary;
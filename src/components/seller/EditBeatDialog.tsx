import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { PenLine } from "lucide-react";
import { useState } from "react";
import { useToast } from "@/components/ui/use-toast";
import { Beat } from "@/data/featuredBeats";

interface EditBeatDialogProps {
  beat: Beat;
  onSave: (updatedBeat: Beat) => void;
}

const EditBeatDialog = ({ beat, onSave }: EditBeatDialogProps) => {
  const [editedBeat, setEditedBeat] = useState(beat);
  const { toast } = useToast();
  const [open, setOpen] = useState(false);

  const handleSave = () => {
    onSave(editedBeat);
    setOpen(false);
    toast({
      title: "Beat Updated",
      description: "The beat has been updated successfully.",
    });
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button 
          size="sm" 
          variant="outline"
          className="border-yellow-500 text-yellow-500 hover:bg-yellow-500 hover:text-black"
        >
          <PenLine className="w-4 h-4" />
        </Button>
      </DialogTrigger>
      <DialogContent className="bg-black/90 border border-yellow-500/20">
        <DialogHeader>
          <DialogTitle className="text-yellow-500">Edit Beat</DialogTitle>
        </DialogHeader>
        <div className="space-y-4">
          <div>
            <Label htmlFor="title" className="text-white">Title</Label>
            <Input
              id="title"
              value={editedBeat.title}
              onChange={(e) => setEditedBeat({ ...editedBeat, title: e.target.value })}
              className="bg-black/60 text-white"
            />
          </div>
          <div>
            <Label htmlFor="producer" className="text-white">Producer</Label>
            <Input
              id="producer"
              value={editedBeat.producer}
              onChange={(e) => setEditedBeat({ ...editedBeat, producer: e.target.value })}
              className="bg-black/60 text-white"
            />
          </div>
          <div>
            <Label htmlFor="price" className="text-white">Price</Label>
            <Input
              id="price"
              type="number"
              value={editedBeat.price}
              onChange={(e) => setEditedBeat({ ...editedBeat, price: parseFloat(e.target.value) })}
              className="bg-black/60 text-white"
            />
          </div>
          <div>
            <Label htmlFor="bpm" className="text-white">BPM</Label>
            <Input
              id="bpm"
              type="number"
              value={editedBeat.bpm}
              onChange={(e) => setEditedBeat({ ...editedBeat, bpm: parseInt(e.target.value) })}
              className="bg-black/60 text-white"
            />
          </div>
          <div>
            <Label htmlFor="key" className="text-white">Key</Label>
            <Input
              id="key"
              value={editedBeat.key}
              onChange={(e) => setEditedBeat({ ...editedBeat, key: e.target.value })}
              className="bg-black/60 text-white"
            />
          </div>
          <Button onClick={handleSave} className="w-full bg-yellow-500 hover:bg-yellow-400 text-black">
            Save Changes
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default EditBeatDialog;
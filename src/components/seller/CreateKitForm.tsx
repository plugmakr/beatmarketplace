import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import FileUpload from "@/components/shared/FileUpload";
import { useToast } from "@/components/ui/use-toast";

const CreateKitForm = () => {
  const { toast } = useToast();
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    
    // Simulate upload
    setTimeout(() => {
      setLoading(false);
      toast({
        title: "Success",
        description: "Sound kit created successfully!",
      });
    }, 1500);
  };

  return (
    <Card className="bg-black/60 border border-yellow-500/20">
      <CardHeader>
        <CardTitle className="text-yellow-500">Create Sound Kit</CardTitle>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <Label htmlFor="kitTitle" className="text-white">Kit Title</Label>
            <Input id="kitTitle" className="bg-black/60 text-white" required />
          </div>
          
          <div>
            <Label htmlFor="category" className="text-white">Category</Label>
            <Input id="category" className="bg-black/60 text-white" required />
          </div>
          
          <div>
            <Label htmlFor="kitPrice" className="text-white">Price ($)</Label>
            <Input id="kitPrice" type="number" step="0.01" className="bg-black/60 text-white" required />
          </div>
          
          <div>
            <Label htmlFor="kitDescription" className="text-white">Description</Label>
            <Textarea id="kitDescription" className="bg-black/60 text-white" required />
          </div>
          
          <FileUpload
            id="kitFiles"
            label="Upload Sound Files (Multiple)"
            accept="audio/*"
            onChange={() => {}}
          />
          
          <FileUpload
            id="kitArtwork"
            label="Upload Kit Artwork"
            onChange={() => {}}
          />
          
          <Button 
            type="submit" 
            className="w-full bg-yellow-500 hover:bg-yellow-400 text-black"
            disabled={loading}
          >
            {loading ? "Creating..." : "Create Kit"}
          </Button>
        </form>
      </CardContent>
    </Card>
  );
};

export default CreateKitForm;
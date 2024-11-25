import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import FileUpload from "@/components/shared/FileUpload";
import { useToast } from "@/components/ui/use-toast";

const UploadBeatForm = () => {
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
        description: "Beat uploaded successfully!",
      });
    }, 1500);
  };

  return (
    <Card className="bg-black/60 border border-yellow-500/20">
      <CardHeader>
        <CardTitle className="text-yellow-500">Upload New Beat</CardTitle>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <Label htmlFor="title" className="text-white">Title</Label>
            <Input id="title" className="bg-black/60 text-white" required />
          </div>
          
          <div>
            <Label htmlFor="genre" className="text-white">Genre</Label>
            <Input id="genre" className="bg-black/60 text-white" required />
          </div>
          
          <div>
            <Label htmlFor="bpm" className="text-white">BPM</Label>
            <Input id="bpm" type="number" className="bg-black/60 text-white" required />
          </div>
          
          <div>
            <Label htmlFor="key" className="text-white">Key</Label>
            <Input id="key" className="bg-black/60 text-white" required />
          </div>
          
          <div>
            <Label htmlFor="price" className="text-white">Price ($)</Label>
            <Input id="price" type="number" step="0.01" className="bg-black/60 text-white" required />
          </div>
          
          <div>
            <Label htmlFor="description" className="text-white">Description</Label>
            <Textarea id="description" className="bg-black/60 text-white" required />
          </div>
          
          <FileUpload
            id="beatFile"
            label="Upload Beat File"
            accept="audio/*"
            onChange={() => {}}
          />
          
          <FileUpload
            id="artwork"
            label="Upload Artwork"
            onChange={() => {}}
          />
          
          <Button 
            type="submit" 
            className="w-full bg-yellow-500 hover:bg-yellow-400 text-black"
            disabled={loading}
          >
            {loading ? "Uploading..." : "Upload Beat"}
          </Button>
        </form>
      </CardContent>
    </Card>
  );
};

export default UploadBeatForm;
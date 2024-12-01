import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import FileUpload from "@/components/shared/FileUpload";
import { useToast } from "@/components/ui/use-toast";
import { useAuth } from "@/contexts/AuthContext";
import { supabase } from "@/integrations/supabase/client";

const ProjectForm = () => {
  const { toast } = useToast();
  const { profile } = useAuth();
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    
    const formData = new FormData(e.target as HTMLFormElement);
    const projectData = {
      title: formData.get('projectTitle'),
      type: formData.get('projectType'),
      releaseDate: formData.get('releaseDate'),
      description: formData.get('projectDescription'),
      artistId: profile?.id,
    };

    // This is a placeholder until we create the projects table
    setTimeout(() => {
      setLoading(false);
      toast({
        title: "Success",
        description: "Project created successfully!",
      });
    }, 1500);
  };

  return (
    <Card className="bg-black/60 border border-yellow-500/20">
      <CardHeader>
        <CardTitle className="text-yellow-500">Create New Project</CardTitle>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <Label htmlFor="projectTitle" className="text-white">Project Title</Label>
            <Input 
              id="projectTitle" 
              name="projectTitle"
              className="bg-black/60 text-white" 
              required 
            />
          </div>
          
          <div>
            <Label htmlFor="projectType" className="text-white">Project Type</Label>
            <Input 
              id="projectType" 
              name="projectType"
              className="bg-black/60 text-white" 
              placeholder="Album, EP, Single" 
              required 
            />
          </div>
          
          <div>
            <Label htmlFor="releaseDate" className="text-white">Expected Release Date</Label>
            <Input 
              id="releaseDate" 
              name="releaseDate"
              type="date" 
              className="bg-black/60 text-white" 
              required 
            />
          </div>
          
          <div>
            <Label htmlFor="projectDescription" className="text-white">Description</Label>
            <Textarea 
              id="projectDescription" 
              name="projectDescription"
              className="bg-black/60 text-white" 
              required 
            />
          </div>
          
          <FileUpload
            id="projectArtwork"
            label="Upload Project Artwork"
            onChange={() => {}}
          />
          
          <Button 
            type="submit" 
            className="w-full bg-yellow-500 hover:bg-yellow-400 text-black"
            disabled={loading}
          >
            {loading ? "Creating..." : "Create Project"}
          </Button>
        </form>
      </CardContent>
    </Card>
  );
};

export default ProjectForm;
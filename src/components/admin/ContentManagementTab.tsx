import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Plus, PenLine, Trash } from "lucide-react";
import { useToast } from "@/components/ui/use-toast";
import { featuredBeats } from "@/data/featuredBeats";
import { soundKits } from "@/data/soundKits";
import Rating from "@/components/shared/Rating";

const ContentManagementTab = () => {
  const { toast } = useToast();

  const handleUpload = (type: 'beat' | 'kit') => {
    toast({
      title: "Upload Started",
      description: `New ${type} upload initiated.`,
    });
  };

  return (
    <Card className="bg-black/60 border border-yellow-500/20">
      <CardHeader>
        <CardTitle className="text-yellow-500">Content Management</CardTitle>
      </CardHeader>
      <CardContent>
        <Tabs defaultValue="beats" className="space-y-4">
          <TabsList className="bg-black/60 border border-yellow-500/20">
            <TabsTrigger value="beats" className="text-white">Beats</TabsTrigger>
            <TabsTrigger value="kits" className="text-white">Sound Kits</TabsTrigger>
          </TabsList>

          <TabsContent value="beats">
            <div className="space-y-4">
              <Button 
                onClick={() => handleUpload('beat')}
                className="bg-yellow-500 hover:bg-yellow-400 text-black"
              >
                <Plus className="w-4 h-4 mr-2" />
                Upload New Beat
              </Button>

              <Table>
                <TableHeader>
                  <TableRow className="border-yellow-500/20">
                    <TableHead className="text-yellow-500">Title</TableHead>
                    <TableHead className="text-yellow-500">Producer</TableHead>
                    <TableHead className="text-yellow-500">Price</TableHead>
                    <TableHead className="text-yellow-500">Rating</TableHead>
                    <TableHead className="text-yellow-500">Actions</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {featuredBeats.map((beat) => (
                    <TableRow key={beat.id} className="border-yellow-500/20">
                      <TableCell className="font-medium text-white">{beat.title}</TableCell>
                      <TableCell className="text-white">{beat.producer}</TableCell>
                      <TableCell className="text-white">${beat.price}</TableCell>
                      <TableCell>
                        <Rating initialRating={beat.rating} readonly size="sm" />
                      </TableCell>
                      <TableCell>
                        <div className="flex gap-2">
                          <Button 
                            size="sm" 
                            variant="outline"
                            className="border-yellow-500 text-yellow-500 hover:bg-yellow-500 hover:text-black"
                          >
                            <PenLine className="w-4 h-4" />
                          </Button>
                          <Button 
                            size="sm" 
                            variant="outline"
                            className="border-red-500 text-red-500 hover:bg-red-500 hover:text-black"
                          >
                            <Trash className="w-4 h-4" />
                          </Button>
                        </div>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </div>
          </TabsContent>

          <TabsContent value="kits">
            <div className="space-y-4">
              <Button 
                onClick={() => handleUpload('kit')}
                className="bg-yellow-500 hover:bg-yellow-400 text-black"
              >
                <Plus className="w-4 h-4 mr-2" />
                Upload New Sound Kit
              </Button>

              <Table>
                <TableHeader>
                  <TableRow className="border-yellow-500/20">
                    <TableHead className="text-yellow-500">Title</TableHead>
                    <TableHead className="text-yellow-500">Producer</TableHead>
                    <TableHead className="text-yellow-500">Price</TableHead>
                    <TableHead className="text-yellow-500">Rating</TableHead>
                    <TableHead className="text-yellow-500">Actions</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {soundKits.map((kit) => (
                    <TableRow key={kit.id} className="border-yellow-500/20">
                      <TableCell className="font-medium text-white">{kit.title}</TableCell>
                      <TableCell className="text-white">{kit.producer}</TableCell>
                      <TableCell className="text-white">${kit.price}</TableCell>
                      <TableCell>
                        <Rating initialRating={kit.rating} readonly size="sm" />
                      </TableCell>
                      <TableCell>
                        <div className="flex gap-2">
                          <Button 
                            size="sm" 
                            variant="outline"
                            className="border-yellow-500 text-yellow-500 hover:bg-yellow-500 hover:text-black"
                          >
                            <PenLine className="w-4 h-4" />
                          </Button>
                          <Button 
                            size="sm" 
                            variant="outline"
                            className="border-red-500 text-red-500 hover:bg-red-500 hover:text-black"
                          >
                            <Trash className="w-4 h-4" />
                          </Button>
                        </div>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </div>
          </TabsContent>
        </Tabs>
      </CardContent>
    </Card>
  );
};

export default ContentManagementTab;
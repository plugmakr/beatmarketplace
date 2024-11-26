import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Package, FileAudio, Pencil, Trash2 } from "lucide-react";
import { useToast } from "@/components/ui/use-toast";
import { soundKits } from "@/data/soundKits";

const KitLibrary = () => {
  const { toast } = useToast();

  const handleEdit = (id: number) => {
    toast({
      title: "Edit Kit",
      description: `Editing kit ${id}`,
    });
  };

  const handleDelete = (id: number) => {
    toast({
      title: "Delete Kit",
      description: `Deleting kit ${id}`,
      variant: "destructive",
    });
  };

  return (
    <Card className="bg-black/60 border border-yellow-500/20">
      <CardHeader>
        <h2 className="text-2xl font-bold text-yellow-500 flex items-center gap-2">
          <Package className="w-6 h-6" />
          Kit Library
        </h2>
      </CardHeader>
      <CardContent>
        <Table>
          <TableHeader>
            <TableRow className="border-yellow-500/20">
              <TableHead className="text-yellow-500">Preview</TableHead>
              <TableHead className="text-yellow-500">Title</TableHead>
              <TableHead className="text-yellow-500">Samples</TableHead>
              <TableHead className="text-yellow-500">Waveform</TableHead>
              <TableHead className="text-yellow-500">Price</TableHead>
              <TableHead className="text-yellow-500">Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {soundKits.map((kit) => (
              <TableRow key={kit.id} className="border-yellow-500/20">
                <TableCell>
                  <img
                    src={kit.image}
                    alt={kit.title}
                    className="w-16 h-16 object-cover rounded-lg"
                  />
                </TableCell>
                <TableCell>
                  <div>
                    <p className="font-semibold text-yellow-500">{kit.title}</p>
                    <p className="text-sm text-gray-400">by {kit.producer}</p>
                  </div>
                </TableCell>
                <TableCell>
                  <div className="flex items-center gap-2">
                    <FileAudio className="w-4 h-4 text-yellow-500" />
                    <Badge variant="outline" className="text-yellow-500 border-yellow-500">
                      {kit.samples}
                    </Badge>
                  </div>
                </TableCell>
                <TableCell>
                  <div className="h-8 bg-yellow-500/20 rounded-lg"></div>
                </TableCell>
                <TableCell>
                  <span className="text-yellow-500 font-bold">${kit.price}</span>
                </TableCell>
                <TableCell>
                  <div className="flex gap-2">
                    <Button 
                      size="sm" 
                      variant="outline" 
                      className="border-yellow-500 text-yellow-500 hover:bg-yellow-500 hover:text-black"
                      onClick={() => handleEdit(kit.id)}
                    >
                      <Pencil className="w-4 h-4" />
                    </Button>
                    <Button 
                      size="sm" 
                      variant="outline" 
                      className="border-red-500 text-red-500 hover:bg-red-500 hover:text-black"
                      onClick={() => handleDelete(kit.id)}
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

export default KitLibrary;
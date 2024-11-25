import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { soundKits } from "@/data/soundKits";
import { Package, FileAudio } from "lucide-react";

const KitLibrary = () => {
  return (
    <Card className="bg-black/60 border border-yellow-500/20">
      <CardHeader>
        <h2 className="text-2xl font-bold text-yellow-500 flex items-center gap-2">
          <Package className="w-6 h-6" />
          Kit Library
        </h2>
      </CardHeader>
      <CardContent>
        <Accordion type="single" collapsible className="space-y-4">
          <AccordionItem value="all-kits" className="border-yellow-500/20">
            <AccordionTrigger className="text-yellow-500 hover:text-yellow-400">
              View All Kits
            </AccordionTrigger>
            <AccordionContent>
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
                        <Button className="bg-yellow-500 hover:bg-yellow-400 text-black">
                          View Details
                        </Button>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </CardContent>
    </Card>
  );
};

export default KitLibrary;
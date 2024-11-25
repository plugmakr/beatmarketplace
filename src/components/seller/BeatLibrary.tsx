import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { featuredBeats } from "@/data/featuredBeats";
import { Music2, Play, ShoppingCart } from "lucide-react";

const BeatLibrary = () => {
  return (
    <Card className="bg-black/60 border border-yellow-500/20">
      <CardHeader>
        <h2 className="text-2xl font-bold text-yellow-500 flex items-center gap-2">
          <Music2 className="w-6 h-6" />
          Beat Library
        </h2>
      </CardHeader>
      <CardContent>
        <Accordion type="single" collapsible className="space-y-4">
          <AccordionItem value="all-beats" className="border-yellow-500/20">
            <AccordionTrigger className="text-yellow-500 hover:text-yellow-400">
              View All Beats
            </AccordionTrigger>
            <AccordionContent>
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
                  {featuredBeats.map((beat) => (
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
                          {beat.genres.map((genre, index) => (
                            <Badge key={index} variant="outline" className="text-yellow-500 border-yellow-500">
                              {genre}
                            </Badge>
                          ))}
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
                            <Play className="w-4 h-4 mr-1" /> Preview
                          </Button>
                          <Button size="sm" variant="outline" className="border-yellow-500 text-yellow-500 hover:bg-yellow-500 hover:text-black">
                            <ShoppingCart className="w-4 h-4" />
                          </Button>
                        </div>
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

export default BeatLibrary;
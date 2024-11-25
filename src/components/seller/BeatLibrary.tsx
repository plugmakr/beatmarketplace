import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
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
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 pt-4">
                {featuredBeats.map((beat) => (
                  <div key={beat.id} className="group relative">
                    <img
                      src={beat.image}
                      alt={beat.title}
                      className="w-full aspect-square object-cover rounded-lg"
                    />
                    <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg flex flex-col justify-center items-center text-white p-4">
                      <h3 className="text-sm font-semibold text-center mb-1">{beat.title}</h3>
                      <p className="text-xs text-gray-300 mb-2">by {beat.producer}</p>
                      <div className="flex flex-wrap gap-1 justify-center mb-2">
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
                      <p className="text-yellow-500 font-bold mb-2">${beat.price}</p>
                      <div className="flex gap-2">
                        <Button size="sm" className="bg-yellow-500 hover:bg-yellow-400 text-black">
                          <Play className="w-4 h-4 mr-1" /> Preview
                        </Button>
                        <Button size="sm" variant="outline" className="border-yellow-500 text-yellow-500 hover:bg-yellow-500 hover:text-black">
                          <ShoppingCart className="w-4 h-4" />
                        </Button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </CardContent>
    </Card>
  );
};

export default BeatLibrary;
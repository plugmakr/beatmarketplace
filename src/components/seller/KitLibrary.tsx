import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
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
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 pt-4">
                {soundKits.map((kit) => (
                  <div key={kit.id} className="group relative">
                    <img
                      src={kit.image}
                      alt={kit.title}
                      className="w-full aspect-square object-cover rounded-lg"
                    />
                    <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg flex flex-col justify-center items-center text-white p-4">
                      <h3 className="text-sm font-semibold text-center mb-1">{kit.title}</h3>
                      <p className="text-xs text-gray-300 mb-2">by {kit.producer}</p>
                      <div className="flex items-center gap-2 mb-2">
                        <FileAudio className="w-4 h-4 text-yellow-500" />
                        <Badge variant="outline" className="text-yellow-500 border-yellow-500">
                          {kit.samples}
                        </Badge>
                      </div>
                      <p className="text-yellow-500 font-bold mb-2">${kit.price}</p>
                      <Button className="bg-yellow-500 hover:bg-yellow-400 text-black">
                        View Details
                      </Button>
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

export default KitLibrary;
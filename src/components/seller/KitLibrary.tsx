import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { soundKits } from "@/data/soundKits";
import { Package } from "lucide-react";

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
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {soundKits.map((kit) => (
            <div key={kit.id} className="group relative">
              <img
                src={kit.image}
                alt={kit.title}
                className="w-full aspect-square object-cover rounded-lg"
              />
              <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg flex flex-col justify-center items-center text-white p-2">
                <h3 className="text-sm font-semibold text-center">{kit.title}</h3>
                <p className="text-xs text-gray-300">by {kit.producer}</p>
                <p className="text-yellow-500 font-bold">${kit.price}</p>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};

export default KitLibrary;
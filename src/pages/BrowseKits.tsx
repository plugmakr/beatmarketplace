import { Button } from "@/components/ui/button";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import TopNavigation from "@/components/landing/TopNavigation";
import { useState } from "react";
import { LayoutGrid, Table2 } from "lucide-react";
import KitCard from "@/components/KitCard";
import { soundKits } from "@/data/soundKits";
import Rating from "@/components/shared/Rating";

const BrowseKits = () => {
  const [viewMode, setViewMode] = useState<'grid' | 'table'>('grid');

  const toggleView = () => {
    setViewMode(prev => prev === 'grid' ? 'table' : 'grid');
  };

  return (
    <div className="min-h-screen bg-black">
      <TopNavigation />
      <div className="container mx-auto px-4 py-20">
        <div className="flex justify-between items-center mb-12">
          <h1 className="text-4xl font-bold">
            <span className="text-white">Browse</span>
            <span className="bg-gradient-to-r from-yellow-500 to-yellow-200 bg-clip-text text-transparent">
              {" "}Kits
            </span>
          </h1>
          <Button
            variant="outline"
            className="border-yellow-500 text-yellow-500 hover:bg-yellow-500 hover:text-black"
            onClick={toggleView}
          >
            {viewMode === 'grid' ? <Table2 className="w-4 h-4 mr-2" /> : <LayoutGrid className="w-4 h-4 mr-2" />}
            {viewMode === 'grid' ? 'Table View' : 'Grid View'}
          </Button>
        </div>

        {viewMode === 'grid' ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {soundKits.map((kit, index) => (
              <KitCard key={kit.id} kit={kit} isFirst={index === 0} />
            ))}
          </div>
        ) : (
          <div className="bg-black/60 border border-yellow-500/20 rounded-lg overflow-hidden">
            <Table>
              <TableHeader>
                <TableRow className="border-yellow-500/20">
                  <TableHead className="text-yellow-500">Title</TableHead>
                  <TableHead className="text-yellow-500">Producer</TableHead>
                  <TableHead className="text-yellow-500">Rating</TableHead>
                  <TableHead className="text-yellow-500">Samples</TableHead>
                  <TableHead className="text-yellow-500">Price</TableHead>
                  <TableHead className="text-yellow-500">Actions</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {soundKits.map((kit) => (
                  <TableRow key={kit.id} className="border-yellow-500/20">
                    <TableCell className="font-medium text-white">{kit.title}</TableCell>
                    <TableCell className="text-gray-400">{kit.producer}</TableCell>
                    <TableCell>
                      <Rating initialRating={kit.rating} readonly size="sm" />
                    </TableCell>
                    <TableCell className="text-gray-400">{kit.samples}</TableCell>
                    <TableCell className="text-yellow-500 font-bold">${kit.price}</TableCell>
                    <TableCell>
                      <Button className="bg-yellow-500 hover:bg-yellow-400 text-black">
                        View Details
                      </Button>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
        )}
      </div>
    </div>
  );
};

export default BrowseKits;
import { Button } from "@/components/ui/button";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { LayoutGrid, Table2, ShoppingCart, Play } from "lucide-react";
import TopNavigation from "@/components/landing/TopNavigation";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import BeatCard from "@/components/BeatCard";
import { featuredBeats } from "@/data/featuredBeats";
import Rating from "@/components/shared/Rating";

const BrowseBeats = () => {
  const navigate = useNavigate();
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
              {" "}Beats
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
            {featuredBeats.map((beat, index) => (
              <BeatCard key={beat.id} beat={beat} isFirst={index === 0} />
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
                  <TableHead className="text-yellow-500">BPM</TableHead>
                  <TableHead className="text-yellow-500">Key</TableHead>
                  <TableHead className="text-yellow-500">Genres</TableHead>
                  <TableHead className="text-yellow-500">Price</TableHead>
                  <TableHead className="text-yellow-500">Actions</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {featuredBeats.map((beat) => (
                  <TableRow key={beat.id} className="border-yellow-500/20">
                    <TableCell className="font-medium text-white">{beat.title}</TableCell>
                    <TableCell className="text-gray-400">{beat.producer}</TableCell>
                    <TableCell>
                      <Rating initialRating={beat.rating} readonly size="sm" />
                    </TableCell>
                    <TableCell>{beat.bpm}</TableCell>
                    <TableCell>{beat.key}</TableCell>
                    <TableCell>
                      <div className="flex flex-wrap gap-1">
                        {beat.genres.map((genre, idx) => (
                          <Badge key={idx} variant="outline" className="text-yellow-500 border-yellow-500">
                            {genre}
                          </Badge>
                        ))}
                      </div>
                    </TableCell>
                    <TableCell className="text-yellow-500 font-bold">${beat.price}</TableCell>
                    <TableCell>
                      <div className="flex gap-2">
                        <Button 
                          size="sm" 
                          className="bg-yellow-500 hover:bg-yellow-400 text-black"
                          onClick={() => navigate(`/beats/${beat.id}`)}
                        >
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
          </div>
        )}
      </div>
    </div>
  );
};

export default BrowseBeats;
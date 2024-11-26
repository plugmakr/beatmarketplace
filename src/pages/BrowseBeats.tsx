import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ShoppingCart, Play, LayoutGrid, Table2 } from "lucide-react";
import TopNavigation from "@/components/landing/TopNavigation";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";

const beats = [
  {
    id: 1,
    title: "Summer Vibes",
    producer: "BeatMaster",
    price: 29.99,
    bpm: 140,
    key: "C Minor",
    genres: ["Hip Hop", "Trap"],
    image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b"
  },
  {
    id: 2,
    title: "Night Rider",
    producer: "WaveMaker",
    price: 34.99,
    bpm: 128,
    key: "G Major",
    genres: ["Trap", "R&B"],
    image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d"
  },
  {
    id: 3,
    title: "Ocean Dreams",
    producer: "SoundScape",
    price: 24.99,
    bpm: 95,
    key: "D Minor",
    genres: ["R&B", "Soul"],
    image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085"
  },
  {
    id: 4,
    title: "Urban Flow",
    producer: "CityBeats",
    price: 31.99,
    bpm: 135,
    key: "A Minor",
    genres: ["Hip Hop", "Urban"],
    image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c"
  },
  {
    id: 5,
    title: "Midnight Drive",
    producer: "NightOwl",
    price: 27.99,
    bpm: 120,
    key: "E Minor",
    genres: ["R&B", "Pop"],
    image: "https://images.unsplash.com/photo-1523712999610-f77fbcfc3843"
  },
  {
    id: 6,
    title: "Electric Dreams",
    producer: "VoltageBeats",
    price: 32.99,
    bpm: 130,
    key: "F Major",
    genres: ["Electronic", "Pop"],
    image: "https://images.unsplash.com/photo-1518770660439-4636190af475"
  },
  {
    id: 7,
    title: "Sunset Boulevard",
    producer: "WestCoast",
    price: 29.99,
    bpm: 125,
    key: "B Minor",
    genres: ["Hip Hop", "Jazz"],
    image: "https://images.unsplash.com/photo-1649972904349-6e44c42644a7"
  },
  {
    id: 8,
    title: "Crystal Clear",
    producer: "GlassHouse",
    price: 34.99,
    bpm: 140,
    key: "D Major",
    genres: ["Pop", "Electronic"],
    image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b"
  },
  {
    id: 9,
    title: "Desert Storm",
    producer: "SandMan",
    price: 28.99,
    bpm: 145,
    key: "G Minor",
    genres: ["Trap", "Arabic"],
    image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d"
  },
  {
    id: 10,
    title: "Arctic Winds",
    producer: "FrostBeat",
    price: 33.99,
    bpm: 132,
    key: "C Major",
    genres: ["Electronic", "Ambient"],
    image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085"
  }
];

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
            {beats.map((beat, index) => (
              <Card key={beat.id} className="bg-black/60 border border-yellow-500/20 hover:border-yellow-500/40 transition-all duration-300">
                <CardHeader>
                  <img
                    src={beat.image}
                    alt={beat.title}
                    className="w-full h-36 object-cover rounded-t-lg"
                  />
                </CardHeader>
                <CardContent>
                  {index === 0 ? (
                    <Link to={`/beats/${beat.id}`}>
                      <CardTitle className="text-white mb-2 text-lg hover:text-yellow-500 transition-colors">
                        {beat.title}
                      </CardTitle>
                    </Link>
                  ) : (
                    <CardTitle className="text-white mb-2 text-lg">{beat.title}</CardTitle>
                  )}
                  <CardDescription className="text-gray-400">
                    by {beat.producer}
                  </CardDescription>
                  <div className="mt-3 flex flex-wrap gap-2">
                    <Badge variant="outline" className="text-yellow-500 border-yellow-500">
                      {beat.bpm} BPM
                    </Badge>
                    <Badge variant="outline" className="text-yellow-500 border-yellow-500">
                      {beat.key}
                    </Badge>
                    {beat.genres.map((genre, idx) => (
                      <Badge key={idx} variant="outline" className="text-yellow-500 border-yellow-500">
                        {genre}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
                <CardFooter className="flex justify-between items-center">
                  <span className="text-yellow-500 font-bold">${beat.price}</span>
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
                </CardFooter>
              </Card>
            ))}
          </div>
        ) : (
          <div className="bg-black/60 border border-yellow-500/20 rounded-lg overflow-hidden">
            <Table>
              <TableHeader>
                <TableRow className="border-yellow-500/20">
                  <TableHead className="text-yellow-500">Title</TableHead>
                  <TableHead className="text-yellow-500">Producer</TableHead>
                  <TableHead className="text-yellow-500">BPM</TableHead>
                  <TableHead className="text-yellow-500">Key</TableHead>
                  <TableHead className="text-yellow-500">Genres</TableHead>
                  <TableHead className="text-yellow-500">Price</TableHead>
                  <TableHead className="text-yellow-500">Actions</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {beats.map((beat) => (
                  <TableRow key={beat.id} className="border-yellow-500/20">
                    <TableCell className="font-medium text-white">{beat.title}</TableCell>
                    <TableCell className="text-gray-400">{beat.producer}</TableCell>
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
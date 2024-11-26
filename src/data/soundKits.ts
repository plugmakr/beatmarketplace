export interface SoundKit {
  id: number;
  title: string;
  producer: string;
  price: number;
  samples: string;
  image: string;
  rating: number;
}

export const soundKits: SoundKit[] = [
  {
    id: 1,
    title: "Ultimate Drums",
    producer: "DrumMaster",
    price: 49.99,
    samples: "250+ samples",
    image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6",
    rating: 4.8
  },
  {
    id: 2,
    title: "Synth Paradise",
    producer: "WaveLab",
    price: 39.99,
    samples: "180+ samples",
    image: "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7",
    rating: 4.6
  },
  {
    id: 3,
    title: "Lo-Fi Essentials",
    producer: "ChillBeats",
    price: 29.99,
    samples: "150+ samples",
    image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158",
    rating: 4.2
  },
  {
    id: 4,
    title: "808 Collection",
    producer: "BassKing",
    price: 44.99,
    samples: "200+ samples",
    image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c",
    rating: 4.7
  },
  {
    id: 5,
    title: "Vintage Drums",
    producer: "RetroBeats",
    price: 35.99,
    samples: "175+ samples",
    image: "https://images.unsplash.com/photo-1523712999610-f77fbcfc3843",
    rating: 4.5
  },
  {
    id: 6,
    title: "Future Bass",
    producer: "WaveMaster",
    price: 42.99,
    samples: "220+ samples",
    image: "https://images.unsplash.com/photo-1518770660439-4636190af475",
    rating: 4.9
  },
  {
    id: 7,
    title: "Analog Dreams",
    producer: "SynthLab",
    price: 38.99,
    samples: "190+ samples",
    image: "https://images.unsplash.com/photo-1649972904349-6e44c42644a7",
    rating: 4.4
  },
  {
    id: 8,
    title: "Percussion Pro",
    producer: "RhythmKing",
    price: 46.99,
    samples: "230+ samples",
    image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b",
    rating: 4.6
  },
  {
    id: 9,
    title: "Digital Tools",
    producer: "TechBeats",
    price: 37.99,
    samples: "165+ samples",
    image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d",
    rating: 4.3
  },
  {
    id: 10,
    title: "World Percussion",
    producer: "GlobalSound",
    price: 41.99,
    samples: "210+ samples",
    image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085",
    rating: 4.8
  }
];

export interface SoundKit {
  id: number;
  title: string;
  producer: string;
  price: number;
  image: string;
}

export const soundKits: SoundKit[] = [
  {
    id: 1,
    title: "Ultimate Drums",
    producer: "DrumMaster",
    price: 49.99,
    image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6"
  },
  {
    id: 2,
    title: "Synth Paradise",
    producer: "WaveLab",
    price: 39.99,
    image: "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7"
  },
  {
    id: 3,
    title: "Lo-Fi Essentials",
    producer: "ChillBeats",
    price: 29.99,
    image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158"
  }
];
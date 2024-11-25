export interface Beat {
  id: number;
  title: string;
  producer: string;
  price: number;
  bpm: number;
  key: string;
  genres: string[];
  image: string;
}

export const featuredBeats: Beat[] = [
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
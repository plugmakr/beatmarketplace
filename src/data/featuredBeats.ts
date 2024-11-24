export interface Beat {
  id: number;
  title: string;
  producer: string;
  price: number;
  image: string;
}

export const featuredBeats: Beat[] = [
  {
    id: 1,
    title: "Summer Vibes",
    producer: "BeatMaster",
    price: 29.99,
    image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b"
  },
  {
    id: 2,
    title: "Night Rider",
    producer: "WaveMaker",
    price: 34.99,
    image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d"
  },
  {
    id: 3,
    title: "Ocean Dreams",
    producer: "SoundScape",
    price: 24.99,
    image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085"
  }
];
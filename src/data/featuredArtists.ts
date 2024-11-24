export interface Artist {
  id: number;
  name: string;
  genre: string;
  sales: string;
  image: string;
}

export const featuredArtists: Artist[] = [
  {
    id: 1,
    name: "BeatMaster",
    genre: "Hip Hop/Trap",
    sales: "10k+ sales",
    image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b"
  },
  {
    id: 2,
    name: "WaveMaker",
    genre: "Electronic/Pop",
    sales: "8k+ sales",
    image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d"
  },
  {
    id: 3,
    name: "SoundScape",
    genre: "R&B/Soul",
    sales: "12k+ sales",
    image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085"
  }
];
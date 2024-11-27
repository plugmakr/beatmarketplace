export interface License {
  id: string;
  name: string;
  price: number;
  features: string[];
  type: 'basic' | 'premium' | 'exclusive';
  status: 'active' | 'inactive';
}

export const mockLicenses: License[] = [
  {
    id: "1",
    name: "Basic License",
    price: 29.99,
    features: [
      "MP3 File",
      "Personal Use Only",
      "No Commercial Rights",
      "No Distribution Rights"
    ],
    type: "basic",
    status: "active"
  },
  {
    id: "2",
    name: "Premium License",
    price: 99.99,
    features: [
      "WAV + MP3 Files",
      "Commercial Use",
      "Limited Distribution",
      "Streaming Rights"
    ],
    type: "premium",
    status: "active"
  },
  {
    id: "3",
    name: "Exclusive License",
    price: 499.99,
    features: [
      "All File Formats",
      "Full Commercial Rights",
      "Unlimited Distribution",
      "Full Ownership Transfer"
    ],
    type: "exclusive",
    status: "active"
  }
];
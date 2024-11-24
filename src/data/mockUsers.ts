export interface User {
  id: string;
  name: string;
  email: string;
  role: 'admin' | 'artist' | 'seller';
  status: 'active' | 'inactive';
  joinDate: string;
  lastLogin: string;
}

export const mockUsers: User[] = [
  {
    id: "1",
    name: "John Admin",
    email: "john@admin.com",
    role: "admin",
    status: "active",
    joinDate: "2024-01-01",
    lastLogin: "2024-02-20"
  },
  {
    id: "2",
    name: "Sarah Artist",
    email: "sarah@artist.com",
    role: "artist",
    status: "active",
    joinDate: "2024-01-15",
    lastLogin: "2024-02-19"
  },
  {
    id: "3",
    name: "Mike Seller",
    email: "mike@seller.com",
    role: "seller",
    status: "inactive",
    joinDate: "2024-02-01",
    lastLogin: "2024-02-10"
  }
];
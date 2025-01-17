export interface User {
  id: string;
  name: string;
  email: string;
  role: 'admin' | 'artist' | 'seller';
  status: 'active' | 'inactive';
  joinDate: string;
  lastLogin: string;
}

export interface UserFormData {
  name: string;
  email: string;
  role: 'admin' | 'artist' | 'seller';
  password?: string;
}

export interface Profile {
  id: string;
  username: string | null;
  role: 'admin' | 'artist' | 'seller';
  created_at: string;
  updated_at: string;
}
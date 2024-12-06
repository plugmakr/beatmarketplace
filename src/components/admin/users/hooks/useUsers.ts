import { useQuery } from "@tanstack/react-query";
import { supabase } from "@/integrations/supabase/client";
import { User } from "../types";

export const useUsers = () => {
  return useQuery({
    queryKey: ['users'],
    queryFn: async () => {
      console.log('Fetching users...');
      const { data: profiles, error } = await supabase
        .from('profiles')
        .select(`
          id,
          username,
          role,
          created_at,
          updated_at
        `)
        .order('created_at', { ascending: false });

      if (error) {
        console.error('Error fetching users:', error);
        throw error;
      }

      console.log('Fetched profiles:', profiles);
      return profiles.map((profile): User => ({
        id: profile.id,
        name: profile.username || '',
        email: profile.username || '', // Using username as email since that's how we store it
        role: profile.role as 'admin' | 'artist' | 'seller',
        status: 'active',
        joinDate: new Date(profile.created_at).toLocaleDateString(),
        lastLogin: new Date(profile.updated_at).toLocaleDateString(),
      }));
    },
  });
};
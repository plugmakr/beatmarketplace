import { useQuery } from "@tanstack/react-query";
import { supabase } from "@/integrations/supabase/client";
import { User, Profile } from "../types";

export const useUsers = () => {
  return useQuery({
    queryKey: ['users'],
    queryFn: async () => {
      console.log('Fetching users...');
      const { data: profiles, error } = await supabase
        .from('profiles')
        .select('*');

      if (error) {
        console.error('Error fetching users:', error);
        throw error;
      }

      console.log('Fetched profiles:', profiles);
      return (profiles as Profile[]).map((profile): User => ({
        id: profile.id,
        name: profile.username || '',
        email: profile.username || '', // Using username as email since that's how we store it
        role: profile.role,
        status: 'active', // Default status
        joinDate: new Date(profile.created_at).toLocaleDateString(),
        lastLogin: new Date(profile.updated_at).toLocaleDateString(),
      }));
    },
  });
};
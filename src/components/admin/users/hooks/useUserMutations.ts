import { useMutation, useQueryClient } from "@tanstack/react-query";
import { supabase } from "@/integrations/supabase/client";
import { UserFormData } from "../types";
import { useToast } from "@/components/ui/use-toast";

export const useUserMutations = () => {
  const { toast } = useToast();
  const queryClient = useQueryClient();

  const createUser = useMutation({
    mutationFn: async (data: UserFormData) => {
      console.log('Creating user:', data);
      const { data: result, error } = await supabase.functions.invoke('create-user', {
        body: {
          email: data.email,
          password: 'tempPass123!',
          name: data.name,
          role: data.role,
        },
      });

      if (error) {
        console.error('Error creating user:', error);
        throw error;
      }

      return result;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['users'] });
      toast({
        title: "Success",
        description: "User created successfully",
      });
    },
    onError: (error) => {
      console.error('Error creating user:', error);
      toast({
        title: "Error",
        description: error.message,
        variant: "destructive",
      });
    },
  });

  const updateUser = useMutation({
    mutationFn: async (data: UserFormData & { id: string }) => {
      console.log('Updating user:', data);
      const { error } = await supabase
        .from('profiles')
        .update({
          username: data.name,
          role: data.role,
        })
        .eq('id', data.id);

      if (error) throw error;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['users'] });
      toast({
        title: "Success",
        description: "User updated successfully",
      });
    },
    onError: (error) => {
      console.error('Error updating user:', error);
      toast({
        title: "Error",
        description: error.message,
        variant: "destructive",
      });
    },
  });

  const deleteUser = useMutation({
    mutationFn: async (userId: string) => {
      console.log('Deleting user:', userId);
      const { data, error } = await supabase.functions.invoke('delete-user', {
        body: { userId },
      });

      if (error) {
        console.error('Error deleting user:', error);
        throw error;
      }

      return data;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['users'] });
      toast({
        title: "Success",
        description: "User deleted successfully",
      });
    },
    onError: (error) => {
      console.error('Error deleting user:', error);
      toast({
        title: "Error",
        description: error.message,
        variant: "destructive",
      });
    },
  });

  return {
    createUser,
    updateUser,
    deleteUser,
  };
};
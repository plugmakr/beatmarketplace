import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { UserPlus } from "lucide-react";
import { useToast } from "@/components/ui/use-toast";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { useState } from "react";
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { supabase } from "@/integrations/supabase/client";
import UserTable from "./users/UserTable";
import UserForm from "./users/UserForm";
import { User, UserFormData } from "./types";

const UsersTab = () => {
  const { toast } = useToast();
  const queryClient = useQueryClient();
  const [editingUser, setEditingUser] = useState<User | null>(null);
  const [isCreateDialogOpen, setIsCreateDialogOpen] = useState(false);

  const { data: users = [], isLoading } = useQuery({
    queryKey: ['users'],
    queryFn: async () => {
      console.log('Fetching users...');
      const { data: profiles, error } = await supabase
        .from('profiles')
        .select('*')
        .order('created_at', { ascending: false });

      if (error) {
        console.error('Error fetching users:', error);
        throw error;
      }

      console.log('Fetched profiles:', profiles);
      return profiles.map((profile): User => ({
        id: profile.id,
        name: profile.username || '',
        email: '', // We'll need to get this from auth.users through an admin function
        role: profile.role as 'admin' | 'artist' | 'seller',
        status: 'active',
        joinDate: new Date(profile.created_at).toLocaleDateString(),
        lastLogin: new Date(profile.updated_at).toLocaleDateString(),
      }));
    },
  });

  // Create user
  const createUser = useMutation({
    mutationFn: async (data: UserFormData) => {
      console.log('Creating user:', data);
      const { data: result, error } = await supabase.functions.invoke('create-user', {
        body: {
          email: data.email,
          password: 'tempPass123!', // You might want to generate this randomly or ask for it in the form
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
      setIsCreateDialogOpen(false);
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

  // Update user
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
      setEditingUser(null);
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

  // Delete user
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

  const handleCreateUser = (data: UserFormData) => {
    createUser.mutate(data);
  };

  const handleUpdateUser = (data: UserFormData) => {
    if (!editingUser) return;
    updateUser.mutate({ ...data, id: editingUser.id });
  };

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <Card className="bg-black/60 border border-yellow-500/20">
      <CardHeader className="flex flex-row items-center justify-between">
        <CardTitle className="text-yellow-500">User Management</CardTitle>
        <Dialog open={isCreateDialogOpen} onOpenChange={setIsCreateDialogOpen}>
          <DialogTrigger asChild>
            <Button className="bg-yellow-500 hover:bg-yellow-400 text-black">
              <UserPlus className="w-4 h-4 mr-2" />
              Create User
            </Button>
          </DialogTrigger>
          <DialogContent className="bg-black/90 border border-yellow-500/20">
            <DialogHeader>
              <DialogTitle className="text-yellow-500">Create New User</DialogTitle>
            </DialogHeader>
            <UserForm type="create" onSubmit={handleCreateUser} />
          </DialogContent>
        </Dialog>
      </CardHeader>
      <CardContent>
        <UserTable 
          users={users}
          onEdit={setEditingUser}
          onDelete={(userId) => deleteUser.mutate(userId)}
        />
      </CardContent>

      {/* Edit User Dialog */}
      <Dialog open={!!editingUser} onOpenChange={() => setEditingUser(null)}>
        <DialogContent className="bg-black/90 border border-yellow-500/20">
          <DialogHeader>
            <DialogTitle className="text-yellow-500">Edit User</DialogTitle>
          </DialogHeader>
          {editingUser && (
            <UserForm 
              type="edit"
              defaultValues={{
                name: editingUser.name,
                email: editingUser.email,
                role: editingUser.role,
              }}
              onSubmit={handleUpdateUser}
            />
          )}
        </DialogContent>
      </Dialog>
    </Card>
  );
};

export default UsersTab;
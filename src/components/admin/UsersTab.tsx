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
import { User, UserFormData } from "./users/types";

const UsersTab = () => {
  const { toast } = useToast();
  const queryClient = useQueryClient();
  const [editingUser, setEditingUser] = useState<User | null>(null);

  // Fetch users
  const { data: users = [], isLoading } = useQuery({
    queryKey: ['users'],
    queryFn: async () => {
      const { data: profiles, error } = await supabase
        .from('profiles')
        .select('*')
        .order('created_at', { ascending: false });

      if (error) throw error;

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

  // Update user
  const updateUser = useMutation({
    mutationFn: async (data: UserFormData & { id: string }) => {
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
      const { error } = await supabase
        .from('profiles')
        .delete()
        .eq('id', userId);

      if (error) throw error;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['users'] });
      toast({
        title: "Success",
        description: "User deleted successfully",
      });
    },
    onError: (error) => {
      toast({
        title: "Error",
        description: error.message,
        variant: "destructive",
      });
    },
  });

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
        <Dialog>
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
            <UserForm type="create" onSubmit={() => {}} />
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
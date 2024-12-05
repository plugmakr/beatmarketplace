import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useState } from "react";
import { User, UserFormData } from "./users/types";
import { useUsers } from "./users/hooks/useUsers";
import { useUserMutations } from "./users/hooks/useUserMutations";
import UserTable from "./users/UserTable";
import CreateUserDialog from "./users/CreateUserDialog";
import EditUserDialog from "./users/EditUserDialog";

const UsersTab = () => {
  const [editingUser, setEditingUser] = useState<User | null>(null);
  const [isCreateDialogOpen, setIsCreateDialogOpen] = useState(false);
  
  const { data: users = [], isLoading } = useUsers();
  const { createUser, updateUser, deleteUser } = useUserMutations();

  const handleCreateUser = (data: UserFormData) => {
    createUser.mutate(data, {
      onSuccess: () => setIsCreateDialogOpen(false),
    });
  };

  const handleUpdateUser = (data: UserFormData) => {
    if (!editingUser) return;
    updateUser.mutate({ ...data, id: editingUser.id }, {
      onSuccess: () => setEditingUser(null),
    });
  };

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <Card className="bg-black/60 border border-yellow-500/20">
      <CardHeader className="flex flex-row items-center justify-between">
        <CardTitle className="text-yellow-500">User Management</CardTitle>
        <CreateUserDialog
          isOpen={isCreateDialogOpen}
          onOpenChange={setIsCreateDialogOpen}
          onSubmit={handleCreateUser}
          isLoading={createUser.isPending}
        />
      </CardHeader>
      <CardContent>
        <UserTable 
          users={users}
          onEdit={setEditingUser}
          onDelete={(userId) => deleteUser.mutate(userId)}
        />
      </CardContent>

      <EditUserDialog
        user={editingUser}
        onClose={() => setEditingUser(null)}
        onSubmit={handleUpdateUser}
        isLoading={updateUser.isPending}
      />
    </Card>
  );
};

export default UsersTab;
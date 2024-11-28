import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { mockUsers } from "@/data/mockUsers";
import { Eye, Trash2, UserPlus, PenLine } from "lucide-react";
import { useToast } from "@/components/ui/use-toast";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useState } from "react";

const UsersTab = () => {
  const { toast } = useToast();
  const [users, setUsers] = useState(mockUsers);
  const [editingUser, setEditingUser] = useState<typeof mockUsers[0] | null>(null);

  const handleDelete = (userId: string) => {
    setUsers(users.filter(user => user.id !== userId));
    toast({
      title: "User Deleted",
      description: `User ${userId} has been deleted successfully.`,
    });
  };

  const handleEdit = (user: typeof mockUsers[0]) => {
    setEditingUser(user);
  };

  const handleUpdateUser = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const updatedUser = {
      ...editingUser!,
      name: formData.get('name') as string,
      email: formData.get('email') as string,
      role: formData.get('role') as 'admin' | 'artist' | 'seller',
    };
    setUsers(users.map(user => user.id === updatedUser.id ? updatedUser : user));
    setEditingUser(null);
    toast({
      title: "User Updated",
      description: "User has been updated successfully.",
    });
  };

  const handleCreateUser = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const newUser = {
      id: (users.length + 1).toString(),
      name: formData.get('name') as string,
      email: formData.get('email') as string,
      role: formData.get('role') as 'admin' | 'artist' | 'seller',
      status: 'active' as const,
      joinDate: new Date().toISOString().split('T')[0],
      lastLogin: new Date().toISOString().split('T')[0],
    };
    setUsers([...users, newUser]);
    toast({
      title: "User Created",
      description: "New user has been created successfully.",
    });
  };

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
            <form onSubmit={handleCreateUser} className="space-y-4">
              <div>
                <Label htmlFor="name" className="text-white">Name</Label>
                <Input id="name" name="name" className="bg-black/60 text-white" required />
              </div>
              <div>
                <Label htmlFor="email" className="text-white">Email</Label>
                <Input id="email" name="email" type="email" className="bg-black/60 text-white" required />
              </div>
              <div>
                <Label htmlFor="role" className="text-white">Role</Label>
                <Select name="role" required>
                  <SelectTrigger className="bg-black/60 text-white">
                    <SelectValue placeholder="Select role" />
                  </SelectTrigger>
                  <SelectContent className="bg-black/90 text-white">
                    <SelectItem value="admin">Admin</SelectItem>
                    <SelectItem value="artist">Artist</SelectItem>
                    <SelectItem value="seller">Seller</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <Button type="submit" className="w-full bg-yellow-500 hover:bg-yellow-400 text-black">
                Create User
              </Button>
            </form>
          </DialogContent>
        </Dialog>
      </CardHeader>
      <CardContent>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b border-yellow-500/20">
                <th className="text-left p-4 text-yellow-500">Name</th>
                <th className="text-left p-4 text-yellow-500">Email</th>
                <th className="text-left p-4 text-yellow-500">Role</th>
                <th className="text-left p-4 text-yellow-500">Status</th>
                <th className="text-left p-4 text-yellow-500">Join Date</th>
                <th className="text-left p-4 text-yellow-500">Last Login</th>
                <th className="text-left p-4 text-yellow-500">Actions</th>
              </tr>
            </thead>
            <tbody>
              {users.map((user) => (
                <tr key={user.id} className="border-b border-yellow-500/10">
                  <td className="p-4 text-white">{user.name}</td>
                  <td className="p-4 text-white">{user.email}</td>
                  <td className="p-4 capitalize text-white">{user.role}</td>
                  <td className="p-4">
                    <span className={`px-2 py-1 rounded-full text-xs ${
                      user.status === 'active' ? 'bg-green-500/20 text-green-500' : 'bg-red-500/20 text-red-500'
                    }`}>
                      {user.status}
                    </span>
                  </td>
                  <td className="p-4 text-white">{user.joinDate}</td>
                  <td className="p-4 text-white">{user.lastLogin}</td>
                  <td className="p-4 space-x-2">
                    <Button 
                      variant="ghost" 
                      size="sm" 
                      className="text-yellow-500 hover:text-yellow-400"
                      onClick={() => handleEdit(user)}
                    >
                      <PenLine className="w-4 h-4" />
                    </Button>
                    <Button 
                      variant="ghost" 
                      size="sm" 
                      className="text-yellow-500 hover:text-yellow-400"
                    >
                      <Eye className="w-4 h-4" />
                    </Button>
                    <Button 
                      variant="ghost" 
                      size="sm" 
                      className="text-red-500 hover:text-red-400"
                      onClick={() => handleDelete(user.id)}
                    >
                      <Trash2 className="w-4 h-4" />
                    </Button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </CardContent>

      {/* Edit User Dialog */}
      <Dialog open={!!editingUser} onOpenChange={() => setEditingUser(null)}>
        <DialogContent className="bg-black/90 border border-yellow-500/20">
          <DialogHeader>
            <DialogTitle className="text-yellow-500">Edit User</DialogTitle>
          </DialogHeader>
          {editingUser && (
            <form onSubmit={handleUpdateUser} className="space-y-4">
              <div>
                <Label htmlFor="edit-name" className="text-white">Name</Label>
                <Input 
                  id="edit-name" 
                  name="name" 
                  defaultValue={editingUser.name}
                  className="bg-black/60 text-white" 
                  required 
                />
              </div>
              <div>
                <Label htmlFor="edit-email" className="text-white">Email</Label>
                <Input 
                  id="edit-email" 
                  name="email" 
                  type="email" 
                  defaultValue={editingUser.email}
                  className="bg-black/60 text-white" 
                  required 
                />
              </div>
              <div>
                <Label htmlFor="edit-role" className="text-white">Role</Label>
                <Select name="role" defaultValue={editingUser.role}>
                  <SelectTrigger className="bg-black/60 text-white">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent className="bg-black/90 text-white">
                    <SelectItem value="admin">Admin</SelectItem>
                    <SelectItem value="artist">Artist</SelectItem>
                    <SelectItem value="seller">Seller</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <Button type="submit" className="w-full bg-yellow-500 hover:bg-yellow-400 text-black">
                Save Changes
              </Button>
            </form>
          )}
        </DialogContent>
      </Dialog>
    </Card>
  );
};

export default UsersTab;
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { mockUsers } from "@/data/mockUsers";
import { Eye, Trash2, UserPlus } from "lucide-react";
import { useToast } from "@/components/ui/use-toast";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useState } from "react";

const UsersTab = () => {
  const { toast } = useToast();
  const [users, setUsers] = useState(mockUsers);

  const handleDelete = (userId: string) => {
    setUsers(users.filter(user => user.id !== userId));
    toast({
      title: "User Deleted",
      description: `User ${userId} has been deleted successfully.`,
    });
  };

  const handleView = (userId: string) => {
    toast({
      title: "View User Details",
      description: `Viewing details for user ${userId}.`,
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
      status: 'active',
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
          <table className="w-full text-white">
            <thead>
              <tr className="border-b border-yellow-500/20">
                <th className="text-left p-4">Name</th>
                <th className="text-left p-4">Email</th>
                <th className="text-left p-4">Role</th>
                <th className="text-left p-4">Status</th>
                <th className="text-left p-4">Join Date</th>
                <th className="text-left p-4">Last Login</th>
                <th className="text-left p-4">Actions</th>
              </tr>
            </thead>
            <tbody>
              {mockUsers.map((user) => (
                <tr key={user.id} className="border-b border-yellow-500/10">
                  <td className="p-4">{user.name}</td>
                  <td className="p-4">{user.email}</td>
                  <td className="p-4 capitalize">{user.role}</td>
                  <td className="p-4">
                    <span className={`px-2 py-1 rounded-full text-xs ${
                      user.status === 'active' ? 'bg-green-500/20 text-green-500' : 'bg-red-500/20 text-red-500'
                    }`}>
                      {user.status}
                    </span>
                  </td>
                  <td className="p-4">{user.joinDate}</td>
                  <td className="p-4">{user.lastLogin}</td>
                  <td className="p-4 space-x-2">
                    <Button 
                      variant="ghost" 
                      size="sm" 
                      className="text-yellow-500 hover:text-yellow-400"
                      onClick={() => handleView(user.id)}
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
    </Card>
  );
};

export default UsersTab;

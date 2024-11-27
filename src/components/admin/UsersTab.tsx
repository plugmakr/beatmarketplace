import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { mockUsers } from "@/data/mockUsers";
import { Eye, Trash2 } from "lucide-react";
import { useToast } from "@/components/ui/use-toast";

const UsersTab = () => {
  const { toast } = useToast();

  const handleDelete = (userId: string) => {
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

  return (
    <Card className="bg-black/60 border border-yellow-500/20">
      <CardHeader>
        <CardTitle className="text-yellow-500">User Management</CardTitle>
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
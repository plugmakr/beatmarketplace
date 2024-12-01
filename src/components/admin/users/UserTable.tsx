import { User } from './types';
import { Button } from "@/components/ui/button";
import { Eye, Trash2, PenLine } from "lucide-react";

interface UserTableProps {
  users: User[];
  onEdit: (user: User) => void;
  onDelete: (userId: string) => void;
}

const UserTable = ({ users, onEdit, onDelete }: UserTableProps) => {
  return (
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
                  onClick={() => onEdit(user)}
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
                  onClick={() => onDelete(user.id)}
                >
                  <Trash2 className="w-4 h-4" />
                </Button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default UserTable;
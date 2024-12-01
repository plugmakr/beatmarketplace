import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { UserFormData } from "./types";

interface UserFormProps {
  defaultValues?: UserFormData;
  onSubmit: (data: UserFormData) => void;
  type: 'create' | 'edit';
}

const UserForm = ({ defaultValues, onSubmit, type }: UserFormProps) => {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    onSubmit({
      name: formData.get('name') as string,
      email: formData.get('email') as string,
      role: formData.get('role') as 'admin' | 'artist' | 'seller',
    });
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <Label htmlFor="name" className="text-white">Name</Label>
        <Input 
          id="name" 
          name="name" 
          defaultValue={defaultValues?.name}
          className="bg-black/60 text-white" 
          required 
        />
      </div>
      <div>
        <Label htmlFor="email" className="text-white">Email</Label>
        <Input 
          id="email" 
          name="email" 
          type="email" 
          defaultValue={defaultValues?.email}
          className="bg-black/60 text-white" 
          required 
        />
      </div>
      <div>
        <Label htmlFor="role" className="text-white">Role</Label>
        <Select name="role" defaultValue={defaultValues?.role}>
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
        {type === 'create' ? 'Create User' : 'Save Changes'}
      </Button>
    </form>
  );
};

export default UserForm;
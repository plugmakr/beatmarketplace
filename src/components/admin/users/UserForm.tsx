import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { UserFormData } from "./types";
import { useState } from "react";

interface UserFormProps {
  defaultValues?: UserFormData;
  onSubmit: (data: UserFormData) => void;
  type: 'create' | 'edit';
  isLoading?: boolean;
}

const UserForm = ({ defaultValues, onSubmit, type, isLoading }: UserFormProps) => {
  const [formData, setFormData] = useState<UserFormData>({
    name: defaultValues?.name || '',
    email: defaultValues?.email || '',
    role: defaultValues?.role || 'artist',
    password: defaultValues?.password || '',
  });

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    onSubmit(formData);
  };

  const handleChange = (field: keyof UserFormData, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <Label htmlFor="name" className="text-white">Name</Label>
        <Input 
          id="name" 
          name="name" 
          value={formData.name}
          onChange={(e) => handleChange('name', e.target.value)}
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
          value={formData.email}
          onChange={(e) => handleChange('email', e.target.value)}
          className="bg-black/60 text-white" 
          required 
        />
      </div>
      {type === 'create' && (
        <div>
          <Label htmlFor="password" className="text-white">Password</Label>
          <Input 
            id="password" 
            name="password" 
            type="password" 
            value={formData.password}
            onChange={(e) => handleChange('password', e.target.value)}
            className="bg-black/60 text-white" 
            required 
            minLength={8}
          />
        </div>
      )}
      <div>
        <Label htmlFor="role" className="text-white">Role</Label>
        <Select 
          name="role" 
          value={formData.role}
          onValueChange={(value) => handleChange('role', value)}
        >
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
      <Button 
        type="submit" 
        className="w-full bg-yellow-500 hover:bg-yellow-400 text-black"
        disabled={isLoading}
      >
        {isLoading ? 'Processing...' : type === 'create' ? 'Create User' : 'Save Changes'}
      </Button>
    </form>
  );
};

export default UserForm;
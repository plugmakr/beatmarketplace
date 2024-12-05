import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { UserPlus } from "lucide-react";
import UserForm from "./UserForm";
import { UserFormData } from "./types";

interface CreateUserDialogProps {
  isOpen: boolean;
  onOpenChange: (open: boolean) => void;
  onSubmit: (data: UserFormData) => void;
  isLoading?: boolean;
}

const CreateUserDialog = ({ isOpen, onOpenChange, onSubmit, isLoading }: CreateUserDialogProps) => {
  return (
    <Dialog open={isOpen} onOpenChange={onOpenChange}>
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
        <UserForm 
          type="create" 
          onSubmit={onSubmit} 
          isLoading={isLoading}
        />
      </DialogContent>
    </Dialog>
  );
};

export default CreateUserDialog;
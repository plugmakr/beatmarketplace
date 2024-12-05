import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import UserForm from "./UserForm";
import { User, UserFormData } from "./types";

interface EditUserDialogProps {
  user: User | null;
  onClose: () => void;
  onSubmit: (data: UserFormData) => void;
  isLoading?: boolean;
}

const EditUserDialog = ({ user, onClose, onSubmit, isLoading }: EditUserDialogProps) => {
  if (!user) return null;

  return (
    <Dialog open={!!user} onOpenChange={() => onClose()}>
      <DialogContent className="bg-black/90 border border-yellow-500/20">
        <DialogHeader>
          <DialogTitle className="text-yellow-500">Edit User</DialogTitle>
        </DialogHeader>
        <UserForm 
          type="edit"
          defaultValues={{
            name: user.name,
            email: user.email,
            role: user.role,
          }}
          onSubmit={onSubmit}
          isLoading={isLoading}
        />
      </DialogContent>
    </Dialog>
  );
};

export default EditUserDialog;
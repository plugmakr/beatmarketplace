import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";

interface FileUploadProps {
  id: string;
  label: string;
  accept?: string;
  onChange: (file: File) => void;
}

const FileUpload = ({ id, label, accept = "image/*", onChange }: FileUploadProps) => {
  return (
    <div className="space-y-2">
      <Label htmlFor={id} className="text-white">{label}</Label>
      <Input
        id={id}
        type="file"
        accept={accept}
        onChange={(e) => {
          const file = e.target.files?.[0];
          if (file) onChange(file);
        }}
        className="bg-black/60 text-white cursor-pointer file:cursor-pointer file:border-0 file:bg-yellow-500 file:text-black file:px-4 file:py-2 file:mr-4 file:hover:bg-yellow-400 transition-colors"
      />
    </div>
  );
};

export default FileUpload;
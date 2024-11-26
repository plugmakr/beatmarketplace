import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Mail } from "lucide-react";
import { useToast } from "@/components/ui/use-toast";

const EmailSettingsTab = () => {
  const { toast } = useToast();

  const handleSave = () => {
    toast({
      title: "Settings Saved",
      description: "Email settings have been updated successfully.",
    });
  };

  return (
    <Card className="bg-black/60 border border-yellow-500/20">
      <CardHeader>
        <CardTitle className="text-yellow-500 flex items-center gap-2">
          <Mail className="w-5 h-5" />
          Email Settings
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <div>
          <Label htmlFor="smtp-host" className="text-white">SMTP Host</Label>
          <Input id="smtp-host" className="bg-black/60 text-white" placeholder="smtp.example.com" />
        </div>
        <div>
          <Label htmlFor="smtp-port" className="text-white">SMTP Port</Label>
          <Input id="smtp-port" className="bg-black/60 text-white" placeholder="587" type="number" />
        </div>
        <div>
          <Label htmlFor="smtp-user" className="text-white">SMTP Username</Label>
          <Input id="smtp-user" className="bg-black/60 text-white" placeholder="username@example.com" />
        </div>
        <div>
          <Label htmlFor="smtp-pass" className="text-white">SMTP Password</Label>
          <Input id="smtp-pass" className="bg-black/60 text-white" type="password" />
        </div>
        <div>
          <Label htmlFor="from-email" className="text-white">From Email</Label>
          <Input id="from-email" className="bg-black/60 text-white" placeholder="noreply@example.com" />
        </div>
        <Button onClick={handleSave} className="w-full bg-yellow-500 hover:bg-yellow-400 text-black">
          Save Settings
        </Button>
      </CardContent>
    </Card>
  );
};

export default EmailSettingsTab;
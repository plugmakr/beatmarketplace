import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Globe, Layout } from "lucide-react";

const WebsiteSettings = () => {
  return (
    <Card className="bg-black/60 border border-yellow-500/20">
      <CardHeader>
        <CardTitle className="text-yellow-500 flex items-center gap-2">
          <Globe className="w-4 h-4" />
          Website Settings
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-6">
        <div className="space-y-4">
          <div>
            <Label htmlFor="domain" className="text-white">Custom Domain</Label>
            <Input id="domain" placeholder="yourdomain.com" className="bg-black/60 text-white" />
          </div>

          <div>
            <Label htmlFor="template" className="text-white">Website Template</Label>
            <Select>
              <SelectTrigger className="bg-black/60 text-white">
                <SelectValue placeholder="Select a template" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="minimal">Minimal</SelectItem>
                <SelectItem value="modern">Modern</SelectItem>
                <SelectItem value="classic">Classic</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div>
            <Label htmlFor="colors" className="text-white">Color Scheme</Label>
            <Select>
              <SelectTrigger className="bg-black/60 text-white">
                <SelectValue placeholder="Choose colors" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="dark">Dark Theme</SelectItem>
                <SelectItem value="light">Light Theme</SelectItem>
                <SelectItem value="custom">Custom Colors</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>

        <Button className="w-full bg-yellow-500 hover:bg-yellow-400 text-black">
          <Layout className="w-4 h-4 mr-2" />
          Preview Website
        </Button>
      </CardContent>
    </Card>
  );
};

export default WebsiteSettings;
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Globe, Layout, Palette } from "lucide-react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const WebsiteSettings = () => {
  const templates = [
    { id: 'minimal', name: 'Minimal', description: 'Clean and simple design focused on your content' },
    { id: 'modern', name: 'Modern', description: 'Contemporary design with bold elements' },
    { id: 'classic', name: 'Classic', description: 'Traditional layout with proven conversion rate' },
  ];

  return (
    <Card className="bg-black/60 border border-yellow-500/20">
      <CardHeader>
        <CardTitle className="text-yellow-500 flex items-center gap-2">
          <Globe className="w-4 h-4" />
          Website Settings
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-6">
        <Tabs defaultValue="general" className="space-y-4">
          <TabsList className="bg-black/60 border border-yellow-500/20">
            <TabsTrigger value="general">General</TabsTrigger>
            <TabsTrigger value="templates">Templates</TabsTrigger>
            <TabsTrigger value="custom">Custom Settings</TabsTrigger>
          </TabsList>

          <TabsContent value="general">
            <div className="space-y-4">
              <div>
                <Label htmlFor="domain" className="text-white">Custom Domain</Label>
                <Input id="domain" placeholder="yourdomain.com" className="bg-black/60 text-white" />
              </div>

              <div>
                <Label htmlFor="seo-title" className="text-white">SEO Title</Label>
                <Input id="seo-title" placeholder="Your Website Title" className="bg-black/60 text-white" />
              </div>

              <div>
                <Label htmlFor="seo-description" className="text-white">SEO Description</Label>
                <Input id="seo-description" placeholder="Brief description of your website" className="bg-black/60 text-white" />
              </div>
            </div>
          </TabsContent>

          <TabsContent value="templates">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {templates.map((template) => (
                <Card key={template.id} className="bg-black/60 border border-yellow-500/20">
                  <CardHeader>
                    <CardTitle className="text-yellow-500">{template.name}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-white mb-4">{template.description}</p>
                    <Button className="w-full bg-yellow-500 hover:bg-yellow-400 text-black">
                      Select Template
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="custom">
            <div className="space-y-4">
              <div>
                <Label htmlFor="primary-color" className="text-white">Primary Color</Label>
                <div className="flex gap-2">
                  <Input id="primary-color" type="color" className="w-16 h-10 p-1 bg-black/60" />
                  <Input id="primary-color-hex" placeholder="#000000" className="bg-black/60 text-white" />
                </div>
              </div>

              <div>
                <Label htmlFor="font-family" className="text-white">Font Family</Label>
                <Select>
                  <SelectTrigger className="bg-black/60 text-white">
                    <SelectValue placeholder="Choose a font" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="inter">Inter</SelectItem>
                    <SelectItem value="roboto">Roboto</SelectItem>
                    <SelectItem value="opensans">Open Sans</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div>
                <Label htmlFor="layout" className="text-white">Layout Style</Label>
                <Select>
                  <SelectTrigger className="bg-black/60 text-white">
                    <SelectValue placeholder="Choose a layout" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="grid">Grid</SelectItem>
                    <SelectItem value="list">List</SelectItem>
                    <SelectItem value="masonry">Masonry</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div>
                <Label htmlFor="custom-css" className="text-white">Custom CSS</Label>
                <Input id="custom-css" placeholder="Add your custom CSS here" className="bg-black/60 text-white" />
              </div>
            </div>
          </TabsContent>
        </Tabs>

        <Button className="w-full bg-yellow-500 hover:bg-yellow-400 text-black">
          <Layout className="w-4 h-4 mr-2" />
          Preview Website
        </Button>
      </CardContent>
    </Card>
  );
};

export default WebsiteSettings;
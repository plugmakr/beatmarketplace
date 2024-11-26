import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { DollarSign, Music2, Package, BarChart3, FileText, PenLine, Trash, Globe } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import UploadBeatForm from "@/components/seller/UploadBeatForm";
import CreateKitForm from "@/components/seller/CreateKitForm";
import BeatLibrary from "@/components/seller/BeatLibrary";
import KitLibrary from "@/components/seller/KitLibrary";
import WebsiteSettings from "@/components/seller/WebsiteSettings";
import { useToast } from "@/components/ui/use-toast";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const SellerPortal = () => {
  const navigate = useNavigate();
  const { toast } = useToast();

  return (
    <div className="min-h-screen bg-black">
      <div className="p-8">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-3xl font-bold text-yellow-500">Seller Portal</h1>
          <Button 
            variant="ghost" 
            className="text-yellow-500 hover:text-yellow-400"
            onClick={() => navigate('/')}
          >
            Back to Home
          </Button>
        </div>
        
        <Tabs defaultValue="dashboard" className="space-y-6">
          <TabsList className="bg-black/60 border border-yellow-500/20">
            <TabsTrigger value="dashboard" className="text-white data-[state=active]:text-yellow-500">Dashboard</TabsTrigger>
            <TabsTrigger value="beats" className="text-white data-[state=active]:text-yellow-500">Upload Beat</TabsTrigger>
            <TabsTrigger value="kits" className="text-white data-[state=active]:text-yellow-500">Create Kit</TabsTrigger>
            <TabsTrigger value="library" className="text-white data-[state=active]:text-yellow-500">Library</TabsTrigger>
            <TabsTrigger value="licenses" className="text-white data-[state=active]:text-yellow-500">Licenses</TabsTrigger>
            <TabsTrigger value="analytics" className="text-white data-[state=active]:text-yellow-500">Analytics</TabsTrigger>
            <TabsTrigger value="website" className="text-white data-[state=active]:text-yellow-500">Website</TabsTrigger>
          </TabsList>

          <TabsContent value="dashboard">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <Card className="bg-black/60 border border-yellow-500/20">
                <CardHeader>
                  <CardTitle className="text-yellow-500 flex items-center gap-2">
                    <Music2 className="w-4 h-4" />
                    Total Beats
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-2xl font-bold text-white">24</p>
                </CardContent>
              </Card>
              
              <Card className="bg-black/60 border border-yellow-500/20">
                <CardHeader>
                  <CardTitle className="text-yellow-500 flex items-center gap-2">
                    <Package className="w-4 h-4" />
                    Total Kits
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-2xl font-bold text-white">8</p>
                </CardContent>
              </Card>

              <Card className="bg-black/60 border border-yellow-500/20">
                <CardHeader>
                  <CardTitle className="text-yellow-500 flex items-center gap-2">
                    <DollarSign className="w-4 h-4" />
                    Revenue
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-2xl font-bold text-white">$5,678</p>
                </CardContent>
              </Card>

              <Card className="bg-black/60 border border-yellow-500/20">
                <CardHeader>
                  <CardTitle className="text-yellow-500 flex items-center gap-2">
                    <FileText className="w-4 h-4" />
                    Active Licenses
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-2xl font-bold text-white">45</p>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="beats">
            <UploadBeatForm />
          </TabsContent>

          <TabsContent value="kits">
            <CreateKitForm />
          </TabsContent>

          <TabsContent value="library">
            <Accordion type="single" collapsible className="space-y-4">
              <AccordionItem value="beats" className="border border-yellow-500/20 rounded-lg bg-black/60">
                <AccordionTrigger className="px-4 text-yellow-500">Beats Library</AccordionTrigger>
                <AccordionContent className="px-4">
                  <BeatLibrary />
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="kits" className="border border-yellow-500/20 rounded-lg bg-black/60">
                <AccordionTrigger className="px-4 text-yellow-500">Sound Kits Library</AccordionTrigger>
                <AccordionContent className="px-4">
                  <KitLibrary />
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </TabsContent>

          <TabsContent value="licenses">
            <Card className="bg-black/60 border border-yellow-500/20">
              <CardHeader className="flex flex-row items-center justify-between">
                <CardTitle className="text-yellow-500">License Management</CardTitle>
                <Button className="bg-yellow-500 hover:bg-yellow-400 text-black">
                  Create New License
                </Button>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                    {['Basic', 'Premium', 'Exclusive'].map((type) => (
                      <Card key={type} className="bg-black/40 border border-yellow-500/20">
                        <CardHeader>
                          <CardTitle className="text-yellow-500">{type} License</CardTitle>
                        </CardHeader>
                        <CardContent className="space-y-4">
                          <div className="flex justify-end gap-2">
                            <Button 
                              variant="outline" 
                              className="border-yellow-500 text-yellow-500 hover:bg-yellow-500 hover:text-black"
                              onClick={() => {
                                toast({
                                  title: "Edit License",
                                  description: `Editing ${type} license`,
                                });
                              }}
                            >
                              <PenLine className="w-4 h-4" />
                            </Button>
                            <Button 
                              variant="outline" 
                              className="border-red-500 text-red-500 hover:bg-red-500 hover:text-black"
                              onClick={() => {
                                toast({
                                  title: "Delete License",
                                  description: `Deleting ${type} license`,
                                  variant: "destructive",
                                });
                              }}
                            >
                              <Trash className="w-4 h-4" />
                            </Button>
                          </div>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="analytics">
            <Card className="bg-black/60 border border-yellow-500/20">
              <CardHeader>
                <CardTitle className="text-yellow-500">Analytics Overview</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <Card className="bg-black/40 border border-yellow-500/20">
                      <CardHeader>
                        <CardTitle className="text-yellow-500">Monthly Sales</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <div className="h-[200px] flex items-center justify-center text-white">
                          Sales chart will be implemented here
                        </div>
                      </CardContent>
                    </Card>
                    
                    <Card className="bg-black/40 border border-yellow-500/20">
                      <CardHeader>
                        <CardTitle className="text-yellow-500">Popular Items</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <div className="h-[200px] flex items-center justify-center text-white">
                          Popular items chart will be implemented here
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="website">
            <WebsiteSettings />
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default SellerPortal;
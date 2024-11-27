import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import WebsiteSettings from "@/components/seller/WebsiteSettings";
import SalesManager from "@/components/seller/SalesManager";

const SellerPortal = () => {
  const navigate = useNavigate();

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
        
        <Tabs defaultValue="sales" className="space-y-6">
          <TabsList className="bg-black/60 border border-yellow-500/20">
            <TabsTrigger value="sales">Sales Manager</TabsTrigger>
            <TabsTrigger value="website">Website Settings</TabsTrigger>
          </TabsList>

          <TabsContent value="sales">
            <SalesManager />
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
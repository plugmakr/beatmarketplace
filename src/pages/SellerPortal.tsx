import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import WebsiteSettings from "@/components/seller/WebsiteSettings";
import SalesManager from "@/components/seller/SalesManager";
import BeatLibrary from "@/components/seller/BeatLibrary";
import KitLibrary from "@/components/seller/KitLibrary";
import UploadBeatForm from "@/components/seller/UploadBeatForm";
import CreateKitForm from "@/components/seller/CreateKitForm";
import CustomerManager from "@/components/seller/CustomerManager";
import MarketingManager from "@/components/seller/MarketingManager";
import EmailManager from "@/components/seller/EmailManager";
import SupportManager from "@/components/seller/SupportManager";

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
            <TabsTrigger value="beats">Beat Library</TabsTrigger>
            <TabsTrigger value="kits">Kit Library</TabsTrigger>
            <TabsTrigger value="customers">Customers</TabsTrigger>
            <TabsTrigger value="marketing">Marketing</TabsTrigger>
            <TabsTrigger value="email">Email</TabsTrigger>
            <TabsTrigger value="support">Support</TabsTrigger>
            <TabsTrigger value="upload-beat">Upload Beat</TabsTrigger>
            <TabsTrigger value="create-kit">Create Kit</TabsTrigger>
            <TabsTrigger value="website">Website Settings</TabsTrigger>
          </TabsList>

          <TabsContent value="sales">
            <SalesManager />
          </TabsContent>

          <TabsContent value="beats">
            <BeatLibrary />
          </TabsContent>

          <TabsContent value="kits">
            <KitLibrary />
          </TabsContent>

          <TabsContent value="customers">
            <CustomerManager />
          </TabsContent>

          <TabsContent value="marketing">
            <MarketingManager />
          </TabsContent>

          <TabsContent value="email">
            <EmailManager />
          </TabsContent>

          <TabsContent value="support">
            <SupportManager />
          </TabsContent>

          <TabsContent value="upload-beat">
            <UploadBeatForm />
          </TabsContent>

          <TabsContent value="create-kit">
            <CreateKitForm />
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
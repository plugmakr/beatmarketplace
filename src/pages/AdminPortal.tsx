import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import DashboardTab from "@/components/admin/DashboardTab";
import UsersTab from "@/components/admin/UsersTab";
import ContentTab from "@/components/admin/ContentTab";
import ContentManagementTab from "@/components/admin/ContentManagementTab";
import EmailSettingsTab from "@/components/admin/EmailSettingsTab";
import SupportTab from "@/components/admin/SupportTab";
import SubscriptionPlansTab from "@/components/admin/SubscriptionPlansTab";
import BillingManagementTab from "@/components/admin/BillingManagementTab";
import MarketingTab from "@/components/admin/MarketingTab";

const AdminPortal = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-black">
      <div className="p-8">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-3xl font-bold text-yellow-500">Admin Portal</h1>
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
            <TabsTrigger value="dashboard">Dashboard</TabsTrigger>
            <TabsTrigger value="users">Users</TabsTrigger>
            <TabsTrigger value="content">Content</TabsTrigger>
            <TabsTrigger value="content-management">Content Management</TabsTrigger>
            <TabsTrigger value="subscription-plans">Subscription Plans</TabsTrigger>
            <TabsTrigger value="billing">Billing</TabsTrigger>
            <TabsTrigger value="email">Email Settings</TabsTrigger>
            <TabsTrigger value="marketing">Marketing</TabsTrigger>
            <TabsTrigger value="support">Support</TabsTrigger>
          </TabsList>

          <TabsContent value="dashboard">
            <DashboardTab />
          </TabsContent>

          <TabsContent value="users">
            <UsersTab />
          </TabsContent>

          <TabsContent value="content">
            <ContentTab />
          </TabsContent>

          <TabsContent value="content-management">
            <ContentManagementTab />
          </TabsContent>

          <TabsContent value="subscription-plans">
            <SubscriptionPlansTab />
          </TabsContent>

          <TabsContent value="billing">
            <BillingManagementTab />
          </TabsContent>

          <TabsContent value="email">
            <EmailSettingsTab />
          </TabsContent>

          <TabsContent value="marketing">
            <MarketingTab />
          </TabsContent>

          <TabsContent value="support">
            <SupportTab />
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default AdminPortal;
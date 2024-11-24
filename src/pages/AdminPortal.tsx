import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import DashboardTab from "@/components/admin/DashboardTab";
import UsersTab from "@/components/admin/UsersTab";
import ContentTab from "@/components/admin/ContentTab";
import SubscriptionPlansTab from "@/components/admin/SubscriptionPlansTab";

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
            <TabsTrigger value="subscription-plans">Subscription Plans</TabsTrigger>
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

          <TabsContent value="subscription-plans">
            <SubscriptionPlansTab />
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default AdminPortal;
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Users, Package, BarChart3, Settings } from "lucide-react";

const DashboardTab = () => (
  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
    <Card className="bg-black/60 border border-yellow-500/20">
      <CardHeader>
        <CardTitle className="text-yellow-500 flex items-center gap-2">
          <Users className="w-4 h-4" />
          Total Users
        </CardTitle>
      </CardHeader>
      <CardContent>
        <p className="text-2xl font-bold text-white">1,234</p>
      </CardContent>
    </Card>
    
    <Card className="bg-black/60 border border-yellow-500/20">
      <CardHeader>
        <CardTitle className="text-yellow-500 flex items-center gap-2">
          <Package className="w-4 h-4" />
          Active Beats
        </CardTitle>
      </CardHeader>
      <CardContent>
        <p className="text-2xl font-bold text-white">567</p>
      </CardContent>
    </Card>

    <Card className="bg-black/60 border border-yellow-500/20">
      <CardHeader>
        <CardTitle className="text-yellow-500 flex items-center gap-2">
          <BarChart3 className="w-4 h-4" />
          Monthly Revenue
        </CardTitle>
      </CardHeader>
      <CardContent>
        <p className="text-2xl font-bold text-white">$12,345</p>
      </CardContent>
    </Card>

    <Card className="bg-black/60 border border-yellow-500/20">
      <CardHeader>
        <CardTitle className="text-yellow-500 flex items-center gap-2">
          <Settings className="w-4 h-4" />
          Active Plans
        </CardTitle>
      </CardHeader>
      <CardContent>
        <p className="text-2xl font-bold text-white">3</p>
      </CardContent>
    </Card>
  </div>
);

export default DashboardTab;
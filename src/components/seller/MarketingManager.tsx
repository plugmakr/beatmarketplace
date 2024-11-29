import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";

const MarketingManager = () => {
  const campaigns = [
    { id: 1, name: "Summer Sale", status: "Active", reach: "1.2k", engagement: "15%", conversions: "45" },
    { id: 2, name: "New Beat Drop", status: "Scheduled", reach: "800", engagement: "12%", conversions: "32" },
    { id: 3, name: "Holiday Bundle", status: "Draft", reach: "-", engagement: "-", conversions: "-" },
  ];

  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Card className="bg-black/60 border border-yellow-500/20">
          <CardHeader>
            <CardTitle className="text-yellow-500">Campaign Performance</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="flex justify-between items-center">
                <span className="text-white">Total Reach</span>
                <span className="text-white">5.6k</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-white">Average Engagement</span>
                <span className="text-white">13.5%</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-white">Total Conversions</span>
                <span className="text-white">128</span>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="bg-black/60 border border-yellow-500/20">
          <CardHeader>
            <CardTitle className="text-yellow-500">Quick Actions</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <Button className="w-full bg-yellow-500 hover:bg-yellow-600">Create New Campaign</Button>
            <Button className="w-full bg-yellow-500 hover:bg-yellow-600">Schedule Post</Button>
            <Button className="w-full bg-yellow-500 hover:bg-yellow-600">View Analytics</Button>
          </CardContent>
        </Card>
      </div>

      <Card className="bg-black/60 border border-yellow-500/20">
        <CardHeader>
          <CardTitle className="text-yellow-500">Active Campaigns</CardTitle>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead className="text-yellow-500">Campaign Name</TableHead>
                <TableHead className="text-yellow-500">Status</TableHead>
                <TableHead className="text-yellow-500">Reach</TableHead>
                <TableHead className="text-yellow-500">Engagement</TableHead>
                <TableHead className="text-yellow-500">Conversions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {campaigns.map((campaign) => (
                <TableRow key={campaign.id}>
                  <TableCell className="text-white">{campaign.name}</TableCell>
                  <TableCell className="text-white">{campaign.status}</TableCell>
                  <TableCell className="text-white">{campaign.reach}</TableCell>
                  <TableCell className="text-white">{campaign.engagement}</TableCell>
                  <TableCell className="text-white">{campaign.conversions}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </div>
  );
};

export default MarketingManager;
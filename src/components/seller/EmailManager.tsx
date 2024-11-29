import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";

const EmailManager = () => {
  const campaigns = [
    { id: 1, name: "Welcome Series", status: "Active", opens: "68%", clicks: "25%", subscribers: "450" },
    { id: 2, name: "Beat Release", status: "Draft", opens: "-", clicks: "-", subscribers: "1.2k" },
    { id: 3, name: "Monthly Newsletter", status: "Scheduled", opens: "-", clicks: "-", subscribers: "890" },
  ];

  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <Card>
          <CardHeader>
            <CardTitle className="text-yellow-500">Total Subscribers</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-2xl text-white">2,547</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle className="text-yellow-500">Average Open Rate</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-2xl text-white">45.8%</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle className="text-yellow-500">Click Rate</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-2xl text-white">12.3%</p>
          </CardContent>
        </Card>
      </div>

      <Card>
        <CardHeader className="flex flex-row justify-between items-center">
          <CardTitle className="text-yellow-500">Email Campaigns</CardTitle>
          <Button className="bg-yellow-500 hover:bg-yellow-600">Create Campaign</Button>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead className="text-yellow-500">Campaign Name</TableHead>
                <TableHead className="text-yellow-500">Status</TableHead>
                <TableHead className="text-yellow-500">Open Rate</TableHead>
                <TableHead className="text-yellow-500">Click Rate</TableHead>
                <TableHead className="text-yellow-500">Subscribers</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {campaigns.map((campaign) => (
                <TableRow key={campaign.id}>
                  <TableCell className="text-white">{campaign.name}</TableCell>
                  <TableCell className="text-white">{campaign.status}</TableCell>
                  <TableCell className="text-white">{campaign.opens}</TableCell>
                  <TableCell className="text-white">{campaign.clicks}</TableCell>
                  <TableCell className="text-white">{campaign.subscribers}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </div>
  );
};

export default EmailManager;
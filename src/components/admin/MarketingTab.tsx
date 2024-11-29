import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useState } from "react";

const MarketingTab = () => {
  const [campaigns, setCampaigns] = useState([
    { id: 1, name: "Summer Sale", type: "email", status: "active", budget: 1000, spent: 450 },
    { id: 2, name: "New Product Launch", type: "social", status: "planned", budget: 2000, spent: 0 },
    { id: 3, name: "Holiday Special", type: "display", status: "completed", budget: 1500, spent: 1500 },
  ]);

  return (
    <div className="space-y-6">
      <Tabs defaultValue="campaigns" className="space-y-4">
        <TabsList className="bg-black/60 border border-yellow-500/20">
          <TabsTrigger value="campaigns">Campaigns</TabsTrigger>
          <TabsTrigger value="advertising">Advertising</TabsTrigger>
          <TabsTrigger value="analytics">Analytics</TabsTrigger>
        </TabsList>

        <TabsContent value="campaigns">
          <Card className="bg-black/60 border border-yellow-500/20">
            <CardHeader>
              <CardTitle className="text-yellow-500">Create Campaign</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <Label htmlFor="campaign-name" className="text-white">Campaign Name</Label>
                <Input id="campaign-name" className="bg-black/60 text-white" />
              </div>
              <div>
                <Label htmlFor="campaign-type" className="text-white">Campaign Type</Label>
                <Select>
                  <SelectTrigger className="bg-black/60 text-white">
                    <SelectValue placeholder="Select type" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="email">Email Campaign</SelectItem>
                    <SelectItem value="social">Social Media</SelectItem>
                    <SelectItem value="display">Display Ads</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div>
                <Label htmlFor="campaign-budget" className="text-white">Budget</Label>
                <Input id="campaign-budget" type="number" className="bg-black/60 text-white" />
              </div>
              <Button className="w-full bg-yellow-500 hover:bg-yellow-400 text-black">
                Create Campaign
              </Button>
            </CardContent>
          </Card>

          <div className="mt-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {campaigns.map((campaign) => (
              <Card key={campaign.id} className="bg-black/60 border border-yellow-500/20">
                <CardHeader>
                  <CardTitle className="text-yellow-500">{campaign.name}</CardTitle>
                </CardHeader>
                <CardContent className="space-y-2">
                  <p className="text-white">Type: {campaign.type}</p>
                  <p className="text-white">Status: {campaign.status}</p>
                  <p className="text-white">Budget: ${campaign.budget}</p>
                  <p className="text-white">Spent: ${campaign.spent}</p>
                  <Button className="w-full bg-yellow-500 hover:bg-yellow-400 text-black">
                    Manage Campaign
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>

        <TabsContent value="advertising">
          <Card className="bg-black/60 border border-yellow-500/20">
            <CardHeader>
              <CardTitle className="text-yellow-500">Advertising Platforms</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <Card className="bg-black/60 border border-yellow-500/20">
                  <CardHeader>
                    <CardTitle className="text-yellow-500">Google Ads</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <Button className="w-full bg-yellow-500 hover:bg-yellow-400 text-black">
                      Connect Account
                    </Button>
                  </CardContent>
                </Card>
                <Card className="bg-black/60 border border-yellow-500/20">
                  <CardHeader>
                    <CardTitle className="text-yellow-500">Meta Ads</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <Button className="w-full bg-yellow-500 hover:bg-yellow-400 text-black">
                      Connect Account
                    </Button>
                  </CardContent>
                </Card>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="analytics">
          <Card className="bg-black/60 border border-yellow-500/20">
            <CardHeader>
              <CardTitle className="text-yellow-500">Campaign Performance</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <Card className="bg-black/60 border border-yellow-500/20">
                  <CardHeader>
                    <CardTitle className="text-yellow-500">Total Reach</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-2xl text-white">125,430</p>
                  </CardContent>
                </Card>
                <Card className="bg-black/60 border border-yellow-500/20">
                  <CardHeader>
                    <CardTitle className="text-yellow-500">Conversions</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-2xl text-white">1,234</p>
                  </CardContent>
                </Card>
                <Card className="bg-black/60 border border-yellow-500/20">
                  <CardHeader>
                    <CardTitle className="text-yellow-500">ROI</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-2xl text-white">245%</p>
                  </CardContent>
                </Card>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default MarketingTab;
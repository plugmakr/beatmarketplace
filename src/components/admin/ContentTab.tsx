import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Edit3 } from "lucide-react";

const ContentTab = () => (
  <Card className="bg-black/60 border border-yellow-500/20">
    <CardHeader>
      <CardTitle className="text-yellow-500">Landing Page Content</CardTitle>
    </CardHeader>
    <CardContent className="space-y-6 text-white">
      {/* Hero Section */}
      <div className="space-y-4">
        <h3 className="text-xl font-semibold">Hero Section</h3>
        <div className="space-y-4">
          <div>
            <Label htmlFor="hero-title" className="text-white">Title</Label>
            <Input 
              id="hero-title" 
              defaultValue="Turn Your Beats Into Success" 
              className="bg-black/60 text-white"
            />
          </div>
          <div>
            <Label htmlFor="hero-description" className="text-white">Description</Label>
            <Textarea 
              id="hero-description" 
              defaultValue="Join thousands of producers selling their beats to artists worldwide. Start your journey today." 
              className="bg-black/60 text-white"
            />
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="space-y-4">
        <h3 className="text-xl font-semibold">Features Section</h3>
        <div className="space-y-4">
          <div>
            <Label htmlFor="features-title" className="text-white">Title</Label>
            <Input 
              id="features-title" 
              defaultValue="Everything You Need to Succeed" 
              className="bg-black/60 text-white"
            />
          </div>
          {/* Feature Items */}
          {['Sell Your Beats', 'License Your Music', 'Easy Upload', 'Secure Payments'].map((feature, index) => (
            <div key={index}>
              <Label htmlFor={`feature-${index}`} className="text-white">Feature {index + 1}</Label>
              <Input 
                id={`feature-${index}`} 
                defaultValue={feature}
                className="bg-black/60 text-white"
              />
            </div>
          ))}
        </div>
      </div>

      {/* Beats Section */}
      <div className="space-y-4">
        <h3 className="text-xl font-semibold">Featured Beats Section</h3>
        <div>
          <Label htmlFor="beats-title" className="text-white">Title</Label>
          <Input 
            id="beats-title" 
            defaultValue="Featured Beats" 
            className="bg-black/60 text-white"
          />
        </div>
      </div>

      {/* Kits Section */}
      <div className="space-y-4">
        <h3 className="text-xl font-semibold">Featured Kits Section</h3>
        <div>
          <Label htmlFor="kits-title" className="text-white">Title</Label>
          <Input 
            id="kits-title" 
            defaultValue="Featured Kits" 
            className="bg-black/60 text-white"
          />
        </div>
      </div>

      {/* Artists Section */}
      <div className="space-y-4">
        <h3 className="text-xl font-semibold">Featured Artists Section</h3>
        <div>
          <Label htmlFor="artists-title" className="text-white">Title</Label>
          <Input 
            id="artists-title" 
            defaultValue="Featured Artists" 
            className="bg-black/60 text-white"
          />
        </div>
      </div>

      {/* Pricing Section */}
      <div className="space-y-4">
        <h3 className="text-xl font-semibold">Pricing Section</h3>
        <div>
          <Label htmlFor="pricing-title" className="text-white">Title</Label>
          <Input 
            id="pricing-title" 
            defaultValue="Simple Pricing" 
            className="bg-black/60 text-white"
          />
        </div>
      </div>

      {/* CTA Section */}
      <div className="space-y-4">
        <h3 className="text-xl font-semibold">CTA Section</h3>
        <div className="space-y-4">
          <div>
            <Label htmlFor="cta-title" className="text-white">Title</Label>
            <Input 
              id="cta-title" 
              defaultValue="Ready to Start Selling?" 
              className="bg-black/60 text-white"
            />
          </div>
          <div>
            <Label htmlFor="cta-description" className="text-white">Description</Label>
            <Textarea 
              id="cta-description" 
              defaultValue="Join our community of producers and start selling your beats today. No hidden fees, just pure music business." 
              className="bg-black/60 text-white"
            />
          </div>
        </div>
      </div>

      <Button className="bg-yellow-500 hover:bg-yellow-400 text-black">
        <Edit3 className="w-4 h-4 mr-2" />
        Save Changes
      </Button>
    </CardContent>
  </Card>
);

export default ContentTab;
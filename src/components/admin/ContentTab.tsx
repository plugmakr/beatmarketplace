import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Edit3 } from "lucide-react";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { featuredBeats } from "@/data/featuredBeats";
import { soundKits } from "@/data/soundKits";
import { featuredArtists } from "@/data/featuredArtists";

const ContentTab = () => (
  <Card className="bg-black/60 border border-yellow-500/20">
    <CardHeader>
      <CardTitle className="text-yellow-500">Landing Page Content</CardTitle>
    </CardHeader>
    <CardContent className="space-y-6">
      <Accordion type="single" collapsible className="space-y-4">
        {/* Hero Section */}
        <AccordionItem value="hero" className="border border-yellow-500/20 rounded-lg">
          <AccordionTrigger className="text-yellow-500 text-xl px-4">Hero Section</AccordionTrigger>
          <AccordionContent className="space-y-4 p-4">
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
          </AccordionContent>
        </AccordionItem>

        {/* Features Section */}
        <AccordionItem value="features" className="border border-yellow-500/20 rounded-lg">
          <AccordionTrigger className="text-yellow-500 text-xl px-4">Features Section</AccordionTrigger>
          <AccordionContent className="space-y-4 p-4">
            <div>
              <Label htmlFor="features-title" className="text-white">Title</Label>
              <Input 
                id="features-title" 
                defaultValue="Everything You Need to Succeed" 
                className="bg-black/60 text-white"
              />
            </div>
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
          </AccordionContent>
        </AccordionItem>

        {/* Featured Beats Section */}
        <AccordionItem value="beats" className="border border-yellow-500/20 rounded-lg">
          <AccordionTrigger className="text-yellow-500 text-xl px-4">Featured Beats Section</AccordionTrigger>
          <AccordionContent className="p-4">
            <div className="space-y-4">
              <div>
                <Label htmlFor="beats-title" className="text-white">Title</Label>
                <Input 
                  id="beats-title" 
                  defaultValue="Featured Beats" 
                  className="bg-black/60 text-white"
                />
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-4">
                {featuredBeats.map((beat) => (
                  <div key={beat.id} className="bg-black/40 p-4 rounded-lg border border-yellow-500/20">
                    <img 
                      src={beat.image} 
                      alt={beat.title} 
                      className="w-full h-32 object-cover rounded-lg mb-2"
                    />
                    <Input 
                      defaultValue={beat.title}
                      className="bg-black/60 text-white mb-2"
                    />
                    <Input 
                      defaultValue={beat.producer}
                      className="bg-black/60 text-white mb-2"
                    />
                    <Input 
                      defaultValue={beat.price.toString()}
                      className="bg-black/60 text-white"
                      type="number"
                      step="0.01"
                    />
                  </div>
                ))}
              </div>
            </div>
          </AccordionContent>
        </AccordionItem>

        {/* Featured Kits Section */}
        <AccordionItem value="kits" className="border border-yellow-500/20 rounded-lg">
          <AccordionTrigger className="text-yellow-500 text-xl px-4">Featured Kits Section</AccordionTrigger>
          <AccordionContent className="p-4">
            <div className="space-y-4">
              <div>
                <Label htmlFor="kits-title" className="text-white">Title</Label>
                <Input 
                  id="kits-title" 
                  defaultValue="Featured Kits" 
                  className="bg-black/60 text-white"
                />
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-4">
                {soundKits.map((kit) => (
                  <div key={kit.id} className="bg-black/40 p-4 rounded-lg border border-yellow-500/20">
                    <img 
                      src={kit.image} 
                      alt={kit.title} 
                      className="w-full h-32 object-cover rounded-lg mb-2"
                    />
                    <Input 
                      defaultValue={kit.title}
                      className="bg-black/60 text-white mb-2"
                    />
                    <Input 
                      defaultValue={kit.producer}
                      className="bg-black/60 text-white mb-2"
                    />
                    <Input 
                      defaultValue={kit.price.toString()}
                      className="bg-black/60 text-white"
                      type="number"
                      step="0.01"
                    />
                  </div>
                ))}
              </div>
            </div>
          </AccordionContent>
        </AccordionItem>

        {/* Featured Artists Section */}
        <AccordionItem value="artists" className="border border-yellow-500/20 rounded-lg">
          <AccordionTrigger className="text-yellow-500 text-xl px-4">Featured Artists Section</AccordionTrigger>
          <AccordionContent className="p-4">
            <div className="space-y-4">
              <div>
                <Label htmlFor="artists-title" className="text-white">Title</Label>
                <Input 
                  id="artists-title" 
                  defaultValue="Featured Artists" 
                  className="bg-black/60 text-white"
                />
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-4">
                {featuredArtists.map((artist) => (
                  <div key={artist.id} className="bg-black/40 p-4 rounded-lg border border-yellow-500/20">
                    <img 
                      src={artist.image} 
                      alt={artist.name} 
                      className="w-full h-32 object-cover rounded-lg mb-2"
                    />
                    <Input 
                      defaultValue={artist.name}
                      className="bg-black/60 text-white mb-2"
                    />
                    <Input 
                      defaultValue={artist.genre}
                      className="bg-black/60 text-white mb-2"
                    />
                    <Input 
                      defaultValue={artist.sales}
                      className="bg-black/60 text-white"
                    />
                  </div>
                ))}
              </div>
            </div>
          </AccordionContent>
        </AccordionItem>

        {/* Pricing Section */}
        <AccordionItem value="pricing" className="border border-yellow-500/20 rounded-lg">
          <AccordionTrigger className="text-yellow-500 text-xl px-4">Pricing Section</AccordionTrigger>
          <AccordionContent className="space-y-4 p-4">
            <div>
              <Label htmlFor="pricing-title" className="text-white">Title</Label>
              <Input 
                id="pricing-title" 
                defaultValue="Simple Pricing" 
                className="bg-black/60 text-white"
              />
            </div>
          </AccordionContent>
        </AccordionItem>

        {/* CTA Section */}
        <AccordionItem value="cta" className="border border-yellow-500/20 rounded-lg">
          <AccordionTrigger className="text-yellow-500 text-xl px-4">CTA Section</AccordionTrigger>
          <AccordionContent className="space-y-4 p-4">
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
          </AccordionContent>
        </AccordionItem>
      </Accordion>

      <Button className="bg-yellow-500 hover:bg-yellow-400 text-black">
        <Edit3 className="w-4 h-4 mr-2" />
        Save Changes
      </Button>
    </CardContent>
  </Card>
);

export default ContentTab;
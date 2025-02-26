
import TopNavigation from "@/components/landing/TopNavigation";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const HowItWorks = () => {
  return (
    <div className="min-h-screen bg-black">
      <TopNavigation />
      <div className="container mx-auto px-4 py-20">
        <h1 className="text-4xl font-bold text-center mb-12">
          <span className="text-white">How It</span>
          <span className="bg-gradient-to-r from-yellow-500 to-yellow-200 bg-clip-text text-transparent"> Works</span>
        </h1>

        <Tabs defaultValue="artists" className="w-full">
          <TabsList className="grid w-full grid-cols-3 mb-8">
            <TabsTrigger value="artists">For Artists</TabsTrigger>
            <TabsTrigger value="producers">For Producers</TabsTrigger>
            <TabsTrigger value="licensing">Licensing Info</TabsTrigger>
          </TabsList>

          <TabsContent value="artists" className="space-y-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <Card className="bg-black/60 border border-yellow-500/20">
                <CardHeader>
                  <CardTitle className="text-xl text-yellow-500">Discover Beats</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-300">Browse through our extensive library of beats from top producers. Use advanced filters to find the perfect sound for your project.</p>
                </CardContent>
              </Card>
              <Card className="bg-black/60 border border-yellow-500/20">
                <CardHeader>
                  <CardTitle className="text-xl text-yellow-500">Preview & Purchase</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-300">Listen to high-quality previews, compare different beats, and purchase the ones that match your style. Download instantly after purchase.</p>
                </CardContent>
              </Card>
              <Card className="bg-black/60 border border-yellow-500/20">
                <CardHeader>
                  <CardTitle className="text-xl text-yellow-500">Track Management</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-300">Access your purchased beats, manage licenses, and download different formats (MP3, WAV, Track Stems) from your dashboard.</p>
                </CardContent>
              </Card>
              <Card className="bg-black/60 border border-yellow-500/20">
                <CardHeader>
                  <CardTitle className="text-xl text-yellow-500">Collaboration Tools</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-300">Connect with producers, request custom beats, and manage your collaborations all in one place.</p>
                </CardContent>
              </Card>
              <Card className="bg-black/60 border border-yellow-500/20">
                <CardHeader>
                  <CardTitle className="text-xl text-yellow-500">Release Support</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-300">Get guidance on release strategies, marketing tips, and distribution options for your music.</p>
                </CardContent>
              </Card>
              <Card className="bg-black/60 border border-yellow-500/20">
                <CardHeader>
                  <CardTitle className="text-xl text-yellow-500">Rights Management</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-300">Keep track of your licenses, usage rights, and get automated split sheets for your releases.</p>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="producers" className="space-y-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <Card className="bg-black/60 border border-yellow-500/20">
                <CardHeader>
                  <CardTitle className="text-xl text-yellow-500">Beat Upload Studio</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-300">Upload your beats with our streamlined process. Add tags, descriptions, and set your pricing strategy.</p>
                </CardContent>
              </Card>
              <Card className="bg-black/60 border border-yellow-500/20">
                <CardHeader>
                  <CardTitle className="text-xl text-yellow-500">Analytics Dashboard</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-300">Track your sales, monitor performance metrics, and understand your audience with detailed analytics.</p>
                </CardContent>
              </Card>
              <Card className="bg-black/60 border border-yellow-500/20">
                <CardHeader>
                  <CardTitle className="text-xl text-yellow-500">Automated Licensing</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-300">Set up custom licensing terms, automate contract generation, and manage your intellectual property.</p>
                </CardContent>
              </Card>
              <Card className="bg-black/60 border border-yellow-500/20">
                <CardHeader>
                  <CardTitle className="text-xl text-yellow-500">Portfolio Website</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-300">Get your own customizable portfolio website with beat players, biography section, and contact forms.</p>
                </CardContent>
              </Card>
              <Card className="bg-black/60 border border-yellow-500/20">
                <CardHeader>
                  <CardTitle className="text-xl text-yellow-500">Marketing Tools</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-300">Access promotional tools, social media integration, and email marketing features to grow your audience.</p>
                </CardContent>
              </Card>
              <Card className="bg-black/60 border border-yellow-500/20">
                <CardHeader>
                  <CardTitle className="text-xl text-yellow-500">Collaboration Hub</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-300">Manage artist requests, handle revisions, and coordinate projects through our collaboration platform.</p>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="licensing" className="space-y-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <Card className="bg-black/60 border border-yellow-500/20">
                <CardHeader>
                  <CardTitle className="text-xl text-yellow-500">Basic License</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="text-gray-300 space-y-2">
                    <li>• Up to 5,000 streams</li>
                    <li>• MP3 file only</li>
                    <li>• Non-exclusive rights</li>
                    <li>• YouTube monetization</li>
                    <li>• Credit required</li>
                  </ul>
                </CardContent>
              </Card>
              <Card className="bg-black/60 border border-yellow-500/20">
                <CardHeader>
                  <CardTitle className="text-xl text-yellow-500">Premium License</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="text-gray-300 space-y-2">
                    <li>• Up to 50,000 streams</li>
                    <li>• WAV + Track stems</li>
                    <li>• Performance rights</li>
                    <li>• Broadcasting rights</li>
                    <li>• Credit required</li>
                  </ul>
                </CardContent>
              </Card>
              <Card className="bg-black/60 border border-yellow-500/20">
                <CardHeader>
                  <CardTitle className="text-xl text-yellow-500">Exclusive Rights</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="text-gray-300 space-y-2">
                    <li>• Unlimited streams</li>
                    <li>• Full ownership transfer</li>
                    <li>• All format files</li>
                    <li>• All rights included</li>
                    <li>• Credit optional</li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </TabsContent>
        </Tabs>

        {/* Demo Portfolio CTA */}
        <div className="text-center bg-black/60 border border-yellow-500/20 rounded-lg p-8 mt-16">
          <h2 className="text-3xl font-bold mb-4 text-yellow-500">Build Your Portfolio</h2>
          <p className="text-gray-300 mb-6">Create your professional portfolio website in minutes. Showcase your work, connect with clients, and grow your brand.</p>
          <Button className="bg-yellow-500 hover:bg-yellow-400 text-black">Try Demo Portfolio</Button>
        </div>
      </div>
    </div>
  );
};

export default HowItWorks;

import TopNavigation from "@/components/landing/TopNavigation";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const HowItWorks = () => {
  return (
    <div className="min-h-screen bg-black">
      <TopNavigation />
      <div className="container mx-auto px-4 py-20">
        <h1 className="text-4xl font-bold text-center mb-12">
          How It
          <span className="bg-gradient-to-r from-yellow-500 to-yellow-200 bg-clip-text text-transparent">
            {" "}Works
          </span>
        </h1>

        {/* For Buyers Section */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold mb-8 text-yellow-500">For Buyers</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="bg-black/60 border border-yellow-500/20">
              <CardHeader>
                <CardTitle className="text-xl text-yellow-500">Browse & Preview</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-300">Explore our vast collection of beats and sound kits. Preview tracks with high-quality audio before purchase.</p>
              </CardContent>
            </Card>
            <Card className="bg-black/60 border border-yellow-500/20">
              <CardHeader>
                <CardTitle className="text-xl text-yellow-500">Choose License</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-300">Select from various licensing options: Basic, Premium, or Exclusive rights. Each with clear terms and usage rights.</p>
              </CardContent>
            </Card>
            <Card className="bg-black/60 border border-yellow-500/20">
              <CardHeader>
                <CardTitle className="text-xl text-yellow-500">Instant Download</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-300">Get immediate access to your purchased beats or kits. Download high-quality WAV files and track stems.</p>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* For Sellers Section */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold mb-8 text-yellow-500">For Sellers</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="bg-black/60 border border-yellow-500/20">
              <CardHeader>
                <CardTitle className="text-xl text-yellow-500">Upload & Sell</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-300">Upload your beats and sound kits. Set your prices and licensing terms. Start earning from your music.</p>
              </CardContent>
            </Card>
            <Card className="bg-black/60 border border-yellow-500/20">
              <CardHeader>
                <CardTitle className="text-xl text-yellow-500">Portfolio Website</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-300">Get your own customizable portfolio website. Showcase your work, share your story, and build your brand.</p>
              </CardContent>
            </Card>
            <Card className="bg-black/60 border border-yellow-500/20">
              <CardHeader>
                <CardTitle className="text-xl text-yellow-500">Analytics & Growth</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-300">Track your sales, monitor performance, and grow your audience with detailed analytics.</p>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Licensing Information */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold mb-8 text-yellow-500">Licensing Information</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="bg-black/60 border border-yellow-500/20">
              <CardHeader>
                <CardTitle className="text-xl text-yellow-500">Basic License</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-300">Perfect for mixtapes and small projects. Limited to 5,000 streams/sales. MP3 files only.</p>
              </CardContent>
            </Card>
            <Card className="bg-black/60 border border-yellow-500/20">
              <CardHeader>
                <CardTitle className="text-xl text-yellow-500">Premium License</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-300">Ideal for professional releases. Up to 50,000 streams/sales. Includes WAV files and track stems.</p>
              </CardContent>
            </Card>
            <Card className="bg-black/60 border border-yellow-500/20">
              <CardHeader>
                <CardTitle className="text-xl text-yellow-500">Exclusive Rights</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-300">Full ownership transfer. Unlimited streams/sales. Includes all files and full rights transfer.</p>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Demo Portfolio CTA */}
        <div className="text-center bg-black/60 border border-yellow-500/20 rounded-lg p-8 mb-16">
          <h2 className="text-3xl font-bold mb-4 text-yellow-500">Build Your Portfolio</h2>
          <p className="text-gray-300 mb-6">Create your professional portfolio website in minutes. Showcase your work, connect with clients, and grow your brand.</p>
          <Button className="bg-yellow-500 hover:bg-yellow-400 text-black">Try Demo Portfolio</Button>
        </div>
      </div>
    </div>
  );
};

export default HowItWorks;
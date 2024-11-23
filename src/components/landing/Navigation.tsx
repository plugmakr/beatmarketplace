import { Button } from "@/components/ui/button";

const Navigation = () => (
  <nav className="border-b border-yellow-500/20">
    <div className="container mx-auto px-4 py-4 flex justify-between items-center">
      <h1 className="text-2xl font-bold bg-gradient-to-r from-yellow-500 to-yellow-200 bg-clip-text text-transparent">
        BeatMarketplace
      </h1>
      <div className="flex gap-4">
        <Button variant="ghost" className="text-yellow-500 hover:text-yellow-400">
          Browse Beats
        </Button>
        <Button variant="ghost" className="text-yellow-500 hover:text-yellow-400">
          Sell Beats
        </Button>
        <Button className="bg-yellow-500 hover:bg-yellow-400 text-black">
          Sign Up
        </Button>
      </div>
    </div>
  </nav>
);

export default Navigation;
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const Navigation = () => (
  <nav className="border-b border-yellow-500/20">
    <div className="container mx-auto px-4 py-4 flex justify-between items-center">
      <Link to="/">
        <h1 className="text-2xl font-bold bg-gradient-to-r from-yellow-500 to-yellow-200 bg-clip-text text-transparent">
          BeatMarketplace
        </h1>
      </Link>
      <div className="flex gap-4">
        <Link to="/browse-beats">
          <Button variant="ghost" className="text-yellow-500 hover:text-yellow-400">
            Browse Beats
          </Button>
        </Link>
        <Link to="/browse-kits">
          <Button variant="ghost" className="text-yellow-500 hover:text-yellow-400">
            Browse Kits
          </Button>
        </Link>
        <Link to="/how-it-works">
          <Button variant="ghost" className="text-yellow-500 hover:text-yellow-400">
            How it Works
          </Button>
        </Link>
        <Link to="#pricing">
          <Button variant="ghost" className="text-yellow-500 hover:text-yellow-400">
            Pricing
          </Button>
        </Link>
        <Button className="bg-yellow-500 hover:bg-yellow-400 text-black">
          Sign Up
        </Button>
      </div>
    </div>
  </nav>
);

export default Navigation;
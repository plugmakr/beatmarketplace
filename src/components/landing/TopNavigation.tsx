import { Button } from "@/components/ui/button";
import { Link, useNavigate } from "react-router-dom";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const TopNavigation = () => {
  const navigate = useNavigate();

  return (
    <nav className="fixed top-0 left-0 right-0 bg-black border-b border-yellow-500/20 z-50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <Link to="/" className="flex items-center">
            <h1 className="text-2xl font-bold bg-gradient-to-r from-yellow-500 to-yellow-200 bg-clip-text text-transparent">
              BeatMarketplace
            </h1>
          </Link>
          
          <div className="hidden md:flex items-center space-x-4">
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
            
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button className="bg-yellow-500 hover:bg-yellow-400 text-black">
                  Portals
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent className="bg-black/95 border border-yellow-500/20">
                <DropdownMenuItem 
                  className="text-yellow-500 hover:text-yellow-400 cursor-pointer"
                  onClick={() => navigate('/admin')}
                >
                  Admin Portal
                </DropdownMenuItem>
                <DropdownMenuItem 
                  className="text-yellow-500 hover:text-yellow-400 cursor-pointer"
                  onClick={() => navigate('/artist-portal')}
                >
                  Artist Portal
                </DropdownMenuItem>
                <DropdownMenuItem 
                  className="text-yellow-500 hover:text-yellow-400 cursor-pointer"
                  onClick={() => navigate('/seller-portal')}
                >
                  Seller Portal
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default TopNavigation;
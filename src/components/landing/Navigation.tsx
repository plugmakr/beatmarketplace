import { Button } from "@/components/ui/button";
import { Link, useNavigate } from "react-router-dom";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
  DropdownMenuProvider,
} from "@/components/ui/dropdown-menu";

const Navigation = () => {
  const navigate = useNavigate();

  return (
    <DropdownMenuProvider>
      <nav className="border-b border-yellow-500/20">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <Link to="/">
            <h1 className="text-2xl font-bold bg-gradient-to-r from-yellow-500 to-yellow-200 bg-clip-text text-transparent">
              BeatMarketplace
            </h1>
          </Link>
          <div className="flex gap-4 items-center">
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
      </nav>
    </DropdownMenuProvider>
  );
};

export default Navigation;
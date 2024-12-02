import { Button } from "@/components/ui/button";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "@/contexts/AuthContext";
import { useToast } from "@/components/ui/use-toast";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const Navigation = () => {
  const navigate = useNavigate();
  const { session, signOut } = useAuth();
  const { toast } = useToast();

  const handleSignOut = async () => {
    try {
      await signOut();
      toast({
        title: "Signed out successfully",
        description: "You have been logged out of your account.",
      });
      navigate('/');
    } catch (error) {
      toast({
        title: "Error signing out",
        description: "There was a problem signing you out.",
        variant: "destructive",
      });
    }
  };

  return (
    <nav className="fixed left-0 top-0 h-full w-64 bg-black border-r border-yellow-500/20">
      <div className="flex flex-col h-full p-4">
        <Link to="/" className="mb-8">
          <h1 className="text-2xl font-bold bg-gradient-to-r from-yellow-500 to-yellow-200 bg-clip-text text-transparent">
            BeatMarketplace
          </h1>
        </Link>
        
        <div className="flex flex-col gap-2">
          <Link to="/browse-beats">
            <Button variant="ghost" className="w-full justify-start text-yellow-500 hover:text-yellow-400">
              Browse Beats
            </Button>
          </Link>
          <Link to="/browse-kits">
            <Button variant="ghost" className="w-full justify-start text-yellow-500 hover:text-yellow-400">
              Browse Kits
            </Button>
          </Link>
          <Link to="/how-it-works">
            <Button variant="ghost" className="w-full justify-start text-yellow-500 hover:text-yellow-400">
              How it Works
            </Button>
          </Link>
          <Link to="#pricing">
            <Button variant="ghost" className="w-full justify-start text-yellow-500 hover:text-yellow-400">
              Pricing
            </Button>
          </Link>
          
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button className="w-full justify-start bg-yellow-500 hover:bg-yellow-400 text-black">
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

          {session ? (
            <Button 
              variant="ghost" 
              className="w-full justify-start text-red-500 hover:text-red-400 mt-auto"
              onClick={handleSignOut}
            >
              Sign Out
            </Button>
          ) : (
            <Link to="/auth/login">
              <Button variant="ghost" className="w-full justify-start text-yellow-500 hover:text-yellow-400">
                Sign In
              </Button>
            </Link>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
import { Button } from "@/components/ui/button";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "@/contexts/AuthContext";
import { useToast } from "@/components/ui/use-toast";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
  DropdownMenuSeparator,
} from "@/components/ui/dropdown-menu";
import { User } from "lucide-react";

const TopNavigation = () => {
  const navigate = useNavigate();
  const { session, signOut, profile } = useAuth();
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

  const getPortalLink = () => {
    if (!profile?.role) return null;
    
    const portalRoutes = {
      admin: '/admin',
      seller: '/seller-portal',
      artist: '/artist-portal'
    };

    return portalRoutes[profile.role as keyof typeof portalRoutes] || null;
  };

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
            <Link to="/pricing">
              <Button variant="ghost" className="text-yellow-500 hover:text-yellow-400">
                Pricing
              </Button>
            </Link>
            
            {session ? (
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="ghost" className="text-yellow-500 hover:text-yellow-400">
                    <User className="mr-2 h-4 w-4" />
                    Profile
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent className="w-56 bg-black border-yellow-500/20">
                  {profile?.role && (
                    <>
                      <DropdownMenuItem onClick={() => navigate(getPortalLink()!)}>
                        {profile.role.charAt(0).toUpperCase() + profile.role.slice(1)} Dashboard
                      </DropdownMenuItem>
                      <DropdownMenuSeparator />
                    </>
                  )}
                  <DropdownMenuItem className="text-red-500" onClick={handleSignOut}>
                    Sign Out
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            ) : (
              <Link to="/auth/login">
                <Button variant="ghost" className="text-yellow-500 hover:text-yellow-400">
                  Sign In
                </Button>
              </Link>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default TopNavigation;
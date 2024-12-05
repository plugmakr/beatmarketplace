import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Auth } from "@supabase/auth-ui-react";
import { ThemeSupa } from "@supabase/auth-ui-shared";
import { supabase } from "@/integrations/supabase/client";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useToast } from "@/components/ui/use-toast";
import { useAuth } from "@/contexts/AuthContext";

const Login = () => {
  const [selectedRole, setSelectedRole] = useState("artist");
  const navigate = useNavigate();
  const { toast } = useToast();
  const { session, profile } = useAuth();

  console.log("Login component - Current session:", session);
  console.log("Login component - Current profile:", profile);

  // Redirect if already logged in
  if (session && profile?.role) {
    const portalRoutes: { [key: string]: string } = {
      admin: '/admin',
      seller: '/seller-portal',
      artist: '/artist-portal'
    };
    
    const route = portalRoutes[profile.role];
    if (route) {
      navigate(route);
    }
  }

  return (
    <div className="flex min-h-screen items-center justify-center bg-black p-4">
      <Card className="w-full max-w-md border-yellow-500/20 bg-black text-white">
        <CardHeader>
          <CardTitle className="text-2xl font-bold bg-gradient-to-r from-yellow-500 to-yellow-200 bg-clip-text text-transparent">
            Sign In
          </CardTitle>
          <CardDescription className="text-gray-400">
            Sign in to your account or create a new one
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="mb-4">
            <Select
              value={selectedRole}
              onValueChange={(value) => setSelectedRole(value)}
            >
              <SelectTrigger className="w-full border-yellow-500/20 bg-black text-yellow-500">
                <SelectValue placeholder="Select your role" />
              </SelectTrigger>
              <SelectContent className="border-yellow-500/20 bg-black">
                <SelectItem value="artist" className="text-yellow-500">Artist</SelectItem>
                <SelectItem value="seller" className="text-yellow-500">Seller</SelectItem>
                <SelectItem value="admin" className="text-yellow-500">Admin</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <Auth
            supabaseClient={supabase}
            appearance={{
              theme: ThemeSupa,
              variables: {
                default: {
                  colors: {
                    brand: '#EAB308',
                    brandAccent: '#CA8A04',
                    inputBackground: 'black',
                    inputText: 'white',
                    inputBorder: 'rgba(234, 179, 8, 0.2)',
                    inputBorderFocus: 'rgba(234, 179, 8, 0.5)',
                    inputBorderHover: 'rgba(234, 179, 8, 0.3)',
                  },
                },
              },
            }}
            providers={[]}
            redirectTo={`${window.location.origin}/auth/callback`}
            onlyThirdPartyProviders={false}
            magicLink={false}
            additionalData={{
              role: selectedRole
            }}
          />
        </CardContent>
      </Card>
    </div>
  );
};

export default Login;
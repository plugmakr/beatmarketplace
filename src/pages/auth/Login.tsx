import { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
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
import { Alert, AlertDescription } from "@/components/ui/alert";
import { useToast } from "@/components/ui/use-toast";
import { useAuth } from "@/contexts/AuthContext";

const Login = () => {
  const [selectedRole, setSelectedRole] = useState("artist");
  const [error, setError] = useState<string | null>(null);
  const navigate = useNavigate();
  const location = useLocation();
  const { toast } = useToast();
  const { session } = useAuth();

  useEffect(() => {
    console.log("Setting up auth state change listener");
    const { data: { subscription } } = supabase.auth.onAuthStateChange(async (event, session) => {
      console.log("Auth state changed:", event, session);
      
      if (event === 'SIGNED_IN' && session) {
        console.log("User signed in successfully:", session);
        toast({
          title: "Welcome!",
          description: "You have successfully signed in.",
        });
        
        const destination = location.state?.from?.pathname || '/';
        navigate(destination);
      }

      if (event === 'SIGNED_OUT') {
        setError(null);
      }

      // Enhanced error handling
      if (event === 'USER_DELETED') {
        console.error("User deletion event received");
        setError("An error occurred during account creation. Please try again.");
      }
    });

    // Log any existing session
    const checkSession = async () => {
      const { data: { session }, error } = await supabase.auth.getSession();
      if (error) {
        console.error("Error checking session:", error);
      }
      if (session) {
        console.log("Existing session found:", session);
      }
    };

    checkSession();

    return () => subscription.unsubscribe();
  }, [navigate, location, toast]);

  // Redirect if already logged in
  useEffect(() => {
    if (session) {
      console.log("User already logged in, redirecting...");
      navigate('/');
    }
  }, [session, navigate]);

  const handleRoleChange = (value: string) => {
    console.log("Selected role:", value);
    setSelectedRole(value);
    // Clear any previous errors when role changes
    setError(null);
  };

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
          {error && (
            <Alert variant="destructive" className="mb-4">
              <AlertDescription>{error}</AlertDescription>
            </Alert>
          )}
          
          <div className="mb-4">
            <Select
              value={selectedRole}
              onValueChange={handleRoleChange}
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
            localization={{
              variables: {
                sign_in: {
                  email_label: 'Email',
                  password_label: 'Password',
                }
              }
            }}
            theme="dark"
            additionalData={{
              role: selectedRole,
              username: '' // Add an empty username that will be updated later
            }}
          />
        </CardContent>
      </Card>
    </div>
  );
};

export default Login;
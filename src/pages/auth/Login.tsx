import { Auth } from "@supabase/auth-ui-react";
import { ThemeSupa } from "@supabase/auth-ui-shared";
import { useNavigate, useLocation } from "react-router-dom";
import { useEffect } from "react";
import { supabase } from "@/integrations/supabase/client";
import { useAuth } from "@/contexts/AuthContext";
import { Alert, AlertDescription } from "@/components/ui/alert";

const Login = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { session, profile } = useAuth();
  const from = location.state?.from?.pathname || "/";

  useEffect(() => {
    if (session && profile) {
      // Redirect based on user role
      if (profile.role === 'admin') {
        navigate('/admin');
      } else if (profile.role === 'artist') {
        navigate('/artist-portal');
      } else if (profile.role === 'seller') {
        navigate('/seller-portal');
      } else {
        navigate(from);
      }
    }
  }, [session, profile, navigate, from]);

  return (
    <div className="min-h-screen bg-black flex items-center justify-center p-4">
      <div className="w-full max-w-md space-y-8">
        <div className="text-center">
          <h2 className="text-3xl font-bold bg-gradient-to-r from-yellow-500 to-yellow-200 bg-clip-text text-transparent">
            Welcome Back
          </h2>
          <p className="mt-2 text-gray-400">
            Sign in to your account to continue
          </p>
        </div>
        
        <div className="bg-black/60 border border-yellow-500/20 p-6 rounded-lg shadow-xl">
          <Auth
            supabaseClient={supabase}
            appearance={{
              theme: ThemeSupa,
              variables: {
                default: {
                  colors: {
                    brand: '#EAB308',
                    brandAccent: '#CA8A04',
                  },
                },
              },
            }}
            providers={[]}
            redirectTo={window.location.origin}
          />
        </div>
      </div>
    </div>
  );
};

export default Login;
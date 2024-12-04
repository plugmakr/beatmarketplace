import { Auth } from '@supabase/auth-ui-react';
import { ThemeSupa } from '@supabase/auth-ui-shared';
import { supabase } from '@/integrations/supabase/client';
import { useAuth } from '@/contexts/AuthContext';
import { Navigate, useLocation } from 'react-router-dom';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useState, useEffect } from 'react';
import { useToast } from '@/components/ui/use-toast';
import { AuthChangeEvent } from '@supabase/supabase-js';

const Login = () => {
  const { session, profile } = useAuth();
  const location = useLocation();
  const [selectedRole, setSelectedRole] = useState<string>('artist');
  const { toast } = useToast();

  useEffect(() => {
    console.log('Current session:', session);
    console.log('Current profile:', profile);

    const { data: { subscription } } = supabase.auth.onAuthStateChange((event: AuthChangeEvent, currentSession) => {
      console.log('Auth state changed:', event, currentSession);
      
      switch (event) {
        case 'SIGNED_IN':
          toast({
            title: "Welcome back!",
            description: "You have successfully signed in.",
          });
          break;
        case 'USER_UPDATED':
          toast({
            title: "Success!",
            description: "Your account has been updated.",
          });
          break;
        case 'SIGNED_OUT':
          toast({
            title: "Signed out",
            description: "You have been signed out.",
          });
          break;
        case 'USER_DELETED':
          toast({
            title: "Account Deleted",
            description: "Your account has been deleted.",
          });
          break;
        case 'PASSWORD_RECOVERY':
          toast({
            title: "Password Recovery",
            description: "Check your email for password reset instructions.",
          });
          break;
        case 'AUTH_ERROR':
          toast({
            title: "Authentication Error",
            description: "There was an error during authentication.",
            variant: "destructive"
          });
          break;
      }
    });

    return () => {
      subscription.unsubscribe();
    };
  }, [toast]);

  if (session && profile) {
    console.log('Redirecting to:', location.state?.from?.pathname || getDefaultRoute(profile.role));
    return <Navigate to={location.state?.from?.pathname || getDefaultRoute(profile.role)} replace />;
  }

  return (
    <div className="min-h-screen bg-black flex items-center justify-center p-4">
      <div className="w-full max-w-md space-y-8">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-yellow-500">Welcome Back</h2>
          <p className="mt-2 text-gray-400">Sign in to your account</p>
        </div>
        <div className="bg-black/60 border border-yellow-500/20 rounded-lg p-6">
          <div className="mb-6">
            <label className="block text-sm font-medium text-gray-400 mb-2">
              Select Role for New Account
            </label>
            <Select value={selectedRole} onValueChange={setSelectedRole}>
              <SelectTrigger className="bg-black/60 border-yellow-500/20">
                <SelectValue placeholder="Select role" />
              </SelectTrigger>
              <SelectContent className="bg-black/90 border-yellow-500/20">
                <SelectItem value="artist">Artist</SelectItem>
                <SelectItem value="seller">Seller</SelectItem>
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
                    brand: '#eab308',
                    brandAccent: '#ca8a04',
                  },
                },
              },
            }}
            localization={{
              variables: {
                sign_in: {
                  email_label: 'Email',
                  password_label: 'Password',
                  button_label: 'Sign in',
                },
                sign_up: {
                  email_label: 'Email',
                  password_label: 'Password',
                  button_label: 'Sign up',
                  link_text: "Don't have an account? Sign up",
                  confirmation_text: 'Check your email for the confirmation link',
                },
              },
            }}
            providers={[]}
            redirectTo={`${window.location.origin}/auth/callback`}
            additionalData={{
              role: selectedRole
            }}
          />
        </div>
      </div>
    </div>
  );
};

function getDefaultRoute(role: string | null) {
  switch (role) {
    case 'admin':
      return '/admin';
    case 'seller':
      return '/seller-portal';
    case 'artist':
      return '/artist-portal';
    default:
      return '/';
  }
}

export default Login;
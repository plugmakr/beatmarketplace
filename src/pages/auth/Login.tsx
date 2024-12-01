import { Auth } from '@supabase/auth-ui-react';
import { ThemeSupa } from '@supabase/auth-ui-shared';
import { supabase } from '@/integrations/supabase/client';
import { useAuth } from '@/contexts/AuthContext';
import { Navigate, useLocation } from 'react-router-dom';

const Login = () => {
  const { session, profile } = useAuth();
  const location = useLocation();

  if (session && profile) {
    const from = location.state?.from?.pathname || getDefaultRoute(profile.role);
    return <Navigate to={from} replace />;
  }

  return (
    <div className="min-h-screen bg-black flex items-center justify-center p-4">
      <div className="w-full max-w-md space-y-8">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-yellow-500">Welcome Back</h2>
          <p className="mt-2 text-gray-400">Sign in to your account</p>
        </div>
        <div className="bg-black/60 border border-yellow-500/20 rounded-lg p-6">
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
            providers={[]}
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
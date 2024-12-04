import { createContext, useContext, useEffect, useState } from 'react';
import { Session, User } from '@supabase/supabase-js';
import { useNavigate } from 'react-router-dom';
import { supabase } from '@/integrations/supabase/client';
import { useToast } from '@/components/ui/use-toast';

interface Profile {
  id: string;
  username: string | null;
  role: string | null;
}

interface AuthContextType {
  session: Session | null;
  profile: Profile | null;
  signOut: () => Promise<void>;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const [session, setSession] = useState<Session | null>(null);
  const [profile, setProfile] = useState<Profile | null>(null);
  const navigate = useNavigate();
  const { toast } = useToast();

  const fetchProfile = async (userId: string) => {
    try {
      console.log('Fetching profile for user:', userId);
      
      const { data: profileData, error: profileError } = await supabase
        .from('profiles')
        .select('id, username, role')
        .eq('id', userId)
        .single();

      if (profileError) {
        if (profileError.code === 'PGRST116') {
          console.log('No profile found, creating default profile...');
          const { data: newProfile, error: insertError } = await supabase
            .from('profiles')
            .insert([{ id: userId, role: 'artist' }])
            .select()
            .single();

          if (insertError) {
            console.error('Error creating default profile:', insertError);
            toast({
              title: "Error",
              description: "Failed to create profile",
              variant: "destructive"
            });
            return;
          }

          setProfile(newProfile);
          return;
        }

        console.error('Error fetching profile:', profileError);
        toast({
          title: "Error",
          description: profileError.message,
          variant: "destructive"
        });
        return;
      }

      console.log('Profile fetched successfully:', profileData);
      setProfile(profileData);
    } catch (error) {
      console.error('Unexpected error in fetchProfile:', error);
      toast({
        title: "Error",
        description: "An unexpected error occurred",
        variant: "destructive"
      });
    }
  };

  useEffect(() => {
    console.log('Setting up auth subscriptions...');
    
    const setupAuth = async () => {
      const { data: { session: initialSession } } = await supabase.auth.getSession();
      console.log('Initial session:', initialSession);
      setSession(initialSession);
      
      if (initialSession?.user) {
        await fetchProfile(initialSession.user.id);
      }
    };

    setupAuth();

    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange(async (event, currentSession) => {
      console.log('Auth state changed:', event, currentSession);
      setSession(currentSession);

      if (currentSession?.user) {
        await fetchProfile(currentSession.user.id);
      } else {
        setProfile(null);
      }
    });

    return () => {
      subscription.unsubscribe();
    };
  }, []);

  const signOut = async () => {
    try {
      const { error } = await supabase.auth.signOut();
      if (error) {
        toast({
          title: "Error",
          description: "Failed to sign out",
          variant: "destructive"
        });
        return;
      }
      setProfile(null);
      navigate('/');
    } catch (error) {
      console.error('Error signing out:', error);
      toast({
        title: "Error",
        description: "An unexpected error occurred while signing out",
        variant: "destructive"
      });
    }
  };

  return (
    <AuthContext.Provider value={{ session, profile, signOut }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};
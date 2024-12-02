import { Navigate, useLocation } from 'react-router-dom';
import { useAuth } from '@/contexts/AuthContext';

interface ProtectedRouteProps {
  children: React.ReactNode;
  allowedRoles?: string[];
}

const ProtectedRoute = ({ children, allowedRoles }: ProtectedRouteProps) => {
  const { session, profile } = useAuth();
  const location = useLocation();

  if (!session) {
    return <Navigate to="/auth/login" state={{ from: location }} replace />;
  }

  if (allowedRoles && profile && !allowedRoles.includes(profile.role || '')) {
    // Redirect to the appropriate dashboard based on user role
    if (profile.role === 'admin') {
      return <Navigate to="/admin" replace />;
    } else if (profile.role === 'seller') {
      return <Navigate to="/seller-portal" replace />;
    } else if (profile.role === 'artist') {
      return <Navigate to="/artist-portal" replace />;
    }
    // Default fallback
    return <Navigate to="/" replace />;
  }

  return <>{children}</>;
};

export default ProtectedRoute;
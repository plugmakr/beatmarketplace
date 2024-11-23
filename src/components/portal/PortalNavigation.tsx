import { Button } from "@/components/ui/button";
import { Link, useNavigate, useLocation } from "react-router-dom";

const PortalNavigation = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const getNavItems = () => {
    if (location.pathname.includes('admin')) {
      return [
        { label: 'Dashboard', path: '/admin' },
        { label: 'Users', path: '/admin/users' },
        { label: 'Content', path: '/admin/content' },
        { label: 'Subscription Plans', path: '/admin/subscription-plans' },
        { label: 'Settings', path: '/admin/settings' },
      ];
    } else if (location.pathname.includes('artist-portal')) {
      return [
        { label: 'Dashboard', path: '/artist-portal' },
        { label: 'My Beats', path: '/artist-portal/beats' },
        { label: 'Analytics', path: '/artist-portal/analytics' },
        { label: 'Profile', path: '/artist-portal/profile' },
      ];
    } else if (location.pathname.includes('seller-portal')) {
      return [
        { label: 'Dashboard', path: '/seller-portal' },
        { label: 'Orders', path: '/seller-portal/orders' },
        { label: 'Customers', path: '/seller-portal/customers' },
        { label: 'Analytics', path: '/seller-portal/analytics' },
      ];
    }
    return [];
  };

  return (
    <nav className="fixed left-0 top-0 h-full w-64 bg-black border-r border-yellow-500/20">
      <div className="flex flex-col h-full p-4">
        <div className="mb-8">
          <h1 className="text-2xl font-bold bg-gradient-to-r from-yellow-500 to-yellow-200 bg-clip-text text-transparent">
            Portal
          </h1>
        </div>
        
        <div className="flex flex-col gap-2">
          {getNavItems().map((item, index) => (
            <Link key={index} to={item.path}>
              <Button 
                variant="ghost" 
                className="w-full justify-start text-yellow-500 hover:text-yellow-400"
              >
                {item.label}
              </Button>
            </Link>
          ))}
          <Button 
            variant="ghost" 
            className="w-full justify-start text-yellow-500 hover:text-yellow-400 mt-auto"
            onClick={() => navigate('/')}
          >
            Back to Home
          </Button>
        </div>
      </div>
    </nav>
  );
};

export default PortalNavigation;
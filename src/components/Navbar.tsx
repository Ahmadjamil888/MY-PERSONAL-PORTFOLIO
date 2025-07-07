
import { Link, useLocation } from 'react-router-dom';
import { useAuth } from '@/contexts/AuthContext';
import { Button } from '@/components/ui/button';

const Navbar = () => {
  const location = useLocation();
  const { user, signOut } = useAuth();

  const isActive = (path: string) => location.pathname === path;

  return (
    <nav className="border-b border-white/10 bg-black/90 backdrop-blur-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link to="/" className="text-xl font-bold text-white hover:text-white/80 transition-colors">
            Ahmad Jamil
          </Link>
          
          <div className="hidden md:flex space-x-8">
            <Link 
              to="/" 
              className={`transition-colors ${isActive('/') ? 'text-white border-b border-white' : 'text-white/70 hover:text-white'} pb-1`}
            >
              Home
            </Link>
            <Link 
              to="/about" 
              className={`transition-colors ${isActive('/about') ? 'text-white border-b border-white' : 'text-white/70 hover:text-white'} pb-1`}
            >
              About
            </Link>
            <Link 
              to="/projects" 
              className={`transition-colors ${isActive('/projects') ? 'text-white border-b border-white' : 'text-white/70 hover:text-white'} pb-1`}
            >
              Projects
            </Link>
            <Link 
              to="/contact" 
              className={`transition-colors ${isActive('/contact') ? 'text-white border-b border-white' : 'text-white/70 hover:text-white'} pb-1`}
            >
              Contact
            </Link>
          </div>

          <div className="flex items-center space-x-4">
            {user ? (
              <div className="flex items-center space-x-4">
                <span className="text-white/70 text-sm">{user.email}</span>
                <Button 
                  onClick={signOut} 
                  variant="outline" 
                  className="border-white/20 text-white hover:bg-white hover:text-black"
                >
                  Sign Out
                </Button>
              </div>
            ) : (
              <Link to="/auth">
                <Button 
                  variant="outline" 
                  className="border-white/20 text-white hover:bg-white hover:text-black"
                >
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

export default Navbar;

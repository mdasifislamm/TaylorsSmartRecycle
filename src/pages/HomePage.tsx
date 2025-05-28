import { ArrowRight } from 'lucide-react';
import Layout from '../components/Layout';
import Logo from '../components/Logo';
import Button from '../components/Button';
import { Link } from 'react-router-dom';

const HomePage = () => {
  return (
    <Layout className="min-h-screen bg-gradient-to-b from-green-50 to-white flex flex-col items-center justify-center text-center relative overflow-hidden px-4">
      {/* Background Decoration - Adjusted for mobile */}
      <div className="absolute -top-10 -right-10 w-32 h-32 sm:w-64 sm:h-64 rounded-full bg-green-100 opacity-40" />
      <div className="absolute -bottom-20 -left-10 w-40 h-40 sm:w-80 sm:h-80 rounded-full bg-green-100 opacity-30" />
      
      <div className="relative z-10 w-full max-w-lg py-6 sm:py-12 flex flex-col items-center">
        {/* Logo and Tagline */}
        <div className="animate-fade-in-down mb-8 sm:mb-12">
          <Logo size="medium" className="mb-4" />
          <p className="text-lg sm:text-xl text-gray-600">Track your recycling, earn credits.</p>
        </div>
        
        {/* Main Buttons */}
        <div className="w-full max-w-[200px] space-y-3 animate-fade-in-up">
          <Link to="/dashboard" className="block w-full">
            <Button variant="secondary" fullWidth className="flex items-center justify-center">
              Start <ArrowRight size={18} className="ml-2" />
            </Button>
          </Link>
          <Link to="/bin-locations" className="block w-full">
            <Button variant="secondary" fullWidth>
              Find Bin Locations
            </Button>
          </Link>
        </div>
        
        {/* Login Link */}
        <div className="mt-6 text-gray-500 animate-fade-in">
          <p className="text-sm">Taylor's student?</p>
          <Link to="/login" className="text-green-600 hover:text-green-700 font-medium text-sm mt-1 inline-block">
            Login with your student account
          </Link>
        </div>
      </div>
      
      {/* Footer */}
      <div className="absolute bottom-2 text-xs text-gray-400">
        © 2025 Taylor's University EcoTrack
      </div>
    </Layout>
  );
};

export default HomePage;
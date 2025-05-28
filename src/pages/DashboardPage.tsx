import { BarChart4, ArrowRight, ClipboardList, Recycle } from 'lucide-react';
import { Link } from 'react-router-dom';
import Layout from '../components/Layout';
import Logo from '../components/Logo';
import Button from '../components/Button';
import Card from '../components/Card';
import { useAppContext } from '../context/AppContext';

const DashboardPage = () => {
  const { studentName, credits } = useAppContext();

  return (
    <Layout>
      <header className="flex justify-between items-center mb-4 sm:mb-8">
        <Logo size="small" />
        <div className="text-right">
          <p className="text-sm text-gray-500">Logout</p>
        </div>
      </header>
      
      <div className="mb-6 sm:mb-8 animate-fade-in">
        <h1 className="text-xl sm:text-2xl font-bold text-gray-800 mb-1">
          Welcome, {studentName}
        </h1>
        <p className="text-sm sm:text-base text-gray-600">
          Track your recycling efforts and earn credits
        </p>
      </div>
      
      <Card className="mb-6 sm:mb-8 overflow-hidden">
        <div className="flex flex-col md:flex-row md:items-center">
          <div className="flex-1 p-3 sm:p-4">
            <h2 className="text-lg sm:text-xl font-semibold text-gray-700 mb-2">Your Credits</h2>
            <div className="flex items-baseline">
              <span className="text-3xl sm:text-4xl font-bold text-green-600">{credits}</span>
              <span className="ml-2 text-gray-500">Points</span>
            </div>
            <p className="mt-2 text-xs sm:text-sm text-gray-500">
              Keep recycling to earn more credits and rewards!
            </p>
          </div>
          <div className="bg-green-50 p-4 sm:p-6 flex items-center justify-center">
            <BarChart4 size={60} className="text-green-400 sm:size-80" />
          </div>
        </div>
      </Card>
      
      <div className="grid grid-cols-1 gap-3 sm:gap-4 mb-6 sm:mb-8">
        <Link to="/recycling-log" className="block">
          <Card className="flex flex-col justify-between hover:border-green-200 hover:border">
            <div className="mb-3 sm:mb-4">
              <div className="bg-green-100 rounded-full w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center mb-3 sm:mb-4">
                <ClipboardList className="text-green-600" size={20} />
              </div>
              <h3 className="text-base sm:text-lg font-medium text-gray-800 mb-1 sm:mb-2">
                View Recycling Log
              </h3>
              <p className="text-xs sm:text-sm text-gray-600">
                See your recycling history and track your environmental impact.
              </p>
            </div>
            <div className="text-green-600 flex items-center font-medium text-sm sm:text-base">
              View Log <ArrowRight size={16} className="ml-1" />
            </div>
          </Card>
        </Link>
        
        <Link to="/recycle-now" className="block">
          <Card className="flex flex-col justify-between bg-gradient-to-r from-green-400 to-green-600 text-white relative overflow-hidden">
            <div className="mb-3 sm:mb-4">
              <h3 className="text-lg sm:text-xl font-semibold mb-1 sm:mb-2">
                Recycle Now
              </h3>
              <p className="opacity-90 text-sm">
                Add your recycling activity and earn credits instantly.
              </p>
            </div>
            <Button 
              variant="outline" 
              className="bg-white text-green-600 border-white hover:bg-green-50 text-sm sm:text-base 
                flex items-center justify-center gap-2 relative z-10
                shadow-glow animate-pulse-scale font-semibold
                transition-all duration-300 hover:scale-105 hover:shadow-lg"
            >
              <Recycle size={18} className="animate-spin-slow" />
              Start Recycling
            </Button>
          </Card>
        </Link>
      </div>
      
      <div className="flex justify-center">
        <Link to="/bin-locations">
          <Button variant="secondary" className="text-sm sm:text-base w-full sm:w-auto px-6">
            Find Bin Locations
          </Button>
        </Link>
      </div>
    </Layout>
  );
};

export default DashboardPage;
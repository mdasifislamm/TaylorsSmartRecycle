import { Calendar, Filter, ArrowLeft } from 'lucide-react';
import Layout from '../components/Layout';
import Logo from '../components/Logo';
import Button from '../components/Button';
import LogEntry from '../components/LogEntry';
import { Link } from 'react-router-dom';

const RecyclingLogPage = () => {
  const logEntries = [
    { id: 1, date: '12 May 2025', type: 'Plastic', credits: 20 },
    { id: 2, date: '8 May 2025', type: 'Paper', credits: 15 },
    { id: 3, date: '2 May 2025', type: 'E-waste', credits: 50 },
    { id: 4, date: '28 Apr 2025', type: 'Glass', credits: 25 },
    { id: 5, date: '20 Apr 2025', type: 'Plastic', credits: 20 },
    { id: 6, date: '15 Apr 2025', type: 'Aluminum', credits: 30 },
    { id: 7, date: '10 Apr 2025', type: 'Paper', credits: 15 },
  ];

  return (
    <Layout>
      <header className="flex justify-between items-center mb-8">
        <Link to="/dashboard">
          <Logo size="small" />
        </Link>
        <div className="text-right">
          <p className="text-sm text-gray-500">Logout</p>
        </div>
      </header>
      
      <div className="mb-6 flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-gray-800 mb-1 flex items-center">
            <Calendar className="mr-2 text-green-500" size={24} />
            My Recycling Log
          </h1>
          <p className="text-gray-600">
            Track your environmental impact
          </p>
        </div>
        <Link to="/dashboard">
          <Button variant="outline" className="flex items-center">
            <ArrowLeft size={16} className="mr-1" /> Dashboard
          </Button>
        </Link>
      </div>
      
      <div className="bg-white rounded-2xl shadow-md overflow-hidden mb-8">
        <div className="p-4 border-b border-gray-100 flex justify-between items-center">
          <h2 className="font-medium text-gray-700">Recent Activity</h2>
          <button className="flex items-center text-sm text-gray-500 hover:text-gray-700">
            <Filter size={16} className="mr-1" /> Filter
          </button>
        </div>
        
        <div className="divide-y divide-gray-100">
          {logEntries.map((entry) => (
            <LogEntry
              key={entry.id}
              date={entry.date}
              type={entry.type}
              credits={entry.credits}
            />
          ))}
        </div>
        
        <div className="p-4 bg-gray-50 text-center">
          <button className="text-green-600 font-medium">
            Load More
          </button>
        </div>
      </div>
      
      <div className="bg-green-50 rounded-xl p-6 border border-green-100">
        <h3 className="font-medium text-gray-800 mb-4">Recycling Impact</h3>
        <div className="grid grid-cols-3 gap-4 text-center">
          <div className="bg-white rounded-lg p-3 shadow-sm">
            <div className="text-2xl font-bold text-green-600">175</div>
            <div className="text-xs text-gray-500">Items Recycled</div>
          </div>
          <div className="bg-white rounded-lg p-3 shadow-sm">
            <div className="text-2xl font-bold text-green-600">24kg</div>
            <div className="text-xs text-gray-500">CO₂ Saved</div>
          </div>
          <div className="bg-white rounded-lg p-3 shadow-sm">
            <div className="text-2xl font-bold text-green-600">3</div>
            <div className="text-xs text-gray-500">Trees Saved</div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default RecyclingLogPage;
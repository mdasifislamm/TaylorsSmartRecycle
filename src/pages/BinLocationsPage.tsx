import { MapPin, ArrowLeft } from 'lucide-react';
import Layout from '../components/Layout';
import Logo from '../components/Logo';
import Button from '../components/Button';
import BinLocation from '../components/BinLocation';
import { Link } from 'react-router-dom';

const BinLocationsPage = () => {
  const locations = [
    { id: 1, name: 'Block B Lobby', types: ['Plastic', 'Paper', 'E-waste'] },
    { id: 2, name: 'Library Entrance', types: ['Plastic', 'Paper'] },
    { id: 3, name: 'Cafeteria', types: ['Plastic', 'Glass', 'Paper'] },
    { id: 4, name: 'Block D Ground Floor', types: ['Plastic', 'E-waste'] },
    { id: 5, name: 'Student Center', types: ['Plastic', 'Paper', 'Glass'] },
    { id: 6, name: 'Main Entrance', types: ['Mixed'] },
    { id: 7, name: 'Science Lab Building', types: ['E-waste', 'Paper'] },
    { id: 8, name: 'Sports Complex', types: ['Plastic', 'Paper'] },
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
            <MapPin className="mr-2 text-green-500" size={24} />
            Find a Smart Bin
          </h1>
          <p className="text-gray-600">
            Locate recycling points across campus
          </p>
        </div>
        <Link to="/dashboard">
          <Button variant="outline" className="flex items-center">
            <ArrowLeft size={16} className="mr-1" /> Dashboard
          </Button>
        </Link>
      </div>
      
      <div className="bg-white rounded-2xl shadow-md overflow-hidden mb-8">
        <div className="aspect-w-16 aspect-h-9 bg-gray-100 relative">
          <div className="absolute inset-0 flex items-center justify-center">
            <img 
              src="public/image.png" 
              alt="Campus Map" 
              className="w-full h-full object-contain"
            />
            {/* Map Pins */}
            {locations.map((location, index) => (
              <div 
                key={location.id} 
                className="absolute w-6 h-6 rounded-full bg-green-500 border-2 border-white shadow-lg cursor-pointer transform -translate-x-1/2 -translate-y-1/2 hover:scale-125 transition-transform"
                style={{
                  top: `${20 + (index % 4) * 20}%`,
                  left: `${15 + Math.floor(index / 4) * 30 + (index % 2) * 10}%`,
                }}
              >
                <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 whitespace-nowrap bg-white px-2 py-1 rounded shadow-md text-xs font-medium hidden group-hover:block">
                  {location.name}
                </div>
              </div>
            ))}
          </div>
        </div>
        
        <div className="p-4 border-b border-gray-100">
          <h2 className="font-medium text-gray-700">Available Locations</h2>
        </div>
        
        <div className="p-4 grid grid-cols-1 md:grid-cols-2 gap-4">
          {locations.map((location) => (
            <BinLocation
              key={location.id}
              name={location.name}
              types={location.types}
            />
          ))}
        </div>
      </div>
      
      <div className="bg-green-50 rounded-xl p-4 border border-green-100">
        <h3 className="font-medium text-gray-800 mb-2">Bin Information</h3>
        <p className="text-sm text-gray-600 mb-2">
          Our smart bins automatically sort and compact recyclable materials to maximize efficiency.
        </p>
        <div className="text-sm text-gray-600">
          <span className="font-medium">Operating Hours:</span> 24/7 Access
        </div>
      </div>
    </Layout>
  );
};

export default BinLocationsPage;
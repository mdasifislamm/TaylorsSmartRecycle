import { useState } from 'react';
import { Recycle, ChevronDown, Check } from 'lucide-react';
import Layout from '../components/Layout';
import Logo from '../components/Logo';
import Button from '../components/Button';
import FormField from '../components/FormField';
import { Link } from 'react-router-dom';

const RecycleNowPage = () => {
  const [showConfirmation, setShowConfirmation] = useState(false);
  const [binLocation, setBinLocation] = useState('');
  const [recyclableType, setRecyclableType] = useState('');
  const [quantity, setQuantity] = useState('');
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setShowConfirmation(true);
  };
  
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
      
      <div className="mb-8">
        <h1 className="text-2xl font-bold text-gray-800 mb-1 flex items-center">
          <Recycle className="mr-2 text-green-500" size={24} />
          Recycle Now
        </h1>
        <p className="text-gray-600">
          Record your recycling activity and earn credits
        </p>
      </div>
      
      {!showConfirmation ? (
        <div className="bg-white rounded-2xl shadow-md p-6 mb-8">
          <form onSubmit={handleSubmit}>
            <FormField label="Select Bin Location" id="binLocation">
              <div className="relative">
                <select
                  id="binLocation"
                  className="appearance-none w-full px-4 py-3 bg-white border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-400 focus:border-green-400 focus:outline-none transition-all"
                  value={binLocation}
                  onChange={(e) => setBinLocation(e.target.value)}
                  required
                >
                  <option value="" disabled>Select location...</option>
                  <option value="Block B Lobby">Block B Lobby</option>
                  <option value="Library Entrance">Library Entrance</option>
                  <option value="Cafeteria">Cafeteria</option>
                  <option value="Block D Ground Floor">Block D Ground Floor</option>
                  <option value="Student Center">Student Center</option>
                </select>
                <div className="absolute right-3 top-1/2 transform -translate-y-1/2 pointer-events-none text-gray-500">
                  <ChevronDown size={18} />
                </div>
              </div>
            </FormField>
            
            <FormField label="Select Recyclable Type" id="recyclableType">
              <div className="relative">
                <select
                  id="recyclableType"
                  className="appearance-none w-full px-4 py-3 bg-white border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-400 focus:border-green-400 focus:outline-none transition-all"
                  value={recyclableType}
                  onChange={(e) => setRecyclableType(e.target.value)}
                  required
                >
                  <option value="" disabled>Select type...</option>
                  <option value="Plastic">Plastic</option>
                  <option value="Paper">Paper</option>
                  <option value="Glass">Glass</option>
                  <option value="Aluminum">Aluminum</option>
                  <option value="E-waste">E-waste</option>
                </select>
                <div className="absolute right-3 top-1/2 transform -translate-y-1/2 pointer-events-none text-gray-500">
                  <ChevronDown size={18} />
                </div>
              </div>
            </FormField>
            
            <FormField label="Enter Quantity" id="quantity">
              <input
                id="quantity"
                type="number"
                min="1"
                placeholder="Number of items"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-400 focus:border-green-400 focus:outline-none transition-all"
                value={quantity}
                onChange={(e) => setQuantity(e.target.value)}
                required
              />
            </FormField>
            
            <div className="mt-8">
              <Button type="submit" fullWidth>
                Submit
              </Button>
            </div>
          </form>
        </div>
      ) : (
        <div className="bg-white rounded-2xl shadow-md p-6 mb-8 text-center">
          <div className="flex justify-center mb-4">
            <div className="bg-green-100 rounded-full w-20 h-20 flex items-center justify-center">
              <Check className="text-green-600" size={40} />
            </div>
          </div>
          <h2 className="text-xl font-semibold text-gray-800 mb-2">
            Credits added!
          </h2>
          <p className="text-gray-600 mb-6">
            Updated in your Taylor's profile.
          </p>
          <Link to="/dashboard">
            <Button variant="secondary">
              Back to Dashboard
            </Button>
          </Link>
        </div>
      )}
      
      <div className="bg-green-50 rounded-xl p-4 border border-green-100">
        <h3 className="font-medium text-gray-800 mb-2">Recycling Tips</h3>
        <ul className="text-sm text-gray-600 space-y-2">
          <li>• Make sure all containers are empty and clean</li>
          <li>• Remove caps and lids from bottles</li>
          <li>• Flatten cardboard boxes to save space</li>
          <li>• E-waste includes batteries, phones, and small electronics</li>
        </ul>
      </div>
    </Layout>
  );
};

export default RecycleNowPage;
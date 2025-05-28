import { useState } from 'react';
import { AtSign, ArrowRight, Lock } from 'lucide-react';
import Layout from '../components/Layout';
import Logo from '../components/Logo';
import Button from '../components/Button';
import { Link } from 'react-router-dom';

const LoginPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  return (
    <Layout className="flex flex-col items-center justify-center min-h-screen">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5 pointer-events-none">
        {Array.from({ length: 20 }).map((_, i) => (
          <div 
            key={i}
            className="absolute w-12 h-12 text-green-500"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              opacity: Math.random() * 0.5 + 0.1,
              transform: `rotate(${Math.random() * 360}deg)`,
            }}
          >
            <AtSign />
          </div>
        ))}
      </div>
      
      <div className="w-full max-w-md bg-white p-6 sm:p-8 rounded-2xl shadow-lg animate-fade-in z-10 mx-4">
        <div className="text-center mb-8">
          <Logo size="medium" className="mb-6 inline-block" />
          <h1 className="text-2xl font-bold text-gray-800 mb-2">Login</h1>
          <p className="text-gray-600 text-center mb-6">
            Access your Taylor's University GreenLoop account
          </p>
        </div>
        
        <div className="space-y-4">
          <div className="mb-4">
            <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
              Taylor's Student Email
            </label>
            <div className="relative">
              <input
                id="email"
                type="email"
                placeholder="student@taylors.edu.my"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-400 focus:border-green-400 focus:outline-none transition-all"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <div className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400">
                <AtSign size={18} />
              </div>
            </div>
          </div>

          <div className="mb-4">
            <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-1">
              Password
            </label>
            <div className="relative">
              <input
                id="password"
                type="password"
                placeholder="Enter your password"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-400 focus:border-green-400 focus:outline-none transition-all"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <div className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400">
                <Lock size={18} />
              </div>
            </div>
            <div className="mt-1 text-right">
              <button className="text-sm text-green-600 hover:text-green-700">
                Forgot password?
              </button>
            </div>
          </div>
          
          <Link to="/dashboard" className="block w-full">
            <Button fullWidth className="flex items-center justify-center">
              Login <ArrowRight size={18} className="ml-2" />
            </Button>
          </Link>
        </div>
        
        <div className="mt-6 text-center text-sm text-gray-500">
          <p>For Taylor's students only</p>
          <Link to="/" className="text-green-600 hover:text-green-700 font-medium mt-2 inline-block">
            Back to Home
          </Link>
        </div>
      </div>
    </Layout>
  );
};

export default LoginPage;
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import LoginPage from './pages/LoginPage';
import DashboardPage from './pages/DashboardPage';
import RecycleNowPage from './pages/RecycleNowPage';
import RecyclingLogPage from './pages/RecyclingLogPage';
import BinLocationsPage from './pages/BinLocationsPage';
import { AppProvider } from './context/AppContext';

function App() {
  return (
    <AppProvider>
      <Router>
        <div className="min-h-screen bg-white">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/dashboard" element={<DashboardPage />} />
            <Route path="/recycle-now" element={<RecycleNowPage />} />
            <Route path="/recycling-log" element={<RecyclingLogPage />} />
            <Route path="/bin-locations" element={<BinLocationsPage />} />
          </Routes>
        </div>
      </Router>
    </AppProvider>
  );
}

export default App;
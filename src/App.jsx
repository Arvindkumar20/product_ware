import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';
import { AuthProvider } from './context/AuthContext';
import Home from './pages/Home';
import Login from './pages/Login';
import Signup from './pages/Signup';
import Scan from './pages/Scan';
import Admin from './pages/Admin';
import ProtectedRoute from './components/common/ProtectedRoute';
import HeroSection from './components/sections/HeroSection';
import HowItWorks from './components/sections/HowItWorks';
import Features from './components/sections/Features';
import Testimonials from './components/sections/Testimonials';
import Footer from './components/sections/Footer';

export default function App() {
  return (
    <Router>
        <AuthProvider>
        <div className="min-h-screen flex flex-col justify-between bg-gray-50 text-gray-900 dark:bg-gray-900 dark:text-white">
          <Toaster position="top-center" reverseOrder={false} />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/scan" element={
              <ProtectedRoute>
                <Scan />
              </ProtectedRoute>
            } />
            <Route path="/admin" element={
              <ProtectedRoute adminRequired>
                <Admin />
              </ProtectedRoute>
            } />
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
          <Footer />
        </div>
    </AuthProvider>
      </Router>
  );
}

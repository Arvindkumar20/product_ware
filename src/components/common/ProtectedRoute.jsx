import { Navigate, Outlet } from 'react-router-dom';
import { useState, useEffect } from 'react';

const ProtectedRoute = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    // Check if the user is authenticated via JWT token stored in localStorage
    const token = localStorage.getItem('authToken');
    
    if (token) {
      // Optionally, you can verify the token validity here
      setIsAuthenticated(true);
    } else {
      setIsAuthenticated(false);
    }
  }, []);

  if (!isAuthenticated) {
    return <Navigate to="/login" replace />;
  }

  return <Outlet />;
};

export default ProtectedRoute;

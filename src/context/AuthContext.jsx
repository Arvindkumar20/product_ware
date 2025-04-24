import React, { createContext, useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { toast } from 'react-toastify';

// Create the AuthContext
export const AuthContext = createContext();

// AuthProvider to wrap around your app
export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);  // Store the user data
  const [loading, setLoading] = useState(true); // Set loading state to show loading spinner or page
  const navigate = useNavigate();

  useEffect(() => {
    // Check if user is already logged in (check token in local storage)
    const token = localStorage.getItem('token');
    if (token) {
      fetchUserData();
    } else {
      setLoading(false); // If no token, stop loading
    }
  }, []);

  const fetchUserData = async () => {
    try {
      const response = await axios.get('/api/auth/me', {
        headers: {
          Authorization: `Bearer ${localStorage.getItem('token')}`,
        },
      });
      setUser(response.data);
    } catch (error) {
      toast.error('Failed to fetch user data.');
    } finally {
      setLoading(false);
    }
  };

  const login = async (email, password) => {
    try {
      const response = await axios.post('/api/auth/login', { email, password });
      const { token, user } = response.data;
      localStorage.setItem('token', token);  // Store token in local storage
      setUser(user);
      toast.success('Login successful!');
      navigate('/dashboard');  // Redirect to dashboard or home page
    } catch (error) {
      toast.error('Login failed. Please check your credentials.');
    }
  };

  const logout = () => {
    localStorage.removeItem('token');  // Remove token from local storage
    setUser(null);
    navigate('/login');  // Redirect to login page
    toast.success('Logged out successfully.');
  };

  const isAuthenticated = () => {
    return !!user;  // Returns true if a user is logged in
  };

  return (
    <AuthContext.Provider value={{ user, loading, login, logout, isAuthenticated }}>
      {children}
    </AuthContext.Provider>
  );
};

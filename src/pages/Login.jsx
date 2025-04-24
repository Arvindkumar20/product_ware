import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Basic validation for email and password
    if (!email || !password) {
      toast.error('Please enter both email and password!');
      return;
    }

    if (!validateEmail(email)) {
      toast.error('Please enter a valid email address!');
      return;
    }

    setIsLoading(true);

    try {
      // Here, send the login request to your backend for email/password authentication
      // Assuming a mock login API request:
      const response = await mockLoginRequest(email, password);

      if (response.success) {
        toast.success('Login successful! Redirecting to your dashboard...');
        localStorage.setItem('authToken', response.token); // Save token to localStorage
        navigate('/dashboard'); // Redirect to dashboard after successful login
      } else {
        toast.error('Invalid email or password!');
      }
    } catch (error) {
      toast.error('Something went wrong, please try again!');
    } finally {
      setIsLoading(false);
    }
  };

  // Mock API request (replace with actual API call)
  const mockLoginRequest = (email, password) => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (email === 'user@example.com' && password === 'password123') {
          resolve({ success: true, token: 'fake-jwt-token' });
        } else {
          reject(new Error('Invalid credentials'));
        }
      }, 2000);
    });
  };

  // Email validation function
  const validateEmail = (email) => {
    const re = /\S+@\S+\.\S+/;
    return re.test(email);
  };

  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900 flex items-center justify-center">
      <div className="w-full max-w-md bg-white dark:bg-gray-800 rounded-lg p-8">
        <h2 className="text-3xl font-bold text-center text-gray-800 dark:text-white mb-6">
          Login
        </h2>

        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label htmlFor="email" className="text-sm text-gray-600 dark:text-gray-200 block mb-2">
              Email Address
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full py-2 px-4 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter your email"
            />
          </div>

          <div className="mb-4">
            <label htmlFor="password" className="text-sm text-gray-600 dark:text-gray-200 block mb-2">
              Password
            </label>
            <input
              type="password"
              id="password"
              name="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full py-2 px-4 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter your password"
            />
          </div>

          <button
            type="submit"
            className="w-full py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
            disabled={isLoading}
          >
            {isLoading ? 'Logging in...' : 'Login'}
          </button>
        </form>
      </div>
    </div>
  );
}

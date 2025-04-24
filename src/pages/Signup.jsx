import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

export default function Signup() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Basic validation for email, password, and confirm password
    if (!email || !password || !confirmPassword) {
      toast.error('Please fill all fields!');
      return;
    }

    if (!validateEmail(email)) {
      toast.error('Please enter a valid email address!');
      return;
    }

    if (password !== confirmPassword) {
      toast.error('Passwords do not match!');
      return;
    }

    if (password.length < 6) {
      toast.error('Password must be at least 6 characters long!');
      return;
    }

    setIsLoading(true);

    try {
      // Here, send the signup request to your backend for email/password creation
      const response = await mockSignupRequest(email, password);

      if (response.success) {
        toast.success('Signup successful! Redirecting to login...');
        navigate('/login'); // Redirect to login after successful signup
      } else {
        toast.error('Signup failed, please try again!');
      }
    } catch (error) {
      toast.error('Something went wrong, please try again!');
    } finally {
      setIsLoading(false);
    }
  };

  // Mock API request (replace with actual API call)
  const mockSignupRequest = (email, password) => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (email === 'user@example.com') {
          resolve({ success: true });
        } else {
          reject(new Error('Signup failed'));
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
          Signup
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

          <div className="mb-4">
            <label htmlFor="confirmPassword" className="text-sm text-gray-600 dark:text-gray-200 block mb-2">
              Confirm Password
            </label>
            <input
              type="password"
              id="confirmPassword"
              name="confirmPassword"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              className="w-full py-2 px-4 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Confirm your password"
            />
          </div>

          <button
            type="submit"
            className="w-full py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
            disabled={isLoading}
          >
            {isLoading ? 'Signing up...' : 'Signup'}
          </button>
        </form>

        <div className="mt-4 text-center">
          <p className="text-sm text-gray-600 dark:text-gray-200">
            Already have an account?{' '}
            <a href="/login" className="text-blue-600 hover:text-blue-700">
              Login here
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}

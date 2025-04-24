import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import axios from 'axios';

export default function Admin() {
  const [users, setUsers] = useState([]);
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    // Fetch users and products data on component mount
    fetchUsers();
    fetchProducts();
  }, []);

  const fetchUsers = async () => {
    try {
      const response = await axios.get('/api/users');
      setUsers(response.data);
    } catch (error) {
      toast.error('Failed to fetch users.');
    } finally {
      setLoading(false);
    }
  };

  const fetchProducts = async () => {
    try {
      const response = await axios.get('/api/products');
      setProducts(response.data);
    } catch (error) {
      toast.error('Failed to fetch products.');
    }
  };

  const handleDeleteUser = async (userId) => {
    try {
      await axios.delete(`/api/users/${userId}`);
      toast.success('User deleted successfully!');
      fetchUsers(); // Refresh the user list
    } catch (error) {
      toast.error('Failed to delete user.');
    }
  };

  const handleDeleteProduct = async (productId) => {
    try {
      await axios.delete(`/api/products/${productId}`);
      toast.success('Product deleted successfully!');
      fetchProducts(); // Refresh the product list
    } catch (error) {
      toast.error('Failed to delete product.');
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900 p-6">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl font-bold text-gray-800 dark:text-white mb-6">Admin Dashboard</h1>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
          <div className="bg-white dark:bg-gray-800 shadow-md rounded-lg p-6">
            <h2 className="text-xl font-semibold text-gray-800 dark:text-white">User Management</h2>
            <ul className="mt-4 space-y-2">
              {loading ? (
                <p>Loading users...</p>
              ) : users.length > 0 ? (
                users.map((user) => (
                  <li key={user.id} className="flex justify-between items-center">
                    <span>{user.name}</span>
                    <button
                      onClick={() => handleDeleteUser(user.id)}
                      className="text-red-500 hover:text-red-700"
                    >
                      Delete
                    </button>
                  </li>
                ))
              ) : (
                <p>No users found</p>
              )}
            </ul>
          </div>

          <div className="bg-white dark:bg-gray-800 shadow-md rounded-lg p-6">
            <h2 className="text-xl font-semibold text-gray-800 dark:text-white">Product Management</h2>
            <ul className="mt-4 space-y-2">
              {loading ? (
                <p>Loading products...</p>
              ) : products.length > 0 ? (
                products.map((product) => (
                  <li key={product.id} className="flex justify-between items-center">
                    <span>{product.name}</span>
                    <button
                      onClick={() => handleDeleteProduct(product.id)}
                      className="text-red-500 hover:text-red-700"
                    >
                      Delete
                    </button>
                  </li>
                ))
              ) : (
                <p>No products found</p>
              )}
            </ul>
          </div>
        </div>

        {/* Summary Dashboard */}
        <div className="bg-white dark:bg-gray-800 shadow-md rounded-lg p-6 mt-6">
          <h2 className="text-xl font-semibold text-gray-800 dark:text-white">Dashboard Summary</h2>
          <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            <div className="bg-blue-100 dark:bg-blue-700 p-4 rounded-lg text-center">
              <h3 className="text-lg font-semibold text-gray-800 dark:text-white">Total Users</h3>
              <p className="text-2xl text-gray-800 dark:text-white">{users.length}</p>
            </div>
            <div className="bg-green-100 dark:bg-green-700 p-4 rounded-lg text-center">
              <h3 className="text-lg font-semibold text-gray-800 dark:text-white">Total Products</h3>
              <p className="text-2xl text-gray-800 dark:text-white">{products.length}</p>
            </div>
            {/* Add more metrics here if needed */}
          </div>
        </div>
      </div>
    </div>
  );
}


import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { register } from '../../services/api';

const Register = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
    companyName: ''
  });
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');

    // Validate passwords match
    if (formData.password !== formData.confirmPassword) {
      setError('Passwords do not match');
      return;
    }

    // Validate password length
    if (formData.password.length < 6) {
      setError('Password must be at least 6 characters');
      return;
    }

    setLoading(true);

    try {
      const { confirmPassword, ...registerData } = formData;
      await register(registerData);
      navigate('/admin/dashboard');
    } catch (err) {
      console.error('Registration error:', err);
      setError(err.response?.data?.message || 'Failed to register. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-[#e6f0ff] to-white py-12 px-4 sm:px-6 lg:px-8">
    <div className="max-w-md w-full space-y-6 bg-white p-8 rounded-xl shadow-xl">
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-bold text-[#033A78]">Create Account</h2>
        <Link to="/" className="text-sm text-[#033A78] hover:underline">
          ← Back to Home
        </Link>
      </div>

      <p className="text-sm text-gray-600 text-center">
        Already have an account?{' '}
        <Link to="/login" className="font-medium text-[#033A78] hover:text-[#0A2472]">
          Sign in here
        </Link>
      </p>

      <form className="space-y-4" onSubmit={handleSubmit}>
        {error && (
          <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative" role="alert">
            <span className="block sm:inline">{error}</span>
          </div>
        )}

        <div>
          <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
            Full Name
          </label>
          <input
            id="name"
            name="name"
            type="text"
            required
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-[#033A78] focus:border-[#033A78] sm:text-sm"
            value={formData.name}
            onChange={handleChange}
          />
        </div>

        <div>
          <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
            Email Address
          </label>
          <input
            id="email"
            name="email"
            type="email"
            required
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-[#033A78] focus:border-[#033A78] sm:text-sm"
            value={formData.email}
            onChange={handleChange}
          />
        </div>

        <div>
          <label htmlFor="companyName" className="block text-sm font-medium text-gray-700 mb-1">
            Company Name
          </label>
          <input
            id="companyName"
            name="companyName"
            type="text"
            required
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-[#033A78] focus:border-[#033A78] sm:text-sm"
            value={formData.companyName}
            onChange={handleChange}
          />
        </div>

        <div>
          <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-1">
            Password
          </label>
          <input
            id="password"
            name="password"
            type="password"
            required
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-[#033A78] focus:border-[#033A78] sm:text-sm"
            value={formData.password}
            onChange={handleChange}
          />
        </div>

        <div>
          <label htmlFor="confirmPassword" className="block text-sm font-medium text-gray-700 mb-1">
            Confirm Password
          </label>
          <input
            id="confirmPassword"
            name="confirmPassword"
            type="password"
            required
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-[#033A78] focus:border-[#033A78] sm:text-sm"
            value={formData.confirmPassword}
            onChange={handleChange}
          />
        </div>

        <button
          type="submit"
          disabled={loading}
          className={`w-full flex justify-center items-center gap-2 py-2 px-4 text-white text-sm font-semibold rounded-lg transition duration-200 ${
            loading
              ? 'bg-gray-400 cursor-not-allowed'
              : 'bg-gradient-to-r from-[#033A78] to-[#0A2472] hover:from-[#0A2472] hover:to-[#022658]'
          }`}
        >
          {loading ? (
            <>
              <svg className="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
              </svg>
              Creating account...
            </>
          ) : (
            'Create Account'
          )}
        </button>
      </form>
    </div>
  </div>
  );
};

export default Register; 
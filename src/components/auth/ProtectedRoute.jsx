import React from 'react';
import { Navigate, useLocation } from 'react-router-dom';

const ProtectedRoute = ({ children }) => {
  const location = useLocation();
  const token = localStorage.getItem('token');
  const isAuthenticated = localStorage.getItem('isAuthenticated') === 'true';
  
  try {
    const user = JSON.parse(localStorage.getItem('user') || '{}');
    
    // Check if we have all required auth data
    if (!token || !isAuthenticated || !user) {
      console.log('Auth check failed:', { token: !!token, isAuthenticated, user: !!user });
      return <Navigate to="/login" state={{ from: location }} replace />;
    }

    // Check if user has required role
    if (!user.role || !['employer', 'admin'].includes(user.role)) {
      console.log('Role check failed:', { role: user.role });
      return <Navigate to="/" replace />;
    }

    return children;
  } catch (error) {
    console.error('Error in ProtectedRoute:', error);
    // If there's any error (like invalid JSON), redirect to login
    return <Navigate to="/login" state={{ from: location }} replace />;
  }
};

export default ProtectedRoute; 
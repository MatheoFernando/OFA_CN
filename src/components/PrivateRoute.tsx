import React from 'react';
import { Navigate } from 'react-router-dom';
import { useAuth } from './contextsApi/AuthContext';

interface PrivateRouteProps {
  children: React.ReactNode;
  role: 'admin' | 'client';
}

const PrivateRoute: React.FC<PrivateRouteProps> = ({ children, role }) => {
  const { user } = useAuth();

  if (!user) {
    return <Navigate to="/login" />;
  }

  if (user.role !== role) {
    return <Navigate to="/" />;
  }

  return <>{children}</>;
};

export default PrivateRoute;

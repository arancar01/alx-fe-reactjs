import React from 'react';
import { Navigate } from 'react-router-dom';

const PrivateRoute = ({ children }) => {
  const isAuthenticated = false; // هنا يمكنك استخدام حالة مصادقة حقيقية
  return isAuthenticated ? children : <Navigate to="/" />;
};

export default PrivateRoute;

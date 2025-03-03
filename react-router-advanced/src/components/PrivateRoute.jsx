// src/components/PrivateRoute.jsx

import React from 'react';
import { Navigate } from 'react-router-dom';

// يمكنك تعديل هذا ليتحقق من حالة المصادقة الفعلية
const PrivateRoute = ({ children }) => {
  const isAuthenticated = false; // هنا يمكنك استخدام حالة مصادقة حقيقية

  return isAuthenticated ? children : <Navigate to="/" />;
};

export default PrivateRoute;

// src/components/ProtectedRoute.jsx

import React from 'react';
import { Navigate } from 'react-router-dom';
import useAuth from '../hooks/useAuth';  // تأكد من أن المسار صحيح

const ProtectedRoute = ({ children }) => {
  const { isAuthenticated } = useAuth();  // استخدم الـ useAuth hook

  if (!isAuthenticated) {
    return <Navigate to="/login" />;  // إعادة التوجيه إلى صفحة تسجيل الدخول إذا لم يكن مصادقًا
  }

  return children;  // إذا كان مصادقًا، عرض المحتوى المحمي
};

export default ProtectedRoute;

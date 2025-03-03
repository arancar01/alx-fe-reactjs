// src/components/ProtectedRoute.jsx

import React from 'react';
import { Navigate } from 'react-router-dom';

const ProtectedRoute = ({ children }) => {
  // محاكاة حالة التحقق من تسجيل الدخول (يجب استبدال هذا بالتحقق الفعلي)
  const isAuthenticated = false; // ضع هنا حالة التحقق الفعلي لتسجيل الدخول

  if (!isAuthenticated) {
    // إذا لم يكن المستخدم مسجلاً دخوله، قم بتوجيهه إلى صفحة تسجيل الدخول أو أي صفحة أخرى
    return <Navigate to="/login" />;
  }

  return children; // إذا كان مسجلاً دخوله، قم بعرض المكون المحمي
};

export default ProtectedRoute;

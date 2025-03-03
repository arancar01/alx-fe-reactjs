// src/components/Login.jsx

import React from 'react';
import { Link } from 'react-router-dom';

const Login = () => {
  return (
    <div>
      <h2>Please log in to continue</h2>
      {/* هنا يمكنك إضافة نموذج تسجيل الدخول الفعلي */}
      <Link to="/profile">Go to Profile</Link> {/* للتجربة فقط */}
    </div>
  );
};

export default Login;

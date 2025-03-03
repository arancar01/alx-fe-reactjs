// src/hooks/useAuth.js

import { useState, useEffect } from 'react';

const useAuth = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem('authToken'); // تحقق من وجود التوكن في localStorage
    if (token) {
      setIsAuthenticated(true); // المستخدم مصادق إذا كان التوكن موجودًا
    }
  }, []);

  return { isAuthenticated };
};

export default useAuth;

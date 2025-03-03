// src/App.jsx

import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/Home'; // تأكد من أن Home موجود
import Profile from './components/Profile'; // تأكد من أن Profile موجود
import BlogPost from './components/BlogPost'; // تأكد من أن BlogPost موجود
import NotFound from './components/NotFound'; // إذا كنت تستخدم صفحة غير موجودة
import ProtectedRoute from './components/ProtectedRoute'; // تأكد من أنك تستخدم ProtectedRoute

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        
        {/* مسار Profile محمي */}
        <Route path="profile" element={
          <ProtectedRoute>
            <Profile />
          </ProtectedRoute>
        } />
        
        {/* المسار /blog/:id */}
        <Route path="blog/:id" element={<BlogPost />} /> {/* تأكد من أن BlogPost هنا */}
        
        {/* مسار صفحة غير موجودة */}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
};

export default App;

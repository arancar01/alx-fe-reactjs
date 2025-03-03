// src/App.jsx

import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import Login from './components/Login';
import Profile from './components/Profile'; // تأكد من أن هذا المسار صحيح
import NotFound from './components/NotFound';
import ProtectedRoute from './components/ProtectedRoute'; 
import BlogPost from './components/BlogPost';  // تأكد من مسار BlogPost

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="login" element={<Login />} />
        
        {/* مسار Profile محمي بـ ProtectedRoute */}
        <Route 
          path="profile" 
          element={
            <ProtectedRoute>  {/* حماية المسار */}
              <Profile />
            </ProtectedRoute>
          } 
        />
        
        <Route path="/blog/:id" element={<BlogPost />} /> {/* مسار blog */}
        <Route path="*" element={<NotFound />} /> {/* مسار للصفحات غير الموجودة */}
      </Routes>
    </Router>
  );
};

export default App;

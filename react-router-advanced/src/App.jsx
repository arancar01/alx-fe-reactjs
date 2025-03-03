// src/App.jsx

import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import Login from './components/Login';
import Profile from './components/Profile';
import NotFound from './components/NotFound';
import ProtectedRoute from './components/ProtectedRoute';
import BlogPost from './components/BlogPost';  // تأكد من استيراد مكون BlogPost بشكل صحيح

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="login" element={<Login />} />
        
        {/* مسار Profile محمي */}
        <Route 
          path="profile" 
          element={
            <ProtectedRoute> 
              <Profile />
            </ProtectedRoute>
          }
        />
        
        {/* مسار BlogPost ديناميكي */}
        <Route path="/blog/:id" element={<BlogPost />} />  {/* هنا نضيف مسار ديناميكي للمقالات */}
        
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
};

export default App;

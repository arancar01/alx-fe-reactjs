import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import Profile from './components/Profile';
import BlogPost from './components/BlogPost'; // تأكد من استيراد مكون BlogPost
import NotFound from './components/NotFound';
import ProtectedRoute from './components/ProtectedRoute'; // تأكد من استيراد ProtectedRoute

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        
        {/* مسار ProtectedRoute */}
        <Route path="profile" element={
          <ProtectedRoute>
            <Profile />
          </ProtectedRoute>
        } />

        {/* مسار blog/:id */}
        <Route path="blog/:id" element={<BlogPost />} /> {/* هنا يتم التعامل مع المدونات حسب المعرف */}
        
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
};

export default App;

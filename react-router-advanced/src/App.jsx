import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import Profile from './components/Profile';
import BlogPost from './components/BlogPost'; // استيراد مكون BlogPost
import NotFound from './components/NotFound';
import PrivateRoute from './components/PrivateRoute';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="profile/*" element={
          <PrivateRoute>
            <Profile />
          </PrivateRoute>
        } />
        <Route path="blog/:id" element={<BlogPost />} /> {/* إضافة مسار المدونة */}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
};

export default App;

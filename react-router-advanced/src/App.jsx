import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Profile from './components/Profile';
import NotFound from './components/NotFound';
import ProtectedRoute from './components/ProtectedRoute';
import BlogPost from './components/BlogPost';  // تأكد من أن الملف موجود

const App = () => {
  return (
    <Router>
      <Routes>
        <Route 
          path="/profile/*" 
          element={ 
            <ProtectedRoute>  
              <Profile /> 
            </ProtectedRoute> 
          } 
        />
        <Route path="/blog/:id" element={<BlogPost />} />  {/* إضافة المسار الديناميكي */}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
};

export default App;

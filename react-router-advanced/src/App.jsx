import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Profile from './components/Profile';  // تأكد من وجود الملف
import NotFound from './components/NotFound';
import ProtectedRoute from './components/ProtectedRoute';

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
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
};

export default App;

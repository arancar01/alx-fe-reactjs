import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Profile from './components/Profile';
import Home from './components/Home';
import UserProfile from './components/UserProfile';
import NotFound from './components/NotFound';
import PrivateRoute from './components/PrivateRoute';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="user/:id" element={<UserProfile />} />
        <Route path="profile/*" element={
          <PrivateRoute>
            <Profile />
          </PrivateRoute>
        } />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
};

export default App;

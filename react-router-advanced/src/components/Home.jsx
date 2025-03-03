// src/components/Home.jsx

import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div>
      <h2>Welcome to the Blog</h2>
      <Link to="/blog/1">Go to Blog Post 1</Link><br />
      <Link to="/blog/2">Go to Blog Post 2</Link>
    </div>
  );
};

export default Home;

import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';  // استيراد App.jsx
import './index.css';         // استيراد الأنماط العامة

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

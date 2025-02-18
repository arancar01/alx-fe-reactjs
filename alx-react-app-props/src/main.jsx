//import React from 'react';
//import ReactDOM from 'react-dom/client';
//import './index.css';
//import App from './App.jsx';
//
//createRoot(document.getElementById('root')).render(
//  <React.StrictMode>
//    <App />
//  </React.StrictMode>
//);
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';  // تضمين الأنماط العامة للتطبيق

// إضافة التطبيق داخل العنصر الذي يحمل id "root" في HTML
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

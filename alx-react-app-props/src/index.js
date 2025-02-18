import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App'; // استيراد التطبيق الرئيسي
import './index.css'; // إذا كان هناك ملف CSS لتنسيق التطبيق

// تحديد العنصر DOM الذي سيتم تحميل التطبيق فيه
const root = ReactDOM.createRoot(document.getElementById('root'));

// ربط التطبيق بـ DOM
root.render(<App />);

// src/components/BlogPost.jsx

import React from 'react';
import { useParams } from 'react-router-dom';

const BlogPost = () => {
  const { id } = useParams(); // الحصول على المعرف من الرابط

  // يمكنك هنا استخدام id لجلب بيانات المدونة من API أو مصدر بيانات آخر
  return (
    <div>
      <h2>Blog Post ID: {id}</h2>
      {/* هنا يمكن إضافة المزيد من المحتوى المتعلق بالمدونة مثل النص أو الصور */}
      <p>Details of blog post {id}...</p>
    </div>
  );
};

export default BlogPost;

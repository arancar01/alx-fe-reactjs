// src/components/BlogPost.jsx

import React from 'react';
import { useParams } from 'react-router-dom';

const BlogPost = () => {
  const { id } = useParams(); // الحصول على المعرف (ID) من الرابط

  return (
    <div>
      <h2>Blog Post ID: {id}</h2>
      {/* يمكنك هنا جلب تفاصيل المدونة من API أو بيانات ثابتة بناءً على المعرف */}
      <p>Details of blog post {id}...</p>
    </div>
  );
};

export default BlogPost;

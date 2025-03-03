import React from 'react';
import { useQuery } from '@tanstack/react-query';

// دالة لجلب البيانات من API
const fetchPosts = async () => {
  const response = await fetch('https://jsonplaceholder.typicode.com/posts');
  if (!response.ok) {
    throw new Error('Failed to fetch posts');
  }
  return response.json();
};

const PostsComponent = () => {
  // استخدام useQuery مع الخيارات الإضافية
  const { data, isError, error, isLoading, refetch } = useQuery({
    queryKey: ['posts'],
    queryFn: fetchPosts,
    cacheTime: 1000 * 60 * 5, // الاحتفاظ بالبيانات في الذاكرة لمدة 5 دقائق
    staleTime: 1000 * 60 * 2, // اعتبار البيانات غير قديمة بعد دقيقتين
    refetchOnWindowFocus: true, // إعادة الجلب عند العودة إلى النافذة
    keepPreviousData: true, // الحفاظ على البيانات السابقة أثناء جلب جديدة
  });

  if (isLoading) return <p>Loading posts...</p>;
  if (isError) return <p>Error: {error.message}</p>;

  return (
    <div>
      <h2>Posts</h2>
      <button onClick={() => refetch()}>Refetch Posts</button>
      <ul>
        {data.map((post) => (
          <li key={post.id}>
            <strong>{post.title}</strong>
            <p>{post.body}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default PostsComponent;

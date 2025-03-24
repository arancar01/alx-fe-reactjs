import React, { useEffect, useState } from "react";
import axios from "axios";

function App() {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    const fetchNews = async () => {
      const API_KEY = import.meta.env.VITE_NEWS_API_KEY;
      const today = new Date().toISOString().split("T")[0];
      const url = `https://newsapi.org/v2/everything?q=Apple&from=${today}&sortBy=popularity&apiKey=${API_KEY}`;

      try {
        const response = await axios.get(url);
        setArticles(response.data.articles);
      } catch (error) {
        console.error("فشل جلب الأخبار:", error);
      }
    };

    fetchNews();
  }, []);

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">أخبار Apple</h1>
      <ul className="space-y-4">
        {articles.map((article, index) => (
          <li key={index} className="border p-4 rounded">
            <a
              href={article.url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 font-semibold hover:underline"
            >
              {article.title}
            </a>
            <p className="text-sm text-gray-600">{article.description}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;

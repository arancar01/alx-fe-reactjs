import { useState, useEffect } from "react";
import {
  fetchTopHeadlines,
  fetchNewsByQuery,
} from "./services/githubService.js";
import Search from "./components/Search.jsx";

function App() {
  const [articles, setArticles] = useState([]);
  const [query, setQuery] = useState("");
  const [error, setError] = useState("");

  const getHeadlines = async () => {
    try {
      const newsArticles = await fetchTopHeadlines("us");
      setArticles(newsArticles);
      setError("");
    } catch {
      setError("Failed to fetch top headlines");
    }
  };

  const handleSearch = async () => {
    try {
      const searchResults = await fetchNewsByQuery(query);
      setArticles(searchResults);
      setError("");
    } catch {
      setError("Failed to fetch news for query");
    }
  };

  useEffect(() => {
    getHeadlines();
  }, []);

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-center mb-6 text-blue-600">
        📰 NewsAPI + GitHub User Search
      </h1>

      {/* 🔍 News Search Section */}
      <div className="bg-white shadow-md rounded p-4 mb-8">
        <h2 className="text-xl font-semibold mb-4 text-gray-700">
          Search News
        </h2>
        <div className="flex flex-col md:flex-row gap-2">
          <input
            type="text"
            placeholder="Search news..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            className="border p-2 rounded w-full"
          />
          <button
            onClick={handleSearch}
            className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded"
          >
            Search
          </button>
        </div>
        {error && <p className="text-red-500 mt-2">{error}</p>}
      </div>

      {/* 🧾 News Results */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-10">
        {articles.map((article, index) => (
          <div key={index} className="border rounded shadow-sm p-4 bg-white">
            <h2 className="text-lg font-semibold text-gray-800 mb-2">
              {article.title}
            </h2>
            <p className="text-gray-600 mb-2">{article.description}</p>
            <a
              href={article.url}
              target="_blank"
              className="text-blue-500 hover:underline"
            >
              Read more →
            </a>
          </div>
        ))}
      </div>

      {/* 👥 GitHub User Search */}
      <Search />
    </div>
  );
}

export default App;

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
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">NewsAPI - News Application</h1>

      <div className="mb-4">
        <input
          type="text"
          placeholder="Search news"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          className="border p-2 rounded mr-2"
        />
        <button
          onClick={handleSearch}
          className="bg-blue-500 text-white px-4 py-2 rounded"
        >
          Search
        </button>
      </div>

      {error && <p className="text-red-500">{error}</p>}

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {articles.map((article, index) => (
          <div key={index} className="border rounded p-4 shadow-md">
            <h2 className="text-lg font-semibold mb-2">{article.title}</h2>
            <p className="mb-2">{article.description}</p>
            <a
              href={article.url}
              target="_blank"
              className="text-blue-500 underline"
            >
              Read more
            </a>
          </div>
        ))}
      </div>

      <Search />
    </div>
  );
}

export default App;

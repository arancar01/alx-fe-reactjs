import { useState } from "react";
import { fetchUserData, advancedSearchUsers } from "../services/githubService";

const Search = () => {
  const [username, setUsername] = useState("");
  const [userData, setUserData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const [location, setLocation] = useState("");
  const [minRepos, setMinRepos] = useState("");
  const [searchResults, setSearchResults] = useState([]);

  const handleBasicSearch = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");
    setUserData(null);
    setSearchResults([]);

    try {
      const data = await fetchUserData(username);
      setUserData(data);
    } catch {
      setError("Looks like we cant find the user");
    } finally {
      setLoading(false);
    }
  };

  const handleAdvancedSearch = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");
    setUserData(null);
    setSearchResults([]);

    try {
      const users = await advancedSearchUsers(username, location, minRepos);
      if (users.length === 0) {
        setError("No users found with given criteria");
      } else {
        setSearchResults(users);
      }
    } catch {
      setError("Looks like we cant find the user");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="bg-white shadow-md p-6 rounded">
      <h2 className="text-2xl font-bold text-gray-800 mb-4">
        👤 GitHub User Search
      </h2>

      {/* 🔍 Basic Search */}
      <form onSubmit={handleBasicSearch} className="flex gap-2 mb-6">
        <input
          type="text"
          placeholder="Enter GitHub username"
          className="border p-2 rounded w-full"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <button
          type="submit"
          className="bg-blue-600 text-white px-4 py-2 rounded"
        >
          Search
        </button>
      </form>

      {/* 🧠 Advanced Search */}
      <h3 className="text-xl font-semibold mb-2 text-gray-700">
        Advanced Search
      </h3>
      <form
        onSubmit={handleAdvancedSearch}
        className="grid grid-cols-1 md:grid-cols-3 gap-3 mb-6"
      >
        <input
          type="text"
          placeholder="Username (optional)"
          className="border p-2 rounded"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <input
          type="text"
          placeholder="Location"
          className="border p-2 rounded"
          value={location}
          onChange={(e) => setLocation(e.target.value)}
        />
        <input
          type="number"
          placeholder="Minimum Repositories"
          className="border p-2 rounded"
          value={minRepos}
          onChange={(e) => setMinRepos(e.target.value)}
        />
        <button
          type="submit"
          className="col-span-full md:col-span-1 bg-green-600 text-white px-4 py-2 rounded"
        >
          Advanced Search
        </button>
      </form>

      {loading && <p>Loading...</p>}
      {error && <p className="text-red-500 mb-4">{error}</p>}

      {/* 👤 Basic User Info */}
      {userData && (
        <div className="border rounded p-4 bg-gray-50 mb-6">
          <img
            src={userData.avatar_url}
            alt="avatar"
            className="w-20 h-20 rounded-full mb-2"
          />
          <h2 className="text-xl font-bold">
            {userData.name || userData.login}
          </h2>
          <a
            href={userData.html_url}
            target="_blank"
            className="text-blue-500 underline"
          >
            Visit GitHub Profile
          </a>
        </div>
      )}

      {/* 🔁 List of Users from Advanced Search */}
      {searchResults.length > 0 && (
        <div className="grid grid-cols-1 gap-4">
          {searchResults.map((user) => (
            <div
              key={user.id}
              className="border rounded p-4 flex items-center bg-gray-50"
            >
              <img
                src={user.avatar_url}
                alt="avatar"
                className="w-16 h-16 rounded-full mr-4"
              />
              <div>
                <h2 className="text-lg font-semibold">{user.login}</h2>
                {user.location && <p>📍 {user.location}</p>}
                <p>📂 Repos: {user.public_repos}</p>
                <a
                  href={user.html_url}
                  target="_blank"
                  className="text-blue-500 underline"
                >
                  Visit Profile
                </a>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Search;

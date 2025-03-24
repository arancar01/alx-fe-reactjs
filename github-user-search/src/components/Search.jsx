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
    <div className="max-w-2xl mx-auto my-10 p-6 rounded shadow bg-gray-50">
      <h2 className="text-xl font-bold mb-4">🔍 Basic GitHub User Search</h2>
      <form onSubmit={handleBasicSearch} className="flex mb-6">
        <input
          type="text"
          placeholder="Enter GitHub username"
          className="border p-2 rounded w-full"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <button
          type="submit"
          className="ml-2 bg-blue-500 text-white px-4 py-2 rounded"
        >
          Search
        </button>
      </form>

      <h2 className="text-xl font-bold mb-4">🧠 Advanced Search</h2>
      <form
        onSubmit={handleAdvancedSearch}
        className="grid grid-cols-1 gap-4 mb-6"
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
          className="bg-green-600 text-white px-4 py-2 rounded"
        >
          Advanced Search
        </button>
      </form>

      {loading && <p>Loading...</p>}
      {error && <p className="text-red-500">{error}</p>}

      {userData && (
        <div className="border rounded p-4 mb-4">
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

      {searchResults.length > 0 && (
        <div className="space-y-4">
          {searchResults.map((user) => (
            <div key={user.id} className="border rounded p-4 flex items-center">
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

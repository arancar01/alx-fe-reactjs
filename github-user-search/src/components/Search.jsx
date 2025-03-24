import { useState } from "react";
import { fetchUserData } from "../services/githubService";

const Search = () => {
  const [username, setUsername] = useState("");
  const [userData, setUserData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");
    setUserData(null);

    try {
      const data = await fetchUserData(username);
      setUserData(data);
    } catch {
      setError("Looks like we can't find the user");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-md mx-auto my-10 p-6 rounded shadow">
      <form onSubmit={handleSubmit} className="flex mb-4">
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

      {loading && <p>Loading...</p>}

      {error && <p className="text-red-500">{error}</p>}

      {userData && (
        <div className="border rounded p-4">
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
    </div>
  );
};

export default Search;

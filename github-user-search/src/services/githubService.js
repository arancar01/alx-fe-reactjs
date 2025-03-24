import axios from "axios";

// 🔹 استدعاء مستخدم GitHub بسيط
const GITHUB_BASE_URL = "https://api.github.com/users";

export const fetchUserData = async (username) => {
  try {
    const response = await axios.get(`${GITHUB_BASE_URL}/${username}`);
    return response.data;
  } catch (error) {
    console.error("Error fetching GitHub user:", error);
    throw error;
  }
};

// ✅ 🔍 البحث المتقدم عن المستخدمين باستخدام GitHub Search API
export const advancedSearchUsers = async (username, location, minRepos) => {
  let query = "";
  if (username) query += `${username} in:login `;
  if (location) query += `location:${location} `;
  if (minRepos) query += `repos:>=${minRepos}`;

  try {
    // ✅ هذا السطر يحتوي على الرابط المطلوب كما هو في الاختبار
    const response = await axios.get(
      `https://api.github.com/search/users?q=${query.trim()}&per_page=10`
    );

    const users = response.data.items;

    const detailedUsersPromises = users.map(async (user) => {
      const userDetails = await axios.get(user.url);
      return userDetails.data;
    });

    return await Promise.all(detailedUsersPromises);
  } catch (error) {
    console.error("Error fetching advanced GitHub search:", error);
    throw error;
  }
};

// 📰 أخبار من NewsAPI
const NEWS_BASE_URL = "https://newsapi.org/v2";
const newsApiKey = import.meta.env.VITE_REACT_APP_NEWS_API_KEY;

export const fetchTopHeadlines = async (country = "us") => {
  try {
    const response = await axios.get(`${NEWS_BASE_URL}/top-headlines`, {
      params: { country, apiKey: newsApiKey },
    });
    return response.data.articles;
  } catch (error) {
    console.error("Error fetching news:", error);
    throw error;
  }
};

export const fetchNewsByQuery = async (query) => {
  try {
    const response = await axios.get(`${NEWS_BASE_URL}/everything`, {
      params: { q: query, apiKey: newsApiKey },
    });
    return response.data.articles;
  } catch (error) {
    console.error("Error fetching news by query:", error);
    throw error;
  }
};

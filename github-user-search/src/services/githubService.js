import axios from 'axios';

// GitHub API
const GITHUB_BASE_URL = 'https://api.github.com/users';

export const fetchUserData = async (username) => {
  try {
    const response = await axios.get(`${GITHUB_BASE_URL}/${username}`);
    return response.data;
  } catch (error) {
    console.error('Error fetching GitHub user:', error);
    throw error;
  }
};

// News API
const NEWS_BASE_URL = 'https://newsapi.org/v2';
const newsApiKey = import.meta.env.VITE_REACT_APP_NEWS_API_KEY;

export const fetchTopHeadlines = async (country = 'us') => {
  try {
    const response = await axios.get(`${NEWS_BASE_URL}/top-headlines`, {
      params: { country, apiKey: newsApiKey },
    });
    return response.data.articles;
  } catch (error) {
    console.error('Error fetching news:', error);
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
    console.error('Error fetching news by query:', error);
    throw error;
  }
};

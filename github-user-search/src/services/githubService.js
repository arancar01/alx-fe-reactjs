import axios from 'axios';

const BASE_URL = 'https://newsapi.org/v2';

const apiKey = import.meta.env.VITE_REACT_APP_NEWS_API_KEY;

export const fetchTopHeadlines = async (country = 'us') => {
  try {
    const response = await axios.get(`${BASE_URL}/top-headlines`, {
      params: {
        country,
        apiKey,
      },
    });
    return response.data.articles;
  } catch (error) {
    console.error('Error fetching news:', error);
    throw error;
  }
};

export const fetchNewsByQuery = async (query) => {
  try {
    const response = await axios.get(`${BASE_URL}/everything`, {
      params: {
        q: query,
        apiKey,
      },
    });
    return response.data.articles;
  } catch (error) {
    console.error('Error fetching news by query:', error);
    throw error;
  }
};

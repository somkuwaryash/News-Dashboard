import axios from 'axios';

const BASE_URL = 'https://newsapi.org/v2';
const API_KEY = '7e4775e2024e4fb7a963cf96bcd9af17';  

const fetchNews = async (category, pageSize = 10, page = 1) => {
    try {
        const endpoint = `${BASE_URL}/top-headlines?country=us&category=${category}&pageSize=${pageSize}&page=${page}&apiKey=${API_KEY}`;
        
        const response = await axios.get(endpoint);
        
        if (response.status === 200) {
            return response.data.articles;  
        }

        throw new Error('Failed to fetch news');

    } catch (error) {
        console.error("Error fetching news:", error);
        throw error;
    }
};

export { fetchNews };

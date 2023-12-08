
import axios from 'axios';

const API_URL = 'https://jsonplaceholder.typicode.com/posts';

export const fetchApiData = async () => {
  try {
    const response = await axios.get(API_URL);
    return response.data;
  } catch (error) {
    console.error('Error fetching data from the API:', error);
    throw error;
  }
};

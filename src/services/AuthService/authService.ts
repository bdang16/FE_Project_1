import axios from 'axios';

const API_URL = 'http://localhost:2214/auth/login'; 

const login = async (email, password) => {
  try {
    const response = await axios.post(API_URL, { email, password });
    return response.data; 
  } catch (error) {
    throw error; 
  }
};

export default {
  login,
};
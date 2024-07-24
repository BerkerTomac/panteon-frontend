import axios from 'axios';

export const login = async (credentials) => {
    const reponse = await axios.post('https://localhost:7281/api/user/login', credentials);
    return reponse
}

export const register = async (credentials) => {
    const response = await axios.post('https://localhost:7281/api/user/register', credentials);
    return response;
  };
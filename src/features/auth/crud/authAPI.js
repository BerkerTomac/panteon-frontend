// import axios from 'axios';

// export const login = async (credentials) => {
//     const reponse = await axios.post('https://localhost:7281/api/user/login', credentials);
//     return reponse
// }

// export const register = async (credentials) => {
//     const response = await axios.post('https://localhost:7281/api/user/register', credentials);
//     return response;
//   };


import axios from 'axios';

// Set the base URL for all requests
const BASE_URL = 'http://panteonbackend.runasp.net';

export const login = async (credentials) => {
  const response = await axios.post(`${BASE_URL}/api/user/login`, credentials);
  return response;
};

export const register = async (credentials) => {
  const response = await axios.post(`${BASE_URL}/api/user/register`, credentials);
  return response;
};

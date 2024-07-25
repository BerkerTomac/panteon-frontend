// import axios from 'axios';

// export const fetchConfigurationsAPI = async () => {
//   const response = await axios.get('https://localhost:7281/api/config/getconfig');
//   return response.data;
// };

// export const addConfigurationAPI = async (configuration) => {
//   const response = await axios.post('https://localhost:7281/api/config/addconfig', configuration);
//   return response.data;
// };

// export const fetchAvailableBuildingTypesAPI = async () => {
//   const response = await axios.get('https://localhost:7281/api/config/getavailable');
//   return response.data;
// };

import axios from 'axios';

// Set the base URL for all requests
const BASE_URL = 'http://panteonbackend.runasp.net';

export const fetchConfigurationsAPI = async () => {
  const response = await axios.get(`${BASE_URL}/api/config/getconfig`);
  return response.data;
};

export const addConfigurationAPI = async (configuration) => {
  const response = await axios.post(`${BASE_URL}/api/config/addconfig`, configuration);
  return response.data;
};

export const fetchAvailableBuildingTypesAPI = async () => {
  const response = await axios.get(`${BASE_URL}/api/config/getavailable`);
  return response.data;
};

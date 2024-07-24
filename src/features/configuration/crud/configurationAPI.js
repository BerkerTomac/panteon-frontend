import axios from 'axios';

export const fetchConfigurationsAPI = async () => {
  const response = await axios.get('https://localhost:7281/api/config/getconfig');
  return response.data;
};

export const addConfigurationAPI = async (configuration) => {
  const response = await axios.post('https://localhost:7281/api/config/addconfig', configuration);
  return response.data;
};

export const fetchAvailableBuildingTypesAPI = async () => {
  const response = await axios.get('https://localhost:7281/api/config/getavailable');
  return response.data;
};

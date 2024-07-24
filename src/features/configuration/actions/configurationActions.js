import { createAsyncThunk } from '@reduxjs/toolkit';
import { fetchConfigurationsAPI, addConfigurationAPI, fetchAvailableBuildingTypesAPI } from '../crud/configurationAPI';

export const fetchConfigurations = createAsyncThunk(
  'configuration/fetchConfigurations',
  async (_, { rejectWithValue }) => {
    try {
      const response = await fetchConfigurationsAPI();
      return response;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

export const addConfiguration = createAsyncThunk(
  'configuration/addConfiguration',
  async (configuration, { rejectWithValue }) => {
    try {
      const response = await addConfigurationAPI(configuration);
      return response;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

export const fetchAvailableBuildingTypes = createAsyncThunk(
  'configuration/fetchAvailableBuildingTypes',
  async (_, { rejectWithValue }) => {
    try {
      const response = await fetchAvailableBuildingTypesAPI();
      return response;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

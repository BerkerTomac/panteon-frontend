import { createSlice } from '@reduxjs/toolkit';
import { fetchConfigurations, addConfiguration, fetchAvailableBuildingTypes } from '../actions/configurationActions';

const configurationSlice = createSlice({
  name: 'configuration',
  initialState: {
    configurations: [],
    availableBuildingTypes: [],
    status: 'idle',
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchConfigurations.pending, (state) => {
        state.status = 'loading';
        state.error = null;
      })
      .addCase(fetchConfigurations.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.configurations = action.payload;
        state.error = null;
      })
      .addCase(fetchConfigurations.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.payload;
      })
      .addCase(addConfiguration.pending, (state) => {
        state.status = 'loading';
        state.error = null;
      })
      .addCase(addConfiguration.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.configurations.push(action.payload);
        state.error = null;
      })
      .addCase(addConfiguration.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.payload;
      })
      .addCase(fetchAvailableBuildingTypes.pending, (state) => {
        state.status = 'loading';
        state.error = null;
      })
      .addCase(fetchAvailableBuildingTypes.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.availableBuildingTypes = action.payload;
        state.error = null;
      })
      .addCase(fetchAvailableBuildingTypes.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.payload;
      });
  },
});

export default configurationSlice.reducer;

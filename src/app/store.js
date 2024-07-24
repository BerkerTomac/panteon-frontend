import { configureStore } from '@reduxjs/toolkit';
import authReducer from '../features/auth/slices/authSlice';
import configurationReducer from '../features/configuration/slices/configurationSlice';

export const store = configureStore({
  reducer: {
    auth: authReducer,
    configuration: configurationReducer,
  },
});

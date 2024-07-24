import { createAsyncThunk } from '@reduxjs/toolkit';
import { login, register
 } from '../crud/authAPI';

 export const loginUser = createAsyncThunk(
    'auth/loginUser',
    async (credentials, thunkAPI) => {
      try{
        const response = await login(credentials);
        return response.data;
      }
      catch(error){
        return thunkAPI.rejectWithValue(error.response.data);
    }
    }
 );

 export const registerUser = createAsyncThunk(
  'auth/registerUser',
  async ({ email, username, password }, { rejectWithValue }) => {
    try {
      const response = await register({ email, username, password });
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);
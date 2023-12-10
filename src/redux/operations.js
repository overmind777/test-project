import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

axios.defaults.baseURL = 'https://6570849509586eff66418af2.mockapi.io/';
axios.defaults.headers = { 'content-type': 'application/json' };

export const fetchAllCars = createAsyncThunk(
  'cars/fetchAll',
  async ({ page = 1, limit = 12 }, thunkApi) => {
    try {
      const { data } = await axios.get('adverts', {
        params: {
          page: page,
          limit: limit,
        },
      });
      return data;
    } catch (error) {
      return thunkApi.rejectWithValue(error.message);
    }
  }
);

export const fetchCarId = createAsyncThunk(
  'cars/fetchCarId',
  async ({ id }, thunkApi) => {
    try {
      const { data } = await axios.get(`adverts/id=${id}`, {});
      return data;
    } catch (error) {
      return thunkApi.rejectWithValue(error.message);
    }
  }
);

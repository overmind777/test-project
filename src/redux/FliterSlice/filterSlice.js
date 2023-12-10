import { createSlice } from '@reduxjs/toolkit';
import { fetchAllCars, fetchCarId } from '../operations';

const initialState = {
  cars: [],
  isLoading: false,
  error: false,
};

export const filterSlice = createSlice({
  name: 'filter',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(fetchAllCars.fulfilled, (state, { payload }) => {
        state.cars.push(...payload);
      })
      .addCase(fetchAllCars.pending, state => {
        state.isLoading = true;
      })
      .addCase(fetchAllCars.rejected, (state, { payload }) => {
        state.isLoading = false;
        state.error = payload;
      })
      .addCase(fetchCarId.fulfilled, (state, { payload }) => {
        state.cars = payload;
      });
  },
});

export const filterReducer = filterSlice.reducer;

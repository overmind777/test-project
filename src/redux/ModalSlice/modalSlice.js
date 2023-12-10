import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  car: [],
  isClosed: false,
};

export const modalSlice = createSlice({
  name: 'modal',
  initialState,
  reducers: {
    openModal(state) {
      state.isClosed = true;
    },
    closeModal(state) {
      state.isClosed = false;
    },
    addCar(state, { payload }) {
      state.car = payload;
    },
  },
});

export const { openModal, closeModal, addCar } = modalSlice.actions;

export const modalReducer = modalSlice.reducer;

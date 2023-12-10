import { createSlice } from '@reduxjs/toolkit';
import storage from 'redux-persist/lib/storage';
import persistReducer from 'redux-persist/es/persistReducer';

const initialState = {
  favorite: [],
};

export const favoritesSlice = createSlice({
  name: 'favorites',
  initialState,
  reducers: {
    addFavorite: (state, action) => {
      state.favorite.push(action.payload);
    },
    removeFavorite: (state, action) => {
      const updatedFavorites = state.favorite.filter(
        item => item.id !== action.payload.id
      );
      state.favorite = updatedFavorites;
    },
  },
});

const persistConfig = {
  key: 'favorites',
  storage,
  whitelist: ['favorite'],
};

export const favoriteCarsPersistReducer = persistReducer(
  persistConfig,
  favoritesSlice.reducer
);

export const { addFavorite, removeFavorite } = favoritesSlice.actions;

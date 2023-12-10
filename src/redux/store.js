import { configureStore, combineReducers } from '@reduxjs/toolkit';
import { filterReducer } from './FliterSlice/filterSlice';
import { modalReducer } from './ModalSlice/modalSlice';
import { favoriteCarsPersistReducer } from './Favorite/favoriteSlice';

import {
  persistStore,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';

const rootReducers = combineReducers({
  favorite: favoriteCarsPersistReducer,
  modal: modalReducer,
  filter: filterReducer,
});

export const store = configureStore({
  reducer: rootReducers,
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(store);

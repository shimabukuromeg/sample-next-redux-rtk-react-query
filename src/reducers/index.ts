import { combineReducers } from 'redux';
import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import authReducer from '../slices/auth';
import { setupListeners } from '@reduxjs/toolkit/query'
import { pokemonApi } from '../services/pokemon'
import { githubApi } from '../services/github'

export const rootReducer = combineReducers({
  auth: authReducer,
  [pokemonApi.reducerPath]: pokemonApi.reducer,
  [githubApi.reducerPath]: githubApi.reducer,
});

export type RootState = ReturnType<typeof rootReducer>;

const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['auth'],
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: getDefaultMiddleware({
    serializableCheck: {
      ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
    },
  }).concat([pokemonApi.middleware, githubApi.middleware]),
});

setupListeners(store.dispatch)

export const persistor = persistStore(store);

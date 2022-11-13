import { configureStore } from '@reduxjs/toolkit';
import { combineReducers } from 'redux';
import { filtersReducer } from './filter/slice';
import { tasksReducer } from './tasks/slice';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['tasks', 'filters'],
};
const rootReducer = combineReducers({
  tasks: tasksReducer,
  filters: filtersReducer,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
});

export const persistor = persistStore(store);

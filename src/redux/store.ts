import { configureStore } from '@reduxjs/toolkit';
import createFilter from 'redux-persist-transform-filter';
import playersSlice from './playersSlice';
import settingsSlice from './settingsSlice';

const saveMaxScoreAndNames = createFilter('', []);

const store = configureStore({
  reducer: {
    players: playersSlice,
    settings: settingsSlice,
  },
});

export default store;

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

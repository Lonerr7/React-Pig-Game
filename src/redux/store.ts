import { configureStore } from '@reduxjs/toolkit';
import playersSlice from './playersSlice';
import settingsSlice from './settingsSlice';

const store = configureStore({
  reducer: {
    players: playersSlice,
    settings: settingsSlice
  },
});

export default store;

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

import { configureStore } from '@reduxjs/toolkit';
import playersSlice from './playersSlice';

const store = configureStore({
  reducer: {
    players: playersSlice,
  },
});

window.store = store;
export default store;

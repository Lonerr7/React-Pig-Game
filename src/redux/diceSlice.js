import { createSlice } from '@reduxjs/toolkit';
import { startNewGame } from './playersSlice';

const diceSlice = createSlice({
  name: 'dice',
  initialState: {
    diceNumber: 0,
  },
  reducers: {
    
  },
  extraReducers: (builder) => {
    builder.addCase(startNewGame, (state) => {
      state.diceNumber = 0;
    });
  },
});

export const { rollDice } = diceSlice.actions;
export default diceSlice.reducer;

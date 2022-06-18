import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { holdPlayerScore } from '../helpers/helpers';
import { PlayersState } from '../types/types';

const initialState: PlayersState = {
  players: [
    { id: 1, score: 0, currentScore: 0, isActive: true },
    { id: 2, score: 0, currentScore: 0, isActive: false },
  ],
  activePlayer: 0,
  diceNumber: 0,
  limit: 40,
  isGameOver: false,
  isEditing: false,
  diceRolls: 0,
};

const playersSlice = createSlice({
  name: 'players',
  initialState,
  reducers: {
    rollDice(state) {
      state.diceNumber = Math.floor(Math.random() * 6) + 1;
      state.diceRolls += 1;
      state.players[state.activePlayer].currentScore += state.diceNumber;

      if (state.diceNumber === 1) {
        holdPlayerScore(state);
      }
    },
    holdScore(state) {
      state.players[state.activePlayer].score +=
        state.players[state.activePlayer].currentScore;
      if (state.players[state.activePlayer].score >= state.limit) {
        state.isGameOver = true;
      }
      holdPlayerScore(state);
    },
    startNewGame(state) {
      state.players = [
        { id: 1, score: 0, currentScore: 0, isActive: true },
        { id: 2, score: 0, currentScore: 0, isActive: false },
      ];
      state.isGameOver = false;
      state.diceRolls = 0;
    },
    changeMaxScore(state, action: PayloadAction<number>) {
      state.limit = action.payload;
    },
  },
});

export const { holdScore, startNewGame, rollDice, changeMaxScore } =
  playersSlice.actions;
export default playersSlice.reducer;

import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { SettingsState } from '../types/types';

const initialState: SettingsState = {
  isOpened: false,
  isInputVisible: false,
  errorMessage: '',
};

const settingsSlice = createSlice({
  name: 'settings',
  initialState,
  reducers: {
    openSettings(state) {
      state.isOpened = true;
    },
    closeSettings(state) {
      state.isOpened = false;
      state.isInputVisible = false;
    },
    openScoreInput(state) {
      state.isInputVisible = true;
    },
    closeScoreInput(state) {
      state.isInputVisible = false;
    },
    displayErrorMessage(state, action: PayloadAction<string>) {
      state.errorMessage = action.payload;
    },
  },
});

export const {
  openSettings,
  closeSettings,
  openScoreInput,
  displayErrorMessage,
  closeScoreInput
} = settingsSlice.actions;
export default settingsSlice.reducer;

export const holdPlayerScore = (state) => {
  state.players[state.activePlayer].currentScore = 0;

  if (state.activePlayer === 0) {
    state.activePlayer = 1;
    state.players[0].isActive = false;
    state.players[1].isActive = true;
  } else if (state.activePlayer === 1) {
    state.activePlayer = 0;
    state.players[1].isActive = false;
    state.players[0].isActive = true;
  }
};

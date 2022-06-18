export type Player = {
  id: number;
  score: number;
  currentScore: number;
  isActive: boolean;
};

export type PlayersState = {
  players: Player[];
  activePlayer: number;
  diceNumber: number;
  limit: number;
  isGameOver: boolean;
  isEditing: boolean;
  diceRolls: number;
};

export type SettingsState = {
  isOpened: boolean;
  isInputVisible: boolean;
  errorMessage: string;
};

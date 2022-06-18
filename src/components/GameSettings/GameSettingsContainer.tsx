import { useState } from 'react';
import { useAppDispatch, useAppSelector } from '../../hooks/hooks';
import GameSettings from './GameSettings';
import {
  closeSettings,
  displayErrorMessage,
  openScoreInput,
} from '../../redux/settingsSlice';
import { changeMaxScore } from '../../redux/playersSlice';

const GameSettingsContainer = () => {
  const dispatch = useAppDispatch();
  const {isInputVisible, errorMessage} = useAppSelector(
    (state) => state.settings
  );
  const maxScore = useAppSelector((state) => state.players.limit);

  const [value, changeValue] = useState(maxScore);

  const closeSettingsHandler = () => {
    dispatch(closeSettings());
  };

  const openScoreInputHandler = () => {
    dispatch(openScoreInput());
  };

  const inputChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    changeValue(+e.target.value);
  };

  const setNewMaxScoreHandler = (newScore: number) => {
    try {
      if (newScore >= 1 && newScore <= 100) {
        dispatch(changeMaxScore(newScore));
      } else {
        throw new Error('Number must be in a range from 1 to 100!');
      }
    } catch (error: any) {
      dispatch(displayErrorMessage(error.message));
    } finally {
      setTimeout(() => {
        dispatch(displayErrorMessage(''));
      }, 5000);
    }
  };

  return (
    <GameSettings
      maxScore={maxScore}
      onSettingsClose={closeSettingsHandler}
      isInputVisible={isInputVisible}
      inputValue={value}
      onInputChange={inputChangeHandler}
      onScoreInputOpen={openScoreInputHandler}
      setNewMaxScore={setNewMaxScoreHandler}
      errorMessage={errorMessage}
    />
  );
};

export default GameSettingsContainer;

import React, { useState } from 'react';
import { useAppDispatch, useAppSelector } from '../../../hooks/hooks';
import { changePlayerName } from '../../../redux/playersSlice';
import PlayersSettings from './PlayersSettings';

const PlayersSettingsContainer = () => {
  const dispatch = useAppDispatch();
  const name1 = useAppSelector((state) => state.players.players[0].name);
  const name2 = useAppSelector((state) => state.players.players[1].name);

  const [player1Name, setPlayer1Name] = useState(name1);
  const [player2Name, setPlayer2Name] = useState(name2);

  const changePlayer1NameHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPlayer1Name(e.target.value);
  };
  const changePlayer2NameHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPlayer2Name(e.target.value);
  };
  const setNewPlayer1NameHandler = () => {
    dispatch(changePlayerName({ newName: player1Name, position: 0 }));
  };
  const setNewPlayer2NameHandler = () => {
    dispatch(changePlayerName({ newName: player2Name, position: 1 }));
  };

  return (
    <PlayersSettings
      titleValues={{ name1, name2 }}
      inputValues={{ player1Name, player2Name }}
      onName1Change={changePlayer1NameHandler}
      onName2Change={changePlayer2NameHandler}
      onNewName1Set={setNewPlayer1NameHandler}
      onNewName2Set={setNewPlayer2NameHandler}
    />
  );
};

export default PlayersSettingsContainer;

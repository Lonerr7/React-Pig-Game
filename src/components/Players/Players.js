import React from 'react';
import { useSelector } from 'react-redux';
import Player from '../Player/Player';
import s from './Players.module.scss';

const Players = () => {
  const players = useSelector((state) => state.players.players);

  const elements = players.map((p) => (
    <Player
      key={p.id}
      currentScore={p.currentScore}
      id={p.id}
      score={p.score}
      active={p.isActive}
    />
  ));

  return <div className={s.players}>{elements}</div>;
};

export default Players;

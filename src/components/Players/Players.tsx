import { useAppSelector } from '../../hooks/hooks';
import Player from '../Player/Player';
import s from './Players.module.scss';

const Players: React.FC = () => {
  const players = useAppSelector((state) => state.players.players);

  const elements = players.map((p) => (
    <Player
      key={p.id}
      currentScore={p.currentScore}
      score={p.score}
      active={p.isActive}
      name={p.name}
    />
  ));

  return <div className={s.players}>{elements}</div>;
};

export default Players;

import NewGameBtn from '../common/NewGameBtn/NewGameBtn';
import s from './GameOver.module.scss';

type GameOverProps = {
  activePlayer: number;
};

const GameOver: React.FC<GameOverProps> = ({ activePlayer }) => {
  const winner = activePlayer === 0 ? 2 : 1;

  return (
    <div className={s.gameOver}>
      <p className={s.gameOver__title}>Game is Over! Player {winner} wins!</p>
      <NewGameBtn />
    </div>
  );
};

export default GameOver;

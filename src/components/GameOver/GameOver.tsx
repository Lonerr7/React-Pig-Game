import { startNewGame } from '../../redux/playersSlice';
import { Player } from '../../types/types';
import NewGameBtn from '../common/UtilityBtn/UtilityBtn';
import s from './GameOver.module.scss';

type GameOverProps = {
  activePlayer: number;
  players: Player[];
};

const GameOver: React.FC<GameOverProps> = ({ activePlayer, players }) => {
  const winner = activePlayer === 0 ? 2 : 1;
  const winnerIdx = activePlayer === 0 ? 1 : 0;

  return (
    <div className={s.gameOver}>
      <p className={s.gameOver__title}>
        Game is Over! Player {winner} wins with score {players[winnerIdx].score}{' '}
      </p>
      <NewGameBtn title="🔄 New Game" actionCreator={startNewGame} />
    </div>
  );
};

export default GameOver;

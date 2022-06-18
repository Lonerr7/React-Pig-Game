import s from './Controls.module.scss';
import { rollDice, startNewGame } from '../../redux/playersSlice';
import { holdScore } from '../../redux/playersSlice';
import UtilityBtn from '../common/UtilityBtn/UtilityBtn';
import { useAppDispatch, useAppSelector } from '../../hooks/hooks';

const Controls: React.FC = () => {
  const dispatch = useAppDispatch();
  const { diceNumber } = useAppSelector((state) => state.players);

  return (
    <div className={s.controls}>
      <div className={s.controls__topBox}>
        <UtilityBtn title="🔄 New Game" actionCreator={startNewGame} />
      </div>
      {diceNumber ? (
        <img
          className={s.controls__dice}
          src={require(`../../assets/images/dice-${diceNumber}.png`)}
          alt="dice"
        />
      ) : (
        ''
      )}
      <div className={s.controls__btnBox}>
        <button
          className={s.controls__btn}
          onClick={() => dispatch(rollDice())}
        >
          🎲 Roll Dice
        </button>
        <button
          className={s.controls__btn}
          onClick={() => dispatch(holdScore())}
        >
          📥 Hold
        </button>
      </div>
    </div>
  );
};

export default Controls;

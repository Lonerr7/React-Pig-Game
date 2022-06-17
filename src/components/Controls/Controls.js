import s from './Controls.module.scss';
import { rollDice } from '../../redux/playersSlice';
import { useDispatch, useSelector } from 'react-redux';
import { holdScore } from '../../redux/playersSlice';
import NewGameBtn from '../common/NewGameBtn/NewGameBtn';
const Controls = () => {
  const dispatch = useDispatch();
  const diceNumber = useSelector((state) => state.players.diceNumber);

  return (
    <div className={s.controls}>
      <NewGameBtn />
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

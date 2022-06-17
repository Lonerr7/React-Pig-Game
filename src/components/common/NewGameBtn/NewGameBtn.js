import { useDispatch } from 'react-redux';
import { startNewGame } from '../../../redux/playersSlice';
import s from './NewGameBtn.module.scss';

const NewGameBtn = () => {
  const dispatch = useDispatch();

  return (
    <button className={s.newGameBtn} onClick={() => dispatch(startNewGame())}>
      🔄 New Game
    </button>
  );
};

export default NewGameBtn;

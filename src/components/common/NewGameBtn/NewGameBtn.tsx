import { useAppDispatch } from '../../../hooks/hooks';
import { startNewGame } from '../../../redux/playersSlice';
import s from './NewGameBtn.module.scss';

const NewGameBtn: React.FC = () => {
  const dispatch = useAppDispatch();

  return (
    <button className={s.newGameBtn} onClick={() => dispatch(startNewGame())}>
      🔄 New Game
    </button>
  );
};

export default NewGameBtn;

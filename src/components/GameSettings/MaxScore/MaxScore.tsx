import s from './MaxScore.module.scss';
import { BsPencil } from 'react-icons/bs';
import { TiTick } from 'react-icons/ti';

type MaxScoreProps = {
  maxScore: number;
  otherProps: {
    isInputVisible: boolean;
    inputValue: number;
    onInputChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    onScoreInputOpen: () => void;
    setNewMaxScore: (newScore: number) => void;
    errorMessage: string;
  };
};

const MaxScore: React.FC<MaxScoreProps> = ({ maxScore, otherProps }) => {
  const {
    isInputVisible,
    onScoreInputOpen,
    inputValue,
    onInputChange,
    setNewMaxScore,
    errorMessage,
  } = otherProps;

  return (
    <div className={s.maxScore}>
      <p className={s.maxScore__title}>
        Max Game Score: <span>{maxScore}</span>
      </p>
      {isInputVisible ? (
        <div className={s.maxScore__inputBox}>
          <input
            className={s.maxScore__input}
            type="number"
            value={inputValue}
            onChange={onInputChange}
          />
          <button
            className={s.maxScore__inputBtn}
            onClick={() => {
              setNewMaxScore(inputValue);
            }}
          >
            <TiTick size={20} />
          </button>
        </div>
      ) : (
        <button className={s.maxScore__btn} onClick={onScoreInputOpen}>
          <BsPencil size={15} />
        </button>
      )}
      {errorMessage ? (
        <p className={s.maxScore__errorMessage}>{errorMessage}</p>
      ) : (
        ''
      )}
    </div>
  );
};

export default MaxScore;

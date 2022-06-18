import s from './GameSettings.module.scss';

type GameSettingsProps = {
  classItem?: string;
  maxScore: number;
  onSettingsClose: () => void;
  isInputVisible: boolean;
  inputValue: number;
  onInputChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onScoreInputOpen: () => void;
  setNewMaxScore: (newScore: number) => void;
  errorMessage: string;
};

const GameSettings: React.FC<GameSettingsProps> = ({
  classItem,
  maxScore,
  onSettingsClose,
  isInputVisible,
  inputValue,
  onInputChange,
  onScoreInputOpen,
  setNewMaxScore,
  errorMessage,
}) => {
  return (
    <div className={`${s.gameSettings} ${classItem}`}>
      <button className={s.gameSettings__cross} onClick={onSettingsClose}>
        ✖
      </button>
      <div className={s.gameSettings__scoreBox}>
        <p className={s.gameSettings__maxScore}>Max score: {maxScore}</p>

        <div className={s.gameSettings__scoreControls}>
          {isInputVisible ? (
            <>
              <div className={s.gameSettings__scoreControlsBox}>
                <input
                  className={s.gameSettings__scoreInput}
                  type="number"
                  max={100}
                  min={1}
                  value={inputValue}
                  onChange={onInputChange}
                />
                <button
                  className={s.gameSettings__scoreSubmit}
                  onClick={() => setNewMaxScore(inputValue)}
                >
                  ✔
                </button>
              </div>
              {errorMessage ? (
                <p className={s.gameSettings__scoreError}>{errorMessage}</p>
              ) : (
                ''
              )}
            </>
          ) : (
            <button
              className={s.gameSettings__changeScoreBtn}
              onClick={onScoreInputOpen}
            >
              Change Max Score
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default GameSettings;

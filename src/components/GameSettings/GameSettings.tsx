import s from './GameSettings.module.scss';
import MaxScore from './MaxScore/MaxScore';
import PlayersSettingsContainer from './PlayersSettings/PlayersSettingsContainer';

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
      <MaxScore
        maxScore={maxScore}
        otherProps={{
          isInputVisible,
          inputValue,
          onInputChange,
          onScoreInputOpen,
          setNewMaxScore,
          errorMessage,
        }}
      />
      <PlayersSettingsContainer />
    </div>
  );
};

export default GameSettings;

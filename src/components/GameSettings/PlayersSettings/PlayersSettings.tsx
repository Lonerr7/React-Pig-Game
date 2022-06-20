import PlayerSettingsField from './PlayerSettingsField/PlayerSettingsField';
import s from './PlayersSettings.module.scss';

type PlayersSettingsProps = {
  titleValues: {
    name1: string;
    name2: string;
  };
  inputValues: {
    player1Name: string;
    player2Name: string;
  };
  onName1Change: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onName2Change: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onNewName1Set: () => void;
  onNewName2Set: () => void;
};

const PlayersSettings: React.FC<PlayersSettingsProps> = ({
  titleValues,
  inputValues,
  onName1Change,
  onName2Change,
  onNewName1Set,
  onNewName2Set,
}) => {
  const { name1, name2 } = titleValues;
  const { player1Name, player2Name } = inputValues;

  return (
    <div className={s.playersSettings}>
      <h4 className={s.playersSettings__title}>Players Settings</h4>
      <ul className={s.playersSettings__list}>
        <PlayerSettingsField
          title="Player 1 Name: "
          titleValue={name1}
          inputValue={player1Name}
          onInputChange={onName1Change}
          onNewNameSet={onNewName1Set}
        />
        <PlayerSettingsField
          title="Player 2 Name: "
          titleValue={name2}
          inputValue={player2Name}
          onInputChange={onName2Change}
          onNewNameSet={onNewName2Set}
        />
      </ul>
    </div>
  );
};

export default PlayersSettings;

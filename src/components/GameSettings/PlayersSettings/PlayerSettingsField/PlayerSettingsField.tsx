import s from './PlayerSettingsField.module.scss';
import { TiTick } from 'react-icons/ti';

type PlayerSettingsFieldProps = {
  title: string;
  titleValue: string;
  inputValue: string;
  onInputChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onNewNameSet: () => void;
};

const PlayerSettingsField: React.FC<PlayerSettingsFieldProps> = ({
  title,
  titleValue,
  inputValue,
  onInputChange,
  onNewNameSet,
}) => {
  return (
    <li className={s.playerSettingsField}>
      <p className={s.playerSettingsField__title}>
        {title}
        <span>{titleValue}</span>
      </p>
      <div className={s.playerSettingsField__controls}>
        <input
          className={s.playerSettingsField__input}
          type="text"
          value={inputValue}
          onChange={onInputChange}
        />
        <button className={s.playerSettingsField__btn} onClick={onNewNameSet}>
          <TiTick size={20} />
        </button>
      </div>
    </li>
  );
};

export default PlayerSettingsField;

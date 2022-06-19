import './App.scss';
import UtilityBtn from './components/common/UtilityBtn/UtilityBtn';
import Controls from './components/Controls/Controls';
import GameOver from './components/GameOver/GameOver';
import GameSettingsContainer from './components/GameSettings/GameSettingsContainer';
import Players from './components/Players/Players';
import { useAppSelector } from './hooks/hooks';
import { openSettings } from './redux/settingsSlice';

const App: React.FC = () => {
  const { isGameOver, activePlayer, players } = useAppSelector(
    (state) => state.players
  );
  const isSettingsOpen = useAppSelector((state) => state.settings.isOpened);
  const diceRolls = useAppSelector((state) => state.players.diceRolls);

  return (
    <div className="App">
      {!diceRolls ? (
        <UtilityBtn
          title="⚙ Settings"
          classProp={isSettingsOpen ? 'absolute active' : 'absolute'}
          actionCreator={openSettings}
        />
      ) : (
        ''
      )}
      {isSettingsOpen ? (
        <GameSettingsContainer />
      ) : (
        <div className="App__inner">
          {isGameOver ? (
            <GameOver activePlayer={activePlayer} players={players} />
          ) : (
            <>
              <Players />
              <Controls />
            </>
          )}
        </div>
      )}
    </div>
  );
};

export default App;

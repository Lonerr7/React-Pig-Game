import './App.scss';
import Controls from './components/Controls/Controls';
import GameOver from './components/GameOver/GameOver';
import Players from './components/Players/Players';
import { useAppSelector } from './hooks/hooks';

const App: React.FC = () => {
  const { isGameOver, activePlayer } = useAppSelector((state) => state.players);

  return (
    <div className="App">
      <div className="App__inner">
        {isGameOver ? (
          <GameOver activePlayer={activePlayer} />
        ) : (
          <>
            <Players />
            <Controls />
          </>
        )}
      </div>
    </div>
  );
};

export default App;

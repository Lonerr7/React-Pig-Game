import './App.scss';
import Controls from './components/Controls/Controls';
import Player from './components/Player/Player';

function App() {
  return (
    <div className="App">
      <div className="App__inner">
        <Player id="1" score={0} currentScore="0" />
        <Player id="2" score={0} currentScore="0" />
        <Controls />
      </div>
    </div>
  );
}

export default App;

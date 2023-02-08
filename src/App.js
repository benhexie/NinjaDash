import { useState } from 'react';
import './App.css';
import Game from './components/Game';
import Header from './components/Header';

function App() {
  const [started, setStarted] = useState(false)

  return (
    <div className="App">
      <Header />
      <Game 
        started={started}
        setStarted={setStarted}
      />
    </div>
  );
}

export default App;

import React from 'react';
import { Deck } from './components/Deck';
import { slides } from './slides';

function App() {
  return (
    <div className="App" style={{ width: '100%', height: '100%' }}>
      <Deck slides={slides} />
    </div>
  );
}

export default App;

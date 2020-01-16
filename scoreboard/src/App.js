import React, { useState } from 'react';
import Display from './components/Display';
import Dashboard from './components/Dashboard';

function App() {
  const [balls, setBallCount] = useState(0);
  const [strikes, setStrikeCount] = useState(0);

  return (
    <div className="App">
      <Display 
        balls={balls}
        strikes={strikes}
      />
      <Dashboard 
        balls={balls}
        strikes={strikes}
        setBallCount={setBallCount}
        setStrikeCount={setStrikeCount}
      />
    </div>
  );
}

export default App;

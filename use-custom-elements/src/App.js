import React from 'react';
import './custom-elements/counter';
import './custom-elements/greet';
import './App.css';

function App() {
  return (
    <div className="App">
      <x-greet name="Mark" />
      <x-counter />
    </div>
  );
}

export default App;

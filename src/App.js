import React from 'react';
import './App.css';

import Demo from './Demo.svelte';
customElements.define('x-greet', Demo);

function App() {
  return (
    <div className="App">
      {/* <x-greet name="Mark" /> */}
      <x-greet />
    </div>
  );
}

export default App;

import React from 'react';
import './App.css';
import './web-components.js';

//import Demo from './Demo.svelte';
//customElements.define('x-greet', Demo);

function App() {
  return (
    <div className="App">
      <x-greet />
      <x-greet name="Mark" />
      <x-counter />
    </div>
  );
}

export default App;

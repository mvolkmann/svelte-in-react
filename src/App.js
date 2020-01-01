import React from 'react';
import './App.css';
import './web-components.js';

//import Demo from './Demo.svelte';
//customElements.define('x-greet', Demo);

function App() {
  const favorites = {color: 'yellow', number: 19};
  return (
    <div className="App">
      <x-greet />
      <x-greet name="Mark" />
      <x-counter />
      <take-object title="Favorites" obj={favorites} />
    </div>
  );
}

export default App;

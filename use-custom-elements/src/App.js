import React from 'react';
import './custom-elements/Counter';
import './custom-elements/Greet';
import './custom-elements/TakeObject';
import './App.css';

function App() {
  const obj = {
    foo: 1,
    bar: 'baz'
  };
  return (
    <div className="App">
      <x-greet name="Mark" />
      <x-counter />
      <!-- Can't pass an object from React to a custom element! -->
      <x-take-object title="My Object" obj={obj} />
    </div>
  );
}

export default App;

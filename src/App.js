import React from 'react';
import ReactDOM from 'react-dom';
import Setlist from './Setlist.js';
import './App.css';

function displaySets() {
  const element = <Setlist></Setlist>
  ReactDOM.render(element, document.getElementById('App-sets'));
  ReactDOM.render(element, document.getElementById('App-cards'));
}

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <button value="Display Sets"
          onClick={displaySets}
        >Display Sets</button>
      </header>
      <div id="App-content" className="App-content">
        <div id="App-sets" className="App-sets"></div>
        <div id="App-cards" className="App-cards"></div>
      </div>
    </div>
  );
}

export default App;

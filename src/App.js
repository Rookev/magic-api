import React from 'react';
import ReactDOM from 'react-dom';
import Setlist from './Setlist.js';
import Cardlist from './Cardlist.js';
import './App.css';

function displaySets() {
  const setlist = <Setlist></Setlist>
  ReactDOM.render(setlist, document.getElementById('App-sets'));

  const cardlist = <Cardlist></Cardlist>
  ReactDOM.render(cardlist, document.getElementById('App-cards'));
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

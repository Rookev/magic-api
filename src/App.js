import React from 'react';
import ReactDOM from 'react-dom';
import AppContent from './AppContent.js';
import './App.css';

function displayAppContent() {
  const appContent = <AppContent></AppContent>;
  ReactDOM.render(appContent, document.getElementById('App-content'));
}

function App() {
  return (
    <div className="App">
      <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap" />
      <link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons" />
      <header className="App-header">
        <button value="Display Sets"
          onClick={displayAppContent}
        >Display Sets</button>
      </header>
      <div id="App-content" className="App-content"></div>
    </div>
  );
}

export default App;

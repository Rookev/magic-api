import React from 'react';
import ReactDOM from 'react-dom';
import AppContent from './AppContent.js';
import './App.css';
import Button from '@material-ui/core/Button';

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
        <Button variant="contained" color="primary" onClick={displayAppContent}>
          Display Sets
        </Button>
      </header>
      <div id="App-content" className="App-content"></div>
    </div>
  );
}

export default App;

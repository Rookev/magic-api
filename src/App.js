import React from 'react';
import ReactDOM from 'react-dom';
import AppContent from './AppContent.js';
import './App.css';
import Button from '@material-ui/core/Button';
import Container from '@material-ui/core/Container';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';

function displayAppContent() {
  const appContent = <AppContent></AppContent>;
  ReactDOM.render(appContent, document.getElementById('App-content'));
}

function App() {
  return (
    <div className="App">
      <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap" />
      <link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons" />
      <Container maxWidth="100%">
      
      <AppBar position="static">
        <Toolbar>
        <Button variant="contained" color="primary" onClick={displayAppContent}>
          Display Sets
        </Button>
  </Toolbar>
</AppBar>




      <div id="App-content" className="App-content"></div>
      </Container>
    </div>
  );
}

export default App;

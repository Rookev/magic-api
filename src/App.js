import React from 'react';
import ReactDOM from 'react-dom';
import './App.css';
import Button from '@material-ui/core/Button';
import Container from '@material-ui/core/Container';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Setlist from './Setlist.js';
import Cardlist from './Cardlist.js';
import Grid from '@material-ui/core/Grid';

function loadSets() {
  const setlist = <Setlist onSetClicked={handleSetClicked}></Setlist>
  ReactDOM.render(setlist, document.getElementById('App-sets'));
}

function handleSetClicked(code, event) {
  var cardlist = <Cardlist set={code}></Cardlist>;
  ReactDOM.render(cardlist, document.getElementById("App-cards"));
}

function App() {
  return (
    <div className="App">
      <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap" />
      <link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons" />
      <Container maxWidth="100%">

        <Grid container direction="column" justify="flex-start" alignItems="stretch">

          <AppBar position="sticky" color="default">
            <Toolbar>
              <Button variant="contained" onClick={loadSets}>
                Load Sets
            </Button>
              <div id="App-sets" className="App-sets"></div>
            </Toolbar>
          </AppBar>

          <div id="App-content" className="App-content">
            <Grid container direction="row" justify="center" alignItems="flex-start" spacing={3}>
              <Grid item xs={12}>
                <div id="App-cards" className="App-cards">
                </div>
              </Grid>
            </Grid>
          </div>

        </Grid>

      </Container>
    </div>
  );
}

export default App;

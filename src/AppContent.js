import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Setlist from './Setlist.js';
import Cardlist from './Cardlist.js';
import Grid from '@material-ui/core/Grid';

class AppContent extends Component {
  handleSetClicked(code, event) {
    var cardlist = <Cardlist set={code}></Cardlist>;
    ReactDOM.render(cardlist, document.getElementById("App-cards"));
  }

  render() {
    return (

      <div id="App-content" className="App-content">
        <Grid
          container
          direction="row"
          justify="center"
          alignItems="flex-start"
          spacing={3}
        >
          <Grid item xs={2}>
            <div id="App-sets" className="App-sets">
              <Setlist onSetClicked={this.handleSetClicked}></Setlist>
            </div>
          </Grid>


          <Grid item xs={10}>
            <div id="App-cards" className="App-cards">
            </div>
          </Grid>


        </Grid>
      </div>
    );
  }
}

export default AppContent;
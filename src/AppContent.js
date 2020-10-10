import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Setlist from './Setlist.js';
import Cardlist from './Cardlist.js';

class AppContent extends Component {
  handleSetClicked(code, event) {
    console.log("AppContent: Set clicked!");

    var cardlist = <Cardlist set={code}></Cardlist>;
    ReactDOM.render(cardlist, document.getElementById("App-cards"));
  }

  render() {
    return (
      <div id="App-content" className="App-content">
        <div id="App-sets" className="App-sets">
          <Setlist onSetClicked={this.handleSetClicked}></Setlist>
        </div>

        <div id="App-cards" className="App-cards">

        </div>
      </div>
    );
  }
}

export default AppContent;
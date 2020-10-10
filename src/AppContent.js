import React, { Component } from 'react';
import Setlist from './Setlist.js';
import Cardlist from './Cardlist.js';

class AppContent extends Component {
  render() {
    return (
      <div id="App-content" className="App-content">
        <div id="App-sets" className="App-sets">
          <Setlist></Setlist>
        </div>

        <div id="App-cards" className="App-cards">
          <Cardlist></Cardlist>
        </div>
      </div>
    );
  }
}

export default AppContent;
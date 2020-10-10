import React, { Component } from 'react';

class Cardlist extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoaded: false,
      cards: undefined
    };
  }

  render() {
    if (!this.state.isLoaded) {
      return <h1>I am an unloaded Cardlist! :-(</h1>
    }

    else {
      return <h1>I am a loaded Cardlist! :-)</h1>
    }
  }
}

export default Cardlist;
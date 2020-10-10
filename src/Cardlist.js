import React, { Component } from 'react';
import cardAPI from './CardAPI.js'

class Cardlist extends Component {
  constructor(props) {
    super(props);
    var isSetProvided = props.set !== undefined;
    if (isSetProvided) {
      this.state = {
        isLoaded: true,
        set: props.set,
        cards: "123"
      };
    }

    else {
      this.state = {
        isLoaded: false,
        set: props.set,
        cards: undefined
      };
    }
  }

  render() {
    if (!this.state.isLoaded) {
      return <h1>I am an unloaded Cardlist :-( (Set: {this.props.set})</h1>
    }

    else {
      return <h1>I am a loaded Cardlist! :-) (Set: {this.props.set})</h1>
    }
  }
}

export default Cardlist;
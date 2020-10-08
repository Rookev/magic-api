import React, { Component } from 'react';

class Setlist extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoaded: false,
      items: undefined
    };
    this.loadSets();
  }

  loadSets() {
    fetch("https://api.scryfall.com/sets")
      .then(res => res.json())
      .then(
        (result) => {
          this.setState({
            isLoaded: true,
            items: result.data
          });
        },
        (error) => {
          this.setState({
            isLoaded: true,
            error
          });
        }
      )
  }

  buildSetlist() {
    var elements = this.state.items;
    return (
      <ul>
        {elements.map((value, index) => {
          return <li key={value.code}><img src={value.icon_svg_uri} alt={value.code} width={20} height={20} /><span>{" " + value.name}</span></li>
        })}
      </ul>
    );
  }

  render() {
    if (!this.state.isLoaded) {
      return <h1>I am an unloaded Setlist! :-(</h1>
    }

    else {
      var setlist = this.buildSetlist();
      return setlist;
    }
  }
}

export default Setlist;
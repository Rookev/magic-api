import React, { Component } from 'react';
import cardAPI from './CardAPI.js'

class Setlist extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoaded: false,
      sets: undefined
    };
    this.loadSets();
  }

  loadSets() {
    fetch("https://api.scryfall.com/sets")
      .then(res => res.json())
      .then((result) => {
        cardAPI.Sets = result.data;
        this.setState({
          isLoaded: true,
          sets: cardAPI.Sets
        });
      },
        (error) => {
          this.setState({
            isLoaded: true
          });
        })
  }

  render() {
    if (!this.state.isLoaded) {
      return <h1>I am an unloaded Setlist! :-(</h1>
    }

    else {
      return (
        <div>
          <h1>Found Sets: {this.state.sets.length}</h1>
          <ul>
            {this.state.sets.map((oSet) => {
              return (
                <li key={oSet.code}>
                  <button>
                    <img src={oSet.icon_svg_uri} alt={oSet.code} width={20} height={20} />
                    <span>{" " + oSet.name}</span>
                  </button>
                </li>);
            })}
          </ul>
        </div>
      );
    }
  }
}

export default Setlist;
import React, { Component } from 'react';

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
        var aSets = this.buildSetlist(result.data);
        this.setState({
          isLoaded: true,
          sets: aSets
        });
      },
        (error) => {
        })
  }

  buildSetlist(aFetchedSets) {
    var aSetsToExclude = ["Tokens", "Promos", "Oversized"];

    var aBasicSets = aFetchedSets.filter(function (oSet) {
      var bIncludeSet = true;
      // Check if set name contains one of the excluded strings
      aSetsToExclude.forEach(sSetToExclude => {
        // If yes -> remove
        if (oSet.name.includes(sSetToExclude)) {
          bIncludeSet = false;
        }
      });

      return bIncludeSet;
    });

    return aBasicSets;
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
                  <button onClick={this.props.onSetClicked.bind(this, oSet.code)}>
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
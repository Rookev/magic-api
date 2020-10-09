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
    var aSets = this.state.items;
    var aSetsToExclude = ["Tokens", "Promos", "Oversized"];

    var aBasicSets = aSets.filter(function (oSet) {
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

    return (
      <div>
        <h1>Found Sets: {aBasicSets.length}</h1>
        <ul>
          {aBasicSets.map((oSet) => {
            return <li key={oSet.code}><img src={oSet.icon_svg_uri} alt={oSet.code} width={20} height={20} /><span>{" " + oSet.name}</span></li>
          })}
        </ul>
      </div>
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
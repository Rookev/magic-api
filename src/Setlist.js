import React, { Component } from 'react';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';

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

    aBasicSets.sort(function(a,b){
      return new Date(b.released_at) - new Date(a.released_at);
    });

    return aBasicSets;
  }

  render() {
    if (!this.state.isLoaded) {
      return <span>Loading...</span>
    }

    else {
      return (
        <Select id="Set-select">
          {this.state.sets.map((oSet) => {
            return (
              <MenuItem onClick={this.props.onSetClicked.bind(this, oSet.code)} value={oSet.code}>{oSet.name} ({oSet.card_count})</MenuItem>
            );
          })}
        </Select>
      );
    }
  }
}

export default Setlist;
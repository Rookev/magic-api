import React, { Component } from 'react';

class Cardlist extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cards: undefined
    };
  }

  loadCards(set) {
    fetch("https://api.scryfall.com/cards/search?order=set&q=set:" + set)
      .then(res => res.json())
      .then((result) => {
        this.setState({
          cards: result.data
        });
      },
        (error) => {
        })
  }

  shouldComponentUpdate(nextProps, nextState) {
    if (nextProps.set !== this.props.set) {
      return true;
    }

    if (nextState.cards === undefined) {
      return false;
    }

    return true;
  }

  render() {
    // Initial rendering without set
    if (!this.props.set) {
      return <h1>I am an unloaded Cardlist :-(</h1>;
    }

    // A set prop has been specified
    else {
      // Not yet loaded -> Start async load (function loadCards) and return loading message
      if (!this.state.cards) {
        this.loadCards(this.props.set);
        return <h1>Loading Set: {this.props.set}...</h1>;
      }

      // Loaded
      else {
        var aCardsWithImageUris = this.state.cards.filter(function (oCard) {
          return (oCard && oCard.image_uris && oCard.image_uris.normal)
        });

        this.setState({
          cards: undefined
        });

        return (
          <div>
            <h1>Set {this.props.set}: {aCardsWithImageUris.length} cards</h1>
            <ul>
              {aCardsWithImageUris.map((oCard) => {
                return (
                  <li key={oCard.id} class="Card">
                    <img src={oCard.image_uris.normal} alt={oCard.name} />
                  </li>
                );
              })}
            </ul>
          </div>
        );
      }
    }
  }
}

export default Cardlist;
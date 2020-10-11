import React, { Component } from 'react';

class Cardlist extends Component {

  constructor(props) {
    super(props);
    this.state = {
      cards: {}
    };
  }

  loadCards(set) {
    fetch("https://api.scryfall.com/cards/search?order=set&q=set:" + set)
      .then(res => res.json())
      .then((result) => {
        var updatedCardBuffer = this.state.cards;
        updatedCardBuffer[set] = result.data;
        this.setState({
          cards: updatedCardBuffer
        });
      })
  }

  render() {
    // No buffered cards found -> Start async load (function loadCards) and return loading message
    if (!this.state.cards[this.props.set]) {
      this.loadCards(this.props.set);
      return <h1>Loading Set: {this.props.set}...</h1>;
    }

    // Loaded
    else {
      var aCardsWithImageUris = this.state.cards[this.props.set].filter(function (oCard) {
        return (oCard && oCard.image_uris && oCard.image_uris.normal)
      });

      return (
        <div>
          <h1>Set {this.props.set}: {aCardsWithImageUris.length} cards</h1>
          <ul>
            {aCardsWithImageUris.map((oCard) => {
              return (
                <li key={oCard.id} className="Card">
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

export default Cardlist;
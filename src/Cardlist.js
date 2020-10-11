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
        // Only consider cards with images
        var aCardsWithImageUris = result.data.filter(function (oCard) {
          return (oCard && oCard.image_uris && oCard.image_uris.normal)
        });

        // Read old card buffer
        var updatedCardBuffer = this.state.cards;

        // Update card buffer with newly fetched cards
        updatedCardBuffer[set] = aCardsWithImageUris;

        this.setState({
          cards: updatedCardBuffer
        });
      })
  }

  render() {
    // No buffered cards found -> Start async load (function loadCards) and return loading message
    if (!this.state.cards[this.props.set]) {
      console.log("Fetch set from network: " + this.props.set);
      this.loadCards(this.props.set);
      return <h1>Loading Set: {this.props.set}...</h1>;
    }

    // Loaded
    else {
      console.log("Render set from buffer: " + this.props.set);
      return (
        <div>
          <h1>Set {this.props.set}: {this.state.cards[this.props.set].length} cards</h1>
          <ul>
            {this.state.cards[this.props.set].map((oCard) => {
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
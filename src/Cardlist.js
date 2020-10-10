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
        cards: undefined
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

  loadCards(set) {
    fetch("https://api.scryfall.com/cards/search?order=set&q=set:" + set)
      .then(res => res.json())
      .then((result) => {
        this.setState({
          isLoaded: true,
          cards: result.data
        });
      },
        (error) => {
          this.setState({
            isLoaded: true
          });
        })
  }

  render() {
    if (!this.props.set) {
      return <h1>I am an unloaded Cardlist :-(</h1>
    }

    else {
      if (!this.state.cards) {
        this.loadCards(this.props.set);
        return <h1>I am a loaded Cardlist! :-) (Set: {this.props.set})</h1>
      }

      else {
        var aCardsWithImageUris = this.state.cards.filter(function (oCard) {
          return (oCard && oCard.image_uris && oCard.image_uris.normal)
        });

        return (
          <div>
            <h1>Found Cards with images: {aCardsWithImageUris.length}</h1>
            <ul>
              {aCardsWithImageUris.map((oCard) => {
                return (
                  <li key={oCard.id}>
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
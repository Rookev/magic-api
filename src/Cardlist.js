import React, { Component } from 'react';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';

class Cardlist extends Component {

  constructor(props) {
    super(props);
    this.state = {
      cards: {}
    };
  }

  loadCards(set, next_page_url, previouslyFetchedCards) {
    var sFetchURL = "";
    if (next_page_url) {
      sFetchURL = next_page_url;
    }

    else {
      sFetchURL = "https://api.scryfall.com/cards/search?order=set&q=set:" + set;
    }

    fetch(sFetchURL)
      .then(res => res.json())
      .then((result) => {

        // Next page exists -> continue loading
        if (result.next_page) {
          this.loadCards(set, result.next_page, result.data);
        }

        // No (more) next page -> combine last fetch with all previously read cards
        else {
          var completelyFetchedCards = previouslyFetchedCards.concat(result.data);

          // Now update state with whole card list of given set

          // Only consider cards with images
          var aCardsWithImageUris = completelyFetchedCards.filter(function (oCard) {
            return (oCard && oCard.image_uris && oCard.image_uris.normal)
          });

          // Read old card buffer
          var updatedCardBuffer = this.state.cards;

          // Update card buffer with newly fetched cards
          updatedCardBuffer[set] = aCardsWithImageUris;

          // Final save of cardlist
          this.setState({
            cards: updatedCardBuffer
          });
        }
      })
  }

  render() {
    // No buffered cards found -> Start async load (function loadCards) and return loading message
    if (!this.state.cards[this.props.set]) {
      console.log("Fetch set from network: " + this.props.set);
      this.loadCards(this.props.set);
      return <Typography variant="h4">Loading Set: {this.props.set}...</Typography>;
    }

    // Loaded
    else {
      console.log("Render set from buffer: " + this.props.set);
      return (
        <div>
          <Grid container spacing={1}>
            {this.state.cards[this.props.set].map((oCard) => (
              <Grid item xs={2}>
                <img className="Img-card" src={oCard.image_uris.normal} alt={oCard.name} />
              </Grid>
            ))}
          </Grid>
        </div>
      );
    }
  }
}

export default Cardlist;
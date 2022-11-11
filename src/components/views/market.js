import React, { Component } from "react";
import MarketCard from "../cards/characters/ghostMarketCard";
import { createGhosts } from "../util/ghostFactory";
import { GameContext } from "../context";

class Market extends Component {
  state = { market: [] };
  componentDidMount() {
    this.setState({ market: [...this.state.market, ...createGhosts(8)] });
  }
  render() {
    return (
      <div className="marketWrapper">
        <div className="header">
          <GameContext.Consumer>
            {({ abortMarketOperation }) => (
              <button
                className="gameButton"
                onClick={() => abortMarketOperation()}
              >
                Back To Team
              </button>
            )}
          </GameContext.Consumer>
        </div>
        <h1 className="textHeader">Ghost Market</h1>

        {this.state.market.map((ghost) => (
          <MarketCard ghost={ghost} key={ghost.id} />
        ))}
      </div>
    );
  }
}

export default Market;

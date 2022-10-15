import React, { Component } from "react";
import MarketCard from "../cards/characters/ghostMarketCard";
import { createGhosts } from "../util/ghostFactory";
import { GameContext } from "../context";

class Market extends Component {
  state = { market: [] };
  componentDidMount() {
    this.setState({ market: [...this.state.market, ...createGhosts(9)] });
  }
  render() {
    return (
      <div
        style={{
          display: "grid",
          placeItems: "center",
          border: "3px solid #1919ae",
          padding: "20px",
          margin: "20px",
          gridTemplateColumns: "repeat(3, 1fr)",
        }}
      >
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
        <h1
          style={{ color: "white", textAlign: "center", gridColumn: "1 / 4" }}
        >
          Ghost Market
        </h1>
        {this.state.market.map((ghost, index) => (
          <MarketCard ghost={ghost} key={index} />
        ))}
      </div>
    );
  }
}

export default Market;

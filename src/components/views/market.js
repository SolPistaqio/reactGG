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
          display: "flex",
          border: "3px solid #1919ae",
          padding: "20px",
          margin: "20px",
          flexWrap: "wrap",
          justifyContent: "center",
          alignContent: "center",
        }}
      >
        <div
          style={{
            display: "flex",
            width: "100%",
            justifyContent: "start",
            alignContent: "flex-end",
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
        </div>
        <h1
          style={{
            textAlign: "center",
            width: "100%",
            paddingTop: "10px",
          }}
        >
          Ghost Market
        </h1>

        {this.state.market.map((ghost) => (
          <MarketCard ghost={ghost} key={ghost.id} />
        ))}
      </div>
    );
  }
}

export default Market;

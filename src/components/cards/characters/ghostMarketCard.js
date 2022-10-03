import React, { Component } from "react";
import { Icon } from "@iconify/react";
import GhostCard from "./ghostCard";
import Confirmation from "../../actions/confirmationDialog";
import { GameContext } from "../../Game";

class MarketCard extends Component {
  state = {
    ghostChosen: false,
    enoughFunds: true,
  };

  componentDidMount() {
    MarketCard.contextType = GameContext;
    const coins = this.context.coins;
    console.log("coins " + coins);
    if (this.props.ghost.price > coins) {
      this.setState({ enoughFunds: false });
    }
  }

  render() {
    const price = this.props.ghost.price;
    const confirmationText = `Are you sure you want to buy this ghost for ${price} coins`;
    let confirm = "";
    if (this.state.ghostChosen) {
      confirm = (
        <GameContext.Consumer>
          {({ ghostBuy }) => (
            <Confirmation
              text={confirmationText}
              confirm={() => {
                ghostBuy(this.props.ghost);
              }}
              cancel={() => this.setState({ ghostChosen: false })}
            />
          )}
        </GameContext.Consumer>
      );
    }
    return (
      <div
        style={{
          display: "inline-grid",
          placeItems: "end",
          border: "3px dotted #FFBB90",
          padding: "20px",
          margin: "20px",
        }}
      >
        <p style={{ float: "right", fontSize: "20pt", margin: "0" }}>
          {price}
          <Icon
            icon="mingcute:copper-coin-fill"
            color="#fbf100"
            height="40px"
          />
        </p>
        <GhostCard ghost={this.props.ghost} />
        {this.state.enoughFunds ? (
          <button
            onClick={() => this.setState({ ghostChosen: true })}
            style={{ justifySelf: "center", marginTop: "10px" }}
          >
            BUY
          </button>
        ) : (
          <p>Not enough coins</p>
        )}

        {confirm}
      </div>
    );
  }
}

export default MarketCard;

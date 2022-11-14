import React, { PureComponent } from "react";
import { Icon } from "@iconify/react";
import GhostCard from "./ghostCard";
import GhostCardSmall from "./ghostCardSmall";
import Confirmation from "../../actions/confirmationDialog";
import { GameContext } from "../../context";

class MarketCard extends PureComponent {
  static contextType = GameContext;
  state = {
    ghostChosen: false,
    enoughFunds: true,
  };

  componentDidMount() {
    const coins = this.context.coins;
    if (this.props.ghost.price > coins) {
      this.setState({ enoughFunds: false });
    }
    window.addEventListener("resize", this.updateDimensions);
    this.updateDimensions();
  }

  updateDimensions = () => {
    this.setState({ width: window.innerWidth, height: window.innerHeight });
  };

  componentWillUnmount() {
    window.removeEventListener("resize", this.updateDimensions);
  }

  render() {
    const price = this.props.ghost.price;
    const confirmationText = `Are you sure you want to buy this ghost for ${price} coins`;
    let confirm = "";
    let ghost = <GhostCard ghost={this.props.ghost} />;
    if (this.state.width <= 992) {
      ghost = <GhostCardSmall ghost={this.props.ghost} />;
    }

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
      <div className="ghostMarketCard">
        <p className="priceText">
          {price}
          <Icon
            icon="mingcute:copper-coin-fill"
            color="#fbf100"
            height="40px"
          />
        </p>
        {ghost}
        {this.state.enoughFunds ? (
          <button
            className="gameButton"
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

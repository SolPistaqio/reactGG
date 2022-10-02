import React, { Component } from "react";
import { Icon } from "@iconify/react";
import { GameContext } from "../Game";
import "../css/addButton.css";

class AddGhost extends Component {
  state = {
    color: "#fec302",
  };
  openMarket(e) {
    console.log("open it!");
  }
  render() {
    return (
      <GameContext.Consumer>
        {({ toggleView }) => (
          <Icon
            icon="carbon:add-filled"
            height="100px"
            className="add"
            color={this.state.color}
            onClick={() => toggleView("market")}
            onMouseOver={() => this.setState({ color: "#1919ae" })}
            onMouseLeave={() => this.setState({ color: "#fec302" })}
          />
        )}
      </GameContext.Consumer>
    );
  }
}

export default AddGhost;

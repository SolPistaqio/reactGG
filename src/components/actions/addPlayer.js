import React, { PureComponent } from "react";
import { Icon } from "@iconify/react";
import { GameContext } from "../context";

class AddGhost extends PureComponent {
  state = {
    color: "#fec302",
  };

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

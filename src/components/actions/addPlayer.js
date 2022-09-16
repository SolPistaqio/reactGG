import React, { Component } from "react";
import { Icon } from "@iconify/react";
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
      <Icon
        icon="carbon:add-filled"
        height="100px"
        className="add"
        color={this.state.color}
        onClick={() => this.openMarket()}
        onMouseOver={() => this.setState({ color: "#1919ae" })}
        onMouseLeave={() => this.setState({ color: "#fec302" })}
      />
    );
  }
}

export default AddGhost;

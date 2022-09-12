import React, { Component } from "react";
import { Icon } from "@iconify/react";
import "./css/addButton.css";

class AddGhost extends Component {
  openMarket(e) {
    console.log("open it!");
  }
  render() {
    return (
      <Icon
        icon="carbon:add-filled"
        height="100px"
        className="add"
        onClick={() => this.openMarket()}
      />
    );
  }
}

export default AddGhost;

import React, { Component } from "react";
import pic from "./1.svg";

class Ghost extends Component {
  constructor(props) {
    super(props);
    this.state = { type: 1, health: 3, color: "", currentHealth: 2 };
  }

  getGhostColor = () => {
    const letters = "0123456789ABCDEF";
    let gColor = "#";
    for (var i = 0; i < 6; i++) {
      gColor += letters[Math.floor(Math.random() * 16)];
    }
    this.setState({ color: gColor });
  };

  render() {
    return (
      <div>
        <img
          style={{ height: "100px", color: this.state.color }}
          src={pic}
          alt={"ghost"}
        />
        <p>{this.state.color}</p>
        <h1>{this.state.currentHealth + " / " + this.state.health}</h1>
      </div>
    );
  }
}

export default Ghost;

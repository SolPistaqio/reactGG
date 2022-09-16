import React, { Component } from "react";
import { Icon } from "@iconify/react";
import Ghost3Small from "../characters/Ghost3-small";

class GhostCardSmall extends Component {
  constructor(props) {
    super(props);
    this.state = {
      type: 1,
      maxHealth: 3,
      color1: "",
      color2: "",
      currentHealth: 2,
    };
  }

  getGhostColor = () => {
    const letters = "0123456789ABCDEF";
    let ghostColor = "#";
    for (var i = 0; i < 6; i++) {
      ghostColor += letters[Math.floor(Math.random() * 16)];
    }
    return ghostColor;
  };

  setGhostColors = () => {
    const col1 = this.getGhostColor();
    const col2 = this.getGhostColor();
    this.setState({ color1: col1, color2: col2 });
  };

  componentWillMount() {
    this.setGhostColors();
  }

  render() {
    const healthBar = [];
    for (let i = 0; i < this.state.currentHealth; i++) {
      healthBar.push("heart-filled");
    }
    if (this.state.currentHealth < this.state.maxHealth) {
      const numOfHearts = this.state.maxHealth - this.state.currentHealth;
      for (let i = 0; i < numOfHearts; i++) {
        healthBar.push("heart-outlined");
      }
    }
    return (
      <div
        style={{
          display: "inline-grid",
          minWidth: "170px",
          placeItems: "center",
          gridTemplate: "autofit / 3fr 1fr",
        }}
      >
        <Ghost3Small color1={this.state.color1} color2={this.state.color2} />

        <div>
          {healthBar.map((heart, index) => (
            <Icon
              icon={"ant-design:" + heart}
              height="35px"
              color="red"
              key={index}
            />
          ))}
        </div>
      </div>
    );
  }
}

export default GhostCardSmall;

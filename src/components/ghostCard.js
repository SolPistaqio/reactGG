import React, { Component } from "react";
import Ghost3 from "./characters/Ghost3";
import { Icon } from "@iconify/react";

class GhostCard extends Component {
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

  renderMissingHealth = () => {
    if (this.state.currentHealth < this.state.maxHealth) {
      const numOfHearts = this.state.maxHealth - this.state.currentHealth;
      for (let i = 0; i < numOfHearts; i++) {
        return <Icon icon="ant-design:heart-outlined" height="30px" />;
      }
    }
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
          width: "250px",
          placeItems: "center",
        }}
      >
        <Ghost3
          color1={this.state.color1}
          color2={this.state.color2}
          style={{
            display: "block",
          }}
        />
        <div
          style={{
            display: "block",
          }}
        >
          {healthBar.map((heart, index) => (
            <Icon
              icon={"ant-design:" + heart}
              height="50px"
              color="red"
              key={index}
            />
          ))}
        </div>
      </div>
    );
  }
}

export default GhostCard;

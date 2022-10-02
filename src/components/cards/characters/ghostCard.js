import React, { Component } from "react";
import Ghost1 from "../../characterIMG/Ghost1";
import Ghost2 from "../../characterIMG/Ghost2";
import Ghost3 from "../../characterIMG/Ghost3";
import { Icon } from "@iconify/react";

class GhostCard extends Component {
  render() {
    const healthBar = [];
    for (let i = 0; i < this.props.ghost.currentHealth; i++) {
      healthBar.push("heart-filled");
    }
    if (this.props.ghost.currentHealth < this.props.ghost.maxHealth) {
      const numOfHearts = this.props.maxHealth - this.props.currentHealth;
      for (let i = 0; i < numOfHearts; i++) {
        healthBar.push("heart-outlined");
      }
    }
    const ghosts = { 1: Ghost1, 2: Ghost2, 3: Ghost3 };
    const Ghost = ghosts[this.props.ghost.type];
    return (
      <div
        style={{
          display: "inline-grid",
          minWidth: "250px",
          placeItems: "center",
          gridTemplateRows: "250px 1fr",
          alignItems: "end",
        }}
      >
        <Ghost
          color1={this.props.ghost.color1}
          color2={this.props.ghost.color2}
        />
        <div>
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

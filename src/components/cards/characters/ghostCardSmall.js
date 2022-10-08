import React, { PureComponent } from "react";
import { Icon } from "@iconify/react";
import Ghost3Small from "../../characterIMG/Ghost3-small";
import Ghost1Small from "../../characterIMG/Ghost1-small";
import Ghost2Small from "../../characterIMG/Ghost2-small";

class GhostCardSmall extends PureComponent {
  render() {
    const healthBar = [];
    for (let i = 0; i < this.props.currentHealth; i++) {
      healthBar.push("heart-filled");
    }
    if (this.props.currentHealth < this.props.maxHealth) {
      const numOfHearts = this.props.maxHealth - this.props.currentHealth;
      for (let i = 0; i < numOfHearts; i++) {
        healthBar.push("heart-outlined");
      }
    }
    const ghosts = { 1: Ghost1Small, 2: Ghost2Small, 3: Ghost3Small };
    const Ghost = ghosts[this.props.ghost.type];
    return (
      <div
        style={{
          display: "inline-grid",
          minWidth: "70px",
          placeItems: "center",
          margin: "10px",
          gridTemplate: "autofit / 3fr 1fr",
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

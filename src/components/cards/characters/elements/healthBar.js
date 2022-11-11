import { Icon } from "@iconify/react";
import React, { Component } from "react";

class HealthBar extends Component {
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
    return (
      <div>
        {healthBar.map((heart, index) => (
          <Icon
            icon={"ant-design:" + heart}
            height={this.props.big ? "50px" : "25px"}
            color="red"
            key={index}
          />
        ))}
      </div>
    );
  }
}

export default HealthBar;

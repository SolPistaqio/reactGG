import React, { Component } from "react";
import { Icon } from "@iconify/react";

class NavBar extends Component {
  render() {
    return (
      <div
        style={{
          width: "100%",
          display: "block",
        }}
      >
        <p
          style={{ textAlign: "right", padding: "10px", paddingRight: "20px" }}
        >
          10
          <Icon
            icon="mingcute:copper-coin-fill"
            color="#fbf100"
            height="40px"
          />
        </p>
      </div>
    );
  }
}

export default NavBar;

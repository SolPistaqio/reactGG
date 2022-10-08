import React, { Component } from "react";
import { Icon } from "@iconify/react";

class Ghost3Small extends Component {
  render() {
    return (
      <div>
        <Icon
          icon="icon-park-solid:baseball-bat"
          color={this.props.color1}
          height="50px"
          hFlip
          style={{
            display: "block",
            marginLeft: "30px",
            marginBottom: "-50px",
            position: "relative",
            zIndex: 2,
          }}
        />
        <Icon
          icon="mdi:ghost"
          color={this.props.color2}
          height="65px"
          style={{ display: "block", position: "relative", zIndex: 1 }}
        />
      </div>
    );
  }
}

export default Ghost3Small;

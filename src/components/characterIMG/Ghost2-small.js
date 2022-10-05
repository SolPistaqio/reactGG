import React, { Component } from "react";
import { Icon } from "@iconify/react";

class Ghost2Small extends Component {
  render() {
    return (
      <div>
        <Icon
          icon="icon-park-solid:degree-hat"
          color={this.props.color1}
          height="100px"
          style={{
            display: "block",
            marginLeft: "17px",
            marginBottom: "-50px",
            position: "relative",
            zIndex: 2,
          }}
        />
        <Icon
          icon="mdi:ghost"
          color={this.props.color2}
          height="130px"
          style={{ display: "block", position: "relative", zIndex: 1 }}
        />
      </div>
    );
  }
}

export default Ghost2Small;

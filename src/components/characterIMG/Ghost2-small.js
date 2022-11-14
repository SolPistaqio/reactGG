import React, { PureComponent } from "react";
import { Icon } from "@iconify/react";

class Ghost2Small extends PureComponent {
  render() {
    return (
      <div>
        <Icon
          icon="icon-park-solid:degree-hat"
          color={this.props.color1}
          height="50px"
          style={{
            display: "block",
            marginLeft: "8px",
            marginBottom: "-25px",
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

export default Ghost2Small;

import React, { PureComponent } from "react";
import { Icon } from "@iconify/react";

class Ghost1 extends PureComponent {
  render() {
    return (
      <div>
        <Icon
          icon="fa6-solid:helmet-safety"
          color={this.props.color1}
          height="150px"
          style={{
            display: "block",
            marginLeft: "16px",
            marginBottom: "-80px",
            position: "relative",
            zIndex: 2,
          }}
        />
        <Icon
          icon="mdi:ghost"
          color={this.props.color2}
          height="200px"
          style={{ display: "block", position: "relative", zIndex: 1 }}
        />
      </div>
    );
  }
}

export default Ghost1;

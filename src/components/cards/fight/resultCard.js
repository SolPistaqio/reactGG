import { Icon } from "@iconify/react";
import React, { Component } from "react";

class Result extends Component {
  render() {
    return (
      <>
        {this.props.win ? (
          <Icon icon="charm:trophy" color="#fbf100" height="50px" />
        ) : (
          <Icon icon="charm:skull" color="#1919ae" height="50px" />
        )}
      </>
    );
  }
}

export default Result;

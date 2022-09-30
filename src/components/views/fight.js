import React, { Component } from "react";

import Duel from "../cards/fight/duelCard";

class Fight extends Component {
  constructor(props) {
    super(props);
  }
  state = {};
  render() {
    return (
      <div
        style={{
          display: "grid",
          gridTemplateRows: "1fr 1fr 1fr",
          placeItems: "center",
          padding: "20px",
          border: "3px solid #1919ae",
          margin: "20px",
          justifyItems: "space-around",
          gridRowGap: "30px",
        }}
      >
        <Duel />
      </div>
    );
  }
}

export default Fight;

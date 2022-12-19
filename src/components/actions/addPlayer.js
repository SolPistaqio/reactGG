import React, { useState } from "react";
import { Icon } from "@iconify/react";
import { GameContext } from "../context";

function AddGhost() {
  const [color, setColor] = useState("#fec302");

  return (
    <GameContext.Consumer>
      {({ toggleView }) => (
        <Icon
          icon="carbon:add-filled"
          height="100px"
          className="add"
          color={color}
          onClick={() => toggleView("market")}
          onMouseOver={() => setColor("#1919ae")}
          onMouseLeave={() => setColor("#fec302")}
        />
      )}
    </GameContext.Consumer>
  );
}

export default AddGhost;

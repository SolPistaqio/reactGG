import { Icon } from "@iconify/react";
import GhostCard from "../characters/ghostCard";
import Confirmation from "../../actions/confirmationDialog";
import { GameContext } from "../../context";
import GhostCardSmall from "../characters/ghostCardSmall";
import useResize from "../../../hooks/useResize";
import { useState } from "react";

function TeamCard(props) {
  const [ghostChosen, setGhostChosen] = useState(false);
  const width = useResize();

  let confirm = "";
  let ghost = <GhostCard ghost={props.ghost} />;
  if (ghostChosen) {
    confirm = (
      <GameContext.Consumer>
        {({ pickActiveGhost, toggleView }) => (
          <Confirmation
            text="Are you sure you want to replace this ghost?"
            confirm={() => toggleView("market")}
            cancel={() => {
              pickActiveGhost({});
              setGhostChosen(false);
            }}
          />
        )}
      </GameContext.Consumer>
    );
  }
  if (width <= 992) {
    ghost = <GhostCardSmall ghost={props.ghost} />;
  }
  return (
    <div
      style={{
        display: "inline-grid",
        placeItems: "end",
      }}
    >
      <p style={{ float: "right", fontSize: "20pt", margin: "0" }}>
        <GameContext.Consumer>
          {({ pickActiveGhost }) => (
            <Icon
              icon="fa:refresh"
              color="white"
              height="40px"
              onClick={() => {
                pickActiveGhost(props.ghost);
                setGhostChosen(true);
              }}
            />
          )}
        </GameContext.Consumer>
      </p>
      {ghost}

      {confirm}
    </div>
  );
}

export default TeamCard;

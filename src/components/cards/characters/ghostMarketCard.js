import React, { useContext, useState } from "react";
import { Icon } from "@iconify/react";
import GhostCard from "./ghostCard";
import GhostCardSmall from "./ghostCardSmall";
import Confirmation from "../../actions/confirmationDialog";
import { GameContext } from "../../context";

function MarketCard(props) {
  const context = useContext(GameContext);
  const [ghostChosen, setGhostChosen] = useState(false);

  const enoughFunds = props.ghost.price < context.coins;

  const price = props.ghost.price;
  const confirmationText = `Are you sure you want to buy this ghost for ${price} coins`;
  let confirm = "";
  let ghost = <GhostCard ghost={props.ghost} />;
  if (props.width <= 992) {
    ghost = <GhostCardSmall ghost={props.ghost} />;
  }
  if (ghostChosen) {
    confirm = (
      <GameContext.Consumer>
        {({ ghostBuy }) => (
          <Confirmation
            text={confirmationText}
            confirm={() => {
              ghostBuy(props.ghost);
            }}
            cancel={() => setGhostChosen(false)}
          />
        )}
      </GameContext.Consumer>
    );
  }
  return (
    <div className="ghostMarketCard">
      <p className="priceText">
        {price}
        <Icon icon="mingcute:copper-coin-fill" color="#fbf100" height="40px" />
      </p>
      {ghost}
      {enoughFunds ? (
        <button
          className="gameButton"
          onClick={() => setGhostChosen(true)}
          style={{ justifySelf: "center", marginTop: "10px" }}
        >
          BUY
        </button>
      ) : (
        <p>Not enough coins</p>
      )}
      {confirm}
    </div>
  );
}

export default MarketCard;

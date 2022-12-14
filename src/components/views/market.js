import React, { useState, useEffect } from "react";
import MarketCard from "../cards/characters/ghostMarketCard";
import { createGhosts } from "../util/ghostFactory";
import { GameContext } from "../context";
import useResize from "../../hooks/useResize";

function Market() {
  const [market, setMarket] = useState([]);
  useEffect(() => {
    if (market.length < 8) {
      setMarket([...market, ...createGhosts(8)]);
    }
  }, [market]);
  const width = useResize();

  return (
    <div className="marketWrapper">
      <div className="header">
        <GameContext.Consumer>
          {({ abortMarketOperation }) => (
            <button
              className="gameButton"
              onClick={() => abortMarketOperation()}
            >
              Back To Team
            </button>
          )}
        </GameContext.Consumer>
      </div>
      <h1 className="textHeader">Ghost Market</h1>

      {market.map((ghost) => (
        <MarketCard ghost={ghost} key={ghost.id} width={width} />
      ))}
    </div>
  );
}

export default Market;

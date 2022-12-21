import { useContext, useEffect, useState } from "react";

import Duel from "../cards/fight/duelCard";
import { calculateDuel } from "../util/caluculateDuel";
import { GameContext } from "../context";

function Fight() {
  const context = useContext(GameContext);
  const [state, setState] = useState({
    duels: [],
    victory: null,
    wins: 0,
    losers: [],
  });

  useEffect(() => {
    const team = context.userTeam;
    const duels = [];
    let wins = 0;
    const losers = [];
    team.forEach((ghost) => {
      const fight = calculateDuel(ghost);
      duels.push(fight);

      if (fight.won) {
        wins += 1;
      } else {
        losers.push(ghost);
      }
    });
    setState({
      duels: [...duels],
      victory: wins >= 2,
      wins: wins,
      losers: losers,
    });
  }, []);

  return (
    <div className="figthWrapper">
      <div className="header">
        <GameContext.Consumer>
          {({ toggleView, ghostFigthAftermath }) => (
            <button
              className="gameButton float-left"
              onClick={() => {
                ghostFigthAftermath(state.losers, state.victory);
                toggleView("game");
              }}
            >
              Back To Team
            </button>
          )}
        </GameContext.Consumer>
      </div>
      <div className="textHeader">
        <h1>
          {state.wins}/{3 - state.wins}
        </h1>
        <h1>{state.victory ? "VICTORY!" : "DEFEAT!"}</h1>
      </div>
      {state.duels.map((duel, i) => (
        <Duel duel={duel} key={i} />
      ))}
    </div>
  );
}

export default Fight;

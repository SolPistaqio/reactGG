import React, { useState, useEffect } from "react";
import MarketCard from "../cards/characters/ghostMarketCard";
import { createGhosts } from "../util/ghostFactory";
import { GameContext } from "../context";
import useResize from "../../hooks/useResize";

function Market() {
  const [market, setMarket] = useState([]);
  useEffect(() => {
    setMarket([...market, ...createGhosts(8)]);
  });
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

// class Market extends Component {
//   state = { market: [] };
//   componentDidMount() {
//     this.setState({ market: [...this.state.market, ...createGhosts(8)] });
//   }
//   render() {
//     return (
//       <div className="marketWrapper">
//         <div className="header">
//           <GameContext.Consumer>
//             {({ abortMarketOperation }) => (
//               <button
//                 className="gameButton"
//                 onClick={() => abortMarketOperation()}
//               >
//                 Back To Team
//               </button>
//             )}
//           </GameContext.Consumer>
//         </div>
//         <h1 className="textHeader">Ghost Market</h1>

//         {this.state.market.map((ghost) => (
//           <MarketCard ghost={ghost} key={ghost.id} />
//         ))}
//       </div>
//     );
//   }
// }

export default Market;

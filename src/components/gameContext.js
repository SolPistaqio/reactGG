import { createContext } from "react";

const GameContext = createContext({
  coins: 10,
  userTeam: [],
  currentView: "start",
  activeGhost: {},
  toggleView: () => {},
  coinOperation: () => {},
  teamAdd: () => {},
  teamRepalce: () => {},
  pickActiveGhost: () => {},
});

// export default GameContext;

import { React, Component, createContext } from "react";
import Router from "./UI/router";
import { createGhosts } from "./util/ghostFactory";

export const GameContext = createContext({});

class Game extends Component {
  constructor(props) {
    super(props);
    this.state = {
      round: 1,
      coins: 10,
      userTeam: [],
      currentView: "start",
      activeGhost: {},
      toggleView: this.toggleView,
      teamAdd: this.teamAdd,
      ghostBuy: this.ghostBuy,
      pickActiveGhost: this.pickActiveGhost,
      abortMarketOperation: this.abortMarketOperation,
    };
  }

  abortMarketOperation = () => {
    this.setState({ activeGhost: {} });
    this.toggleView("game");
  };
  toggleView = (newView) => {
    console.log(`Navigating to ${newView}`);
    this.setState({ currentView: newView });
  };
  coinOperation(amountToAdd) {
    this.setState({ coins: this.state.coins + amountToAdd });
  }
  teamAdd = (ghost) => {
    console.log(ghost);
    this.setState({ userTeam: [...this.state.userTeam, ...ghost] });
  };
  teamReplace(replacee, replacement) {
    const team = this.state.userTeam;
    const order = team.indexOf(replacee);
    team[order] = replacement;
    this.setState({ userTeam: team });
  }
  pickActiveGhost = (ghost) => {
    console.log(ghost);
    this.setState({ activeGhost: ghost });
  };

  ghostBuy = (ghost) => {
    if (this.state.activeGhost.type) {
      this.teamReplace(this.state.activeGhost, ghost);
      this.setState({ activeGhost: {} });
    } else {
      this.teamAdd([ghost]);
    }
    this.coinOperation(0 - ghost.price);
    this.toggleView("game");
  };

  componentDidMount() {
    if (this.state.round === 1) {
      this.teamAdd(createGhosts(2));
    }
  }

  render() {
    return (
      <GameContext.Provider value={this.state}>
        <Router view={this.state.currentView} />
      </GameContext.Provider>
    );
  }
}

export default Game;

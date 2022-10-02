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
    };
    // this.teamAdd = this.teamAdd.bind(this);
    // this.toggleView = this.toggleView.bind(this);
  }

  toggleView = (newView) => {
    console.log(`Navigating to ${newView}`);
    this.setState({ currentView: newView });
  };
  coinOperation(amountToAdd) {
    this.setState({ coins: this.state.coins + amountToAdd });
  }
  teamAdd(ghost) {
    console.log(ghost);
    this.setState({ userTeam: [...this.state.userTeam, ...ghost] });
  }
  teamRepalce(replacee, replacement) {
    const team = this.state.userTeam;
    const order = team.indexOf(replacee);
    team[order] = replacement;
    this.setState({ userTeam: team });
  }
  pickActiveGhost(ghost) {
    this.setState({ activeGhost: ghost });
  }

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

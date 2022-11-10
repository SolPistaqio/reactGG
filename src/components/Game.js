import { React, Component } from "react";
import Router from "./UI/router";
import { createGhosts } from "./util/ghostFactory";
import { GameContext } from "./context";
//export const GameContext = createContext({});

class Game extends Component {
  static contextType = GameContext;
  constructor(props) {
    super(props);
    this.state = {
      round: 1,
      wins: 0,
      coins: 10,
      userTeam: [],
      currentView: "start",
      activeGhost: {},
      gameOver: false,
      gameWon: false,
      toggleView: this.toggleView,
      teamAdd: this.teamAdd,
      ghostBuy: this.ghostBuy,
      pickActiveGhost: this.pickActiveGhost,
      abortMarketOperation: this.abortMarketOperation,
      ghostFigthAftermath: this.ghostFigthAftermath,
      isGameOver: this.isGameOver,
      startNewGame: this.startNewGame,
    };
  }

  abortMarketOperation = () => {
    this.setState({ activeGhost: {} });
    this.toggleView("game");
  };
  toggleView = (newView) => {
    this.setState({ currentView: newView });
  };
  coinOperation(amountToAdd) {
    this.setState({ coins: this.state.coins + amountToAdd });
  }
  teamAdd = (ghost) => {
    this.setState({ userTeam: [...this.state.userTeam, ...ghost] });
  };
  teamReplace(replacee, replacement) {
    const team = this.state.userTeam;
    const order = team.indexOf(replacee);
    team[order] = replacement;
    this.setState({ userTeam: team });
  }
  pickActiveGhost = (ghost) => {
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

  ghostFigthAftermath = (losers, victory) => {
    this.coinOperation(3 - losers.length);

    if (victory) {
      this.setState({ wins: this.state.wins + 1 });
    }

    const newTeam = this.state.userTeam;
    losers.forEach((element) => {
      const loserIndex = newTeam.findIndex((ghost) => ghost.id === element.id);
      if (newTeam[loserIndex].currentHealth <= 1) {
        newTeam.splice(loserIndex, 1);
      } else {
        newTeam[loserIndex].currentHealth -= 1;
      }
      this.setState({ userTeam: newTeam, round: this.state.round + 1 });
    });
  };

  isGameOver = () => {
    if (
      this.state.round >= 20 ||
      (this.state.userTeam.length < 3 && this.state.coins < 2)
    ) {
      this.setState({ gameOver: true });
    } else if (this.state.wins >= 10) {
      this.setState({ gameOver: true, gameWon: true });
    }
    if (this.state.gameOver) {
      this.toggleView("gameOver");
    }
  };

  startNewGame = () => {
    const newTeam = [...createGhosts(2)];
    this.setState({
      coins: 10,
      wins: 0,
      gameOver: false,
      gameWon: false,
      round: 1,
      userTeam: newTeam,
    });
  };

  render() {
    return (
      <GameContext.Provider value={this.state}>
        <Router view={this.state.currentView} />
      </GameContext.Provider>
    );
  }
}

export default Game;

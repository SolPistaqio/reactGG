import { React, Component } from "react";
import Fight from "../views/fight";
import Start from "../views/firstScreen";
import Game from "../views/game";
import Market from "../views/market";
import NavBar from "./navBar";

export const GameContext = React.createContext();

class Router extends Component {
  state = { coins: 10, Userteam: [], currentView: "start" };
  changeCurrentView(view) {
    this.setState({ currentView: view });
  }

  render() {
    let viewToShow = <Start />;
    switch (this.state.currentView) {
      case "start":
        viewToShow = <Start />;
        break;
      case "game":
        viewToShow = (
          <div>
            <NavBar />
            <Game />
          </div>
        );
        break;
      case "market":
        viewToShow = (
          <div>
            <NavBar />
            <Market />
          </div>
        );
        break;
      case "fight":
        viewToShow = (
          <div>
            <NavBar />
            <Fight />
          </div>
        );
        break;
      default:
        viewToShow = (
          <div>
            <NavBar />
            <Game />
          </div>
        );
    }
    return (
      <GameContext.Provider value={this.state}>
        {viewToShow}
        <span onClick={() => this.setState({ currentView: "start" })}>
          Start
        </span>{" "}
        |
        <span onClick={() => this.setState({ currentView: "game" })}>Game</span>
        |{" "}
        <span onClick={() => this.setState({ currentView: "market" })}>
          Market
        </span>
        |{" "}
        <span onClick={() => this.setState({ currentView: "fight" })}>
          Fight
        </span>
      </GameContext.Provider>
    );
  }
}

export default Router;

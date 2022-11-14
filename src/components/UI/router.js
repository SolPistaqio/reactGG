import { React, PureComponent } from "react";
import Fight from "../views/fight";
import Start from "../views/firstScreen";
import Game from "../views/playerTeam";
import Market from "../views/market";
import NavBar from "./navBar";
import GameOver from "../views/gameOver";

class Router extends PureComponent {
  render() {
    let viewToShow = <Start />;
    switch (this.props.view) {
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
            <Fight />
          </div>
        );
        break;
      case "gameOver":
        viewToShow = (
          <div>
            <NavBar />
            <GameOver />
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
    return viewToShow;
  }
}

export default Router;

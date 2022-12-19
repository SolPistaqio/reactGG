import { React } from "react";
import Fight from "../views/fight";
import Start from "../views/firstScreen";
import Game from "../views/playerTeam";
import Market from "../views/market";
import NavBar from "./navBar";
import GameOver from "../views/gameOver";

function Router(props) {
  let viewToShow = <Start />;
  switch (props.view) {
    case "start":
      return <Start />;

    case "game":
      return (
        <div>
          <NavBar />
          <Game />
        </div>
      );

    case "market":
      return (
        <div>
          <NavBar />
          <Market />
        </div>
      );

    case "fight":
      return (
        <div>
          <Fight />
        </div>
      );

    case "gameOver":
      return (
        <div>
          <NavBar />
          <GameOver />
        </div>
      );

    default:
      return (
        <div>
          <NavBar />
          <Game />
        </div>
      );
  }
}

export default Router;

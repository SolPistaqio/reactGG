import renderer from "react-test-renderer";
import GameOver from "../components/views/gameOver";
import React from "react";
import { render, fireEvent } from "@testing-library/react";
import { GameContext } from "../components/context";

it("renders correctly", () => {
  const startNewGame = jest.fn();
  const toggleView = jest.fn();
  const tree = renderer
    .create(
      <GameContext.Provider value={{ toggleView, startNewGame, gameWon: true }}>
        <GameOver />
      </GameContext.Provider>
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});

it("renders correctly", () => {
  const startNewGame = jest.fn();
  const toggleView = jest.fn();
  const tree = renderer
    .create(
      <GameContext.Provider
        value={{ toggleView, startNewGame, gameWon: false }}
      >
        <GameOver />
      </GameContext.Provider>
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});

describe("GameOver component", () => {
  it("should render the correct image and button based on the gameWon prop", () => {
    const startNewGame = jest.fn();
    const toggleView = jest.fn();

    const { getByAltText, getByText } = render(
      <GameContext.Provider value={{ toggleView, startNewGame, gameWon: true }}>
        <GameOver />
      </GameContext.Provider>
    );

    const image = getByAltText("Final screen");
    expect(image).toHaveAttribute("src", "/victory.gif");
    expect(getByText("START AGAIN")).toBeInTheDocument();
  });

  it("should render the correct image and button based on the gameWon prop", () => {
    const startNewGame = jest.fn();
    const toggleView = jest.fn();

    const { getByAltText, getByText } = render(
      <GameContext.Provider
        value={{ toggleView, startNewGame, gameWon: false }}
      >
        <GameOver />
      </GameContext.Provider>
    );

    const image = getByAltText("Final screen");
    expect(image).toHaveAttribute("src", "/defeat.gif");
    expect(getByText("START AGAIN")).toBeInTheDocument();
  });

  it("should call startNewGame and toggleView when the button is clicked", () => {
    const startNewGame = jest.fn();
    const toggleView = jest.fn();

    const { getByText } = render(
      <GameContext.Provider value={{ toggleView, startNewGame, gameWon: true }}>
        <GameOver />
      </GameContext.Provider>
    );

    const button = getByText("START AGAIN");
    fireEvent.click(button);

    expect(startNewGame).toHaveBeenCalled();
    expect(toggleView).toHaveBeenCalledWith("game");
  });
});

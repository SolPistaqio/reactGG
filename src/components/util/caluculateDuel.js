import { createGhost } from "./ghostFactory";

function d10() {
  return Math.floor(Math.random() * 10) + 1;
}

function ghostMove(ghost) {
  const throws = Array.from(new Array(ghost.dice), (x) => d10());
  const result = ghost.mod + Math.max(...throws);
  return { throws, result };
}

export function calculateDuel(ghost) {
  const enemy = createGhost();
  const playerMove = ghostMove(ghost);
  const enemyMove = ghostMove(enemy);

  //if result is a tie
  if (playerMove.result === enemyMove.result) {
    calculateDuel(ghost);
  }

  return {
    won: playerMove.result > enemyMove.result,
    player: { ghost, ...playerMove },
    enemy: { ghost: enemy, ...enemyMove },
  };
}

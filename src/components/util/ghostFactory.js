function randomColor() {
  const letters = "0123456789ABCDEF";
  let color = "#";
  for (var i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

export function createGhost() {
  const ghost = {};
  ghost.type = Math.floor(Math.random() * 3) + 1;
  ghost.price = Math.floor(Math.random() * 3) + 2;

  switch (ghost.type) {
    case 1:
      ghost.maxHealth = 3;
      ghost.dice = 1;
      ghost.mod = 0;
      break;
    case 2:
      ghost.maxHealth = 2;
      ghost.dice = 2;
      ghost.mod = 0;
      break;
    case 3:
      ghost.maxHealth = 2;
      ghost.dice = 1;
      ghost.mod = 1;
      break;
    default:
      ghost.maxHealth = 3;
      ghost.dice = 1;
      ghost.mod = 0;
  }
  ghost.currentHealth = ghost.maxHealth;
  ghost.color1 = randomColor();
  ghost.color2 = randomColor();

  return ghost;
}

export function createGhosts(number) {
  return Array.from(new Array(number), () => createGhost());
}

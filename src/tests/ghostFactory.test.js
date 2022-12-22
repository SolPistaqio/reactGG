const ghostFactory = require("../components/util/ghostFactory");

test("create 2 ghosts", () => {
  const result = ghostFactory.createGhosts(2);
  expect(result).toBeInstanceOf(Array);
  result.forEach((obj) => {
    expect(obj).toBeInstanceOf(Object);
    expect(obj).toHaveProperty("maxHealth");
    expect(obj).toHaveProperty("dice");
    expect(obj).toHaveProperty("mod");
    expect(obj).toHaveProperty("currentHealth");
    expect(obj).toHaveProperty("color1");
    expect(obj).toHaveProperty("color2");
    expect(obj).toHaveProperty("price");
    expect(obj).toHaveProperty("type");
    expect(obj.maxHealth).toBeLessThan(4);
    expect(obj.maxHealth).toBeGreaterThan(1);
    expect(obj.dice === 1 || obj.dice === 2).toBeTruthy();
    expect(obj.mod === 1 || obj.mod === 0).toBeTruthy();
    expect(obj.maxHealth === obj.currentHealth).toBeTruthy;
  });
});

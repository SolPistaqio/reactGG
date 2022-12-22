import { calculateDuel, ghostMove } from "../components/util/caluculateDuel";
import { createGhost } from "../components/util/ghostFactory";

describe("calculateDuel", () => {
  it("should return an object with the correct structure", () => {
    const ghost = createGhost();

    const result = calculateDuel(ghost);

    expect(result).toEqual({
      won: expect.any(Boolean),
      player: {
        ghost: expect.any(Object),
        throws: expect.any(Array),
        result: expect.any(Number),
      },
      enemy: {
        ghost: expect.any(Object),
        throws: expect.any(Array),
        result: expect.any(Number),
      },
    });
  });
});

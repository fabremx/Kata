import { Player, calculPoints, Roll, transformRollToPoints } from "./bowling";

const scorePoints = (player: Player, notZeroRolls: Roll[]) => {
  const rollsToFill = 20 - notZeroRolls.length;
  const rolls = notZeroRolls.map(roll => roll).concat(Array(rollsToFill).fill('-'))
  rolls.forEach((roll: Roll) => player.score(roll))
}

const scoreOnlyStrike = (player: Player) => {
  Array(20).fill('X').forEach((point: Roll) => player.score(point))
}

describe("Bowling", () => {
  let player: Player;

  beforeEach(() => {
    player = new Player();
  });

  it('should return 0 point when player did not score', () => {
    // When
    const result = calculPoints(player.rolls);
    // Then
    expect(result).toEqual(0);
  });

  it('should return 5 points when player scores 5 points on one roll', () => {
    scorePoints(player, [5, '-', '-', '-', '-', '-'])
    // When
    const result = calculPoints(player.rolls);
    // Then
    expect(result).toEqual(5);
  });

  it('should return 24 points when player scores 4 points on on each rolls', () => {
    scorePoints(player, [4, 4, 4, 4, 4, 4])
    // When
    const result = calculPoints(player.rolls);
    // Then
    expect(result).toEqual(24);
  });

  it('should return 31 points when player scores 2,3,7,3,8 (spare on second frame) ', () => {
    scorePoints(player, [2, 3, 7, '/', 8])
    // When
    const result = calculPoints(player.rolls);
    // Then
    expect(result).toEqual(31);
  });

  it('should return 33 points when player scores 2, 3, X, -, 8, 1 (strike on second frame)', () => {
    scorePoints(player, [2, 3, 'X', '', 8, 1])
    // When
    const result = calculPoints(player.rolls);
    // Then
    expect(result).toEqual(33);
  });

  it('should return 47 points when player scores X, -, 7, /, 8, 1 (strike + spare on first and second frame)', () => {
    scorePoints(player, ['X', '-', 7, '/', 8, 1])
    // When
    const result = calculPoints(player.rolls);
    // Then
    expect(result).toEqual(47);
  });

  it.only('should return 152 points when player scores ', () => {
    scorePoints(player, ['X', '', 7, '/', 8, 1, 'X', '', 'X', '', 7, 1, 4, 2, 9, '/', 'X', '', 6, 2])
    // When
    const result = calculPoints(player.rolls);
    // Then
    expect(result).toEqual(152);
  });

  // it.only('should return 300 points when player scores only strike', () => {
  //   scoreOnlyStrike(player)
  //   // When
  //   const result = calculPoints(player.rolls);
  //   // Then
  //   expect(result).toEqual(300);
  // });
});

describe('transformRollToPoints', () => {
  it('should return number when rolls have only nubers', () => {
    const rolls: Roll[] = [1, 2, 3]
    // When
    const result = transformRollToPoints(rolls);
    // Then
    expect(result).toEqual([1, 2, 3]);
  });

  it('should replace by 0 when roll equal to -', () => {
    const rolls: Roll[] = [1, 2, 3, '-']
    // When
    const result = transformRollToPoints(rolls);
    // Then
    expect(result).toEqual([1, 2, 3, 0]);
  });

  it('should replace by correct roll when roll have /', () => {
    const rolls: Roll[] = [1, 2, '-', '/']
    // When
    const result = transformRollToPoints(rolls);
    // Then
    expect(result).toEqual([1, 2, 0, 10]);
  });

  it('should replace by correct roll when roll have X', () => {
    const rolls: Roll[] = [1, 2, 'X']
    // When
    const result = transformRollToPoints(rolls);
    // Then
    expect(result).toEqual([1, 2, 10]);
  });
});

import { Player, calculPoints, Roll, transformRollToPoints } from "./bowling";

const scoreFirstPoints = (player: Player, notZeroRolls: Roll[]) => {
  const rollsToFill = 21 - notZeroRolls.length;
  const rolls = notZeroRolls.map(roll => roll).concat(Array(rollsToFill).fill('-'))
  rolls.forEach((roll: Roll) => player.score(roll))
}

const scoreLastPoints = (player: Player, notZeroRolls: Roll[]) => {
  const rollsToFill = 21 - notZeroRolls.length;
  const rolls = Array(rollsToFill).fill('-').concat(notZeroRolls.map(roll => roll))
  rolls.forEach((roll: Roll) => player.score(roll))
}

const scoreOnlySpare = (player: Player) => {
  for (let i = 0; i < 20; i++) {
    if (i % 2 === 0) player.score(5)
    else player.score('/')
  }

  player.score(5)
}

const scoreOnlyStrike = (player: Player) => {
  for (let i = 0; i < 20; i++) {
    if (i % 2 === 0) player.score('X')
    else player.score('-')
  }

  player.score('X')
  player.score('X')
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
    scoreFirstPoints(player, [5, '-', '-', '-', '-', '-'])
    // When
    const result = calculPoints(player.rolls);
    // Then
    expect(result).toEqual(5);
  });

  it('should return 24 points when player scores 4 points on on each rolls', () => {
    scoreFirstPoints(player, [4, 4, 4, 4, 4, 4])
    // When
    const result = calculPoints(player.rolls);
    // Then
    expect(result).toEqual(24);
  });

  it('should return 31 points when player scores 2,3,7,3,8 (spare on second frame) ', () => {
    scoreFirstPoints(player, [2, 3, 7, '/', 8])
    // When
    const result = calculPoints(player.rolls);
    // Then
    expect(result).toEqual(31);
  });

  it('should return 33 points when player scores 2, 3, X, -, 8, 1 (strike on second frame)', () => {
    scoreFirstPoints(player, [2, 3, 'X', '', 8, 1])
    // When
    const result = calculPoints(player.rolls);
    // Then
    expect(result).toEqual(33);
  });

  it('should return 47 points when player scores X, -, 7, /, 8, 1 (strike + spare on first and second frame)', () => {
    scoreFirstPoints(player, ['X', '-', 7, '/', 8, 1])
    // When
    const result = calculPoints(player.rolls);
    // Then
    expect(result).toEqual(47);
  });

  it('should return 40 points when player scores 9, /, 9, /, 5, 1 (two spare)', () => {
    scoreFirstPoints(player, [9, '/', 9, '/', 5, 1])
    // When
    const result = calculPoints(player.rolls);
    // Then
    expect(result).toEqual(40);
  });

  it('should return 47 points when player scores X, -, x, -, 5, 1 (two strikes)', () => {
    scoreFirstPoints(player, ['X', '-', 'X', '-', 5, 1])
    // When
    const result = calculPoints(player.rolls);
    // Then
    expect(result).toEqual(47);
  });

  it('should return 107 points when player scores X, -, x, -, 5, 1 (four strikes)', () => {
    scoreFirstPoints(player, ['X', '-', 'X', '-', 'X', '-', 'X', '-', 5, 1])
    // When
    const result = calculPoints(player.rolls);
    // Then
    expect(result).toEqual(107);
  });

  describe('When player score a strike on last frame', () => {
    it('should return 13 with rolls 1 and 2 after strike', () => {
      scoreLastPoints(player, ['X', 1, 2])
      // When
      const result = calculPoints(player.rolls);
      // Then
      expect(result).toEqual(13);
    });

    it('should return 20 with spare after strike', () => {
      scoreLastPoints(player, ['X', 8, '/'])
      // When
      const result = calculPoints(player.rolls);
      // Then
      expect(result).toEqual(20);
    });

    it('should return 30 with two strike after strike', () => {
      scoreLastPoints(player, ['X', 'X', 'X'])
      // When
      const result = calculPoints(player.rolls);
      // Then
      expect(result).toEqual(30);
    });
  });

  describe('When player score a spare on last frame', () => {
    it('should return 12 with rolls 2 after spare', () => {
      scoreLastPoints(player, [8, '/', 2])
      // When
      const result = calculPoints(player.rolls);
      // Then
      expect(result).toEqual(12);
    });

    it('should return 20 with strike after spare', () => {
      scoreLastPoints(player, [8, '/', 'X'])
      // When
      const result = calculPoints(player.rolls);
      // Then
      expect(result).toEqual(20);
    });
  });

  it('should return 152 points when player scores X, -, 7, /, 8, 1, X, -, X, -, 7, 1, 4, 2, 9, /, X, -, 6, 2', () => {
    scoreFirstPoints(player, ['X', '', 7, '/', 8, 1, 'X', '', 'X', '', 7, 1, 4, 2, 9, '/', 'X', '', 6, 2])
    // When
    const result = calculPoints(player.rolls);
    // Then
    expect(result).toEqual(152);
  });

  it('should return 150 points when player scores only spare + a 5 rolls', () => {
    scoreOnlySpare(player)
    // When
    const result = calculPoints(player.rolls);
    // Then
    expect(result).toEqual(150);
  });

  it('should return 300 points when player scores only strike', () => {
    scoreOnlyStrike(player)
    // When
    const result = calculPoints(player.rolls);
    // Then
    expect(result).toEqual(300);
  });
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

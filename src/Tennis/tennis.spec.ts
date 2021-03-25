import { Game } from "./tennis";

describe("Tennis", () => {
  it('should return "Sets: 0-0 Points: 0-0" when player1 and player2 did not play any point', () => {
    // Given
    const game = new Game();
    // When
    const result = game.score();
    // Then
    expect(result).toEqual(`
Sets: 0-0
Points: 0-0`);
  });

  it('should return"Sets: 0-0 Points: 15-0" when player1 score one point', () => {
    // Given
    const game = new Game();
    game.player1.winPoint();
    // When
    const result = game.score();
    // Then
    expect(result).toEqual(`
Sets: 0-0
Points: 15-0`);
  });

  it('should return "Sets: 0-0 Points: 30-0" when player1 score two points', () => {
    // Given
    const game = new Game();
    game.player1.winPoint();
    game.player1.winPoint();
    // When
    const result = game.score();
    // Then
    expect(result).toEqual(`
Sets: 0-0
Points: 30-0`);
  });

  it('should return "Sets: 0-0 Points: 40-0" when player1 score three points', () => {
    // Given
    const game = new Game();
    game.player1.winPoint();
    game.player1.winPoint();
    game.player1.winPoint();
    // When
    const result = game.score();
    // Then
    expect(result).toEqual(`
Sets: 0-0
Points: 40-0`);
  });

  it('should return "Sets: 1-0 Points: 40-0" when player1 score four points', () => {
    // Given
    const game = new Game();
    game.player1.winPoint();
    game.player1.winPoint();
    game.player1.winPoint();
    game.player1.winPoint();
    // When
    const result = game.score();
    // Then
    expect(result).toEqual(`
Sets: 1-0
Points: 0-0`);
  });

  it('should return "Sets: 0-0 Points: 0-15" when player2 won one point', () => {
    // Given
    const game = new Game();
    game.player2.winPoint();
    // When
    const result = game.score();
    // Then
    expect(result).toEqual(`
Sets: 0-0
Points: 0-15`);
  });

  it('should return "Sets: 0-1 Points: 0-0" when player2 won four points', () => {
    // Given
    const game = new Game();
    game.player2.winPoint();
    game.player2.winPoint();
    game.player2.winPoint();
    game.player2.winPoint();
    // When
    const result = game.score();
    // Then
    expect(result).toEqual(`
Sets: 0-1
Points: 0-0`);
  });

  it('should return "Sets: 0-0 Points: 0-0" when player2 won four points', () => {
    // Given
    const game = new Game();
    game.player2.winPoint();
    game.player2.winPoint();
    game.player2.winPoint();
    game.player2.winPoint();
    // When
    const result = game.score();
    // Then
    expect(result).toEqual(`
Sets: 0-1
Points: 0-0`);
  });
});

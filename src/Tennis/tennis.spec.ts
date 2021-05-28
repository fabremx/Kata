import { Game, Player } from "./tennis";

const winPoints = (player: Player, points: number): void => {
  for (let i = 0; i < points; i++) {
    player.winPoint()
  }
}

describe("Tennis", () => {
  it('should return "Love-All" when player1 and player2 did not play any point', () => {
    // Given
    const game = new Game();
    // When
    const result = game.getScore();
    // Then
    expect(result).toEqual('Love-All');
  });

  it('should return"Fifteen-Love" when player1 score one point', () => {
    // Given
    const game = new Game();
    winPoints(game.player1, 1)
    // When
    const result = game.getScore();
    // Then
    expect(result).toEqual('Fifteen-Love');
  });

  it('should return "Thirty-Love" when player1 score two points', () => {
    // Given
    const game = new Game();
    winPoints(game.player1, 2)
    // When
    const result = game.getScore();
    // Then
    expect(result).toEqual('Thirty-Love');
  });

  it('should return "Forty-Love" when player1 score three points', () => {
    // Given
    const game = new Game();
    winPoints(game.player1, 3)
    // When
    const result = game.getScore();
    // Then
    expect(result).toEqual('Forty-Love');
  });

  it('should return "Player1 win game" when player1 score four points', () => {
    // Given
    const game = new Game();
    winPoints(game.player1, 4)
    // When
    const result = game.getScore();
    // Then
    expect(result).toEqual('Player1 win game');
  });

  it('should return "Love-Fifteen" when player2 won one point', () => {
    // Given
    const game = new Game();
    winPoints(game.player2, 1)
    // When
    const result = game.getScore();
    // Then
    expect(result).toEqual('Love-Fifteen');
  });

  it('should return "Player2 win game" when player1 score four points', () => {
    // Given
    const game = new Game();
    winPoints(game.player2, 4)
    // When
    const result = game.getScore();
    // Then
    expect(result).toEqual('Player2 win game');
  });

  it('should return "Fifteen-ALL" when player1 AND player2 won one points', () => {
    // Given
    const game = new Game();
    winPoints(game.player1, 1)
    winPoints(game.player2, 1)

    // When
    const result = game.getScore();
    // Then
    expect(result).toEqual('Fifteen-All');
  });

  it('should return "Advantage player1" when player1 won four points AND player2 won three points', () => {
    // Given
    const game = new Game();
    winPoints(game.player1, 4)
    winPoints(game.player2, 3)

    // When
    const result = game.getScore();
    // Then
    expect(result).toEqual('Advantage player1');
  });

  it('should return "Advantage player2" when player1 won three points AND player2 won four points', () => {
    // Given
    const game = new Game();
    winPoints(game.player1, 3)
    winPoints(game.player2, 4)

    // When
    const result = game.getScore();
    // Then
    expect(result).toEqual('Advantage player2');
  });

  it('should return "Deuce" when player1 won four points AND player2 won four points', () => {
    // Given
    const game = new Game();
    winPoints(game.player1, 4)
    winPoints(game.player2, 4)

    // When
    const result = game.getScore();
    // Then
    expect(result).toEqual('Deuce');
  });

  it('should return "Advantage player1" when player1 won seven points AND player2 won six points', () => {
    // Given
    const game = new Game();
    winPoints(game.player1, 7)
    winPoints(game.player2, 6)

    // When
    const result = game.getScore();
    // Then
    expect(result).toEqual('Advantage player1');
  });

  it('should return "Player1 win game" when player1 won seven points AND player2 won five points', () => {
    // Given
    const game = new Game();
    winPoints(game.player1, 7)
    winPoints(game.player2, 5)

    // When
    const result = game.getScore();
    // Then
    expect(result).toEqual('Player1 win game');
  });

  it('should return "Advantage player2" when player1 won six points AND player2 won seven points', () => {
    // Given
    const game = new Game();
    winPoints(game.player1, 6)
    winPoints(game.player2, 7)

    // When
    const result = game.getScore();
    // Then
    expect(result).toEqual('Advantage player2');
  });

  it('should return "Player2 win game" when player1 won five points AND player2 won seven points', () => {
    // Given
    const game = new Game();
    winPoints(game.player1, 5)
    winPoints(game.player2, 7)

    // When
    const result = game.getScore();
    // Then
    expect(result).toEqual('Player2 win game');
  });
});

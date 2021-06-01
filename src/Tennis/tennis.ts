export class Player {
  winGame: boolean = false;
  points: number = 0;

  winPoint() {
    this.points += 1;
  }
}

export class Game {
  player1: Player = new Player();
  player2: Player = new Player();

  scoreNames: string[] = ['Love', 'Fifteen', 'Thirty', 'Forty'];

  deuceScore(points: number) {
    if (points < 3) {
      return `${this.scoreNames[points]}-All`
    }

    return 'Deuce'
  }

  tieScore(player1Points: number, player2Points: number) {
    if (player1Points > player2Points) {
      return 'Advantage player1'
    }

    return 'Advantage player2'
  }

  win(player1Points: number, player2Points: number) {
    if (player1Points > player2Points) {
      return 'Player1 win game'
    }

    return 'Player2 win game'
  }

  getScore() {
    if (this.player1.points === this.player2.points) {
      return this.deuceScore(this.player1.points);
    }

    if (this.player1.points > 3 || this.player2.points > 3) {
      if (Math.abs(this.player1.points - this.player2.points) >= 2) {
        return this.win(this.player1.points, this.player2.points);
      }

      return this.tieScore(this.player1.points, this.player2.points);
    }

    const player1Score = this.scoreNames[this.player1.points];
    const player2Score = this.scoreNames[this.player2.points];

    return `${player1Score}-${player2Score}`;
  }
}

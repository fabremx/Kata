class Player {
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

  deuceScore(points) {
    if (points < 3) {
      return `${this.scoreNames[points]}-All`
    }

    return 'Deuce'
  }

  tieScore(player1Points, player2Points) {
    if (player1Points >= player2Points + 2) {
      return 'Player1 win game'
    }

    if (player2Points >= player1Points + 2) {
      return 'Player2 win game'
    }

    if (player1Points > player2Points) {
      return 'Advantage player1'
    }

    if (player2Points > player1Points) {
      return 'Advantage player2'
    }
  }

  getScore() {
    if (this.player1.points === this.player2.points) {
      return this.deuceScore(this.player1.points);
    }

    if (this.player1.points > 3 || this.player2.points > 3) {
      return this.tieScore(this.player1.points, this.player2.points);
    }

    const player1Score = this.scoreNames[this.player1.points];
    const player2Score = this.scoreNames[this.player2.points];

    return `${player1Score}-${player2Score}`;
  }
}

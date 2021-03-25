class Player {
  set: number = 0;
  points: number = 0;

  winPoint() {
    if (this.points === 15) {
      this.points = 30;
    } else if (this.points === 30) {
      this.points = 40;
    } else if (this.points === 40) {
      this.points = 0;
      this.set = 1;
    } else {
      this.points = 15;
    }
  }
}

export class Game {
  player1: Player = new Player();
  player2: Player = new Player();

  score() {
    return `
Sets: ${this.player1.set}-${this.player2.set}
Points: ${this.player1.points}-${this.player2.points}`;
  }
}

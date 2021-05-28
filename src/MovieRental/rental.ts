import { Movie } from "./movie";

export class Rental {
  public constructor(readonly movie: Movie, readonly daysRented: number) { }

  determineFrequentPoint(): number {
    return this.hasRentalBonus() ? 2 : 1;
  }

  hasRentalBonus(): boolean {
    return this.movie.priceCode === Movie.NEW_RELEASE && this.daysRented > 1;
  }

  determineAmount() {
    return this.movie.determineAmount(this.daysRented);
  }
}

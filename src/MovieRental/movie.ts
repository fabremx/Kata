export abstract class Movie {
  static readonly REGULAR = 0;
  static readonly NEW_RELEASE = 1;
  static readonly CHILDREN = 2;

  constructor(readonly title: string, public priceCode: number) {}

  abstract determineAmount(daysRented: number): number;
}

export class ChildrensMovie extends Movie {
  determineAmount(daysRented: number): number {
    let amount2 = 1.5;
    if (daysRented > 3) {
      return amount2 + (daysRented - 3) * 1.5;
    }
    return amount2;
  }
}

export class RegularMovie extends Movie {
  determineAmount(daysRented: number): number {
    let amount = 2;
    if (daysRented > 2) {
      return amount + (daysRented - 2) * 1.5;
    }
    return amount;
  }
}

export class NewReleaseMovie extends Movie {
  determineAmount(daysRented: number): number {
    return daysRented * 3;
  }
}

export function createMovieFactory(title: string, priceCode: number): Movie {
  switch (priceCode) {
    case Movie.NEW_RELEASE:
      return new NewReleaseMovie(title, priceCode);
    case Movie.CHILDREN:
      return new ChildrensMovie(title, priceCode);
    default:
      return new RegularMovie(title, priceCode);
  }
}

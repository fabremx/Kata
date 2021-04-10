import { Rental } from "./rental";

export class Customer {
  private rentals: Rental[] = [];

  constructor(readonly name: string) {}

  addRental(rental: Rental) {
    this.rentals.push(rental);
  }

  computeRentalsDetails(): { title: string; amount: number }[] {
    return this.rentals.map((rental: Rental) => ({
      title: rental.movie.title,
      amount: rental.determineAmount(),
    }));
  }

  computeTotalAmount(): number {
    return this.rentals.reduce(
      (acc, rental) => acc + rental.determineAmount(),
      0
    );
  }

  computeFrequentPoint(): number {
    return this.rentals.reduce(
      (acc, rental) => acc + rental.determineFrequentPoint(),
      0
    );
  }
}

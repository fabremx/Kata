import { Customer } from "./customer";
import { Movie, createMovieFactory } from "./movie";
import { Rental } from "./rental";
import { generateReport } from "./report";

describe("VideoStore", () => {
  let customer: Customer;

  beforeEach(() => {
    customer = new Customer("Fred");
  });

  it("test single NewRelease statement", () => {
    customer.addRental(
      new Rental(createMovieFactory("The Cell", Movie.NEW_RELEASE), 3)
    );

    const report = generateReport(customer);

    expect(report).toBe(
      "Rental Record for Fred\n" +
        "\tThe Cell\t9.0\n" +
        "You owed 9.0\n" +
        "You earned 2 frequent renter points \n"
    );
  });

  it("test dual NewRelease statement", () => {
    customer.addRental(
      new Rental(createMovieFactory("The Cell", Movie.NEW_RELEASE), 3)
    );
    customer.addRental(
      new Rental(createMovieFactory("The Tigger Movie", Movie.NEW_RELEASE), 3)
    );

    const report = generateReport(customer);

    expect(report).toBe(
      "Rental Record for Fred\n" +
        "\tThe Cell\t9.0\n" +
        "\tThe Tigger Movie\t9.0\n" +
        "You owed 18.0\n" +
        "You earned 4 frequent renter points \n"
    );
  });

  it("test dual children statement", () => {
    customer.addRental(
      new Rental(createMovieFactory("The Tigger Movie", Movie.CHILDREN), 3)
    );
    customer.addRental(
      new Rental(createMovieFactory("Children 2", Movie.CHILDREN), 4)
    );

    const report = generateReport(customer);

    expect(report).toBe(
      "Rental Record for Fred\n" +
        "\tThe Tigger Movie\t1.5\n" +
        "\tChildren 2\t3.0\n" +
        "You owed 4.5\n" +
        "You earned 2 frequent renter points \n"
    );
  });

  it("test multiple regular statement", () => {
    customer.addRental(
      new Rental(
        createMovieFactory("Plan 9 from Outer Space", Movie.REGULAR),
        1
      )
    );
    customer.addRental(
      new Rental(createMovieFactory("8 1/2", Movie.REGULAR), 2)
    );
    customer.addRental(
      new Rental(createMovieFactory("Eraserhead", Movie.REGULAR), 3)
    );

    const report = generateReport(customer);

    expect(report).toBe(
      "Rental Record for Fred\n" +
        "\tPlan 9 from Outer Space\t2.0\n" +
        "\t8 1/2\t2.0\n" +
        "\tEraserhead\t3.5\n" +
        "You owed 7.5\n" +
        "You earned 3 frequent renter points \n"
    );
  });
});

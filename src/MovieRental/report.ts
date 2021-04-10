import { Customer } from "./customer";

export function generateReport(customer: Customer): string {
  const rentalsAmount = customer.computeTotalAmount();
  const rentailsDetails = customer.computeRentalsDetails();
  const rentalsFrequentPoints = customer.computeFrequentPoint();

  return (
    writetHeaderReport(customer.name) +
    writeMoviesReport(rentailsDetails) +
    writeTotalReport(rentalsAmount, rentalsFrequentPoints)
  );
}

function writetHeaderReport(name: string): string {
  return "Rental Record for " + name + "\n";
}

function writeMoviesReport(
  moviesDetails: { title: string; amount: number }[]
): string {
  return (
    moviesDetails
      .map((detail) => `\t${detail.title}\t${detail.amount.toFixed(1)}`)
      .join("\n") + "\n"
  );
}

function writeTotalReport(
  totalAmount: number,
  frequentRenterPoints: number
): string {
  return (
    `You owed ${totalAmount.toFixed(1)}\n` +
    `You earned ${frequentRenterPoints} frequent renter points \n`
  );
}

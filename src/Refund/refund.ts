export class Change {
  coins: number = 0;
  fiveBill: number = 0;
  tenBill: number = 0;

  public constructor(coins: number, fiveBill: number, tenBill: number) {
    this.coins = coins;
    this.fiveBill = fiveBill;
    this.tenBill = tenBill;
  }

  setCoins(coins: number) {
    this.coins = coins;
  }
  setFiveBill(fiveBill: number) {
    this.fiveBill = fiveBill;
  }
  setTenBill(tenBill: number) {
    this.tenBill = tenBill;
  }

  getChange() {
    return {
      coins: this.coins,
      fiveBill: this.fiveBill,
      tenBill: this.tenBill,
    };
  }
}

export const computeRefund = (refund: number): Change | undefined => {
  if (isNotPossibleToRefund(refund)) {
    return undefined;
  }

  const coins: number = computeChangeCoins(refund);
  const fiveBill: number = computeChangeFiveBill(refund);
  const tenBill: number = computeChangeTenBill(refund);

  return new Change(coins, fiveBill, tenBill);
};

const computeChangeCoins = (refund: number): number => {
  if (isDivisibleBy2(refund))
    return (refund - Math.trunc(refund / 10) * 10) / 2;
  if (isDivisibleBy5(refund)) return 0;

  const mappingLastDigitCoins = {
    "1": 3,
    "3": 4,
    "7": 1,
    "9": 2,
  };

  return mappingLastDigitCoins[lastDigitNumber(refund).toString()];
};

const computeChangeFiveBill = (refund: number): number => {
  if (isDivisibleBy2(refund)) return 0;
  if (isDivisibleBy5(refund))
    return (refund - Math.trunc(refund / 10) * 10) / 5;

  return 1;
};

const computeChangeTenBill = (refund: number): number => {
  if (lastDigitNumber(refund) === 1 || lastDigitNumber(refund) === 3) {
    return Math.trunc(refund / 10) - 1;
  }

  return Math.trunc(refund / 10);
};

const isNotPossibleToRefund = (refund: number): boolean => {
  const deadNumbers: Number[] = [1, 3];
  return deadNumbers.includes(refund);
};

const isDivisibleBy2 = (refund: number): boolean => {
  return refund % 2 === 0;
};
const isDivisibleBy5 = (refund: number): boolean => {
  return refund % 5 === 0;
};

const lastDigitNumber = (refund: number): number => {
  return parseInt(refund.toString().slice(-1));
};

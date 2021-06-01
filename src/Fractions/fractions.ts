
export class Fraction {
  numerator: number;
  denominator: number;

  constructor(numerator: number, denominator: number) {
    if (numerator === 0) {
      throw Error('invalid numerator');
    }

    if (denominator === 0) {
      throw Error('invalid denominator');
    }

    this.numerator = numerator;
    this.denominator = denominator;
  }
}

export const sumFraction = (fraction1: Fraction, fraction2: Fraction): Fraction => {
  const numerator = (fraction1.numerator * fraction2.denominator) + (fraction2.numerator * fraction1.denominator)
  const denominator = fraction1.denominator * fraction2.denominator;

  return simplifyFraction({ numerator, denominator });
}

const simplifyFraction = ({ numerator, denominator }: Fraction): Fraction => {
  const gcd = getGcd(numerator, denominator);

  return {
    numerator: numerator / gcd,
    denominator: denominator / gcd
  }
}

const getGcd = (numerator: number, denominator: number): number => {
  return denominator === 0 ? numerator : getGcd(denominator, numerator % denominator);
}

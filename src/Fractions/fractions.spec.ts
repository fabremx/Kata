import { sumFraction, Fraction } from "./fractions";

describe('Fractions', () => {
	it('should create an instance', () => {
		expect(new Fraction(1, 1)).toBeTruthy();
	});

	it('should not accept 0 as numerator', () => {
		expect(() => new Fraction(0, 1)).toThrow(Error('invalid numerator'));
	});

	it('should not accept 0 as denominator', () => {
		expect(() => new Fraction(1, 0)).toThrow(Error('invalid denominator'));
	});

	it('Add function should return a Fraction(2, 1)', () => {
		const fraction1 = new Fraction(1, 1);
		const fraction2 = new Fraction(1, 1);
		const addedFraction = sumFraction(fraction1, fraction2);

		expect(addedFraction).toEqual(new Fraction(2, 1));
	});

	it('Should return a reduced Fraction(2, 1)', () => {
		const fraction1 = new Fraction(4, 2);
		const fraction2 = new Fraction(4, 2);
		const addedFraction = sumFraction(fraction1, fraction2);

		expect(addedFraction).toEqual(new Fraction(4, 1));
	});

	it('Add Should return a reduced Fraction(5, 4)', () => {
		const fraction1 = new Fraction(2, 4);
		const fraction2 = new Fraction(6, 8);
		const addedFraction = sumFraction(fraction1, fraction2);

		expect(addedFraction).toEqual(new Fraction(5, 4));
	});
});
import LeapYear from './leapYear';

describe('Leap Year', () => {
    const leapYear = new LeapYear();

    describe('Typical common year', () => {
        it('should return false when year equal to 2001', () => {
            // Given
            const year = 2001;

            // When
            const result = leapYear.isLeapYear(year);

            // Then
            expect(result).toBe(false);
        });
    });

    describe('Typical leap year', () => {
        it('should return true when year equal to 1996', () => {
            // Given
            const year = 1996;

            // When
            const result = leapYear.isLeapYear(year);

            // Then
            expect(result).toBe(true);
        });

        it('should return true when year equal to 2004', () => {
            // Given
            const year = 2004;

            // When
            const result = leapYear.isLeapYear(year);

            // Then
            expect(result).toBe(true);
        });
    });

    describe('Atypical common year', () => {
        it('should return false when year equal to 1900', () => {
            // Given
            const year = 1900;

            // When
            const result = leapYear.isLeapYear(year);

            // Then
            expect(result).toBe(false);
        });

        it('should return false when year equal to 1800', () => {
            // Given
            const year = 1800;

            // When
            const result = leapYear.isLeapYear(year);

            // Then
            expect(result).toBe(false);
        });
    });

    describe('Atypical leap year', () => {
        it('should return true when year equal to 2000', () => {
            // Given
            const year = 2000;

            // When
            const result = leapYear.isLeapYear(year);

            // Then
            expect(result).toBe(true);
        });

        it('should return true when year equal to 1600', () => {
            // Given
            const year = 1600;

            // When
            const result = leapYear.isLeapYear(year);

            // Then
            expect(result).toBe(true);
        });
    });
});
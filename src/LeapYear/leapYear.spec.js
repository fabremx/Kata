const { isLeapYear } =  require('../leapYears');

it('should return false when year equal to 2001', () => {
  // Given
  const year = 2001;

  // When
  const result = isLeapYear(year);

  // Then
  expect(result).toBe(false);
})

it('should return true when year equal to 1996', () => {
  // Given
  const year = 1996;

  // When
  const result = isLeapYear(year);

  // Then
  expect(result).toBe(true);
})

it('should return true when year equal to 2004', () => {
  // Given
  const year = 2004;

  // When
  const result = isLeapYear(year);

  // Then
  expect(result).toBe(true);
})
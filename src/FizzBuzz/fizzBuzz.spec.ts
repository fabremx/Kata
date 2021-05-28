import { fizzBuzz } from "./fizzBuzz";

describe("FizzBuzzService", () => {
  it("should return 0 for number 0", () => {
    // Given
    const value = 0;
    // When
    const result = fizzBuzz(value);
    // Then
    expect(result).toEqual(0);
  });

  it("should return Fizz for number 3", () => {
    // Given
    const value = 3;
    // When
    const result = fizzBuzz(value);
    // Then
    expect(result).toEqual("Fizz");
  });

  it("should return Fizz for number 6", () => {
    // Given
    const value = 6;
    // When
    const result = fizzBuzz(value);
    // Then
    expect(result).toEqual("Fizz");
  });

  it("should return Fizz for number 9", () => {
    // Given
    const value = 9;
    // When
    const result = fizzBuzz(value);
    // Then
    expect(result).toEqual("Fizz");
  });

  it("should return Buzz for number 5", () => {
    // Given
    const value = 5;
    // When
    const result = fizzBuzz(value);
    // Then
    expect(result).toEqual("Buzz");
  });

  it("should return Buzz for number 10", () => {
    // Given
    const value = 10;
    // When
    const result = fizzBuzz(value);
    // Then
    expect(result).toEqual("Buzz");
  });

  it("should return Buzz for number 20", () => {
    // Given
    const value = 20;
    // When
    const result = fizzBuzz(value);
    // Then
    expect(result).toEqual("Buzz");
  });

  it("should return FizzBuzz for number 15", () => {
    // Given
    const value = 15;
    // When
    const result = fizzBuzz(value);
    // Then
    expect(result).toEqual("FizzBuzz");
  });

  it("should return FizzBuzz for number 30", () => {
    // Given
    const value = 30;
    // When
    const result = fizzBuzz(value);
    // Then
    expect(result).toEqual("FizzBuzz");
  });

  it("should return FizzBuzz for number 45", () => {
    // Given
    const value = 45;
    // When
    const result = fizzBuzz(value);
    // Then
    expect(result).toEqual("FizzBuzz");
  });

  it("should return -15 for number -15", () => {
    // Given
    const value = -15;
    // When
    const result = fizzBuzz(value);
    // Then
    expect(result).toEqual(-15);
  });
});

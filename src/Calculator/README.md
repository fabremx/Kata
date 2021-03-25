# Calculator

**Instructions**
You should implement a class "Calculator" able to handle some basic mathematical functions

**Iteration 1**
As a user I want to :
- Make an addition of two values
- Make an substraction of two values
- Make an multiplication of two values
- Make an division of two values

**Iteration 2**
As a user I want to get the hypotenuse of a right-angled triangle when I know the values ​​of the other sides of the triangle

Exemples:
for two sides equal to 6 and 4 the result must be the square root of 6² + 4²

**Iteration 3**
As a user I want to calcul the sum of a mathematical function between two intervals.

Criteria acceptance:
- The mathematical function passed should have only one unknown value
- The mathematical function passed must be constructed with previous calculator functions

Here's the interface of the function
```ts
integral(start: number, end: number, iteratee: (x: number) => number): any
```

Some Unit tests have already be done 

```ts
describe('integral method', () => {
    it('integral(1, 3, 4x + 2 - 3x + 7) equals 30', () => {
      chai
        .expect(
          calculator.integral(
            1,
            3,
            (x: number) => 4 * x + 2 - (3 * x + 7)
          )
        )
        .to.equals(-9);
    });
    it('integral(2, 5, 7x - 2) equals 90', () => {
      chai
        .expect(
          calculator.integral(
            2,
            5,
            (x: number) => 7 * x - 2
          )
        )
        .to.equals(90);
    });
  });
```

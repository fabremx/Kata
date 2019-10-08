# Leap Year
Source : [https://katalyst.codurance.com/leap-year](https://katalyst.codurance.com/leap-year)

## Instructions

### User Story
As a user, I want to know if a year is a leap year, So that I can plan for an extra day on February 29th during those years.

### Acceptance Criteria

-   A year  **is not**  a leap year if  **not**  divisible by 4
-   A year  **is**  a leap year if divisible by 4
-   A year  **is**  a leap year if divisible by 400
-   A year  **is not**  a leap year if divisible by 100 but  **not**  by 400

Examples:

-   1997  **is not**  a leap year (not divisible by 4)
-   1996  **is**  a leap year (divisible by 4)
-   1600  **is**  a leap year (divisible by 400)
-   1800  **is not**  a leap year (divisible by 4, divisible by 100, NOT divisible by 400)

The method should return true if a year is a leap year, and false if it is not.

Credit:  [Coding Dojo](http://codingdojo.org/kata/LeapYears/)
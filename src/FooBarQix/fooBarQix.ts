export default class FooBarQix {
    foo = 'Foo';
    bar = 'Bar';
    qix = 'Qix';

    public fooBarQix(number: number): string|number {
        let result = this.resultByDivision(number);
        if (number === 3) {
            result += this.resultByOccurence(number);
        }
    
        return result;
    }

    public resultByOccurence(number: number): string {
        const listOfDigit: number[] = this.splitNumber(number);
        return this.resultFromDigitOccurence(listOfDigit);
    }

    private resultFromDigitOccurence(listOfDigit: number[]): string {
        return listOfDigit
            .map((digit) => this.resultBy(digit))
            .join("");
    }

    private resultBy(digit: number): string {
        switch (digit) {
            case 3:
                return this.foo;
            case 5:
                return this.bar;
            case 7:
                return this.qix;
        }
    }

    private splitNumber(number: number): number[] {
        return number.toString().split('').map(Number);
    }

    public resultByDivision(number: number): string|number {
        if (this.isDivisibleBy3(number) && this.isDivisibleBy5(number) && this.isDivisibleBy7(number)) {
            return this.foo + this.bar + this.qix;
        }
        else if (this.isDivisibleBy3(number) && this.isDivisibleBy7(number)) {
            return this.foo + this.qix;
        }
        else if (this.isDivisibleBy5(number) && this.isDivisibleBy7(number)) {
            return this.bar + this.qix;
        }
        else if (this.isDivisibleBy3(number) && this.isDivisibleBy5(number)) {
            return this.foo + this.bar;
        }
        else if (this.isDivisibleBy3(number)) {
            return this.foo;
        }
        else if (this.isDivisibleBy5(number)) {
            return this.bar;
        }
        else if (this.isDivisibleBy7(number)) {
            return this.qix;
        }
        else {
            return number;
        }
    }

    private isDivisibleBy7(number: number): boolean {
        return number % 7 === 0;
    }
    
    private isDivisibleBy3(number: number): boolean {
        return number % 3 === 0;
    }
    
    private isDivisibleBy5(number: number): boolean {
        return number % 5 === 0;
    }
}
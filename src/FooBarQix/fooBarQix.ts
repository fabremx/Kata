export default class FooBarQix {
    mapping = {
        3: "Foo",
        5: "Bar",
        7: "Qix",
    }

    public fooBarQix(number: number): string | number {
        const stringResult: string = this.resultByModulo(number) + this.resultByOccurence(number);
        return stringResult.length ? stringResult : number;
    }

    public resultByModulo(number: number): string {
        const dividers: string[] = Object.keys(this.mapping);

        const stringResult: string[] = dividers.map((divider) => {
            return number % parseInt(divider) === 0 
                ? this.mapping[divider]
                : ''
        });
        return stringResult.join("");
    }

    public resultByOccurence(number: number): string {
        return this.splitDigitFrom(number)
                .filter((digit) => this.mapping.hasOwnProperty(digit))
                .map((digit) => this.mapping[digit])
                .join('');
    }

    private splitDigitFrom(number: number): number[] {
        return number.toString().split('').map(Number);
    }
}
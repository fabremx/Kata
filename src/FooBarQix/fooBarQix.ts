export default class FooBarQix {
    mapping: object = {
        '3': 'Foo',
        '5': 'Bar',
        '7': 'Qix',
    };
    regex: RegExp = /0/gi;

    public fooBarQix(number: string): string {
        const resultByModulo: string = this.resultByModulo(number);
        const numberWithZerosCensored: string = this.replaceZerosByStarFrom(number);
        const resultByOccurence: string = this.resultByOccurence(number);

        return resultByModulo.length || resultByOccurence.length
            ? resultByModulo + numberWithZerosCensored + resultByOccurence
            : number.replace(this.regex, '*');
    }

    public resultByModulo(number: string): string {
        const dividers: string[] = Object.keys(this.mapping);
        const stringResult: string[] = dividers.map((divider) => {
            return parseInt(number) % parseInt(divider) === 0 
                ? this.mapping[divider]
                : ''
        });
        
        return stringResult.join("");
    }

    public replaceZerosByStarFrom(number: string): string {
        return number
                .split('')
                .filter((digit) => (digit === '0'))
                .join('')
                .replace(this.regex, '*');
    }

    public resultByOccurence(number: string): string {
        return number
                .split('')
                .filter((digit) => this.mapping.hasOwnProperty(digit))
                .map((digit) => this.mapping[digit])
                .join('');
    }
}
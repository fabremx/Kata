export function fizzBuzz(value: number): number | string {
    const mapping = [{ divider: 3, output: 'Fizz'}, { divider: 5, output: 'Buzz'}]

    const result = mapping.reduce((acc, current) => {
        if (isDivisible(value, current.divider)) {
            return acc += current.output;
        }

        return acc;
    }, '')

    return result || value;
}

function isDivisible(value: number, divider: number): boolean {
    return value > 0 && value % divider === 0;
}

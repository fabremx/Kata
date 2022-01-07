import { toRoman } from "./romanNumerals"

[
    {
        input: 1,
        output: 'I'
    },
    {
        input: 2,
        output: 'II'
    },
    {
        input: 3,
        output: 'III'
    },
    {
        input: 5,
        output: 'V'
    },
    {
        input: 6,
        output: 'VI'
    },
    {
        input: 10,
        output: 'X'
    },
    {
        input: 11,
        output: 'XI'
    },
    {
        input: 4,
        output: 'IV'
    },
    {
        input: 9,
        output: 'IX'
    },
    {
        input: 14,
        output: 'XIV'
    },
    {
        input: 19,
        output: 'XIX'
    },
    {
        input: 20,
        output: 'XX'
    },
    {
        input: 29,
        output: 'XXIX'
    },
    {
        input: 50,
        output: 'L'
    },
    {
        input: 40,
        output: 'XL'
    },
    {
        input: 43,
        output: 'XLIII'
    },
    {
        input: 60,
        output: 'LX'
    },
    {
        input: 69,
        output: 'LXIX'
    },
    {
        input: 99,
        output: 'XCIX'
    },
    {
        input: 145,
        output: 'CXLV'
    },
    {
        input: 500,
        output: 'D'
    },
    {
        input: 499,
        output: 'CDXCIX'
    },
    {
        input: 1000,
        output: 'M'
    },
    {
        input: 920,
        output: 'CMXX'
    },
    {
        input: 5420,
        output: 'MMMMMCDXX'
    }
].forEach((data) => {
    it(`should return ${data.output} when input is ${data.input}`, () => {
        expect(toRoman(data.input)).toBe(data.output)
    });
})

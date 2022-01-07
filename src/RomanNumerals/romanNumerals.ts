const ROMAN_ONE = 'I';
const ROMAN_FIVE = 'V';
const ROMAN_TEN = 'X';
const ROMAN_FITHTY = 'L';
const ROMAN_HUNDRED = 'C';
const ROMAN_FIVE_HUNDRED = 'D';
const ROMAN_THOUSAND = 'M';

const ROMAN_FOUR = 'IV'
const ROMAN_NINE = 'IX'
const ROMAN_FOURTY = 'XL'
const ROMAN_NINETY = 'XC'
const ROMAN_FOUR_HUNDRED = 'CD'
const ROMAN_NINE_HUNDRED = 'CM'

const romanMapping = [
    { arabic: 1000, roman: ROMAN_THOUSAND },
    { arabic: 500, roman: ROMAN_FIVE_HUNDRED },
    { arabic: 100, roman: ROMAN_HUNDRED },
    { arabic: 50, roman: ROMAN_FITHTY },
    { arabic: 10, roman: ROMAN_TEN },
    { arabic: 5, roman: ROMAN_FIVE }
]

const exceptionMapping = [
    { arabic: 900, roman: ROMAN_NINE_HUNDRED },
    { arabic: 400, roman: ROMAN_FOUR_HUNDRED },
    { arabic: 90, roman: ROMAN_NINETY },
    { arabic: 40, roman: ROMAN_FOURTY },
    { arabic: 4, roman: ROMAN_FOUR },
    { arabic: 9, roman: ROMAN_NINE }
]

export function toRoman(arabicNumber: number): string {
    let roman: string = '';

    romanMapping.forEach((mapping) => {
        if (isAnExceptionNumber(arabicNumber)) {
            const exception = findExceptionMapping(arabicNumber);
            roman += exception.roman
            arabicNumber -= exception.arabic
        }

        if (arabicNumber >= mapping.arabic) {
            roman += mapping.roman.repeat(getNumberOfCharacter(arabicNumber, mapping.arabic));
            arabicNumber = arabicNumber % mapping.arabic;
        }
    })

    return roman + repeatRomanOne(arabicNumber);
}

function getNumberOfCharacter(arabicNumber: number, mappingArabic: number): number {
    return arabicNumber / mappingArabic;
}

function repeatRomanOne(arabicNumber: number): string {
    return ROMAN_ONE.repeat(arabicNumber);
}

function isAnExceptionNumber(arabicNumber: number): boolean {
    const exceptionNumber = retrieveExceptionNumber(arabicNumber);
    return exceptionMapping.some((mapping) => mapping.arabic === exceptionNumber);
}

function findExceptionMapping(arabicNumber: number): { arabic: number; roman: string } {
    const exceptionNumber = retrieveExceptionNumber(arabicNumber);
    return exceptionMapping.find((mapping) => mapping.arabic === exceptionNumber)!;
}

function retrieveExceptionNumber(arabicNumber: number): number {
    const arabicNumberLength = arabicNumber.toString().length;
    const tenFactor = parseInt('1' + '0'.repeat(arabicNumberLength - 1));

    return (Math.trunc(arabicNumber / tenFactor)) * tenFactor;
}

const dividedBy3 = 'Foo';
const dividedBy5 = 'Bar';
const dividedBy7 = 'Qix';

function resultByOccurence(number) {
    const numberArray = number.toString().split('').map(Number);
    let result = '';

    for (let i = 0; i < numberArray.length; i++) {
        if (numberArray[i] === 3) {
            result += dividedBy3;
        }
    }

    return result;
}

function fooBarQix(number) {
    let result = resultByDivision(number);
    if (number === 3) {
        result += resultByOccurence(number);
    }

    return result;
}

function resultByDivision(number) {
    if (isDivisibleBy3(number) && isDivisibleBy5(number) && isDivisibleBy7(number)) {
        return dividedBy3 + dividedBy5 + dividedBy7;
    }
    else if (isDivisibleBy3(number) && isDivisibleBy7(number)) {
        return dividedBy3 + dividedBy7;
    }
    else if (isDivisibleBy5(number) && isDivisibleBy7(number)) {
        return dividedBy5 + dividedBy7;
    }
    else if (isDivisibleBy3(number) && isDivisibleBy5(number)) {
        return dividedBy3 + dividedBy5;
    }
    else if (isDivisibleBy3(number)) {
        return dividedBy3;
    }
    else if (isDivisibleBy5(number)) {
        return dividedBy5;
    }
    else if (isDivisibleBy7(number)) {
        return dividedBy7;
    }
    else {
        return number;
    }
}

function isDivisibleBy7(number) {
    return number % 7 === 0;
}

function isDivisibleBy3(number) {
    return number % 3 === 0;
}

function isDivisibleBy5(number) {
    return number % 5 === 0;
}

export {
    resultByDivision,
    fooBarQix,
    resultByOccurence
}

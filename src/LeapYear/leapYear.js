function isLeapYear(year) {
    return (
        (isDivisibleBy(year, 4) && !isDivisibleBy(year, 100)) || 
        isDivisibleBy(year, 400)
    );
}

function isDivisibleBy(year, number) {
    return year % number === 0;
}

module.exports = {
    isLeapYear
}
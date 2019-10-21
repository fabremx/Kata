export default class LeapYear {
    public isLeapYear(year: number): boolean {
        return this.isTypicalLeapYear(year) || this.isAtypicalLeapYear(year);
    }

    private isTypicalLeapYear(year: number): boolean {
        return this.isDivisibleBy4(year) && !this.isDivisibleBy100(year);
    }

    private isAtypicalLeapYear(year: number): boolean {
        return this.isDivisibleBy400(year);
    }

    private isDivisibleBy4(year: number): boolean {
        return year % 4 === 0;
    }

    private isDivisibleBy100(year: number): boolean {
        return year % 100 === 0;
    }

    private isDivisibleBy400(year: number): boolean {
        return year % 400 === 0;
    }
}
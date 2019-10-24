export default class Diamond {
    public displayDiamond(letter: string): string {
        if (letter === 'A') {
            return 'A';
        }

        const quarterDiamond: string[] = this.createQuarterDiamond(letter);
        const halfDiamond: string[] = this.createHalfDiamond(quarterDiamond);
        const fullDiamond: string[] = this.createFullDiamond(halfDiamond);
    
        return fullDiamond.join('\n');
    }

    public createQuarterDiamond(letter: string): string[] {
        const ACharCode: number = 'A'.charCodeAt(0);
        const rowsNumber: number = letter.charCodeAt(0) - ACharCode;
        
        const quarter: string[] = [];

        for (let i = 0; i <= rowsNumber; i++) {
            quarter.push(
                  this.getSpaces(rowsNumber - i)
                + String.fromCharCode(ACharCode + i)
                + this.getSpaces(i)
            );
        }

        return quarter;
    }

    public createHalfDiamond(quarter: string[]): string[] {
        return quarter.map((row) => row + [...row].reverse().slice(1).join(''))
    }

    public createFullDiamond(half: string[]): string[] {
        return half.concat([...half].reverse().slice(1));
    }
    
    private getSpaces(spaceNumber: number): string {
        return ' '.repeat(spaceNumber);
    } 
}
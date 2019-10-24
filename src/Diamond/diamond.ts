export default class Diamond {
    ALPHABET = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';

    public createDiamond(letter: string): string {
        if (letter === 'A') {
            return 'A';
        }
    
        const headDiamond = this.createDiamondHeadPart(letter);
        const perimeterLine = this.createPerimeterLine(letter);
        const footerDiamond = this.reverseDiamondPart(headDiamond);
    
        return headDiamond + '\n' + perimeterLine + '\n' + footerDiamond;
    }

    public createDiamondHeadPart(letter: string): string {
        const linesNumberBeforePerimeterLine = this.getLetterPositionInAlphabet(letter) ;
        let spaceAroundLetter = linesNumberBeforePerimeterLine;
        let spaceBetweenLetter = 0;
    
        let diamondPart;
    
        for (let i = 0; i < linesNumberBeforePerimeterLine; i++) {
            if (i === 0) {
                diamondPart = diamondPart
                + this.getSpaces(spaceAroundLetter)
                + this.ALPHABET.charAt(i)
                + this.getSpaces(spaceAroundLetter);
            } else {
                diamondPart = diamondPart
                + this.getSpaces(spaceAroundLetter) 
                + this.ALPHABET.charAt(i) 
                + this.getSpaces(spaceBetweenLetter) 
                + this.ALPHABET.charAt(i) 
                + this.getSpaces(spaceAroundLetter);
            }
            
            if (i !== linesNumberBeforePerimeterLine - 1) {
                diamondPart += '\n';
            }
            
            spaceAroundLetter--;
            spaceBetweenLetter += (spaceBetweenLetter == 0) ? 1 : 2;
        }
    
        return diamondPart;
    }

    public createPerimeterLine(letter: string): string {
        const letterPositionInAlphabet = this.getLetterPositionInAlphabet(letter);
        const spaceBetweenLetter = -1 + (2 * letterPositionInAlphabet);
    
        return letter + this.getSpaces(spaceBetweenLetter) + letter;
    }

    public reverseDiamondPart(diamondPart: string): string {
        return diamondPart.split("").reverse().join("");
    }
    
    public getLetterPositionInAlphabet(letter: string): number {
        return this.ALPHABET.indexOf(letter);
    }
    
    public getSpaces(spaceNumber: number): string {
        const space: string = ' ';
        return space.repeat(spaceNumber);
    } 
}
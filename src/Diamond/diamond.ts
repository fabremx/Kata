const ALPHABET = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';

function createDiamond(letter) {
    if (letter === 'A') {
        return 'A';
    }

    const headDiamond = createDiamondHeadPart(letter);
    const perimeterLine = createPerimeterLine(letter);
    const footerDiamond = reverseDiamondPart(headDiamond);

    return headDiamond + '\n' + perimeterLine + '\n' + footerDiamond;
}

function createDiamondHeadPart(letter) {
    const linesNumberBeforePerimeterLine = getLetterPositionInAlphabet(letter) ;
    let spaceAroundLetter = linesNumberBeforePerimeterLine;
    let spaceBetweenLetter = 0;

    let diamondPart;

    for (let i = 0; i < linesNumberBeforePerimeterLine; i++) {
        if (i === 0) {
            diamondPart = diamondPart
            + getSpaces(spaceAroundLetter)
            + ALPHABET.charAt(i)
            + getSpaces(spaceAroundLetter);
        } else {
            diamondPart = diamondPart
            + getSpaces(spaceAroundLetter) 
            + ALPHABET.charAt(i) 
            + getSpaces(spaceBetweenLetter) 
            + ALPHABET.charAt(i) 
            + getSpaces(spaceAroundLetter);
        }
        
        if (i !== linesNumberBeforePerimeterLine - 1) {
            diamondPart += '\n';
        }
        
        spaceAroundLetter--;
        spaceBetweenLetter += (spaceBetweenLetter == 0) ? 1 : 2;
    }

    return diamondPart;
}

function createPerimeterLine(letter) {
    const letterPositionInAlphabet = getLetterPositionInAlphabet(letter);
    const spaceBetweenLetter = -1 + (2 * letterPositionInAlphabet);

    return letter + getSpaces(spaceBetweenLetter) + letter;
}

function reverseDiamondPart(diamondPart) {
    return diamondPart.split("").reverse().join("");
}

function getLetterPositionInAlphabet(letter) {
    return ALPHABET.indexOf(letter);
}

function getSpaces(spaceNumber) {
    const space: string = ' ';
    return space.repeat(spaceNumber);
}

export {
    createDiamond,
    getLetterPositionInAlphabet,
    createDiamondHeadPart,
    createPerimeterLine,
    reverseDiamondPart,
    getSpaces
}
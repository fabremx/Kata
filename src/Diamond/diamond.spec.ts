import Diamond from './diamond';

const diamond = new Diamond();

describe('createDiamond', () => {
    it('should return A diamond when letter is A', () => {
        // Given
        const letter = 'A';
    
        // When
        const result = diamond.createDiamond(letter);
    
        // Then
        const expectedResult = 'A';
        expect(result).toMatch(expectedResult);
    })
    
    it('should return diamond with 3 lines diamond when letter is B', () => {
        // Given
        const letter = 'B';
    
        // When
        const result = diamond.createDiamond(letter);
    
        // Then
        const expectedResult = 
` A 
B B
 A `;
        expect(result).toMatch(expectedResult);
    })
    
    it('should return diamond with 5 lines diamond when letter is C', () => {
        // Given
        const letter = 'C';
    
        // When
        const result = diamond.createDiamond(letter);
    
        // Then
        const expectedResult = 
`  A  
 B B 
C   C
 B B 
  A  `;
        expect(result).toMatch(expectedResult);
    })

    it('should return diamond with 9 lines diamond when letter is E', () => {
        // Given
        const letter = 'E';
    
        // When
        const result = diamond.createDiamond(letter);
    
        // Then
        const expectedResult = 
`    A    
   B B   
  C   C  
 D     D 
E       E
 D     D 
  C   C  
   B B   
    A    `;
        expect(result).toMatch(expectedResult);
    })
})

describe('getLetterPositionInAlphabet', () => {
    it('should return 1 when letter is A', () => {
        // Given
        const letter = 'A';

        // When
        const result = diamond.getLetterPositionInAlphabet(letter);

        // Then
        expect(result).toBe(0);
    })

    it('should return 2 when letter is B', () => {
        // Given
        const letter = 'B';

        // When
        const result = diamond.getLetterPositionInAlphabet(letter);

        // Then
        expect(result).toBe(1);
    })
})

describe('createDiamondHeadPart', () => {
    it('should return 2 lines with correct spaces when letter is B', () => {
        // Given
        const letter = 'B';

        // When
        const result = diamond.createDiamondHeadPart(letter);

        // Then
        const expectedResult = ` A `;
        expect(result).toMatch(expectedResult);
    })

    it('should return 3 lines with correct spaces when letter is C', () => {
        // Given
        const letter = 'C';

        // When
        const result = diamond.createDiamondHeadPart(letter);

        // Then
        const expectedResult = `  A  
 B B `;
        expect(result).toMatch(expectedResult);
    })
})

describe('createPerimeterLine', () => {
    it('should return perimeter line with correct spaces when letter is B', () => {
        // Given
        const letter = 'B';

        // When
        const result = diamond.createPerimeterLine(letter);

        // Then
        const expectedResult = `B B`;
        expect(result).toMatch(expectedResult);
    })

    it('should return perimeter line with correct spaces when letter is C', () => {
        // Given
        const letter = 'C';

        // When
        const result = diamond.createPerimeterLine(letter);

        // Then
        const expectedResult = `C   C`;
        expect(result).toMatch(expectedResult);
    })

    it('should return perimeter line with correct spaces when letter is D', () => {
        // Given
        const letter = 'D';

        // When
        const result = diamond.createPerimeterLine(letter);

        // Then
        const expectedResult = `D     D`;
        expect(result).toMatch(expectedResult);
    })
})

describe('reverseDiamondPart', () => {
    it('should return 1 lines whith A and a space between when letter is B', () => {
        // Given
        const diamondPart = ' A ';

        // When
        const result = diamond.reverseDiamondPart(diamondPart);

        // Then
        const expectedResult = ' A ';
        expect(result).toMatch(expectedResult);
    })

    it('should return 2 lines whith correct spaces between when letter is C', () => {
        // Given
        const diamondPart = `  A  
 B B `;

        // When
        const result = diamond.reverseDiamondPart(diamondPart);

        // Then
        const expectedResult = ` B B 
  A  `;
        expect(result).toMatch(expectedResult);
    })
})

describe('getSpace', () => {
    it('should return 2 spaces lines when number of spaces is 2', () => {
        // Given
        const spaceNumber = 2;

        // When
        const result = diamond.getSpaces(spaceNumber);

        // Then
        const expectedResult = '  ';
        expect(result).toBe(expectedResult);
    })
})


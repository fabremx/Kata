import Diamond from './diamond';

const diamond = new Diamond();

describe('displayDiamond', () => {
    it('should return A diamond when letter is A', () => {
        // Given
        const letter = 'A';
    
        // When
        const result = diamond.displayDiamond(letter);
    
        // Then
        const expectedResult = 'A';
        expect(result).toMatch(expectedResult);
    });
    
    it('should return diamond with 3 lines diamond when letter is B', () => {
        // Given
        const letter = 'B';
    
        // When
        const result = diamond.displayDiamond(letter);
    
        // Then
        const expectedResult = 
` A 
B B
 A `;
        expect(result).toMatch(expectedResult);
    });
    
    it('should return diamond with 5 lines diamond when letter is C', () => {
        // Given
        const letter = 'C';
    
        // When
        const result = diamond.displayDiamond(letter);
    
        // Then
        const expectedResult = 
`  A  
 B B 
C   C
 B B 
  A  `;
        expect(result).toMatch(expectedResult);
    });

    it('should return diamond with 9 lines diamond when letter is E', () => {
        // Given
        const letter = 'E';
    
        // When
        const result = diamond.displayDiamond(letter);
    
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
    });
});

describe('createQuarterDiamond', () => {
    it('should return quarter of three lines diamond when letter equal to B', () => {
        // Given
        const letter = 'B';

        // When
        const quarter = diamond.createQuarterDiamond(letter);

        // Then
        const expectedResult = [' A', 'B '];
        expect(quarter).toEqual(expectedResult);
    });

    it('should return quarter of seven lines diamond when letter equal to D', () => {
        // Given
        const letter = 'D';

        // When
        const quarter = diamond.createQuarterDiamond(letter);

        // Then
        const expectedResult = ['   A', '  B ', ' C  ', 'D   '];
        expect(quarter).toEqual(expectedResult);
    });
});

describe('createHalfDiamond', () => {
    it('should return half of three lines diamond when letter equal to B', () => {
        // Given
        const quarter = [' A', 'B '];

        // When
        const half = diamond.createHalfDiamond(quarter);

        // Then
        const expectedResult = [' A ', 'B B'];
        expect(half).toEqual(expectedResult);
    });

    it('should return half of seven lines diamond when letter equal to D', () => {
        // Given
        const quarter = ['   A', '  B ', ' C  ', 'D   '];

        // When
        const half = diamond.createHalfDiamond(quarter);

        // Then
        const expectedResult = ['   A   ', '  B B  ', ' C   C ', 'D     D'];
        expect(half).toEqual(expectedResult);
    });
});

describe('createFullDiamond', () => {
    it('should return full three lines diamond when letter equal to B', () => {
        // Given
        const half = [' A ', 'B B'];

        // When
        const full = diamond.createFullDiamond(half);

        // Then
        const expectedResult = [' A ', 'B B', ' A '];
        expect(full).toEqual(expectedResult);
    });

    it('should return full seven lines diamond when letter equal to D', () => {
        // Given
        const half = ['   A   ', '  B B  ', ' C   C ', 'D     D'];

        // When
        const full = diamond.createFullDiamond(half);

        // Then
        const expectedResult = ['   A   ', '  B B  ', ' C   C ', 'D     D', ' C   C ', '  B B  ', '   A   '];
        expect(full).toEqual(expectedResult);
    });
});

